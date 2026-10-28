import {validateEnquiry} from '@/lib/enquiry';
export async function POST(request:Request){
 const json=(body:unknown,status:number)=>Response.json(body,{status});
 const origin=request.headers.get('origin');
 // Next may construct request.url with an internal hostname behind a proxy.
 const requestUrl=new URL(request.url);
 const host=request.headers.get('x-forwarded-host')?.split(',')[0].trim()||request.headers.get('host');
 const protocol=request.headers.get('x-forwarded-proto')?.split(',')[0].trim()||requestUrl.protocol.slice(0,-1);
 const publicOrigin=host&&['http','https'].includes(protocol)?`${protocol}://${host}`:requestUrl.origin;
 if(origin&&origin!==publicOrigin)return json({message:'Please submit the form from this website.'},403);
 if(Number(request.headers.get('content-length')||0)>24000)return json({message:'The enquiry is too long.'},413);
 let raw:Record<string,unknown>;try{const text=await request.text();if(text.length>24000)return json({message:'The enquiry is too long.'},413);raw=JSON.parse(text);}catch{return json({message:'Please check the form and try again.'},400);}
 if(!raw||typeof raw!=='object'||Array.isArray(raw))return json({message:'Please check the form and try again.'},400);
 if(raw.website||typeof raw.startedAt!=='number'||Date.now()-raw.startedAt<2000||Date.now()-raw.startedAt>86400000)return json({message:'Please wait a moment, then try again.'},400);
 const result=validateEnquiry(raw);if(!result.data)return json({message:'Please correct the highlighted fields.',errors:result.errors},400);
 const url=process.env.ENQUIRY_WEBHOOK_URL;if(!url)return json({message:'Please email your enquiry to support@rbc-ent.com.'},503);
 try{if(new URL(url).protocol!=='https:')throw new Error('Invalid delivery configuration');const upstream=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json',...(process.env.ENQUIRY_WEBHOOK_TOKEN?{Authorization:`Bearer ${process.env.ENQUIRY_WEBHOOK_TOKEN}`}:{})},body:JSON.stringify(result.data),signal:AbortSignal.timeout(10000)});if(!upstream.ok)throw new Error('Delivery rejected');return json({delivered:true},200);}catch{return json({message:'We could not deliver your enquiry. Please email support@rbc-ent.com directly.'},502);}
}

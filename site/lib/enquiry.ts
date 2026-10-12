import {services} from './content';
export type Enquiry={name:string;email:string;organisation:string;service:string;description:string;consent:boolean};
export function validateEnquiry(value:unknown):{data?:Enquiry;errors:Record<string,string>}{
 const errors:Record<string,string>={};const source=value&&typeof value==='object'?value as Record<string,unknown>:{};
 const text=(key:string)=>typeof source[key]==='string'?(source[key] as string).trim():'';
 const data:Enquiry={name:text('name'),email:text('email'),organisation:text('organisation'),service:text('service'),description:text('description'),consent:source.consent===true};
 if(data.name.length<2||data.name.length>100)errors.name='Please enter your name (2–100 characters).';
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)||data.email.length>254)errors.email='Please enter a valid email address.';
 if(data.organisation.length<2||data.organisation.length>150)errors.organisation='Please enter your organisation (2–150 characters).';
 if(!services.some(s=>s.slug===data.service)&&data.service!=='not-sure')errors.service='Please choose a service area.';
 if(data.description.length<20||data.description.length>5000)errors.description='Please describe your project in 20–5,000 characters.';
 if(!data.consent)errors.consent='Please confirm that RBC may contact you about this enquiry.';
 return Object.keys(errors).length?{errors}:{data,errors};
}

import type {Metadata} from 'next';
import {PageIntro,Arrow} from '@/components/site';
import {company} from '@/lib/content';
import {EnquiryForm} from '@/components/enquiry-form';
export const dynamic='force-dynamic';
export const metadata:Metadata={title:'Let’s talk',description:'Discuss your software, data, AI or infrastructure project with RBC Enterprise in Nairobi. Contact support@rbc-ent.com.',alternates:{canonical:'/contact'}};
export default function Contact(){const enabled=Boolean(process.env.ENQUIRY_WEBHOOK_URL);return <main id="main"><PageIntro label="Let’s work together" title="What needs to work better?" description="Tell us about the business challenge, the system you’re planning or the change you want to make."/><section className="wrap contact-grid"><div className="contact-info"><h2>Start a conversation.</h2><a href={`mailto:${company.email}`}>{company.email}<Arrow diagonal/></a><p>{company.location}<br/>Working with organisations beyond borders.</p><p className="eyebrow">A useful starting point</p><ul><li>What you’re building or improving</li><li>Your existing systems and constraints</li><li>Your intended timeline</li></ul></div><EnquiryForm deliveryEnabled={enabled}/></section></main>;}

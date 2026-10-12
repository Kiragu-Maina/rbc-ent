import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {caseStudies} from '@/lib/content';
import {CTA,PageIntro} from '@/components/site';
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=caseStudies.find(p=>p.slug===slug&&p.approved);return p?{title:p.title,description:p.challenge,alternates:{canonical:`/work/${slug}`}}:{title:'Project not found'};}
export default async function CaseStudy({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=caseStudies.find(p=>p.slug===slug&&p.approved);if(!p)notFound();return <main id="main"><PageIntro label={p.industry} title={p.title} description={p.challenge}/><section className="wrap case-study-body section-space"><div className="editorial-two"><h2>The engineering</h2><p>{p.solution}</p></div><div className="editorial-two"><h2>The result</h2><p>{p.outcome}</p></div><div className="tags">{p.capabilities.map(c=><span key={c}>{c}</span>)}</div></section><CTA/></main>;}

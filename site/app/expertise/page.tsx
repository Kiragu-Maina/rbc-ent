import type {Metadata} from 'next';
import Link from 'next/link';
import {services} from '@/lib/content';
import {Arrow,CTA,PageIntro} from '@/components/site';
export const metadata:Metadata={title:'Our expertise',description:'Explore software engineering, data and AI, cloud infrastructure and technology advisory at RBC Enterprise.',alternates:{canonical:'/expertise'}};
export default function Expertise(){return <main id="main"><PageIntro label="What we engineer" title="The whole system. Considered." description="Four connected disciplines. From the first architecture decision to the last integration, we build around the way your business works."/><section className="wrap expertise-detail-index">{services.map(s=><article className="expertise-feature" key={s.slug}><small>{s.number}</small><div><h2><Link href={`/expertise/${s.slug}`}>{s.discipline}</Link></h2><p>{s.description}</p></div><ul>{s.capabilities.map(c=><li key={c}>{c}</li>)}</ul><Link href={`/expertise/${s.slug}`} aria-label={`Explore ${s.discipline}`}><Arrow diagonal/></Link></article>)}</section><CTA/></main>;}

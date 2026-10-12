import type {MetadataRoute} from 'next';
import {company,services,caseStudies} from '@/lib/content';
export default function sitemap():MetadataRoute.Sitemap{return ['/','/expertise','/about','/work','/contact','/privacy',...services.map(s=>`/expertise/${s.slug}`),...caseStudies.filter(p=>p.approved).map(p=>`/work/${p.slug}`)].map(path=>({url:`${company.url}${path}`}));}

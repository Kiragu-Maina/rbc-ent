import {technologies,Technology} from '@/lib/technologies';
import {PracticeLogoEcosystem,HomepageLogoEcosystem} from './technology-ecosystem-client';
const display = ({id,name,category,logoPath}:Technology)=>({id,name,category,logoPath});
const homepageTechnologyNames = ['Microsoft Azure','AWS','Google Cloud','Cisco','Fortinet','SAP','Oracle','Odoo','Zoho','OpenAI','NVIDIA'];
export function TechnologyEcosystem({practice}:{practice:string}){return <PracticeLogoEcosystem practice={practice} entries={technologies.filter(t=>t.practices.includes(practice)).map(display)}/>;}
export function HomepageTechnologyEcosystem(){return <HomepageLogoEcosystem entries={homepageTechnologyNames.map(name=>technologies.find(t=>t.name===name)!).map(display)}/>;}

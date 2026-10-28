import Link from 'next/link';
import {Arrow} from './arrow';
import styles from './homepage-practices.module.css';
type Practice = {number:string;slug:string;title:string;lead:string;description:string};
export function HomepagePractices({practices}:{practices:Practice[]}){return <div className={styles.practices}>{practices.map(p=><details className={styles.practice} name="homepage-practices" key={p.slug}><summary className={styles.summary}><small>{p.number}</small><h3>{p.title}</h3><p className={styles.lead}>{p.lead}</p><span className={styles.indicator} aria-hidden="true"/></summary><div className={styles.panel}><div><p>{p.description}</p><Link className="text-link" href={`/expertise/${p.slug}`}>Explore this practice<Arrow/></Link></div></div></details>)}</div>;}

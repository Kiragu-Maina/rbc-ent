'use client';
import Link from 'next/link';
import {useEffect,useId,useRef} from 'react';
import {services} from '@/lib/content';
import styles from './practices-navigation.module.css';

export function PracticesNavigation({mobile=false,onNavigate}:{mobile?:boolean;onNavigate?:()=>void}){
 const ref=useRef<HTMLDetailsElement>(null);
 const id=useId();
 useEffect(()=>{
  const close=(event:PointerEvent)=>{const el=ref.current;if(el?.open&&!el.contains(event.target as Node))el.open=false;};
  const resize=()=>{if(ref.current)ref.current.open=false;};
  document.addEventListener('pointerdown',close);window.addEventListener('resize',resize);
  return()=>{document.removeEventListener('pointerdown',close);window.removeEventListener('resize',resize);};
 },[]);
 return <details ref={ref} className={`${styles.root} ${mobile?styles.mobile:''}`} onToggle={e=>e.currentTarget.querySelector('summary')?.setAttribute('aria-expanded',String(e.currentTarget.open))} onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget as Node))e.currentTarget.open=false;}} onKeyDown={e=>{
  const el=e.currentTarget,summary=el.querySelector('summary')!;
  const links=Array.from(el.querySelectorAll<HTMLAnchorElement>('a'));
  if(e.key==='Escape'&&el.open){e.preventDefault();e.stopPropagation();el.open=false;summary.focus();return;}
  const index=links.indexOf(document.activeElement as HTMLAnchorElement);
  if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();el.open=true;links[index<0?(e.key==='ArrowDown'?0:links.length-1):(index+(e.key==='ArrowDown'?1:-1)+links.length)%links.length].focus();}
  if(el.open&&index>=0&&(e.key==='Home'||e.key==='End')){e.preventDefault();links[e.key==='Home'?0:links.length-1].focus();}
 }}><summary aria-expanded="false" aria-controls={id} className={styles.trigger}>{mobile&&<small>01</small>}Practices<span className={styles.chevron} aria-hidden="true"/></summary><ul id={id} className={styles.panel}>{services.map(s=><li key={s.slug}><Link href={`/expertise/${s.slug}`} onClick={()=>{if(ref.current)ref.current.open=false;onNavigate?.();}}>{s.title}</Link></li>)}</ul></details>;
}

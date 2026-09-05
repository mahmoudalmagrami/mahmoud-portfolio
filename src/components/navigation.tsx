"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/content/types";
import { ui } from "@/lib/i18n";
import { ThemeToggle } from "./theme-provider";
import { BrandMark } from "./brand-mark";
const sectionIds=["work","expertise","experience","about","contact"] as const;
export function Navigation({locale}:{locale:Locale}){
 const t=ui[locale], other=locale==="en"?"ar":"en", ids=sectionIds;
 const pathname=usePathname();
 const otherHref=pathname.replace(/^\/(en|ar)(?=\/|$)/,`/${other}`);
 const [open,setOpen]=useState(false),[active,setActive]=useState("");
 useEffect(()=>{const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)setActive(e.target.id)}),{rootMargin:"-35% 0px -55%"});sectionIds.forEach(id=>{const el=document.getElementById(id);if(el)obs.observe(el)});return()=>obs.disconnect()},[]);
 return <header className="nav-shell"><nav className="nav container" aria-label="Primary"><Link href={`/${locale}`} className="brand" aria-label="Mahmoud Almaqrmi home"><BrandMark/><small>Mahmoud<br/>Almaqrmi</small></Link><div id="primary-navigation" className={`nav-links ${open?"is-open":""}`}>{ids.map((id,i)=><a key={id} href={`/${locale}/#${id}`} className={active===id?"active":""} aria-current={active===id?"location":undefined} onClick={()=>setOpen(false)}><span>0{i+1}</span>{t.nav[i]}</a>)}</div><div className="nav-actions"><Link href={otherHref} className="language">{t.language}</Link><ThemeToggle label={t.theme}/><button className="menu-button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="primary-navigation" aria-label={open?t.close:t.menu}><i/><i/></button></div></nav></header>
}

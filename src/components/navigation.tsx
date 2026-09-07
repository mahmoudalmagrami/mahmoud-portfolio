"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Locale } from "@/content/types";
import { ui } from "@/lib/i18n";
import { ThemeToggle } from "./theme-provider";
import { BrandMark } from "./brand-mark";
const sectionIds=["work","expertise","experience","about","contact"] as const;
function NavIcon({id}:{id:(typeof sectionIds)[number]}){
 const common={width:20,height:20,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round" as const,strokeLinejoin:"round" as const,"aria-hidden":true};
 if(id==="work")return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M9 5V3h6v2M3 11h18M10 11v2h4v-2"/></svg>;
 if(id==="expertise")return <svg {...common}><path d="m12 3 8 4-8 4-8-4 8-4Z"/><path d="m4 12 8 4 8-4M4 17l8 4 8-4"/></svg>;
 if(id==="experience")return <svg {...common}><circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3 2M7 3.5 4.5 6"/></svg>;
 if(id==="about")return <svg {...common}><circle cx="12" cy="8" r="3.5"/><path d="M5 21c.6-4.2 3-6.5 7-6.5s6.4 2.3 7 6.5"/></svg>;
 return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>;
}
export function Navigation({locale}:{locale:Locale}){
 const t=ui[locale], ids=sectionIds;
 const pathname=usePathname();
 const reduced=useReducedMotion();
 const utilityRef=useRef<HTMLDivElement>(null);
 const [open,setOpen]=useState(false),[languageOpen,setLanguageOpen]=useState(false),[active,setActive]=useState("");
 const localeHref=(next:Locale)=>pathname.replace(/^\/(en|ar)(?=\/|$)/,`/${next}`);
 useEffect(()=>{const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)setActive(e.target.id)}),{rootMargin:"-35% 0px -55%"});sectionIds.forEach(id=>{const el=document.getElementById(id);if(el)obs.observe(el)});return()=>obs.disconnect()},[]);
 useEffect(()=>{const close=(event:PointerEvent)=>{if(!utilityRef.current?.contains(event.target as Node))setLanguageOpen(false)};const escape=(event:KeyboardEvent)=>{if(event.key==="Escape")setLanguageOpen(false)};document.addEventListener("pointerdown",close);document.addEventListener("keydown",escape);return()=>{document.removeEventListener("pointerdown",close);document.removeEventListener("keydown",escape)}},[]);
 return <motion.header className="nav-shell" initial={reduced?false:{opacity:0,y:-12}} animate={{opacity:1,y:0}} transition={{duration:reduced?0:.5,ease:[.22,1,.36,1]}}><nav className="nav container" aria-label={locale==="en"?"Primary":"التنقل الرئيسي"}><Link href={`/${locale}`} className="brand" aria-label={locale==="en"?"Mahmoud Abdulghani Almaqrami home":"الصفحة الرئيسية لمحمود عبدالغني المقرمي"}><BrandMark/><small>{locale==="en"?<>Mahmoud<br/>Almaqrami</>:<>محمود<br/>المقرمي</>}</small></Link><div id="primary-navigation" className={`nav-links ${open?"is-open":""}`}>{ids.map((id,i)=><a key={id} href={`/${locale}/#${id}`} className={active===id?"active":""} aria-current={active===id?"location":undefined} aria-label={t.nav[i]} onClick={()=>setOpen(false)}><span className="nav-index">0{i+1}</span><span className="nav-label-stage"><span className="nav-label-text">{t.nav[i]}</span><span className="nav-label-icon"><NavIcon id={id}/></span></span></a>)}</div><div className="nav-actions" ref={utilityRef}><div className="language-selector"><button className="utility-button language-trigger" onClick={()=>setLanguageOpen(value=>!value)} aria-expanded={languageOpen} aria-haspopup="menu" aria-controls="language-menu" aria-label={locale==="en"?"Choose language":"اختر اللغة"}><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M3.8 12h16.4M12 3.5c2.1 2.3 3.2 5.1 3.2 8.5S14.1 18.2 12 20.5C9.9 18.2 8.8 15.4 8.8 12S9.9 5.8 12 3.5Z"/></svg><strong>{locale==="en"?"EN":"ع"}</strong><motion.span className="language-chevron" animate={{rotate:languageOpen?180:0}} aria-hidden="true">⌄</motion.span></button><AnimatePresence>{languageOpen&&<motion.div id="language-menu" className="language-menu" role="menu" initial={reduced?{opacity:0}:{opacity:0,y:-6,scale:.97}} animate={{opacity:1,y:0,scale:1}} exit={reduced?{opacity:0}:{opacity:0,y:-4,scale:.98}} transition={{duration:reduced?.01:.18,ease:[.22,1,.36,1]}}>{(["en","ar"] as Locale[]).map(option=><Link key={option} href={localeHref(option)} role="menuitem" lang={option} dir={option==="ar"?"rtl":"ltr"} className={option===locale?"is-current":""} aria-current={option===locale?"page":undefined} onClick={()=>setLanguageOpen(false)}><span>{option==="en"?"English":"العربية"}</span><span className="language-check" aria-hidden="true">{option===locale?"✓":""}</span></Link>)}</motion.div>}</AnimatePresence></div><ThemeToggle label={t.theme}/><button className="menu-button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="primary-navigation" aria-label={open?t.close:t.menu}><i/><i/></button></div></nav></motion.header>
}

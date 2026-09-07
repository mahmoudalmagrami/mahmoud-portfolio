"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
export function ThemeToggle({label}:{label:string}){
 const reduced=useReducedMotion();
 const [mode,setMode]=useState<"light"|"dark"|"system">("system");
 useEffect(()=>{const media=matchMedia("(prefers-color-scheme: light)");const saved=localStorage.getItem("theme");const initial=saved==="light"||saved==="dark"?saved:"system";const apply=(value:typeof initial)=>{document.documentElement.dataset.theme=value==="system"?(media.matches?"light":"dark"):value};setMode(initial);apply(initial);const handle=()=>{if((localStorage.getItem("theme")||"system")==="system")apply("system")};media.addEventListener("change",handle);return()=>media.removeEventListener("change",handle)},[]);
 const toggle=()=>{const next=mode==="system"?"light":mode==="light"?"dark":"system";setMode(next);localStorage.setItem("theme",next);document.documentElement.dataset.theme=next==="system"?(matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"):next};
 const icon=mode==="light"?"☼":mode==="dark"?"◐":"◒";
 return <button className="utility-button icon-button" onClick={toggle} aria-label={`${label}: ${mode}`} title={`${label}: ${mode}`}><AnimatePresence mode="wait" initial={false}><motion.span key={mode} aria-hidden="true" initial={reduced?{opacity:1}:{opacity:0,rotate:-28,scale:.8}} animate={{opacity:1,rotate:0,scale:1}} exit={reduced?{opacity:0}:{opacity:0,rotate:28,scale:.8}} transition={{duration:reduced?.01:.2}}>{icon}</motion.span></AnimatePresence></button>
}

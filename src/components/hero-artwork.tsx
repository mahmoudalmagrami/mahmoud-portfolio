"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export function HeroArtwork({alt}:{alt:string}){
 const reduce=useReducedMotion();
 return <motion.div className="hero-artwork" role="img" aria-label={alt} initial={reduce?false:{opacity:0,y:18,scale:1.04,clipPath:"inset(8% 0 0 0)"}} animate={{opacity:1,y:0,scale:1,clipPath:"inset(0% 0 0 0)"}} transition={{duration:reduce?0:.85,delay:reduce?0:.34,ease:[.22,1,.36,1]}}>
  <Image className="theme-art theme-art-light" src="/hero/hero-light.webp" alt="" fill priority sizes="(max-width: 900px) 100vw, 42vw" aria-hidden="true"/>
  <Image className="theme-art theme-art-dark" src="/hero/hero-dark.webp" alt="" fill priority sizes="(max-width: 900px) 100vw, 42vw" aria-hidden="true"/>
 </motion.div>
}

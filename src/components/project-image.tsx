"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { Locale } from "@/content/types";

export function ProjectImage({src,alt,locale,index,priority=false,detail=false}:{src:string;alt:string;locale:Locale;index:number;priority?:boolean;detail?:boolean}){
 const reduce=useReducedMotion();
 const alternating=index%2===0?-1:1;
 const localeDirection=locale==="ar"?-1:1;
 return <motion.div className={`project-image-frame${detail?" detail-cover":""}`} initial={reduce?false:{opacity:0,x:28*alternating*localeDirection,clipPath:"inset(0 12% 0 12%)"}} whileInView={{opacity:1,x:0,clipPath:"inset(0 0% 0 0%)"}} viewport={{once:true,margin:"-8%"}} transition={{duration:reduce?0:.8,ease:[.22,1,.36,1]}}>
  <motion.div className="project-image-inner" initial={reduce?false:{scale:1.04}} whileInView={{scale:1}} viewport={{once:true}} transition={{duration:reduce?0:.9,ease:[.22,1,.36,1]}}>
   <Image src={src} alt={alt} fill priority={priority} sizes={detail?"(max-width: 900px) 100vw, 1280px":"(max-width: 900px) 100vw, 65vw"}/>
  </motion.div>
 </motion.div>
}

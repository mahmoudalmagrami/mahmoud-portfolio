"use client";
import { motion, type Variants, useReducedMotion } from "motion/react";
import { type ReactNode } from "react";

const easing = [0.22, 1, 0.36, 1] as const;
const variants: Variants = { hidden:{opacity:0,y:24}, visible:{opacity:1,y:0,transition:{duration:.62,ease:easing}} };
export function Reveal({children,className="",delay=0}:{children:ReactNode;className?:string;delay?:number}) {
 const reduce=useReducedMotion();
 return <motion.div className={className} variants={variants} initial={reduce?false:"hidden"} whileInView="visible" viewport={{once:true,margin:"-8%"}} transition={{delay:reduce?0:delay}}>{children}</motion.div>;
}
export function Stagger({children,className=""}:{children:ReactNode;className?:string}) {
 const reduce=useReducedMotion();
 return <motion.div className={className} initial={reduce?false:"hidden"} whileInView="visible" viewport={{once:true,margin:"-8%"}} variants={{hidden:{},visible:{transition:{staggerChildren:reduce?0:.08}}}}>{children}</motion.div>;
}
export function StaggerItem({children,className=""}:{children:ReactNode;className?:string}) {
 const reduce=useReducedMotion();
 return <motion.div className={className} variants={reduce?undefined:variants}>{children}</motion.div>;
}
export function LineReveal(){const reduce=useReducedMotion();return <motion.span className="line-reveal" initial={reduce?false:{scaleX:0}} whileInView={{scaleX:1}} viewport={{once:true}} transition={{duration:reduce?0:.8,ease:easing}}/>}

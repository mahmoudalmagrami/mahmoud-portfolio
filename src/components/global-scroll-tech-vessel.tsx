"use client";

import { useId } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

export function GlobalScrollTechVessel(){
 const reduced=Boolean(useReducedMotion());
 const id=useId().replace(/:/g,"");
 const clipId=`tech-vessel-${id}`;
 const liquidId=`tech-liquid-${id}`;
 const glassId=`tech-glass-${id}`;
 const glowId=`tech-glow-${id}`;
 const pinId=`tech-pin-${id}`;
 const chamberId=`tech-chamber-${id}`;
 const bottomId=`tech-bottom-${id}`;
 const {scrollYProgress}=useScroll();
 const liquidY=useTransform(scrollYProgress,[0,1],[410,48]);
 const bubbleA=useTransform(scrollYProgress,[0,1],[70,-230]);
 const bubbleB=useTransform(scrollYProgress,[0,1],[125,-180]);
 const bubbleC=useTransform(scrollYProgress,[0,1],[45,-270]);
 const bubbleD=useTransform(scrollYProgress,[0,1],[155,-150]);
 return <div className="global-tech-vessel" aria-hidden="true">
  <svg viewBox="0 0 420 520" focusable="false">
   <defs>
    <clipPath id={clipId}>
     <path d="M153 54h114v72c0 15 6 25 19 31h30l27 27v245l-31 33H108l-31-33V184l27-27h30c13-6 19-16 19-31Z"/>
    </clipPath>
    <linearGradient id={liquidId} x1="0" y1="0" x2="0" y2="1">
     <stop stopColor="#3EDBFF" stopOpacity=".74"/><stop offset=".18" stopColor="#2F7CFF" stopOpacity=".86"/><stop offset=".7" stopColor="#155EEF" stopOpacity=".94"/><stop offset="1" stopColor="#4338CA" stopOpacity=".9"/>
    </linearGradient>
    <linearGradient id={glassId} x1="0" y1="0" x2="1" y2="1">
     <stop stopColor="white" stopOpacity=".48"/><stop offset=".13" stopColor="#75A7FF" stopOpacity=".18"/><stop offset=".38" stopColor="#07152F" stopOpacity=".38"/><stop offset=".72" stopColor="#0B1D42" stopOpacity=".22"/><stop offset=".91" stopColor="#32C7FF" stopOpacity=".3"/><stop offset="1" stopColor="white" stopOpacity=".5"/>
    </linearGradient>
    <linearGradient id={pinId}><stop stopColor="#AFCBFF" stopOpacity=".58"/><stop offset=".5" stopColor="#155EEF" stopOpacity=".3"/><stop offset="1" stopColor="#5EDCFF" stopOpacity=".72"/></linearGradient>
    <radialGradient id={chamberId} cx="48%" cy="44%" r="70%"><stop stopColor="#17325F" stopOpacity=".36"/><stop offset=".7" stopColor="#061126" stopOpacity=".68"/><stop offset="1" stopColor="#020817" stopOpacity=".82"/></radialGradient>
    <radialGradient id={bottomId}><stop stopColor="#5EDCFF" stopOpacity=".95"/><stop offset=".28" stopColor="#2F7CFF" stopOpacity=".68"/><stop offset="1" stopColor="#155EEF" stopOpacity="0"/></radialGradient>
    <filter id={glowId} x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="14"/></filter>
    <filter id={`${glowId}-tight`} x="-50%" y="-80%" width="200%" height="260%"><feGaussianBlur stdDeviation="5"/></filter>
   </defs>

   <g className="tech-vessel-pins" fill={`url(#${pinId})`}>
    {[218,253,288,323,358,393,428].map((y,i)=><g key={y}><rect x={i%2?28:39} y={y-7} width={i%2?51:40} height="14" rx="3"/><rect x="341" y={y-7} width={i%2?51:40} height="14" rx="3"/></g>)}
   </g>

   <path className="tech-vessel-aura" d="M145 49h130v72c0 16 6 25 19 31h28l34 34v62h9v177h-9v18l-35 37H99l-35-37v-18h-9V248h9v-62l34-34h28c13-6 19-15 19-31Z" filter={`url(#${glowId})`}/>
   <path className="tech-vessel-shadow" d="M145 49h130v72c0 16 6 25 19 31h28l34 34v62h9v177h-9v18l-35 37H99l-35-37v-18h-9V248h9v-62l34-34h28c13-6 19-15 19-31Z"/>
   <path className="tech-chamber-back" d="M139 199h142l25 25v177l-25 25H139l-25-25V224Z" fill={`url(#${chamberId})`}/>
   <g clipPath={`url(#${clipId})`}>
    <motion.g className="tech-liquid" style={reduced?{y:185}:{y:liquidY}}>
     <rect x="60" y="0" width="300" height="430" fill={`url(#${liquidId})`}/>
     <ellipse cx="210" cy="408" rx="128" ry="66" fill={`url(#${bottomId})`}/>
     <motion.path className="tech-liquid-wave" d="M48 12c42-14 74 13 116 0s76 13 118 0 74 10 108 0v25H48Z" fill="#75A7FF" opacity=".72" animate={reduced?undefined:{x:[-8,8,-8]}} transition={{duration:8,repeat:Infinity,ease:"easeInOut"}}/>
     <motion.path className="tech-liquid-rim-glow" d="M66 12c38-11 67 9 106 0s70 9 109 0 69 7 101 0" animate={reduced?undefined:{x:[-6,6,-6]}} transition={{duration:8,repeat:Infinity,ease:"easeInOut"}} filter={`url(#${glowId}-tight)`}/>
     <g className="tech-bubbles">
      <motion.circle cx="137" cy="370" r="5" style={reduced?undefined:{y:bubbleA}}/>
      <motion.circle cx="246" cy="397" r="3" style={reduced?undefined:{y:bubbleB}}/>
      <motion.circle cx="294" cy="346" r="4" style={reduced?undefined:{y:bubbleC}}/>
      <motion.circle cx="190" cy="420" r="2.5" style={reduced?undefined:{y:bubbleD}}/>
      {[ [102,334,1.3],[122,386,1.8],[149,307,1.1],[169,365,1.4],[185,286,1.2],[205,342,1.7],[226,376,1.1],[248,313,1.5],[268,356,1.2],[286,398,1.7],[118,414,1],[155,400,1.2],[198,393,1],[236,416,1.4],[277,291,1],[132,279,1.2],[218,276,1.1],[300,369,1.2] ].map(([cx,cy,r])=><circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r}/>)}
     </g>
    </motion.g>
   </g>

   <path className="tech-glass-shell" d="M145 49h130v72c0 16 6 25 19 31h28l34 34v62h9v177h-9v18l-35 37H99l-35-37v-18h-9V248h9v-62l34-34h28c13-6 19-15 19-31Z" fill={`url(#${glassId})`}/>
   <path className="tech-glass-rim" d="M143 49c0-9 30-16 67-16s67 7 67 16-30 16-67 16-67-7-67-16Zm12 1c0 5 25 9 55 9s55-4 55-9-25-9-55-9-55 4-55 9Z"/>
   <path className="tech-glass-neck" d="M153 58v68c0 19-8 32-25 40h-25l-27 27v226l29 31h210l29-31V193l-27-27h-25c-17-8-25-21-25-40V58"/>
   <path className="tech-glass-highlight" d="M162 65v62c0 27-12 44-34 53h-17l-19 20v212l23 24"/>
   <path className="tech-glass-reflection" d="M177 72h66M113 205v190"/>
   <path className="tech-vessel-core" d="M125 184h170l28 29v199l-28 30H125l-28-30V213Z"/>
   <path className="tech-vessel-core tech-vessel-core-inner" d="M139 199h142l25 25v177l-25 25H139l-25-25V224Z"/>
   <path className="tech-bevel-light" d="M139 199h142l25 25M114 224l25-25M114 401l25 25h142l25-25"/>
   <ellipse className="tech-bottom-bloom" cx="210" cy="470" rx="122" ry="24" fill={`url(#${bottomId})`} filter={`url(#${glowId})`}/>
   <circle className="tech-vessel-node" cx="125" cy="184" r="4"/><circle className="tech-vessel-node" cx="295" cy="442" r="4"/>
  </svg>
 </div>;
}

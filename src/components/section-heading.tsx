import { Reveal } from "./motion/reveal";
export function SectionHeading({index,eyebrow,title}:{index:string;eyebrow:string;title:string}){return <div className="section-heading"><Reveal><span className="section-index">{index}</span><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></Reveal></div>}

import Image from "next/image";

export function BrandMark({size=34,decorative=false}:{size?:number;decorative?:boolean}){
 const alt=decorative?"":"MA";
 return <span className="brand-mark" style={{width:size,height:size}} aria-hidden={decorative||undefined}>
  <Image className="brand-logo brand-logo-light" src="/brand/logo-symbol-blue.png" alt={alt} width={388} height={388}/>
  <Image className="brand-logo brand-logo-dark" src="/brand/logo-symbol-white.png" alt={alt} width={388} height={388}/>
 </span>
}

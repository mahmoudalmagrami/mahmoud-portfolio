import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "@/lib/site";
export const metadata: Metadata = {metadataBase:new URL(siteUrl),title:{default:"Mahmoud Almaqrmi — Full-Stack Software Engineer",template:"%s — Mahmoud Almaqrmi"},description:"Full-stack software engineer working across systems integration, DevOps, and database engineering.",icons:{icon:[{url:"/brand/favicon-16.png",sizes:"16x16",type:"image/png"},{url:"/brand/favicon-32.png",sizes:"32x32",type:"image/png"}]},openGraph:{title:"Mahmoud Almaqrmi — Full-Stack Software Engineer",description:"Complete software systems spanning interfaces, APIs, databases, integrations, infrastructure, and deployment.",type:"website"},robots:{index:true,follow:true}};
const themeScript=`(()=>{try{const m=localStorage.getItem('theme')||'system';document.documentElement.dataset.theme=m==='system'?(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'):m}catch{}})()`;
export default function RootLayout({children}:{children:React.ReactNode}){return <html suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:themeScript}}/></head><body>{children}</body></html>}

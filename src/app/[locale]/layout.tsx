import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import { Navigation } from "@/components/navigation";
export function generateStaticParams(){return locales.map(locale=>({locale}))}
export default async function LocaleLayout({children,params}:{children:React.ReactNode;params:Promise<{locale:string}>}){const {locale}=await params;if(!isLocale(locale))notFound();return <div dir={locale==="ar"?"rtl":"ltr"} lang={locale} className={`site locale-${locale}`}><Navigation locale={locale}/>{children}</div>}

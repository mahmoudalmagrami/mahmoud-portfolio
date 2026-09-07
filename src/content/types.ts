export type Locale = "en" | "ar";
export type Localized = Record<Locale, string>;
export type Project = {
 slug:string;
 index:string;
 category:Localized;
 title:Localized;
 summary:Localized;
 role:Localized;
 technologies:string[];
 coverImage:string;
 coverAlt:Localized;
 status:Localized;
 sections:{ title:Localized; body:Localized }[];
 featured:boolean;
 liveUrl?:string;
};

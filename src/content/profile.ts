import type { Localized } from "./types";

export const profile = {
  name: { en: "Mahmoud Abdulghani Almaqrami", ar: "محمود عبدالغني المقرمي" } satisfies Localized,
  displayName: { en: "Mahmoud Abdulghani Almaqrami", ar: "محمود عبدالغني المقرمي" } satisfies Localized,
  title: { en: "Full-Stack Software Engineer", ar: "مهندس برمجيات متكامل" } satisfies Localized,
  focus: { en: "Systems Integration · DevOps · Database Engineering", ar: "تكامل الأنظمة · DevOps · هندسة قواعد البيانات" } satisfies Localized,
  summary: {
    en: "I approach software as a complete system — from the user interface and backend logic to data, integrations, infrastructure, and deployment. Database engineering and PostgreSQL are areas of particularly strong professional experience.",
    ar: "أتعامل مع البرمجيات كنظام متكامل — من واجهة المستخدم ومنطق الخلفية إلى البيانات والتكاملات والبنية التحتية والنشر. وتمثل هندسة قواعد البيانات وPostgreSQL جانبًا قويًا بصورة خاصة في خبرتي المهنية."
  } satisfies Localized,
  email: "mahmoudalmagrami@gmail.com",
  phone: "+967781830031",
  location: { en: "Sana'a, Yemen", ar: "صنعاء، اليمن" } satisfies Localized,
  languages: [
    { name:{en:"Arabic",ar:"العربية"}, level:{en:"Native",ar:"اللغة الأم"} },
    { name:{en:"English",ar:"الإنجليزية"}, level:{en:"Upper-Intermediate",ar:"فوق المتوسط"} },
    { name:{en:"Chinese",ar:"الصينية"}, level:{en:"HSK Level 4",ar:"HSK المستوى الرابع"} }
  ],
  links: { linkedin: "", github: "" }
};

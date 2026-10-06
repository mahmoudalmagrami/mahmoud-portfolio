import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "shipping-accounting-erp",
    index: "01",
    featured: true,
    category: {
      en: "Enterprise ERP & Logistics",
      ar: "أنظمة إدارة الشحن والمحاسبة"
    },
    title: {
      en: "Shipping & Financial Posting ERP v2.2",
      ar: "نظام إدارة الشحن والترحيل المالي"
    },
    summary: {
      en: "Full-stack shipping operations & financial posting ERP with strict double-entry bookkeeping, dynamic pricing matrix, carrier settlements, and executive BI analytics.",
      ar: "نظام مؤسسي متكامل لإدارة عمليات الشحن والترحيل المالي مع دورة محاسبية دقيقة للقيد المزدوج، تسعير ديناميكي، تسوية ذمم الناقلين، ولوحة مؤشرات تنفيذية تفاعلية."
    },
    role: {
      en: "Senior Full-Stack & Systems Engineer",
      ar: "مهندس برمجيات ونظم مؤسسية متكاملة"
    },
    technologies: [
      "Node.js",
      "TypeScript",
      "Fastify v5",
      "PostgreSQL",
      "Drizzle ORM",
      "React 19",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand"
    ],
    coverImage: "/projects/enterprise-operations.webp",
    coverAlt: {
      en: "Executive BI dashboard and operations interface of the Shipping & Accounting ERP.",
      ar: "لوحة المؤشرات التنفيذية وواجهة العمليات لنظام إدارة الشحن والمحاسبة."
    },
    status: {
      en: "Production-ready enterprise ERP with automated tests, ACID accounting transactions, and dual-mode thermal/waybill printing.",
      ar: "نظام مؤسسي متكامل ومختبر بالكامل مع معاملات ذرية لحفظ القيود المحاسبية وطباعة حرارية مزدوجة."
    },
    sections: [
      {
        title: {
          en: "System Architecture & Financial Invariants",
          ar: "المعمارية التقنية والتوازن المحاسبي الصارم"
        },
        body: {
          en: "Engineered under Clean Architecture with Fastify v5, Drizzle ORM, and PostgreSQL. Strict double-entry accounting guarantees debits equal credits (∑ Debits = ∑ Credits) in atomic transactions across Cash Drawer (1010), Bank Vault (1020), Accounts Receivable (1100), Carrier Payables (2100), Shipping Revenue (4100), and COGS (5100).",
          ar: "مبني بمعمارية برمجية نظيفة عبر Fastify v5 و Drizzle ORM وقاعدة بيانات PostgreSQL. محرك القيد المزدوج الصارم يضمن رياضياً تساوي المدين والدائن في حركات ذرية تشمل الصندوق الرئيسي (1010)، البنك (1020)، ذمم العملاء (1100)، مستحقات الناقلين (2100)، إيرادات المبيعات (4100)، وتكلفة الشحن (5100)."
        }
      },
      {
        title: {
          en: "Operational Dispatching & Executive BI",
          ar: "العمليات التشغيلية واللوحة التنفيذية"
        },
        body: {
          en: "End-to-end parcel booking, zone pricing matrix, 80mm thermal receipt & A4 waybill printing, carrier dispatching, customer receipt vouchers, carrier payment settlements, and a high-performance SVG executive BI dashboard rendering daily revenue curves, liquidity meters, and carrier volume shares.",
          ar: "دورة حجز طرود متكاملة، مصفوفة تسعير ديناميكية للمناطق، طباعة إيصالات حرارية 80mm وبوالص A4، ترحيل الشحنات للناقلين، سندات القبض والصرف، ولوحة تحكم تنفيذية بمخططات SVG تفاعلية لكفاءة الإيرادات والسيولة وحصص شركات الشحن."
        }
      }
    ]
  },
  {
    slug: "artsy-realm",
    index: "02",
    featured: true,
    liveUrl: "https://artsyrealm.com",
    category: { en: "Creative commerce", ar: "متجر للتصاميم الإبداعية" },
    title: { en: "Artsy Realm", ar: "ARTSYREALM" },
    summary: { en: "A public e-commerce website for creative wall art and customizable designs.", ar: "متجر إلكتروني للتصاميم الإبداعية واللوحات الجدارية القابلة للتخصيص." },
    role: { en: "Worked on the implementation and delivery of this web project.", ar: "شاركت في تنفيذ وتسليم هذا المشروع الإلكتروني." },
    technologies: [],
    coverImage: "/projects/artsyrealm.webp",
    coverAlt: { en: "Artsy Realm homepage showing its wall-art storefront and product navigation.", ar: "الصفحة الرئيسية لمتجر ARTSYREALM وتعرض واجهة اللوحات الجدارية وتصفح المنتجات." },
    status: { en: "Project details are limited to publicly visible website information and the confirmed contribution statement.", ar: "تقتصر تفاصيل المشروع على المعلومات الظاهرة للعامة في الموقع وإفادة المشاركة المؤكدة." },
    sections: [
      { title: { en: "Overview", ar: "نظرة عامة" }, body: { en: "Artsy Realm presents a curated online storefront for creative designs and wall art.", ar: "يقدم ARTSYREALM واجهة متجر إلكتروني منسقة للتصاميم الإبداعية واللوحات الجدارية." } },
      { title: { en: "What the website does", ar: "ما الذي يقدمه الموقع" }, body: { en: "Visitors can browse design categories and featured products, view product information, and use shopping features including a cart and wishlist.", ar: "يتيح للزوار تصفح فئات التصاميم والمنتجات المميزة، والاطلاع على تفاصيل المنتجات، واستخدام خصائص التسوق مثل السلة والمفضلة." } },
      { title: { en: "My contribution", ar: "مساهمتي" }, body: { en: "Worked on the implementation and delivery of this web project.", ar: "شاركت في تنفيذ وتسليم هذا المشروع الإلكتروني." } },
      { title: { en: "Public-facing capabilities", ar: "الخصائص المتاحة للزوار" }, body: { en: "Product categories, featured product listings, search, customer account access, cart, wishlist, and direct contact options are visible on the public website.", ar: "يعرض الموقع فئات المنتجات، وقوائم المنتجات المميزة، والبحث، والدخول إلى حساب العميل، والسلة، والمفضلة، وخيارات التواصل المباشر." } }
    ]
  },
  {
    slug: "najd-alzian",
    index: "03",
    featured: true,
    liveUrl: "https://najdalzian.com/",
    category: { en: "Events and equipment rental", ar: "تجهيز وتأجير مستلزمات المناسبات" },
    title: { en: "Najd Alzian", ar: "نجد الزين" },
    summary: { en: "A public service website for event setup and equipment rental in Riyadh.", ar: "موقع خدمي لتجهيز المناسبات وتأجير معداتها في الرياض." },
    role: { en: "Worked on the implementation and delivery of this web project.", ar: "شاركت في تنفيذ وتسليم هذا المشروع الإلكتروني." },
    technologies: [],
    coverImage: "/projects/najdalzian.webp",
    coverAlt: { en: "Najd Alzian homepage promoting premium event setup services in Riyadh.", ar: "الصفحة الرئيسية لنجد الزين وتعرض خدمات تجهيز المناسبات الفاخرة في الرياض." },
    status: { en: "Project details are limited to publicly visible website information and the confirmed contribution statement.", ar: "تقتصر تفاصيل المشروع على المعلومات الظاهرة للعامة في الموقع وإفادة المشاركة المؤكدة."},
    sections: [
      { title: { en: "Overview", ar: "نظرة عامة" }, body: { en: "Najd Alzian presents event preparation and rental services for celebrations and gatherings in Riyadh.", ar: "يعرض موقع نجد الزين خدمات تجهيز وتأجير مستلزمات الحفلات والفعاليات في الرياض." } },
      { title: { en: "What the website does", ar: "ما الذي يقدمه الموقع" }, body: { en: "The website organizes services for tents, cooling, traditional seating, furniture, lighting, sound, heating, and hospitality support.", ar: "ينظم الموقع خدمات الخيام والتبريد وبيوت الشعر والجلسات والأثاث والإضاءة والصوت والتدفئة والضيافة." } },
      { title: { en: "My contribution", ar: "مساهمتي" }, body: { en: "Worked on the implementation and delivery of this web project.", ar: "شاركت في تنفيذ وتسليم هذا المشروع الإلكتروني." } },
      { title: { en: "Public-facing capabilities", ar: "الخصائص المتاحة للزوار" }, body: { en: "Service browsing, detailed service pages, an event gallery, direct contact, and WhatsApp quote requests are available publicly.", ar: "يوفر الموقع تصفح الخدمات وصفحات تفصيلية لها، ومعرضًا للأعمال، والتواصل المباشر، وطلب عروض الأسعار عبر WhatsApp." } }
    ]
  },
  {
    slug: "malak-parties",
    index: "04",
    featured: true,
    liveUrl: "https://malakparties.com/",
    category: { en: "Event services", ar: "خدمات تجهيز المناسبات" },
    title: { en: "Malak Parties", ar: "ملك الحفلات" },
    summary: { en: "A public website presenting premium event preparation and equipment rental services.", ar: "موقع يعرض خدمات تجهيز المناسبات وتأجير مستلزماتها بطابع فاخر." },
    role: { en: "Worked on the implementation and delivery of this web project.", ar: "شاركت في تنفيذ وتسليم هذا المشروع الإلكتروني." },
    technologies: [],
    coverImage: "/projects/malakparties.webp",
    coverAlt: { en: "Malak Parties homepage presenting premium event preparation services.", ar: "الصفحة الرئيسية لملك الحفلات وتعرض خدمات تجهيز المناسبات الملكية." },
    status: { en: "Project details are limited to publicly visible website information and the confirmed contribution statement.", ar: "تقتصر تفاصيل المشروع على المعلومات الظاهرة للعامة في الموقع وإفادة المشاركة المؤكدة." },
    sections: [
      { title: { en: "Overview", ar: "نظرة عامة" }, body: { en: "Malak Parties presents event preparation services with a focus on tents, gathering spaces, cooling, lighting, and hospitality equipment.", ar: "يعرض موقع ملك الحفلات خدمات تجهيز المناسبات، مع التركيز على الخيام والمجالس والتبريد والإضاءة ومستلزمات الضيافة." } },
      { title: { en: "What the website does", ar: "ما الذي يقدمه الموقع" }, body: { en: "Visitors can explore service categories, review examples of completed setups, and begin a booking or quote request.", ar: "يمكن للزوار استكشاف فئات الخدمات، ومشاهدة نماذج من التجهيزات المنفذة، وبدء طلب حجز أو عرض سعر." } },
      { title: { en: "My contribution", ar: "مساهمتي" }, body: { en: "Worked on the implementation and delivery of this web project.", ar: "شاركت في تنفيذ وتسليم هذا المشروع الإلكتروني." } },
      { title: { en: "Public-facing capabilities", ar: "الخصائص المتاحة للزوار" }, body: { en: "Service catalogues, an event gallery, direct contact details, a booking enquiry form, and WhatsApp quote requests are publicly available.", ar: "يتضمن الموقع أدلة للخدمات، ومعرضًا للفعاليات، وبيانات تواصل مباشرة، ونموذج استفسار للحجز، وطلبات عروض الأسعار عبر WhatsApp." } }
    ]
  },
  {
    slug: "top-safety",
    index: "05",
    featured: true,
    liveUrl: "https://topsafety.co/",
    category: { en: "Fire safety solutions", ar: "حلول مكافحة الحرائق والسلامة" },
    title: { en: "Top Safety", ar: "توب سيفتي" },
    summary: { en: "A public product and services website for fire protection and safety solutions across Yemen.", ar: "موقع للمنتجات والخدمات المتخصصة في حلول مكافحة الحرائق والسلامة في اليمن." },
    role: { en: "Worked on the implementation and delivery of this web project.", ar: "شاركت في تنفيذ وتسليم هذا المشروع الإلكتروني." },
    technologies: [],
    coverImage: "/projects/topsafety.webp",
    coverAlt: { en: "Top Safety homepage presenting fire protection products and services in Yemen.", ar: "الصفحة الرئيسية لتوب سيفتي وتعرض منتجات وخدمات مكافحة الحرائق في اليمن." },
    status: { en: "Project details are limited to publicly visible website information and the confirmed contribution statement.", ar: "تقتصر تفاصيل المشروع على المعلومات الظاهرة للعامة في الموقع وإفادة المشاركة المؤكدة." },
    sections: [
      { title: { en: "Overview", ar: "نظرة عامة" }, body: { en: "Top Safety presents integrated fire protection products and services for organizations and facilities across Yemen.", ar: "يعرض موقع توب سيفتي منتجات وخدمات متكاملة لمكافحة الحرائق وحماية المنشآت في مختلف محافظات اليمن." } },
      { title: { en: "What the website does", ar: "ما الذي يقدمه الموقع" }, body: { en: "The website showcases safety products and services including extinguisher refilling, fire-system maintenance, and alarm-system installation.", ar: "يعرض الموقع منتجات السلامة وخدمات تشمل تعبئة طفايات الحريق، وصيانة أنظمة المكافحة، وتركيب أنظمة الإنذار." } },
      { title: { en: "My contribution", ar: "مساهمتي" }, body: { en: "Worked on the implementation and delivery of this web project.", ar: "شاركت في تنفيذ وتسليم هذا المشروع الإلكتروني." } },
      { title: { en: "Public-facing capabilities", ar: "الخصائص المتاحة للزوار" }, body: { en: "Product and service browsing, project information, customer account access, a cart, and consultation requests are visible publicly.", ar: "يوفر الموقع تصفح المنتجات والخدمات، ومعلومات المشاريع، والدخول إلى حساب العميل، والسلة، وطلبات الاستشارة." } }
    ]
  },
  {
    slug: "production-data-infrastructure",
    index: "06",
    featured: false,
    category: { en: "Production infrastructure", ar: "بنية إنتاجية" },
    title: { en: "Data infrastructure across nine servers", ar: "بنية بيانات عبر تسعة خوادم" },
    summary: { en: "Day-to-day ownership of production databases and data services across a multi-server environment.", ar: "مسؤولية يومية عن قواعد البيانات وخدمات البيانات الإنتاجية ضمن بيئة متعددة الخوادم." },
    role: { en: "Database Administrator / Database Engineer", ar: "مدير ومهندس قواعد بيانات" },
    technologies: ["PostgreSQL", "Linux", "Prometheus", "Grafana"],
    coverImage: "/projects/enterprise-operations.webp",
    coverAlt: { en: "Abstract illustration of interconnected enterprise operations modules.", ar: "رسم تجريدي لوحدات عمليات مؤسسية مترابطة." },
    status: { en: "Verified scope from CV; deeper case study pending evidence.", ar: "نطاق موثّق من السيرة؛ تفاصيل دراسة الحالة بانتظار الأدلة." },
    sections: [{ title: { en: "Verified scope", ar: "النطاق الموثّق" }, body: { en: "Production operations, health checks, troubleshooting, capacity planning, access control, and proactive monitoring.", ar: "عمليات الإنتاج، وفحوصات الصحة، واستكشاف المشكلات، وتخطيط السعة، وضبط الوصول، والمراقبة الاستباقية." } }]
  },
  {
    slug: "postgresql-high-availability",
    index: "07",
    featured: false,
    category: { en: "High availability", ar: "التوافر العالي" },
    title: { en: "PostgreSQL HA & replication", ar: "التوافر العالي والتكرار لـ PostgreSQL" },
    summary: { en: "Implementation and operation of resilient PostgreSQL environments with routing and failover components.", ar: "تنفيذ وتشغيل بيئات PostgreSQL موثوقة مع مكونات التوجيه والتحول عند الفشل." },
    role: { en: "Database Administrator / Database Engineer", ar: "مدير ومهندس قواعد بيانات" },
    technologies: ["Pigsty", "Patroni", "etcd", "HAProxy", "VIP"],
    coverImage: "/projects/data-integration.webp",
    coverAlt: { en: "Abstract illustration of enterprise systems exchanging data through a central integration hub.", ar: "رسم تجريدي لأنظمة مؤسسية تتبادل البيانات عبر مركز تكامل موحد." },
    status: { en: "Architecture detail withheld until supporting evidence is provided.", ar: "تفاصيل المعمارية مؤجلة حتى توفير أدلة داعمة." },
    sections: [{ title: { en: "Verified implementation", ar: "التنفيذ الموثّق" }, body: { en: "High-availability and replication environments operated in production using Pigsty, Patroni, etcd, and HAProxy/VIP.", ar: "بيئات توافر عالٍ وتكرار تعمل في الإنتاج باستخدام Pigsty وPatroni وetcd وHAProxy/VIP." } }]
  },
  {
    slug: "smart-library",
    index: "08",
    featured: false,
    category: { en: "University internship", ar: "تدريب جامعي" },
    title: { en: "Smart Library", ar: "المكتبة الذكية" },
    summary: { en: "A Flutter project supporting a book-borrowing workflow during a six-month internship at YemenSoft.", ar: "مشروع Flutter لإدارة سير عمل استعارة الكتب خلال تدريب لمدة ستة أشهر في يمن سوفت." },
    role: { en: "University Intern", ar: "متدرب جامعي" },
    technologies: ["Flutter"],
    coverImage: "/projects/government-services.webp",
    coverAlt: { en: "Abstract illustration of digital services connected through a unified portal.", ar: "رسم تجريدي لخدمات رقمية متصلة عبر بوابة موحدة." },
    status: { en: "Project outcomes and screenshots pending evidence.", ar: "نتائج المشروع ولقطات الشاشة بانتظار الأدلة." },
    sections: [{ title: { en: "Context", ar: "السياق" }, body: { en: "University internship at YemenSoft in 2022, lasting six months.", ar: "تدريب جامعي في يمن سوفت عام 2022 لمدة ستة أشهر." } }]
  }
];

export const projectCoverCatalog = {
  "Enterprise Operations Platform": "/projects/enterprise-operations.webp",
  "Digital Identity Integration Platform": "/projects/digital-identity.webp",
  "Government Service Portal": "/projects/government-services.webp",
  "Customer Support Management System": "/projects/customer-support.webp",
  "CI/CD & Deployment Platform": "/projects/cicd-deployment.webp",
  "Enterprise Data Integration Hub": "/projects/data-integration.webp"
} as const;

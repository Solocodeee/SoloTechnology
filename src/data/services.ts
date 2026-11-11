import { Globe, ShoppingCart, Smartphone, Code2, PenTool, Headphones } from "lucide-react";
import type { Service } from "@/types";
import type { Locale } from "@/i18n/config";

const base = [
  { slug: "web-development", icon: Globe, number: "01" },
  { slug: "e-commerce", icon: ShoppingCart, number: "02" },
  { slug: "mobile-applications", icon: Smartphone, number: "03" },
  { slug: "custom-software", icon: Code2, number: "04" },
  { slug: "ui-ux-design", icon: PenTool, number: "05" },
  { slug: "maintenance-support", icon: Headphones, number: "06" },
];

type Text = { title: string; description: string; features: string[] };

const text: Record<Locale, Record<string, Text>> = {
  en: {
    "web-development": { title: "Web Development", description: "Fast, responsive and SEO-friendly websites built with the latest technologies.", features: ["Custom Website Development", "CMS Development (WordPress)", "API Integration", "Performance Optimization"] },
    "e-commerce": { title: "E-Commerce Solutions", description: "Powerful online stores that convert visitors into loyal, repeat customers.", features: ["Custom E-Commerce Development", "WooCommerce / Shopify", "Payment Gateway Integration", "Store Optimization"] },
    "mobile-applications": { title: "Mobile App Development", description: "Cross-platform mobile apps for iOS and Android that users love.", features: ["Cross-platform Development", "Native iOS & Android", "UI/UX Design for Mobile", "App Maintenance & Support"] },
    "custom-software": { title: "Custom Software Development", description: "Tailored software solutions built to solve your unique business challenges.", features: ["Business Software", "SaaS Applications", "System Integration", "Database Solutions"] },
    "ui-ux-design": { title: "UI/UX Design", description: "Modern, intuitive and user-centered designs that create real impact.", features: ["User Research & Analysis", "Wireframing & Prototyping", "UI Design", "Usability Testing"] },
    "maintenance-support": { title: "Maintenance & Support", description: "Reliable support and maintenance to keep your products running smoothly.", features: ["Bug Fixes & Updates", "Performance Monitoring", "Security & Backups", "Technical Support"] },
  },
  ar: {
    "web-development": { title: "تطوير المواقع", description: "مواقع سريعة ومتجاوبة ومتوافقة مع محركات البحث، مبنية بأحدث التقنيات.", features: ["تطوير موقع مخصوص", "تطوير على ووردبريس (CMS)", "ربط الـ API", "تحسين الأداء"] },
    "e-commerce": { title: "حلول المتاجر الإلكترونية", description: "متاجر أونلاين قوية بتحوّل الزوار لعملاء بيرجعوا تاني.", features: ["تطوير متجر إلكتروني مخصوص", "ووكومرس / شوبيفاي", "ربط بوابات الدفع", "تحسين المتجر"] },
    "mobile-applications": { title: "تطوير تطبيقات الموبايل", description: "تطبيقات موبايل لـ iOS وأندرويد بتخلي المستخدمين يحبوها.", features: ["تطوير متعدد المنصات", "تطبيقات iOS وأندرويد Native", "تصميم واجهات الموبايل", "صيانة ودعم التطبيق"] },
    "custom-software": { title: "تطوير البرمجيات المخصصة", description: "حلول برمجية متفصلة على مقاس شغلك عشان تحل تحدياتك الخاصة.", features: ["برامج إدارة الأعمال", "تطبيقات SaaS", "ربط الأنظمة ببعض", "حلول قواعد البيانات"] },
    "ui-ux-design": { title: "تصميم UI/UX", description: "تصميمات حديثة وسهلة ومبنية حوالين المستخدم، وليها تأثير حقيقي.", features: ["أبحاث وتحليل المستخدمين", "Wireframes ونماذج أولية", "تصميم الواجهات", "اختبار سهولة الاستخدام"] },
    "maintenance-support": { title: "الصيانة والدعم", description: "دعم وصيانة موثوقين عشان منتجاتك الرقمية تفضل شغالة من غير مشاكل.", features: ["إصلاح الأخطاء والتحديثات", "متابعة الأداء", "الأمان والنسخ الاحتياطي", "دعم فني"] },
  },
};

export function getServices(locale: Locale): Service[] {
  return base.map((b) => ({ ...b, ...text[locale][b.slug] }));
}

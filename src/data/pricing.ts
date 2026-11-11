import { Send, ShoppingCart, Building2, Building } from "lucide-react";
import type { PricingTier } from "@/types";
import type { Locale } from "@/i18n/config";

type Count = number | "unlimited";
type Level = "basic" | "advanced";

interface Spec {
  customDesign: boolean; responsive: boolean; pages: Count; cms: boolean; seo: Level;
  blog: boolean; api: boolean; revisions: Count; support: number;
}

const base: { slug: string; icon: PricingTier["icon"]; popular?: boolean; spec: Spec }[] = [
  { slug: "startup", icon: Send, spec: { customDesign: true, responsive: true, pages: 5, cms: false, seo: "basic", blog: false, api: false, revisions: 1, support: 30 } },
  { slug: "business", icon: ShoppingCart, spec: { customDesign: true, responsive: true, pages: 10, cms: true, seo: "advanced", blog: true, api: false, revisions: 2, support: 45 } },
  { slug: "professional", icon: Building2, popular: true, spec: { customDesign: true, responsive: true, pages: 20, cms: true, seo: "advanced", blog: true, api: true, revisions: 3, support: 60 } },
  { slug: "enterprise", icon: Building, spec: { customDesign: true, responsive: true, pages: "unlimited", cms: true, seo: "advanced", blog: true, api: true, revisions: "unlimited", support: 90 } },
];

type Text = { name: string; description: string; features: string[] };
const text: Record<Locale, Record<string, Text>> = {
  en: {
    startup: { name: "Startup Package", description: "Perfect for startups and small businesses to establish an online presence.", features: ["Up to 5 Pages Website", "Responsive Design", "Basic SEO Optimization", "Contact Form", "Speed Optimization", "1 Round of Revisions", "30 Days Support"] },
    business: { name: "Business Package", description: "Ideal for growing businesses that need more features and flexibility.", features: ["Up to 10 Pages Website", "Advanced SEO Optimization", "CMS Integration (WordPress)", "Blog / News Section", "Contact Form", "Speed Optimization", "2 Rounds of Revisions", "45 Days Support"] },
    professional: { name: "Professional Package", description: "A complete solution for businesses that want a professional and powerful digital presence.", features: ["Up to 20 Pages Website", "Custom Design", "Advanced SEO Optimization", "CMS Integration (WordPress)", "Blog / News Section", "API Integrations", "Speed Optimization", "3 Rounds of Revisions", "60 Days Support"] },
    enterprise: { name: "Enterprise Package", description: "For large businesses that need custom solutions with advanced functionalities.", features: ["Unlimited Pages", "Custom Web Application", "Advanced Features", "Third-Party Integrations", "Custom Dashboard (If Needed)", "Priority Support", "Performance Optimization", "Unlimited Revisions", "90 Days Support"] },
  },
  ar: {
    startup: { name: "باقة الانطلاق", description: "مناسبة للشركات الناشئة والصغيرة عشان تبدأ حضورها أونلاين.", features: ["موقع لحد 5 صفحات", "تصميم متجاوب", "تحسين محركات بحث أساسي (SEO)", "فورم تواصل", "تحسين السرعة", "جولة تعديلات واحدة", "دعم 30 يوم"] },
    business: { name: "باقة البيزنس", description: "مثالية للشركات اللي بتكبر وعايزة مميزات ومرونة أكتر.", features: ["موقع لحد 10 صفحات", "SEO متقدم", "ربط CMS (ووردبريس)", "قسم مدونة / أخبار", "فورم تواصل", "تحسين السرعة", "جولتين تعديلات", "دعم 45 يوم"] },
    professional: { name: "الباقة الاحترافية", description: "حل متكامل للشركات اللي عايزة حضور رقمي احترافي وقوي.", features: ["موقع لحد 20 صفحة", "تصميم مخصوص", "SEO متقدم", "ربط CMS (ووردبريس)", "قسم مدونة / أخبار", "ربط APIs", "تحسين السرعة", "3 جولات تعديلات", "دعم 60 يوم"] },
    enterprise: { name: "باقة المؤسسات", description: "للشركات الكبيرة اللي محتاجة حلول مخصوصة بإمكانيات متقدمة.", features: ["صفحات غير محدودة", "تطبيق ويب مخصوص", "مميزات متقدمة", "ربط مع أنظمة خارجية", "لوحة تحكم مخصوصة (لو محتاج)", "دعم أولوية", "تحسين الأداء", "تعديلات غير محدودة", "دعم 90 يوم"] },
  },
};

const featureKeys = ["customDesign", "responsive", "pages", "cms", "seo", "blog", "api", "revisions", "support"] as const;
const featureLabels: Record<Locale, Record<(typeof featureKeys)[number], string>> = {
  en: { customDesign: "Custom Design", responsive: "Responsive Design", pages: "Pages", cms: "CMS Integration", seo: "SEO Optimization", blog: "Blog / News Section", api: "API Integrations", revisions: "Revisions", support: "Support" },
  ar: { customDesign: "تصميم مخصوص", responsive: "تصميم متجاوب", pages: "عدد الصفحات", cms: "ربط CMS", seo: "تحسين محركات البحث", blog: "المدونة / الأخبار", api: "ربط APIs", revisions: "التعديلات", support: "الدعم" },
};

/** Turns a spec value into the text shown in the comparison table. */
function format(locale: Locale, key: (typeof featureKeys)[number], spec: Spec): string | boolean {
  const v = spec[key];
  if (typeof v === "boolean") return v;
  if (locale === "en") {
    if (key === "pages") return v === "unlimited" ? "Unlimited" : `Up to ${v}`;
    if (key === "seo") return v === "basic" ? "Basic" : "Advanced";
    if (key === "revisions") return v === "unlimited" ? "Unlimited" : v === 1 ? "1 Round" : `${v} Rounds`;
    return `${v} Days`;
  }
  if (key === "pages") return v === "unlimited" ? "غير محدود" : `لحد ${v}`;
  if (key === "seo") return v === "basic" ? "أساسي" : "متقدم";
  if (key === "revisions") return v === "unlimited" ? "غير محدودة" : v === 1 ? "جولة واحدة" : v === 2 ? "جولتين" : `${v} جولات`;
  return `${v} يوم`;
}

export function getPricingTiers(locale: Locale): PricingTier[] {
  return base.map(({ spec, ...b }) => ({
    ...b,
    ...text[locale][b.slug],
    comparison: Object.fromEntries(featureKeys.map((k) => [k, format(locale, k, spec)])),
  }));
}

/** Rows of the comparison table: stable key + translated label. */
export function getComparisonFeatures(locale: Locale): { key: string; label: string }[] {
  return featureKeys.map((key) => ({ key, label: featureLabels[locale][key] }));
}

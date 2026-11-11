import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiMui,
  SiNodedotjs, SiExpress, SiPhp,
  SiWordpress, SiWoocommerce, SiShopify,
  SiFlutter, SiDart, SiFirebase,
  SiMysql, SiPostgresql, SiMongodb,
  SiFigma, SiGit,
} from "react-icons/si";
import type { TechGroup } from "@/types";
import type { Locale } from "@/i18n/config";

/** Brand names are the same in every language. */
const groups = [
  { id: "frontend", items: [{ name: "React", icon: SiReact }, { name: "Next.js", icon: SiNextdotjs }, { name: "TypeScript", icon: SiTypescript }, { name: "JavaScript", icon: SiJavascript }, { name: "Tailwind CSS", icon: SiTailwindcss }, { name: "Material UI", icon: SiMui }] },
  { id: "backend", items: [{ name: "Node.js", icon: SiNodedotjs }, { name: "Express", icon: SiExpress }, { name: "PHP", icon: SiPhp }] },
  { id: "cms", items: [{ name: "WordPress", icon: SiWordpress }, { name: "WooCommerce", icon: SiWoocommerce }, { name: "Shopify", icon: SiShopify }] },
  { id: "mobile", items: [{ name: "Flutter", icon: SiFlutter }, { name: "Dart", icon: SiDart }, { name: "Firebase", icon: SiFirebase }] },
  { id: "databases", items: [{ name: "MySQL", icon: SiMysql }, { name: "PostgreSQL", icon: SiPostgresql }, { name: "MongoDB", icon: SiMongodb }] },
  { id: "design", items: [{ name: "Figma", icon: SiFigma }, { name: "Git", icon: SiGit }] },
];

const text: Record<Locale, Record<string, { title: string; description: string }>> = {
  en: {
    frontend: { title: "Frontend", description: "Fast, accessible and responsive interfaces." },
    backend: { title: "Backend", description: "Reliable APIs and server-side logic." },
    cms: { title: "CMS & E-Commerce", description: "Content and stores your team can manage on its own." },
    mobile: { title: "Mobile", description: "One codebase for iOS and Android." },
    databases: { title: "Databases", description: "Data storage matched to the shape of your product." },
    design: { title: "Design & Workflow", description: "Design, version control and collaboration." },
  },
  ar: {
    frontend: { title: "الواجهة الأمامية", description: "واجهات سريعة وسهلة الاستخدام ومتجاوبة." },
    backend: { title: "الخلفية (Backend)", description: "APIs موثوقة ومنطق سيرفر قوي." },
    cms: { title: "إدارة المحتوى والمتاجر", description: "محتوى ومتاجر فريقك يقدر يديرها لوحده." },
    mobile: { title: "الموبايل", description: "كود واحد لـ iOS وأندرويد." },
    databases: { title: "قواعد البيانات", description: "تخزين بيانات مناسب لشكل منتجك." },
    design: { title: "التصميم وسير العمل", description: "تصميم وتحكم في الإصدارات وتعاون." },
  },
};

export function getTechGroups(locale: Locale): TechGroup[] {
  return groups.map((g) => ({ ...text[locale][g.id], items: g.items }));
}

import type { FooterColumn, NavLink } from "@/types";
import type { Locale } from "@/i18n/config";

/** Language-independent company details. */
export const siteConfig = {
  name: "Solo Technology",
  /** Set NEXT_PUBLIC_SITE_URL to the real domain when you have one (e.g. https://yourdomain.com). */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://solotechnology.com").replace(/\/$/, ""),
  phone: "+20 10 35412052",
  whatsapp: "+20 10 35412052",
  /** Digits only (country code + number), used for wa.me and tel: links. */
  whatsappDigits: "201035412052",
  founded: "2021",
  /** Copyright year shown in the footer. Update yearly (kept static so pages prerender). */
  copyrightYear: 2026,
  social: {
    whatsapp: "https://wa.me/201035412052",
    facebook: "https://www.facebook.com/SoloTechnology/",
  },
};

/** Company text that differs per language. */
const siteText = {
  en: {
    seoTitle: "Solo Technology | Website, E-Commerce & Software Development in Egypt",
    tagline: "Building technology that turns ideas into reality.",
    description:
      "Solo Technology is an Egyptian software company that helps businesses turn ideas into powerful digital products through web, e-commerce, mobile and custom software solutions.",
    city: "Egypt",
  },
  ar: {
    seoTitle: "Solo Technology | تصميم مواقع ومتاجر إلكترونية وبرمجيات في مصر",
    tagline: "بنبني تكنولوجيا بتحوّل الأفكار لواقع.",
    description:
      "Solo Technology شركة برمجيات مصرية بتساعد الشركات تحوّل أفكارها لمنتجات رقمية قوية من خلال حلول الويب والمتاجر الإلكترونية وتطبيقات الموبايل والبرمجيات المخصصة.",
    city: "مصر",
  },
} satisfies Record<Locale, Record<string, string>>;

export const getSiteText = (locale: Locale) => siteText[locale];

/** Brand names stay in Latin script in both languages. */
export const trustedByClients: string[] = ["Bonita Cosmetics", "TikTour Egypt", "Unique DP", "Boutique Yoka"];

const navLabels = {
  en: ["Home", "Services", "Projects", "About Us", "Technologies", "Pricing", "Contact"],
  ar: ["الرئيسية", "خدماتنا", "مشاريعنا", "عنّا", "التقنيات", "الأسعار", "كلمنا"],
};
const navHrefs = ["/", "/services", "/projects", "/about", "/technologies", "/pricing", "/contact"];

/** Navbar links (hrefs are not yet prefixed with the language). */
export function getMainNav(locale: Locale): NavLink[] {
  return navHrefs.map((href, i) => ({ href, label: navLabels[locale][i] }));
}

const footerText = {
  en: {
    services: "Services", company: "Company", quick: "Quick Links",
    serviceLinks: ["Web Development", "E-Commerce", "Mobile Applications", "Custom Software", "UI/UX Design", "Maintenance & Support"],
    companyLinks: ["About Us", "Our Process", "Privacy Policy", "Terms & Conditions"],
    quickLinks: ["Projects", "Technologies", "FAQs", "Contact Us"],
  },
  ar: {
    services: "الخدمات", company: "الشركة", quick: "روابط سريعة",
    serviceLinks: ["تطوير المواقع", "المتاجر الإلكترونية", "تطبيقات الموبايل", "البرمجيات المخصصة", "تصميم UI/UX", "الصيانة والدعم"],
    companyLinks: ["عنّا", "طريقة شغلنا", "سياسة الخصوصية", "الشروط والأحكام"],
    quickLinks: ["المشاريع", "التقنيات", "الأسئلة الشائعة", "كلمنا"],
  },
};

export function getFooterColumns(locale: Locale): FooterColumn[] {
  const t = footerText[locale];
  const hrefs = {
    services: ["/services#web-development", "/services#e-commerce", "/services#mobile-applications", "/services#custom-software", "/services#ui-ux-design", "/services#maintenance-support"],
    company: ["/about", "/services#process", "/privacy-policy", "/terms"],
    quick: ["/projects", "/technologies", "/contact#faq", "/contact"],
  };
  const build = (labels: string[], links: string[]) => labels.map((label, i) => ({ label, href: links[i] }));
  return [
    { title: t.services, links: build(t.serviceLinks, hrefs.services) },
    { title: t.company, links: build(t.companyLinks, hrefs.company) },
    { title: t.quick, links: build(t.quickLinks, hrefs.quick) },
  ];
}

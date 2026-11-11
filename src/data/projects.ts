import type { Project } from "@/types";
import type { Locale } from "@/i18n/config";

type Text = { title: string; category: string; description: string };

const base: { slug: string; liveUrl: string; host: string; featured?: boolean; image?: string }[] = [
  { slug: "bonita-cosmetics", liveUrl: "https://bonitacosmeticseg.com/", host: "bonitacosmeticseg.com", featured: true },
  { slug: "tiktour-egypt", liveUrl: "https://tiktour-eg.com/", host: "tiktour-eg.com", featured: true },
  { slug: "unique-dp", liveUrl: "https://www.uniquedp.com/", host: "uniquedp.com", featured: true },
  { slug: "boutique-yoka", liveUrl: "https://boutique-yoka.shop/", host: "boutique-yoka.shop", image: "/images/projects/boutique-yoka.jpg" },
];

const text: Record<Locale, Record<string, Text>> = {
  en: {
    "bonita-cosmetics": { title: "Bonita Cosmetics", category: "E-Commerce", description: "Online store for cosmetics and beauty products with a smooth shopping experience." },
    "tiktour-egypt": { title: "TikTour Egypt", category: "Tourism Website", description: "Travel website for tours and trips across Egypt with an easy booking flow." },
    "unique-dp": { title: "Unique Digital Printing", category: "Business Website", description: "Company website for a digital printing business, with a quote-request page." },
    "boutique-yoka": { title: "Boutique Yoka", category: "E-Commerce", description: "Online store for handcrafted jewelry and accessories with a luxury look and easy ordering." },
  },
  ar: {
    "bonita-cosmetics": { title: "Bonita Cosmetics", category: "متجر إلكتروني", description: "متجر إلكتروني لمستحضرات التجميل والعناية، بتجربة شراء سلسة." },
    "tiktour-egypt": { title: "TikTour Egypt", category: "موقع سياحي", description: "موقع سياحي لرحلات وجولات في كل أنحاء مصر، بحجز سهل." },
    "unique-dp": { title: "Unique Digital Printing", category: "موقع شركة", description: "موقع لشركة طباعة ديجيتال، فيه صفحة لطلب عرض السعر." },
    "boutique-yoka": { title: "Boutique Yoka", category: "متجر إلكتروني", description: "متجر أونلاين لإكسسوارات ومجوهرات هاند ميد بشكل فخم وطلب سهل." },
  },
};

/** Live screenshot of the site (loaded in the visitor's browser). */
const shot = (url: string) => `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=1000&h=625`;

export function getProjects(locale: Locale): Project[] {
  return base.map((b) => ({ ...b, image: b.image ?? shot(b.liveUrl), ...text[locale][b.slug] }));
}

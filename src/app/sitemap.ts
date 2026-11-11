import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { locales } from "@/i18n/config";

const paths = ["", "/services", "/projects", "/about", "/technologies", "/pricing", "/contact", "/privacy-policy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${siteConfig.url}/${locale}${path}`,
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : path === "/privacy-policy" || path === "/terms" ? 0.3 : 0.8,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${siteConfig.url}/${l}${path}`])),
      },
    })),
  );
}

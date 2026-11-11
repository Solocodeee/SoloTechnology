import type { Metadata } from "next";
import type { Locale } from "./config";

/** Title/description plus canonical + hreflang alternates for a page path ("/services", "" for home). */
export function buildMetadata({ locale, path, title, description }: { locale: Locale; path: string; title?: string; description?: string }): Metadata {
  return {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    alternates: {
      canonical: `/${locale}${path}`,
      languages: { en: `/en${path}`, ar: `/ar${path}`, "x-default": `/en${path}` },
    },
    openGraph: { type: "website", url: `/${locale}${path}`, images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Solo Technology" }], locale: locale === "ar" ? "ar_EG" : "en_US", ...(title ? { title } : {}), ...(description ? { description } : {}) },
    twitter: { card: "summary_large_image", images: ["/images/og-image.png"] },
  };
}

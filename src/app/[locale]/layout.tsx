import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";
import "@fontsource/ibm-plex-sans-arabic/400.css";
import "@fontsource/ibm-plex-sans-arabic/500.css";
import "@fontsource/ibm-plex-sans-arabic/600.css";
import "@fontsource/ibm-plex-sans-arabic/700.css";
import "../globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { siteConfig, getSiteText, getMainNav } from "@/data/site";
import { dirOf, isLocale, locales } from "@/i18n/config";
import { setLocale } from "@/i18n/request";
import { messages } from "@/i18n/messages";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { whatsappUrl } from "@/lib/whatsapp";

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Pick<Props, "params">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const site = getSiteText(locale);
  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: site.seoTitle, template: `%s | ${siteConfig.name}` },
    description: site.description,
    alternates: { canonical: `/${locale}`, languages: { en: "/en", ar: "/ar", "x-default": "/en" } },
    openGraph: { type: "website", siteName: siteConfig.name, images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: siteConfig.name }], locale: locale === "ar" ? "ar_EG" : "en_US", title: siteConfig.name, description: site.description },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setLocale(locale);
  const m = messages[locale];
  const site = getSiteText(locale);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/brand/logo.png`,
    image: `${siteConfig.url}/images/og-image.png`,
    description: site.description,
    telephone: siteConfig.phone,
    areaServed: "EG",
    address: { "@type": "PostalAddress", addressCountry: "EG" },
    sameAs: [siteConfig.social.facebook],
    contactPoint: [{ "@type": "ContactPoint", telephone: siteConfig.phone, contactType: "customer service", availableLanguage: ["Arabic", "English"] }],
  };

  return (
    <html lang={locale} dir={dirOf(locale)} className="h-full antialiased">
      <body suppressHydrationWarning className="flex min-h-full flex-col bg-surface-50 text-ink-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <Navbar
          locale={locale}
          links={getMainNav(locale).map((l) => ({ ...l, href: `/${locale}${l.href === "/" ? "" : l.href}` }))}
          cta={{ label: m.common.startProject, href: whatsappUrl(m.wa.general) }}
          labels={{
            open: m.common.openMenu, close: m.common.closeMenu, main: m.common.mainNavigation,
            home: m.common.homeAria, switchLabel: m.common.switchLabel, switchAria: m.common.switchAria,
          }}
        />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat href={whatsappUrl(m.wa.general)} label={m.common.whatsappAria} />
      </body>
    </html>
  );
}

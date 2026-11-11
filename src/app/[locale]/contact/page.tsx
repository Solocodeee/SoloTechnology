import type { Metadata } from "next";
import { MapPin, Phone, Send, Clock } from "lucide-react";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa6";
import { Container } from "@/components/ui/container";
import { IconCircle } from "@/components/ui/icon-circle";
import { Reveal } from "@/components/ui/reveal";
import { PageHero, HighlightedTitle } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { getServices } from "@/data/services";
import { getFaqs } from "@/data/faq";
import { siteConfig, getSiteText } from "@/data/site";
import { getTimelineOptions, getContactHeroHighlights } from "@/data/pages";
import { initLocale } from "@/i18n/request";
import { messages } from "@/i18n/messages";
import { buildMetadata } from "@/i18n/metadata";
import { isLocale } from "@/i18n/config";
import { whatsappUrl, telUrl } from "@/lib/whatsapp";

type Props = { params: Promise<{ locale: string }> };

const socials = [
  { icon: FaWhatsapp, href: siteConfig.social.whatsapp, label: "WhatsApp" },
  { icon: FaFacebookF, href: siteConfig.social.facebook, label: "Facebook" },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const m = messages[locale].contact;
  return buildMetadata({ locale, path: "/contact", title: m.metaTitle, description: m.metaDescription });
}

export default async function ContactPage({ params }: Props) {
  const locale = await initLocale(params);
  const all = messages[locale];
  const m = all.contact;
  const site = getSiteText(locale);

  const info: { icon: typeof MapPin; title: string; lines: string[]; ltr: boolean; href?: string }[] = [
    { icon: MapPin, title: m.location, lines: [site.city], ltr: false },
    { icon: Phone, title: m.call, lines: [siteConfig.phone], ltr: true, href: telUrl() },
    { icon: Send, title: m.quick, lines: [m.whatsapp, siteConfig.whatsapp], ltr: false, href: whatsappUrl() },
  ];

  return (
    <>
      <PageHero
        eyebrow={m.eyebrow}
        title={<HighlightedTitle title={m.title} />}
        description={m.text}
        items={getContactHeroHighlights(locale)}
        image={{ src: "/images/contact/hero-envelope.png", alt: m.imageAlt, width: 437, height: 264 }}
      />

      <section className="bg-surface-50 pt-14 pb-20 lg:pb-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
            <Reveal variant="left" className="rounded-2xl border border-surface-300 bg-white p-6 shadow-card sm:p-8">
              <span className="eyebrow-dot text-xs font-semibold tracking-[0.08em] text-brand-blue-500 uppercase">{m.formEyebrow}</span>
              <h2 className="mt-2 mb-6 text-2xl font-bold text-ink-900">{m.formTitle}</h2>
              <ContactForm
                labels={m.form}
                services={getServices(locale).map((s) => s.title)}
                timelines={getTimelineOptions(locale)}
              />
            </Reveal>

            <Reveal as="aside" variant="right" delay={120} className="rounded-2xl border border-white/10 bg-navy-950 p-6 sm:p-8">
              <span className="eyebrow-dot text-xs font-semibold tracking-[0.08em] text-brand-blue-300 uppercase">{m.infoEyebrow}</span>
              <h2 className="mt-2 mb-6 text-2xl font-bold text-white">{m.infoTitle}</h2>
              <ul className="flex flex-col">
                {info.map(({ icon, title, lines, ltr, href }) => (
                  <li key={title} className="flex items-start gap-4 border-b border-white/10 py-4 first:pt-0">
                    <IconCircle icon={icon} variant="dark" />
                    <div>
                      <p className="text-sm font-semibold text-brand-blue-300">{title}</p>
                      {(() => {
                        const body = lines.map((l, i) => (
                          <p key={l} className="text-sm text-ink-200" dir={ltr || (i === lines.length - 1 && href) ? "ltr" : undefined}>{l}</p>
                        ));
                        return href
                          ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block transition-colors hover:text-white">{body}</a>
                          : body;
                      })()}
                    </div>
                  </li>
                ))}
                <li className="flex items-start gap-4 pt-4">
                  <IconCircle icon={Clock} variant="dark" />
                  <div>
                    <p className="mb-3 text-sm font-semibold text-brand-blue-300">{m.follow}</p>
                    <div className="flex gap-2">
                      {socials.map(({ icon: Icon, href, label }) => (
                        <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                          className="inline-flex size-9 items-center justify-center rounded-full border border-brand-blue-500/50 text-white transition-colors hover:bg-brand-blue-500">
                          <Icon className="size-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                </li>
              </ul>
            </Reveal>
          </div>

        </Container>
      </section>

      <FaqSection items={getFaqs(locale)} eyebrow={all.shared.faqEyebrow} title={all.shared.faqTitle} />
      <CtaBanner title={m.ctaTitle} description={m.ctaText} />
    </>
  );
}

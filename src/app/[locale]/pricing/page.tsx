import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { PageHero, HighlightedTitle } from "@/components/sections/page-hero";
import { PricingCard } from "@/components/cards/pricing-card";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { CtaBanner } from "@/components/sections/cta-banner";
import { getPricingTiers, getComparisonFeatures } from "@/data/pricing";
import { getPricingHeroHighlights, getPricingWhy } from "@/data/pages";
import { initLocale } from "@/i18n/request";
import { messages } from "@/i18n/messages";
import { buildMetadata } from "@/i18n/metadata";
import { isLocale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const m = messages[locale].pricing;
  return buildMetadata({ locale, path: "/pricing", title: m.metaTitle, description: m.metaDescription });
}

export default async function PricingPage({ params }: Props) {
  const locale = await initLocale(params);
  const m = messages[locale].pricing;
  const tiers = getPricingTiers(locale);
  return (
    <>
      <PageHero
        eyebrow={m.eyebrow}
        title={<HighlightedTitle title={m.title} />}
        description={m.text}
        items={getPricingHeroHighlights(locale)}
        image={{ src: "/images/pricing/hero-graphic.png", alt: m.imageAlt, width: 476, height: 240 }}
      />

      <section className="bg-surface-50 py-20 lg:py-24">
        <Container>
          <SectionHeading eyebrow={m.sectionEyebrow} title={m.sectionTitle} description={m.sectionText} />
          <Reveal group className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tiers.map((tier) => <PricingCard key={tier.slug} tier={tier} />)}
          </Reveal>
        </Container>
      </section>

      <section className="bg-surface-50 px-6 pb-20 lg:px-8 lg:pb-24">
        <Container className="!px-0">
          <Reveal group className="grid grid-cols-1 items-center gap-8 rounded-2xl border border-white/10 bg-navy-950 px-8 py-10 lg:grid-cols-[200px_1fr]">
            <h2 className="text-2xl font-bold text-white">{m.whyTitle}</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {getPricingWhy(locale).map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex items-start gap-3">
                  <Icon className="mt-0.5 size-6 shrink-0 text-brand-blue-400" aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-semibold text-white">{title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-ink-300">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <ComparisonTable tiers={tiers} features={getComparisonFeatures(locale)} />
      <CtaBanner title={m.ctaTitle} description={m.ctaText} />
    </>
  );
}

import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { PageHero, HighlightedTitle } from "@/components/sections/page-hero";
import { ServiceDetailCard } from "@/components/cards/service-detail-card";
import { ProcessStepsSection } from "@/components/sections/process-steps-section";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { CtaBanner } from "@/components/sections/cta-banner";
import { getServices } from "@/data/services";
import { getServicesHeroHighlights, getWhyChooseUs } from "@/data/pages";
import { initLocale } from "@/i18n/request";
import { messages } from "@/i18n/messages";
import { buildMetadata } from "@/i18n/metadata";
import { isLocale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const m = messages[locale].services;
  return buildMetadata({ locale, path: "/services", title: m.metaTitle, description: m.metaDescription });
}

export default async function ServicesPage({ params }: Props) {
  const locale = await initLocale(params);
  const m = messages[locale].services;
  return (
    <>
      <PageHero
        eyebrow={m.eyebrow}
        title={<HighlightedTitle title={m.title} />}
        description={m.text}
        items={getServicesHeroHighlights(locale)}
        image={{ src: "/images/services/hero-mockup.png", alt: m.imageAlt, width: 398, height: 257 }}
      />

      <section className="bg-surface-50 py-20 lg:py-24">
        <Container>
          <SectionHeading eyebrow={m.sectionEyebrow} title={m.sectionTitle} description={m.sectionText} />
          <Reveal group className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {getServices(locale).map((s) => <ServiceDetailCard key={s.slug} service={s} />)}
          </Reveal>
        </Container>
      </section>

      <div id="process"><ProcessStepsSection tone="dark" /></div>
      <div className="bg-surface-50 pt-20 lg:pt-24" />
      <WhyChooseUs items={getWhyChooseUs(locale)} />
      <CtaBanner title={m.ctaTitle} description={m.ctaText} />
    </>
  );
}

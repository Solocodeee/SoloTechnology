import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/home-hero";
import { ServicesSection } from "@/components/sections/services-section";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects-section";
import { StatsBar } from "@/components/sections/stats-bar";
import { ProcessStepsSection } from "@/components/sections/process-steps-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { initLocale } from "@/i18n/request";
import { messages } from "@/i18n/messages";
import { buildMetadata } from "@/i18n/metadata";
import { isLocale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return isLocale(locale) ? buildMetadata({ locale, path: "" }) : {};
}

export default async function HomePage({ params }: Props) {
  const locale = await initLocale(params);
  const m = messages[locale];
  return (
    <>
      <HomeHero />
      <ServicesSection />
      <FeaturedProjectsSection />
      <StatsBar />
      <ProcessStepsSection />
      <TechStackSection />
      <CtaBanner title={m.home.ctaTitle} description={m.home.ctaText} />
    </>
  );
}

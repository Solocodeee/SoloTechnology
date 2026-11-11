import type { Metadata } from "next";
import Image from "next/image";
import { CalendarDays, MapPin, Heart } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { IconCircle } from "@/components/ui/icon-circle";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHero, HighlightedTitle } from "@/components/sections/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { getStats } from "@/data/process";
import { siteConfig, getSiteText } from "@/data/site";
import { getPrinciples, missionIcon, visionIcon, aboutClients } from "@/data/pages";
import { initLocale } from "@/i18n/request";
import { messages } from "@/i18n/messages";
import { buildMetadata } from "@/i18n/metadata";
import { isLocale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const m = messages[locale].about;
  return buildMetadata({ locale, path: "/about", title: m.metaTitle, description: m.metaDescription });
}

export default async function AboutPage({ params }: Props) {
  const locale = await initLocale(params);
  const m = messages[locale].about;
  const site = getSiteText(locale);
  const mv = [
    { icon: missionIcon, ...m.mission },
    { icon: visionIcon, ...m.vision },
  ];

  return (
    <>
      <PageHero
        eyebrow={m.eyebrow}
        title={<HighlightedTitle title={m.title} />}
        description={m.text}
        image={{ src: "/images/about/office.jpg", alt: m.imageAlt, width: 453, height: 348 }}
      >
        <ul className="mt-2 flex gap-8">
          {getStats(locale).slice(0, 2).map(({ icon: Icon, value, label }) => (
            <li key={label} className="flex items-center gap-3">
              <Icon className="size-7 text-brand-blue-400" aria-hidden="true" />
              <div>
                <p className="text-xl font-bold text-white" dir="ltr">{value}</p>
                <p className="text-xs text-ink-300">{label}</p>
              </div>
            </li>
          ))}
        </ul>
      </PageHero>

      {/* Our story */}
      <section className="bg-surface-50 py-20 lg:py-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-5">
            <SectionHeading
              eyebrow={m.storyEyebrow}
              title={<HighlightedTitle title={m.storyTitle} className="text-brand-blue-500" />}
              align="left"
              className="items-start text-start"
            />
            <Reveal delay={120} className="flex flex-col items-start gap-5">
              <p className="max-w-md leading-relaxed text-ink-500">{m.storyText}</p>
              <Button href="/projects" variant="outlineLight" size="sm">{m.journey}</Button>
            </Reveal>
          </div>

          <Reveal variant="right" className="relative mx-auto w-full max-w-lg pb-8">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-navy-900">
              <Image src="/images/about/office.jpg" alt={m.officeAlt} fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
            </div>
            <div className="absolute top-6 -start-4 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-card-hover sm:-start-8">
              <CalendarDays className="size-6 text-brand-blue-500" aria-hidden="true" />
              <div>
                <p className="text-xs text-ink-500">{m.foundedIn}</p>
                <p className="text-sm font-bold text-ink-900">{siteConfig.founded}</p>
              </div>
            </div>
            <div className="absolute top-2 -end-2 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-card-hover sm:-end-6">
              <MapPin className="size-6 text-brand-blue-500" aria-hidden="true" />
              <div>
                <p className="text-xs text-ink-500">{m.basedIn}</p>
                <p className="text-sm font-bold text-ink-900">{site.city}</p>
              </div>
            </div>
            <div className="absolute bottom-0 -start-2 flex items-center gap-3 rounded-xl bg-brand-blue-500 px-4 py-3 text-white shadow-glow-blue sm:-start-6">
              <Heart className="size-6" aria-hidden="true" />
              <div>
                <p className="text-xs text-brand-blue-100">{m.drivenBy}</p>
                <p className="text-sm font-bold">{m.passion}</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Principles */}
      <section className="bg-surface-50 px-6 pb-20 lg:px-8 lg:pb-24">
        <Container className="!px-0">
          <div className="rounded-2xl border border-white/10 bg-navy-950 px-6 py-12 sm:px-10">
            <h2 className="mb-10 text-center text-2xl font-bold text-white">{m.principlesTitle}</h2>
            <Reveal group className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {getPrinciples(locale).map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-xl border border-white/10 bg-navy-800 p-5">
                  <Icon className="mb-4 size-8 text-brand-blue-400" aria-hidden="true" />
                  <h3 className="mb-2 font-semibold text-white">{title}</h3>
                  <p className="text-sm leading-relaxed text-ink-300">{text}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Mission & vision */}
      <section className="bg-surface-50 pb-20 lg:pb-24">
        <Reveal group className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-6 px-6 lg:grid-cols-2 lg:px-8">
          {mv.map((item) => (
            <div key={item.title} className="flex flex-col gap-5 rounded-2xl border border-surface-300 bg-white p-8 shadow-card sm:flex-row sm:items-start">
              <IconCircle icon={item.icon} size="lg" shape="circle" />
              <div>
                <span className="eyebrow-dot text-xs font-semibold tracking-[0.08em] text-brand-blue-500 uppercase">{item.eyebrow}</span>
                <h3 className="mt-2 mb-3 text-xl font-bold text-ink-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink-500">{item.text}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Clients (text wordmarks until real logo files are added) */}
      <section className="bg-surface-50 px-6 pb-20 lg:px-8 lg:pb-24">
        <Container className="!px-0">
          <div className="rounded-2xl border border-white/10 bg-navy-950 px-6 py-12 text-center sm:px-10">
            <span className="eyebrow-dot text-xs font-semibold tracking-[0.08em] text-brand-blue-300 uppercase">{m.clientsEyebrow}</span>
            <h2 className="mt-3 mb-8 text-2xl font-bold text-white">{m.clientsTitle}</h2>
            <Reveal as="ul" group className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4" dir="ltr">
              {aboutClients.map((name) => (
                <li key={name} className="text-lg font-bold tracking-wide text-ink-200">{name}</li>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBanner title={m.ctaTitle} description={m.ctaText} />
    </>
  );
}

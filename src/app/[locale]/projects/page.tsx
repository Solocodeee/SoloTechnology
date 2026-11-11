import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/cards/project-card";
import { CtaBanner } from "@/components/sections/cta-banner";
import { getProjects } from "@/data/projects";
import { getStats } from "@/data/process";
import { initLocale } from "@/i18n/request";
import { messages } from "@/i18n/messages";
import { buildMetadata } from "@/i18n/metadata";
import { isLocale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const m = messages[locale].projects;
  return buildMetadata({ locale, path: "/projects", title: m.metaTitle, description: m.metaDescription });
}

export default async function ProjectsPage({ params }: Props) {
  const locale = await initLocale(params);
  const m = messages[locale].projects;
  return (
    <>
      <PageHero eyebrow={m.eyebrow} title={m.title} description={m.text}>
        <ul className="mt-2 flex flex-wrap gap-x-8 gap-y-4">
          {getStats(locale).slice(0, 3).map(({ icon: Icon, value, label }) => (
            <li key={label} className="flex items-center gap-3">
              <Icon className="size-7 text-brand-blue-400" aria-hidden="true" />
              <div>
                <p className="text-xl font-bold text-white" dir="ltr">{value}</p>
                <p className="text-xs text-ink-300">{label}</p>
              </div>
            </li>
          ))}
        </ul>
        {/* Decorative device mockup (reuses the Home asset). */}
        <div className="enter-fade pointer-events-none absolute top-1/2 end-0 hidden w-[52%] max-w-2xl -translate-y-1/2 lg:block" aria-hidden="true">
          <Image src="/images/hero/dashboard-mockup.png" alt="" width={493} height={348} className="h-auto w-full [mask-image:radial-gradient(ellipse_70%_75%_at_50%_50%,#000_55%,transparent_100%)]" />
        </div>
      </PageHero>
      <section className="bg-surface-50 py-14 lg:py-16">
        <Container>
          <Reveal group className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {getProjects(locale).map((p) => <ProjectCard key={p.slug} project={p} liveLabel={messages[locale].common.viewProjectShort} />)}
          </Reveal>
        </Container>
      </section>
      <CtaBanner title={m.ctaTitle} description={m.ctaText} />
    </>
  );
}

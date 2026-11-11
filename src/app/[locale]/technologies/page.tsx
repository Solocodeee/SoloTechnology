import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { PageHero, HighlightedTitle } from "@/components/sections/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { getTechGroups } from "@/data/tech-groups";
import { initLocale } from "@/i18n/request";
import { messages } from "@/i18n/messages";
import { buildMetadata } from "@/i18n/metadata";
import { isLocale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const m = messages[locale].technologies;
  return buildMetadata({ locale, path: "/technologies", title: m.metaTitle, description: m.metaDescription });
}

export default async function TechnologiesPage({ params }: Props) {
  const locale = await initLocale(params);
  const all = messages[locale];
  const m = all.technologies;
  return (
    <>
      <PageHero eyebrow={m.eyebrow} title={<HighlightedTitle title={m.title} />} description={m.text} />
      <section className="bg-surface-50 py-20 lg:py-24">
        <Container>
          <SectionHeading eyebrow={m.sectionEyebrow} title={all.shared.techTitle} description={m.sectionText} />
          <Reveal group className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {getTechGroups(locale).map((group) => (
              <div key={group.title} className="rounded-2xl border border-white/10 bg-navy-950 p-6">
                <h3 className="text-lg font-bold text-white">{group.title}</h3>
                <p className="mt-1 mb-6 text-sm text-ink-300">{group.description}</p>
                <ul className="grid grid-cols-3 gap-x-4 gap-y-6" dir="ltr">
                  {group.items.map(({ name, icon: Icon }) => (
                    <li key={name} className="flex flex-col items-center gap-2 text-center">
                      <Icon className="size-8 text-ink-200" aria-hidden="true" />
                      <span className="text-xs font-medium text-ink-300">{name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>
      <CtaBanner title={m.ctaTitle} description={m.ctaText} />
    </>
  );
}

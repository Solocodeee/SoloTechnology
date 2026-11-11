import type { Metadata } from "next";
import { SimplePage } from "@/components/sections/simple-page";
import { ArticleBody } from "@/components/sections/article-body";
import { getTerms } from "@/data/legal";
import { initLocale } from "@/i18n/request";
import { messages } from "@/i18n/messages";
import { buildMetadata } from "@/i18n/metadata";
import { isLocale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const m = messages[locale].legal;
  return buildMetadata({ locale, path: "/terms", title: m.termsTitle, description: m.termsText });
}

export default async function TermsPage({ params }: Props) {
  const locale = await initLocale(params);
  const m = messages[locale].legal;
  return (
    <SimplePage eyebrow={m.eyebrow} title={m.termsTitle} description={m.termsText}>
      <ArticleBody sections={getTerms(locale)} />
    </SimplePage>
  );
}

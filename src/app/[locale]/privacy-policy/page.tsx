import type { Metadata } from "next";
import { SimplePage } from "@/components/sections/simple-page";
import { ArticleBody } from "@/components/sections/article-body";
import { getPrivacyPolicy } from "@/data/legal";
import { initLocale } from "@/i18n/request";
import { messages } from "@/i18n/messages";
import { buildMetadata } from "@/i18n/metadata";
import { isLocale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const m = messages[locale].legal;
  return buildMetadata({ locale, path: "/privacy-policy", title: m.privacyTitle, description: m.privacyText });
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const locale = await initLocale(params);
  const m = messages[locale].legal;
  return (
    <SimplePage eyebrow={m.eyebrow} title={m.privacyTitle} description={m.privacyText}>
      <ArticleBody sections={getPrivacyPolicy(locale)} />
    </SimplePage>
  );
}

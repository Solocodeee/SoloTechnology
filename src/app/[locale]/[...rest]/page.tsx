import { notFound } from "next/navigation";
import { initLocale } from "@/i18n/request";

type Props = { params: Promise<{ locale: string; rest: string[] }> };

/** One sample path so the route is validated at build time; other unknown paths render on demand. */
export function generateStaticParams() {
  return [{ rest: ["not-found"] }];
}

/** Any unknown path under /en or /ar renders the localized 404 page. */
export default async function CatchAll({ params }: Props) {
  await initLocale(params);
  notFound();
}

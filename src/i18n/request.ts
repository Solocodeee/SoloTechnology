import "server-only";
import { cache } from "react";
import { notFound } from "next/navigation";
import { defaultLocale, isLocale, type Locale } from "./config";

/**
 * Per-request locale for Server Components (same idea as next-intl's
 * setRequestLocale). Every layout/page calls initLocale(params) first; deeper
 * Server Components then read it with getLocale().
 * Client Components must NOT import this file; they use useParams() instead.
 */
const store = cache(() => ({ locale: defaultLocale as Locale }));

export function setLocale(locale: Locale) {
  store().locale = locale;
}

export function getLocale(): Locale {
  return store().locale;
}

/** Validates the [locale] param, stores it for this request and returns it. */
export async function initLocale(params: Promise<{ locale: string }>): Promise<Locale> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setLocale(locale);
  return locale;
}

"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { defaultLocale, isLocale } from "@/i18n/config";
import { localizeHref } from "@/i18n/routing";

type LocaleLinkProps = Omit<React.ComponentProps<typeof Link>, "href"> & { href: string };

/**
 * next/link that adds the current language prefix ("/contact" -> "/ar/contact").
 * It reads the language from the URL, so it works in Server and Client Components.
 * External links, anchors and already-prefixed paths pass through unchanged.
 */
export function LocaleLink({ href, ...props }: LocaleLinkProps) {
  const params = useParams<{ locale?: string }>();
  const raw = params?.locale;
  const locale = isLocale(raw) ? raw : defaultLocale;
  return <Link href={localizeHref(locale, href)} {...props} />;
}

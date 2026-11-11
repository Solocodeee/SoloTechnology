import { defaultLocale, isLocale, locales, type Locale } from "./config";

const EXTERNAL = /^(https?:|mailto:|tel:|#)/;

/** True when the path already starts with /en or /ar. */
export function hasLocalePrefix(href: string): boolean {
  return locales.some((l) => href === `/${l}` || href.startsWith(`/${l}/`) || href.startsWith(`/${l}#`) || href.startsWith(`/${l}?`));
}

/** "/services#x" + "ar" -> "/ar/services#x". External links, anchors and already-prefixed paths are untouched. */
export function localizeHref(locale: Locale, href: string): string {
  if (EXTERNAL.test(href) || hasLocalePrefix(href)) return href;
  if (href === "/") return `/${locale}`;
  return `/${locale}${href.startsWith("/") ? href : `/${href}`}`;
}

/** Locale found in the first segment of a pathname, or the default one. */
export function localeFromPathname(pathname: string): Locale {
  const first = pathname.split("/")[1];
  return isLocale(first) ? first : defaultLocale;
}

/** Same page in another language: "/en/services" -> "/ar/services". */
export function switchLocalePath(pathname: string, target: Locale): string {
  const segments = pathname.split("/");
  if (isLocale(segments[1])) segments[1] = target;
  else segments.splice(1, 0, target);
  return segments.join("/") || `/${target}`;
}

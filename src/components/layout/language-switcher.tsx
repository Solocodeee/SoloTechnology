"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { otherLocale, type Locale } from "@/i18n/config";
import { switchLocalePath } from "@/i18n/routing";
import { cn } from "@/lib/utils";

/** Link to the same page in the other language; remembers the choice in a cookie. */
export function LanguageSwitcher({ locale, label, ariaLabel, className }: { locale: Locale; label: string; ariaLabel: string; className?: string }) {
  const pathname = usePathname();
  const target = otherLocale(locale);
  return (
    <Link
      href={switchLocalePath(pathname, target)}
      hrefLang={target}
      lang={target}
      aria-label={ariaLabel}
      onClick={() => {
        document.cookie = `NEXT_LOCALE=${target}; path=/; max-age=31536000; samesite=lax`;
      }}
      className={cn("inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-sm font-medium text-ink-200 transition-colors hover:bg-white/5 hover:text-white", className)}
    >
      <Globe className="size-4" aria-hidden="true" />
      {label}
    </Link>
  );
}

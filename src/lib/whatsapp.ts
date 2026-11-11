import { siteConfig } from "@/data/site";

/** wa.me link for the company number, optionally with a ready-made message. */
export function whatsappUrl(text?: string): string {
  const base = `https://wa.me/${siteConfig.whatsappDigits}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

/** tel: link for the company number. */
export const telUrl = () => `tel:+${siteConfig.whatsappDigits}`;

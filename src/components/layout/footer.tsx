import { Phone, MapPin } from "lucide-react";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa6";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { Reveal } from "@/components/ui/reveal";
import { LocaleLink } from "@/components/ui/locale-link";
import { siteConfig, getSiteText, getFooterColumns } from "@/data/site";
import { getLocale } from "@/i18n/request";
import { getMessages } from "@/i18n/messages";
import { whatsappUrl, telUrl } from "@/lib/whatsapp";

const socialLinks = [
  { icon: FaWhatsapp, href: siteConfig.social.whatsapp, label: "WhatsApp" },
  { icon: FaFacebookF, href: siteConfig.social.facebook, label: "Facebook" },
];

export function Footer() {
  const locale = getLocale();
  const m = getMessages();
  const site = getSiteText(locale);
  const columns = getFooterColumns(locale);

  return (
    <footer className="border-t border-white/10 bg-navy-950 text-ink-300">
      <Reveal group className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr] lg:px-8">
        <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
          <LocaleLink href="/" aria-label={m.common.homeAria}><Logo /></LocaleLink>
          <p className="max-w-xs text-sm leading-relaxed">{site.tagline}</p>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 text-ink-200 transition-colors hover:border-brand-blue-500 hover:text-brand-blue-400">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="mb-4 text-sm font-semibold text-white">{column.title}</h3>
            <ul className="flex flex-col gap-3">
              {column.links.map((link) => (
                <li key={link.href + link.label}>
                  <LocaleLink href={link.href} className="text-sm transition-colors hover:text-brand-blue-400">{link.label}</LocaleLink>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="mb-4 text-sm font-semibold text-white">{m.footer.contactUs}</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2.5">
              <FaWhatsapp className="mt-0.5 size-4 shrink-0 text-brand-blue-400" />
              <span>{m.footer.whatsapp}: <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" dir="ltr" className="hover:text-brand-blue-400">{siteConfig.whatsapp}</a></span>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0 text-brand-blue-400" />
              <span>{m.footer.call}: <a href={telUrl()} dir="ltr" className="hover:text-brand-blue-400">{siteConfig.phone}</a></span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-blue-400" />
              <span>{site.city}</span>
            </li>
          </ul>
        </div>
      </Reveal>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center gap-2 text-xs text-ink-400 sm:flex-row sm:justify-between">
          <p>© {siteConfig.copyrightYear} {siteConfig.name}. {m.footer.rights}</p>
          <div className="flex items-center gap-4">
            <LocaleLink href="/privacy-policy" className="hover:text-ink-200">{m.footer.privacy}</LocaleLink>
            <LocaleLink href="/terms" className="hover:text-ink-200">{m.footer.terms}</LocaleLink>
          </div>
        </Container>
      </div>
    </footer>
  );
}

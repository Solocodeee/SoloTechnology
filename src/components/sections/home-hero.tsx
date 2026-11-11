import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { HighlightedTitle } from "@/components/sections/page-hero";
import { trustedByClients } from "@/data/site";
import { getMessages } from "@/i18n/messages";
import { whatsappUrl } from "@/lib/whatsapp";

export function HomeHero() {
  const m = getMessages();
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div className="bg-glow-blue pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container className="relative grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div className="flex flex-col items-start gap-6">
          <Badge variant="dark" size="md" className="enter eyebrow-dot uppercase tracking-wider">{m.home.badge}</Badge>
          <h1 className="enter [--delay:100ms] text-4xl font-bold text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            <HighlightedTitle title={m.home.title} />
          </h1>
          <p className="enter [--delay:200ms] max-w-md text-base leading-relaxed text-ink-300">{m.home.text}</p>
          <div className="enter [--delay:300ms] flex flex-col gap-3 sm:flex-row">
            <Button href="/projects" size="lg">{m.home.viewWork}</Button>
            <Button href={whatsappUrl(m.wa.general)} variant="outlineDark" size="lg">{m.common.startProject}</Button>
          </div>
          <div className="enter [--delay:400ms] mt-4 flex flex-col gap-3">
            <span className="text-xs font-medium text-ink-400">{m.home.trusted}</span>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2" dir="ltr">
              {trustedByClients.map((name) => (
                <span key={name} className="text-sm font-semibold text-ink-200/80">{name}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="enter-right relative mx-auto w-full max-w-lg lg:max-w-none">
          <Image src="/images/hero/dashboard-mockup.png" alt={m.home.heroAlt} width={493} height={348} priority className="h-auto w-full" />
        </div>
      </Container>
    </section>
  );
}

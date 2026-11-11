import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ServiceCard } from "@/components/cards/service-card";
import { getServices } from "@/data/services";
import { getLocale } from "@/i18n/request";
import { getMessages } from "@/i18n/messages";

export function ServicesSection() {
  const services = getServices(getLocale());
  const m = getMessages();
  return (
    <section className="bg-navy-950 pb-20 lg:pb-24">
      <Container>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow={m.home.servicesEyebrow} title={m.home.servicesTitle} tone="dark" align="left" className="items-center text-center sm:items-start sm:text-start" />
          <Button href="/services" variant="link" className="hidden shrink-0 text-brand-blue-300 hover:text-brand-blue-200 sm:inline-flex">{m.home.servicesLink}</Button>
        </div>
        <Reveal group className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => <ServiceCard key={service.slug} service={service} variant="dark" />)}
        </Reveal>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { technologies } from "@/data/technologies";
import { getMessages } from "@/i18n/messages";

export function TechStackSection() {
  const m = getMessages();
  return (
    <section id="technologies" className="bg-surface-50 pb-20 lg:pb-24">
      <Container>
        <div className="rounded-2xl border border-white/10 bg-navy-950 px-6 py-14 sm:px-10 lg:px-16">
          <SectionHeading eyebrow={m.shared.techEyebrow} title={m.shared.techTitle} tone="dark" />
          <Reveal group className="mt-12 grid grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-5 lg:grid-cols-9" dir="ltr">
            {technologies.map(({ name, icon: Icon }) => (
              <div key={name} className="flex flex-col items-center gap-3 text-center">
                <Icon className="size-9 text-ink-200" aria-hidden="true" />
                <span className="text-xs font-medium text-ink-300">{name}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

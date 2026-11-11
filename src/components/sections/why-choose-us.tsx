import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { getMessages } from "@/i18n/messages";
import type { Highlight } from "@/data/pages";

/** Light "Why Choose Us" row: 4 icon + title + text columns. */
export function WhyChooseUs({ items }: { items: Highlight[] }) {
  const m = getMessages();
  return (
    <section className="bg-surface-50 pb-20 lg:pb-24">
      <Container>
        <SectionHeading eyebrow={m.shared.whyEyebrow} title={m.shared.whyTitle} />
        <Reveal group className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-4">
              <Icon className="mt-1 size-8 shrink-0 text-brand-blue-500" aria-hidden="true" />
              <div>
                <h3 className="mb-1 font-semibold text-ink-900">{title}</h3>
                <p className="text-sm leading-relaxed text-ink-500">{text}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

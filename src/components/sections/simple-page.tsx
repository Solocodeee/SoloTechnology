import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/sections/page-hero";

/** Minimal page shell (hero + prose area) for secondary pages. */
export function SimplePage({ eyebrow, title, description, children }: {
  eyebrow: string; title: string; description: string; children: React.ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <section className="bg-surface-50 py-16 lg:py-20">
        <Container className="max-w-3xl leading-relaxed text-ink-700">{children}</Container>
      </section>
    </>
  );
}

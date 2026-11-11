import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { IconCircle } from "@/components/ui/icon-circle";
import { Reveal } from "@/components/ui/reveal";
import { getProcessSteps } from "@/data/process";
import { getLocale } from "@/i18n/request";
import { getMessages } from "@/i18n/messages";

export function ProcessStepsSection({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  const steps = getProcessSteps(getLocale());
  const m = getMessages();
  return (
    <section className={dark ? "bg-navy-950 py-20 lg:py-24" : "bg-surface-50 py-20 lg:py-24"}>
      <Container>
        <SectionHeading eyebrow={m.shared.processEyebrow} title={m.shared.processTitle} tone={tone} />
        <Reveal group className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          <div data-line className="absolute top-7 right-[10%] left-[10%] hidden border-t border-dashed border-brand-blue-400/40 lg:block" aria-hidden="true" />
          {steps.map((step) => (
            <div key={step.step} className="relative flex flex-col items-center text-center">
              <IconCircle icon={step.icon} variant="solid" shape="circle" size="lg" className="relative z-10 mb-4" />
              <h3 className={dark ? "mb-1 font-semibold text-white" : "mb-1 font-semibold text-ink-900"}>{step.step}. {step.title}</h3>
              <p className={dark ? "text-sm text-ink-300" : "text-sm text-ink-500"}>{step.description}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

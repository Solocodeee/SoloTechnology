import { CheckCircle2, Minus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { getMessages } from "@/i18n/messages";
import type { PricingTier } from "@/types";

export function ComparisonTable({ tiers, features }: { tiers: PricingTier[]; features: { key: string; label: string }[] }) {
  const m = getMessages();

  const renderCell = (value: string | boolean | undefined) => {
    if (value === true) return <CheckCircle2 className="mx-auto size-5 fill-brand-blue-500 text-white" aria-label={m.common.included} />;
    if (!value) return <Minus className="mx-auto size-4 text-ink-300" aria-label={m.common.notIncluded} />;
    return <span>{value}</span>;
  };

  return (
    <section className="bg-surface-50 pb-20 lg:pb-24">
      <Container>
        <SectionHeading eyebrow={m.pricing.compareEyebrow} title={m.pricing.compareTitle} align="left" className="mb-8" />
        <Reveal className="overflow-x-auto rounded-xl border border-surface-300 bg-white shadow-card">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-surface-200">
                <th scope="col" className="px-5 py-5 text-start font-semibold text-ink-900">{m.pricing.featuresHeader}</th>
                {tiers.map((t) => (
                  <th key={t.slug} scope="col" className={cn("relative px-5 py-5 text-center font-semibold", t.popular ? "bg-brand-blue-50 text-brand-blue-600" : "text-ink-900")}>
                    {t.popular && <Badge variant="solid" className="absolute -top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase">{m.common.mostPopular}</Badge>}
                    {t.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr key={feature.key} className={cn(i % 2 === 1 && "bg-surface-50")}>
                  <th scope="row" className="px-5 py-3.5 text-start font-semibold text-ink-900">{feature.label}</th>
                  {tiers.map((t) => (
                    <td key={t.slug} className={cn("px-5 py-3.5 text-center text-ink-700", t.popular && "bg-brand-blue-50/70")}>
                      {renderCell(t.comparison[feature.key])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </Container>
    </section>
  );
}

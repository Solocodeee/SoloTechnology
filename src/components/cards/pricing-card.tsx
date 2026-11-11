import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IconCircle } from "@/components/ui/icon-circle";
import { cn } from "@/lib/utils";
import { getMessages } from "@/i18n/messages";
import { whatsappUrl } from "@/lib/whatsapp";
import type { PricingTier } from "@/types";

/** Package card. `popular` tiers render as the highlighted dark card. */
export function PricingCard({ tier }: { tier: PricingTier }) {
  const dark = !!tier.popular;
  const m = getMessages();
  // Ready-made WhatsApp message with the chosen package's details.
  const message = [
    m.wa.quoteIntro(tier.name),
    "",
    `${m.wa.packageDetails}: ${tier.description}`,
    "",
    `${m.common.whatsIncluded}:`,
    ...tier.features.map((f) => `• ${f}`),
    "",
    m.wa.quoteOutro,
  ].join("\n");
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-2xl border p-6",
        dark ? "border-brand-blue-500/40 bg-navy-950 shadow-glow-blue" : "border-surface-300 bg-white shadow-card",
      )}
    >
      {dark && <Badge variant="solid" className="absolute -top-3 left-1/2 -translate-x-1/2 uppercase tracking-wide">{m.common.mostPopular}</Badge>}
      <IconCircle icon={tier.icon} variant={dark ? "dark" : "blueSoft"} className="mb-5" />
      <h3 className={cn("mb-2 text-lg font-bold", dark ? "text-white" : "text-ink-900")}>{tier.name}</h3>
      <p className={cn("mb-5 border-b pb-5 text-sm leading-relaxed", dark ? "border-white/10 text-ink-300" : "border-surface-200 text-ink-500")}>
        {tier.description}
      </p>
      <p className={cn("mb-3 text-sm font-semibold", dark ? "text-white" : "text-ink-900")}>{m.common.whatsIncluded}</p>
      <ul className="mb-8 flex flex-1 flex-col gap-2.5">
        {tier.features.map((f) => (
          <li key={f} className={cn("flex items-center gap-2.5 text-sm", dark ? "text-ink-200" : "text-ink-700")}>
            <CheckCircle2 className="size-4 shrink-0 fill-brand-blue-500 text-white" aria-hidden="true" />
            {f}
          </li>
        ))}
      </ul>
      <Button href={whatsappUrl(message)} variant={dark ? "primary" : "outlineLight"} className="w-full justify-between">
        {m.common.requestQuote}
      </Button>
    </div>
  );
}

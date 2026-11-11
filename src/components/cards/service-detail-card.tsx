import { CheckCircle2 } from "lucide-react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { IconCircle } from "@/components/ui/icon-circle";
import { Button } from "@/components/ui/button";
import { getMessages } from "@/i18n/messages";
import type { Service } from "@/types";

/** Numbered service card with a feature checklist (Services page). */
export function ServiceDetailCard({ service }: { service: Service }) {
  const m = getMessages();
  return (
    <Card id={service.slug} className="group flex h-full scroll-mt-28 flex-col" padding="lg">
      <div className="mb-5 flex items-start justify-between">
        <IconCircle icon={service.icon} />
        <span className="text-sm font-bold text-brand-blue-200">{service.number}</span>
      </div>
      <CardTitle className="mb-2 text-xl">{service.title}</CardTitle>
      <CardDescription className="mb-5">{service.description}</CardDescription>
      <ul className="mb-6 flex flex-1 flex-col gap-2.5">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm text-ink-700">
            <CheckCircle2 className="size-4 shrink-0 fill-brand-blue-500 text-white" aria-hidden="true" />
            {f}
          </li>
        ))}
      </ul>
      <Button href="/contact" variant="link" size="sm" className="self-start">{m.common.learnMore}</Button>
    </Card>
  );
}

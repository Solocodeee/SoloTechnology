import { IconCircle } from "@/components/ui/icon-circle";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getMessages } from "@/i18n/messages";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  /** "light" for white sections (Services page), "dark" for navy sections (Home). */
  variant?: "light" | "dark";
}

export function ServiceCard({ service, variant = "light" }: ServiceCardProps) {
  const dark = variant === "dark";
  const m = getMessages();
  return (
    <Card variant={variant} className="group flex h-full flex-col items-start hover:-translate-y-1">
      <IconCircle icon={service.icon} variant={dark ? "dark" : "blueSoft"} className="mb-5" />
      <CardTitle className={cn("mb-2", dark && "text-white")}>{service.title}</CardTitle>
      <CardDescription className={cn("mb-4 flex-1", dark && "text-ink-300")}>{service.description}</CardDescription>
      <Button
        href={`/services#${service.slug}`}
        variant="link"
        size="sm"
        className={cn("[&_svg]:transition-transform group-hover:[&_svg]:translate-x-1 rtl:group-hover:[&_svg]:-translate-x-1", dark && "text-brand-blue-300 hover:text-brand-blue-200")}
      >
        {m.common.learnMore}
      </Button>
    </Card>
  );
}

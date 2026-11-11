import { Send } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { IconCircle } from "@/components/ui/icon-circle";
import { Reveal } from "@/components/ui/reveal";
import { getMessages } from "@/i18n/messages";
import { whatsappUrl } from "@/lib/whatsapp";

interface CtaBannerProps {
  title: string;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
}

/** Dark "Have a project in mind?" banner repeated near the bottom of every page. */
export function CtaBanner({ title, description, buttonLabel, buttonHref }: CtaBannerProps) {
  const m = getMessages();
  return (
    <section className="bg-surface-50 px-6 pb-20 lg:px-8 lg:pb-24">
      <Container className="!px-0">
        <Reveal variant="scale" className="bg-glow-blue relative overflow-hidden rounded-2xl border border-white/10 bg-navy-950">
          <div className="flex flex-col items-center gap-6 px-6 py-12 text-center sm:flex-row sm:justify-between sm:px-10 sm:text-start lg:px-14">
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <IconCircle icon={Send} variant="solid" shape="circle" size="lg" className="hidden sm:inline-flex rtl:-scale-x-100" />
              <div>
                <h2 className="text-xl font-bold text-white sm:text-2xl">{title}</h2>
                <p className="mt-1 text-sm text-ink-300">{description}</p>
              </div>
            </div>
            <Button href={buttonHref ?? whatsappUrl(m.wa.general)} size="lg" className="shrink-0">{buttonLabel ?? m.common.startYourProject}</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

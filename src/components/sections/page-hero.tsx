import Image from "next/image";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import type { IconComponent } from "@/types";
import type { HighlightTitle } from "@/i18n/messages";

interface HeroItem { icon: IconComponent; title: string; text: string }

interface PageHeroProps {
  eyebrow: string;
  /** Plain text, or a HighlightedTitle for a blue phrase. */
  title: React.ReactNode;
  description: string;
  items?: HeroItem[];
  image?: { src: string; alt: string; width: number; height: number };
  children?: React.ReactNode;
  className?: string;
}

/** Renders "before + highlighted + after" with the highlight in blue. */
export function HighlightedTitle({ title, className = "text-brand-blue-400" }: { title: HighlightTitle; className?: string }) {
  return (
    <>
      {title.before}
      <span className={className}>{title.highlight}</span>
      {title.after}
    </>
  );
}

/**
 * Dark hero used by every inner page: eyebrow, H1 with a blue highlighted
 * phrase, paragraph, small icon items, and an optional graphic.
 */
export function PageHero({ eyebrow, title, description, items, image, children, className }: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden bg-navy-950", className)}>
      <div className="bg-glow-blue pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container className="relative grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2 lg:py-20">
        <div className="flex flex-col items-start gap-5">
          <span className="enter eyebrow-dot text-xs font-semibold tracking-[0.08em] text-brand-blue-400 uppercase">{eyebrow}</span>
          <h1 className="enter [--delay:100ms] text-4xl font-bold text-white sm:text-5xl lg:leading-[1.1]">{title}</h1>
          <p className="enter [--delay:200ms] max-w-md text-base leading-relaxed text-ink-300">{description}</p>
          {children}
          {items && (
            <ul className="enter [--delay:300ms] mt-2 flex flex-wrap gap-x-8 gap-y-4">
              {items.map(({ icon: Icon, title: t, text }) => (
                <li key={t} className="flex items-center gap-3">
                  <Icon className="size-6 text-brand-blue-400" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-white">{t}</p>
                    <p className="text-xs text-ink-300">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {image && (
          <div className="enter-right relative mx-auto w-full max-w-xl lg:max-w-none">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              priority
              className="h-auto w-full"
            />
          </div>
        )}
      </Container>
    </section>
  );
}

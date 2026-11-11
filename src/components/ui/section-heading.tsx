import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

/** The repeated "● EYEBROW / Title / description" header. It reveals itself on scroll. */
export function SectionHeading({ eyebrow, title, description, align = "center", tone = "light", className }: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <Reveal className={cn("flex flex-col gap-4", align === "center" ? "items-center text-center" : "items-start text-start", className)}>
      <span className={cn("eyebrow-dot text-xs font-semibold tracking-[0.08em] uppercase", dark ? "text-brand-blue-300" : "text-brand-blue-500")}>
        {eyebrow}
      </span>
      <h2 className={cn("max-w-2xl text-3xl font-bold sm:text-4xl", dark ? "text-white" : "text-ink-900")}>{title}</h2>
      {description && (
        <p className={cn("max-w-2xl text-base leading-relaxed", dark ? "text-ink-300" : "text-ink-500")}>{description}</p>
      )}
    </Reveal>
  );
}

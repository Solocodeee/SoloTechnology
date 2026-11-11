import { LocaleLink } from "@/components/ui/locale-link";
import { ArrowRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap [&>svg:last-child]:transition-transform hover:[&>svg:last-child]:translate-x-0.5 rtl:hover:[&>svg:last-child]:-translate-x-0.5 rounded-lg text-sm font-semibold transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-brand-blue-500 text-white shadow-glow-blue hover:bg-brand-blue-600",
        white: "bg-white text-navy-900 hover:bg-surface-100",
        outlineDark: "border border-white/20 bg-transparent text-white hover:border-white/40 hover:bg-white/5",
        outlineLight: "border border-ink-900/15 bg-transparent text-ink-900 hover:border-ink-900/30 hover:bg-ink-900/[0.03]",
        link: "h-auto px-0 font-medium text-brand-blue-500 hover:text-brand-blue-600",
      },
      size: { sm: "h-9 px-4 text-xs", md: "h-11 px-5", lg: "h-12 px-7 text-base" },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  withArrow?: boolean;
}

/** Renders a Next.js Link when `href` is given, otherwise a native button. */
export function Button({ className, variant, size, href, withArrow = true, children, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);
  const content = (
    <>
      {children}
      {withArrow && <ArrowRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />}
    </>
  );
  if (href && /^https?:/.test(href)) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>{content}</a>;
  }
  if (href) return <LocaleLink href={href} className={classes}>{content}</LocaleLink>;
  return <button className={classes} {...props}>{content}</button>;
}

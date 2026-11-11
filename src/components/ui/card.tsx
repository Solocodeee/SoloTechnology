import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva("rounded-2xl transition-all duration-300", {
  variants: {
    variant: {
      light: "border border-surface-300 bg-white shadow-card hover:shadow-card-hover",
      dark: "border border-white/10 bg-navy-800 shadow-dark-card",
      flat: "bg-transparent",
    },
    padding: { none: "p-0", sm: "p-5", md: "p-6", lg: "p-8" },
  },
  defaultVariants: { variant: "light", padding: "md" },
});

interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

export function Card({ className, variant, padding, ...props }: CardProps) {
  return <div className={cn(cardVariants({ variant, padding }), className)} {...props} />;
}
export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("text-lg font-bold text-ink-900", className)} {...props} />;
}
export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm leading-relaxed text-ink-500", className)} {...props} />;
}

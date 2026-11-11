import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva("inline-flex items-center gap-1.5 rounded-full text-xs font-medium", {
  variants: {
    variant: {
      blue: "bg-brand-blue-50 text-brand-blue-600",
      solid: "bg-brand-blue-500 text-white",
      neutral: "bg-surface-100 text-ink-500",
      dark: "bg-white/10 text-ink-200",
      overlay: "bg-white/95 text-ink-900",
    },
    size: { sm: "px-2.5 py-1", md: "px-3 py-1.5" },
  },
  defaultVariants: { variant: "blue", size: "sm" },
});

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, size }), className)} {...props} />;
}

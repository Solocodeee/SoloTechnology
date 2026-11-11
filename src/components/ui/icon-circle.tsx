import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { IconComponent } from "@/types";

const iconCircleVariants = cva("inline-flex shrink-0 items-center justify-center", {
  variants: {
    variant: {
      blueSoft: "bg-brand-blue-50 text-brand-blue-500",
      solid: "bg-brand-blue-500 text-white",
      dark: "bg-navy-700 text-brand-blue-400",
      neutralSoft: "bg-surface-100 text-brand-blue-500",
    },
    shape: { circle: "rounded-full", square: "rounded-xl" },
    size: { sm: "size-9 [&_svg]:size-4", md: "size-12 [&_svg]:size-5", lg: "size-14 [&_svg]:size-6" },
  },
  defaultVariants: { variant: "blueSoft", shape: "square", size: "md" },
});

interface IconCircleProps extends VariantProps<typeof iconCircleVariants> {
  icon: IconComponent;
  className?: string;
}

export function IconCircle({ icon: Icon, variant, shape, size, className }: IconCircleProps) {
  return (
    <span className={cn(iconCircleVariants({ variant, shape, size }), className)}>
      <Icon />
    </span>
  );
}

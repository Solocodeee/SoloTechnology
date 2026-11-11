"use client";

import { useEffect, useRef } from "react";

type Variant = "up" | "left" | "right" | "fade" | "scale";
type Tag = "div" | "ul" | "ol" | "section" | "aside";

interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  as?: Tag;
  variant?: Variant;
  /** Extra delay in ms before the animation starts. */
  delay?: number;
  /** Animate the direct children one after another instead of the element itself. */
  group?: boolean;
}

/**
 * Scroll-reveal wrapper.
 *
 * Server-rendered HTML is fully visible (works without JS). After hydration,
 * elements that are still below the fold are hidden and then animated in when
 * they scroll into view. Elements already on screen, or above it, are left
 * alone so nothing flashes or stays invisible. Does nothing when the visitor
 * prefers reduced motion.
 */
export function Reveal({
  as = "div",
  variant = "up",
  delay = 0,
  group = false,
  className,
  style,
  children,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const key = group ? "revealGroup" : "reveal";
    const rect = el.getBoundingClientRect();
    // Already on screen (or scrolled past): keep it visible as rendered.
    if (rect.top < window.innerHeight * 0.88) return;

    el.dataset[key] = "hidden";
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
          el.dataset[key] = "shown";
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -12% 0px" },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      // If unmounted/re-run mid-way, never leave content hidden.
      if (el.dataset[key] === "hidden") delete el.dataset[key];
    };
  }, [group]);

  const Component = as as React.ElementType;
  return (
    <Component
      ref={ref}
      data-variant={variant}
      className={className}
      style={{ ...style, "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      {...rest}
    >
      {children}
    </Component>
  );
}

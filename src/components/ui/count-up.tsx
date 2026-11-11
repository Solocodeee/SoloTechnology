"use client";

import { useEffect, useRef } from "react";

/**
 * Counts a number like "20+" or "99%" up from zero when it scrolls into view.
 * The server renders the final value, so it is correct without JS and for
 * visitors who prefer reduced motion. The DOM is updated directly (no state)
 * to avoid re-rendering on every frame.
 */
export function CountUp({ value, duration = 1400 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const match = value.match(/^(\d+)(.*)$/);
    if (!el || !match) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.88) return;

    const target = Number(match[1]);
    const suffix = match[2];
    let raf = 0;
    el.textContent = `0${suffix}`;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && entry.boundingClientRect.top >= 0) return;
        io.disconnect();
        // Use the first frame's timestamp as the start so we never mix clocks.
        let start: number | null = null;
        const tick = (now: number) => {
          if (start === null) start = now;
          const p = Math.min(Math.max((now - start) / duration, 0), 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = `${Math.round(target * eased)}${suffix}`;
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      el.textContent = value;
    };
  }, [value, duration]);

  return <span ref={ref}>{value}</span>;
}

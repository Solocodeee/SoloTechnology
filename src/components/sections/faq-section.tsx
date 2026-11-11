"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import type { FAQItem } from "@/types";

/** Accordion FAQ. Answers expand smoothly (grid-rows trick, no height measuring). */
export function FaqSection({ items, eyebrow, title }: { items: FAQItem[]; eyebrow: string; title: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id="faq" className="bg-surface-50 pb-20 lg:pb-24">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} align="left" className="mb-10" />
        <Reveal group className="grid grid-cols-1 items-start gap-4 lg:grid-cols-2">
          {items.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.question} className="rounded-xl border border-surface-300 bg-white shadow-card">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start text-sm font-medium text-ink-900"
                  aria-expanded={open}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  {item.question}
                  <ChevronDown className={cn("size-4 shrink-0 text-ink-400 transition-transform duration-300", open && "rotate-180 text-brand-blue-500")} />
                </button>
                <div
                  id={`faq-${i}`}
                  role="region"
                  aria-hidden={!open}
                  className={cn("grid transition-[grid-template-rows,opacity] duration-300 ease-out", open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm leading-relaxed text-ink-500">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}

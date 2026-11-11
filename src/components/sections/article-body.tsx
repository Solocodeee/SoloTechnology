import type { ContentSection } from "@/types";

/** Renders headed sections of paragraphs and optional bullet lists. */
export function ArticleBody({ sections }: { sections: ContentSection[] }) {
  return (
    <div className="flex flex-col gap-8">
      {sections.map((s, i) => (
        <section key={s.heading ?? i}>
          {s.heading && <h2 className="mb-3 text-xl font-bold text-ink-900">{s.heading}</h2>}
          {s.paragraphs.map((p) => <p key={p} className="mb-3 last:mb-0">{p}</p>)}
          {s.bullets && (
            <ul className="mt-3 ms-5 list-disc space-y-1.5 marker:text-brand-blue-500">
              {s.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}

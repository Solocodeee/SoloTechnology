# Solo Technology website

Next.js (App Router) + React + TypeScript + Tailwind CSS v4.

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

## Languages (English + Arabic)
The site lives under `/en/...` and `/ar/...`. Visiting `/` redirects by the saved choice (cookie), then the browser language, else English.
Arabic is written in friendly Egyptian colloquial and the page switches to right-to-left automatically.

| What | Where |
|---|---|
| Button / heading / page texts (English) | `src/i18n/messages/en.ts` |
| Same texts in Arabic (must have the same keys, TypeScript checks it) | `src/i18n/messages/ar.ts` |
| Content (services, projects, pricing, team, FAQ...) | `src/data/*.ts`, each file holds `en` and `ar` text side by side |
| Language list, default language | `src/i18n/config.ts` |
| Redirect rules | `src/proxy.ts` |

Rules of thumb: in Server Components read the language with `getLocale()` / `getMessages()`; Client Components cannot, so pass their texts as props
(see `ContactForm`, `ProjectsGrid`). Use logical Tailwind classes (`ms-`, `me-`, `ps-`, `pe-`, `start-`, `end-`, `text-start`) instead of left/right.
Latin brand and technology names (React, WordPress...) stay in English in both languages on purpose.

Unknown URLs show the translated 404 page with `noindex`; some of them answer HTTP 200 instead of 404 (a Next.js Cache Components streaming behaviour).

## Edit content (no component changes needed)
| What | File |
|---|---|
| Company info, nav, footer links, copyright year, address (per language) | `src/data/site.ts` |
| Services | `src/data/services.ts` |
| Projects (+ filters) | `src/data/projects.ts` |
| Pricing tiers + comparison table | `src/data/pricing.ts` |
| Testimonials, team, FAQ | `src/data/testimonials.ts`, `team.ts`, `faq.ts` |
| Project live links | `liveUrl` field of each project in `src/data/projects.ts` |
| Technologies page groups | `src/data/tech-groups.ts` |
| Privacy Policy, Terms, Careers text | `src/data/legal.ts` |
| Process steps and stats numbers | `src/data/process.ts` |
| Page-specific small texts (principles, mission, form options...) | `src/data/pages.ts` |

## Replace images
Swap files inside `public/images/` keeping the same file name (or change the path in the data file).

## Design tokens
Colors, fonts, radius and shadows live in `src/app/globals.css` under `@theme`.

## Contact form
`POST /api/contact` validates the message and forwards it to the webhook in the
`CONTACT_WEBHOOK_URL` environment variable (Zapier, Make, Formspree, your own mail service...).
Without that variable the form answers that email is not connected yet, on purpose.

## Review before launch
- Logo (`src/components/ui/logo.tsx`) is an approximation; replace with the real file.
- Privacy Policy and Terms are a generic starter template: have a lawyer review them.
- Contact and pricing buttons open WhatsApp (number in `src/data/site.ts`).
- Social links, phone, email and address in `src/data/site.ts` are sample values.

## Animations
- Page-load entrance for heroes: CSS classes `enter`, `enter-right`, `enter-fade` (delay with `[--delay:200ms]`).
- Scroll reveal: wrap content in `<Reveal>` (`src/components/ui/reveal.tsx`). `variant` = up | left | right | fade | scale, `delay` in ms.
  Use `<Reveal group>` to animate the direct children one after another (cards in a grid). `SectionHeading` already reveals itself.
- Number counter: `<CountUp value="20+" />`.
- Timings and distances live at the bottom of `src/app/globals.css` ("Motion").
- Everything is switched off automatically for visitors who enable "reduce motion", and the page is fully visible without JavaScript.
# SoloTechnology

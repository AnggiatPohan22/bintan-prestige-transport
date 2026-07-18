# Base Template Layout Handoff

## Current Project State

The project is now structured as a reusable Astro frontend base template. Active documentation has been consolidated into one report and one handoff:

- `ai/reports/base-template-layout-report.md`
- `ai/handoffs/base-template-layout-handoff.md`

Older reports and handoffs are preserved under:

- `ai/history/project-journey/reports/`
- `ai/history/project-journey/handoffs/`

## Read Order For Future Work

1. `AGENTS.md`
2. `ai/reports/base-template-layout-report.md`
3. `ai/handoffs/base-template-layout-handoff.md`
4. `src/layouts/BaseLayout.astro`
5. `src/styles/global.css`
6. Relevant page in `src/pages`
7. Relevant data file in `src/data`
8. Relevant section or feature component in `src/components`

## Development Rules

- Work on `develop`, not `main`.
- Keep the site static-first.
- Use React only for interactive islands.
- Prefer updating existing data/component/style files before creating new files.
- Keep `ai/reports` and `ai/handoffs` clean: update the active report/handoff unless the user asks for a separate milestone document.
- Store historical docs in `ai/history/project-journey`.

## Where To Update Common Changes

| Change Needed | Update Here First |
| --- | --- |
| Site name, phone, WhatsApp, address, env-backed defaults | `src/data/site.ts` |
| Navbar or footer links | `src/data/navigation.ts` |
| Page title, canonical, sitemap entries | `src/data/seo.ts` |
| Schema output | `src/data/schema.ts` |
| Home gallery | `src/data/gallery.ts` |
| Blog articles | `src/data/blog.ts` |
| Transfer route cards and detail pages | `src/data/routes.ts`, `src/data/transportRoutes.ts` |
| Tour/activity cards and detail pages | `src/data/tours.ts` |
| Fleet selector | `src/data/carTypes.ts` |
| FAQ content | `src/data/faqs.ts` |
| Global shell | `src/layouts/BaseLayout.astro`, `src/components/site/*` |
| Reusable UI primitive | `src/components/core/*` |
| Page section layout | `src/components/sections/*` |
| Domain widget | `src/components/features/*` |
| Design tokens | `src/styles/tokens.css` |
| Component styling | `src/styles/components.css` |
| Section and responsive styling | `src/styles/sections.css` |
| Scroll reveal and decorative motion | `src/components/site/ScrollEffects.astro`, `src/styles/sections.css` |
| Home booking form field gradient motion | `src/styles/components.css` |
| Mobile WhatsApp overlap with Home booking form | `src/styles/sections.css` |
| Floating WhatsApp responsive icon/button polish | `src/components/site/FloatingWhatsApp.astro`, `src/styles/components.css`, `src/styles/sections.css` |
| Running text promo / announcement ticker | `.env`, `.env.example`, `src/data/site.ts`, `src/components/core/PromoTicker.astro`, `src/styles/components.css` |

## Page Ownership

### Home

- Page: `src/pages/index.astro`
- Sections: `src/components/sections/home/*`
- Data: `src/data/gallery.ts`, `src/data/routes.ts`, `src/data/tours.ts`, `src/data/packages.ts`, `src/data/carTypes.ts`, `src/data/faqs.ts`

### About

- Page: `src/pages/about.astro`
- Sections: `src/components/sections/about/*`
- Data: `src/data/media.ts`, `src/data/schema.ts`

### Contact

- Page: `src/pages/contact.astro`
- Sections: `src/components/sections/contact/*`
- WhatsApp planner: `src/components/features/whatsapp/WhatsAppPlanner.astro`
- Data: `src/data/site.ts`, `src/data/media.ts`, `src/data/schema.ts`

### Blog

- Pages: `src/pages/blog.astro`, `src/pages/blog/[slug].astro`
- Components: `src/components/features/blog/*`
- Data: `src/data/blog.ts`, `src/data/seo.ts`, `src/data/schema.ts`

### Pick Up And Drop

- Pages: `src/pages/packages/pick-up-drop.astro`, `src/pages/packages/pick-up-drop/[slug].astro`
- Sections: `src/components/sections/packages/Transfer*.astro`
- Features: `src/components/features/packages/RouteList.astro`, `IncludeExclude.astro`, `TransferFAQ.astro`, package detail components
- Data: `src/data/routes.ts`, `src/data/transportRoutes.ts`

### Activities Packages And Island Tour

- Pages: `src/pages/packages/activities-packages*.astro`, `src/pages/packages/island-tour*.astro`
- Sections: `src/components/sections/packages/Tour*.astro`
- Features: `src/components/features/packages/Tour*.astro`, package detail components
- Data: `src/data/tours.ts`

## Verification To Run After Changes

```powershell
npm.cmd run check
npm.cmd run build
git diff --check
```

Current mobile widget note:

- `src/styles/sections.css` keeps `.whatsapp-assistant` visible on mobile.
- Home mobile keeps `.whatsapp-assistant` inside the right edge and raises its mobile stacking layer when `.booking-floating-form` is present, so the floating WhatsApp button stays visible and tappable above the booking form.
- Opening `.whatsapp-assistant` adds a blurred page backdrop so the widget form becomes the focus layer.
- The mobile panel uses safer viewport sizing, a softer glass header treatment, and a running promo slot below `Continue to WhatsApp`.
- The default running promo text is controlled by `PUBLIC_PROMO_TICKER_TEXT`, exposed through `site.promoTickerText`, and rendered by `src/components/core/PromoTicker.astro`.
- Keep this scoped to mobile booking-form layout unless a future design changes the fixed widget position.

Current transfer card note:

- `src/data/routes.ts` owns the visible Avanza/Innova, Hiace, and Alphard card copy, capacity badge values, and three price bullets.
- `RouteList.astro` and `RouteHighlights.astro` parse `Capacity : ...` in `priceFrom` for the card badge.

Current animation note:

- `src/components/site/ScrollEffects.astro` adds reveal/count-up hooks with IntersectionObserver.
- `src/styles/sections.css` owns title reveal, stat glow/count motion, package badge shimmer, WhatsApp CTA gradient motion, randomized info-card border light rail, FAQ internal gradient drift/answer reveal, and Private Concierge promo styling.
- `src/styles/components.css` owns the Home booking form field-card internal gradient drift.
- `src/styles/components.css` and `src/styles/sections.css` own the floating WhatsApp responsive tap target, label/icon treatment, glow, pulse, badge, and gradient attention motion.
- Keep animation decorative and static-first; do not add animation logic to content/data files unless a section needs a dedicated interaction.

For visual QA, inspect at least:

- `/`
- `/about`
- `/contact`
- `/blog`
- `/packages/pick-up-drop`
- `/packages/activities-packages`
- `/packages/island-tour`
- One blog detail page
- One transfer detail page
- One tour detail page

## Rollback Reference

Before the structure refactor, a local rollback marker was created:

- Tag: `rollback/pre-structure-refactor-20260712`
- Branch: `backup/pre-structure-refactor-20260712`

Use these only after reviewing any newer local commits.

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
| Mobile WhatsApp overlap with Home booking form | `src/styles/sections.css` |

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

- `src/styles/sections.css` hides `.whatsapp-assistant` on mobile when the active page contains `.booking-floating-form`.
- This prevents the floating WhatsApp button from covering Home booking fields.
- Keep this scoped to mobile and booking-form pages unless a future layout adds another fixed bottom widget.

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

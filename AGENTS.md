# AGENTS.md

## Project Identity

This project is the frontend foundation for a Taxi & Tour / Travel Agent website.
The public site must be fast, SEO-friendly, mobile-first, static-first, and ready
to connect to a Laravel CMS API in a later phase.

## Tech Stack

- Astro
- React integration for interactive islands only
- Tailwind CSS
- Motion for light animation islands
- Lucide React for React icons
- TypeScript

## Branch Rule

- Development must happen on `develop`.
- Do not work directly on `main`.
- `main` is only for stable merge or release after review.

## Critical Safety Rules

- Do not build a backend.
- Do not set up a database.
- Do not build an admin dashboard.
- Do not convert the public website into a full React SPA.
- Do not overengineer STEP 0 foundations.
- Do not add unnecessary dependencies.
- Do not remove GitHub or project files unless the user explicitly asks.

## Responsive Rules

- Build mobile-first for 360px and wider.
- Ensure no horizontal overflow.
- Cards must stack on mobile and expand to grids on tablet and desktop.
- Buttons and CTAs must be comfortable to tap.
- Image aspect ratios must be stable.
- Footer and navigation must remain readable on mobile and desktop.

## SEO Rules

- Every page must use `BaseLayout`.
- `BaseLayout` must include the SEO component.
- SEO component must support title, description, canonical, and OG image.
- Keep schema, sitemap, and robots as future enhancements unless a step asks for them.

## Performance Rules

- Keep the site static-first.
- Use React only for components that need interactivity.
- Avoid heavy animation and large client bundles.
- Prefer local structured data until a CMS API is approved.

## Animation Rules

- Motion is allowed only for light React animation islands.
- Use opacity, x, y, or scale.
- Do not animate width, height, top, or left.
- Respect reduced motion where practical.

## File Organization Rules

- Reusable UI primitives live in `src/components/core`.
- Site shell components live in `src/components/site`.
- Domain widgets live in `src/components/features`.
- Page sections live in `src/components/sections`.
- Shared data lives in `src/data`.
- Layouts live in `src/layouts`.
- Pages live in `src/pages`.
- `src/styles/global.css` is the style import manifest only.
- Design tokens live in `src/styles/tokens.css`.
- Base typography and global prose live in `src/styles/typography.css`.
- Shared utilities live in `src/styles/utilities.css`.
- Reusable component styling lives in `src/styles/components.css`.
- Page section, footer, responsive, and keyframe styling lives in `src/styles/sections.css`.
- Optional theme overrides live in `src/styles/themes`.
- Public images live under `public/images`.
- Prefer path aliases such as `@components/*`, `@data/*`, `@layouts/*`, and `@styles/*` over deep relative imports.
- Before creating a new source file, check whether the change belongs in an existing data file, section, feature, core component, or style partial.

## Reporting And Handoff Rules

- Keep active documentation small and current.
- The active report is `ai/reports/base-template-layout-report.md`.
- The active handoff is `ai/handoffs/base-template-layout-handoff.md`.
- Update those active files for normal changes instead of creating a new report or handoff for every task.
- Store historical reports and handoffs in `ai/history/project-journey`.
- Create a separate new report or handoff only when the user explicitly asks for a milestone document, audit, release note, or rollback handoff.
- Active reports should list files created, files modified, verification, known issues, and next step.

## Scope Discipline

- STEP 0 is foundation only.
- Do not build final page content or advanced booking flows in STEP 0.
- Do not continue to STEP 1 until STEP 0 is complete and verified.

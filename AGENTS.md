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

- Reusable components live in `src/components`.
- Shared data lives in `src/data`.
- Layouts live in `src/layouts`.
- Pages live in `src/pages`.
- Global styling lives in `src/styles/global.css`.
- Public images live under `public/images`.

## Reporting And Handoff Rules

- Each step must create a report in `ai/reports`.
- Each step must create or update handoff files in `ai/handoffs`.
- Reports should list files created, files modified, verification, known issues, and next step.

## Scope Discipline

- STEP 0 is foundation only.
- Do not build final page content or advanced booking flows in STEP 0.
- Do not continue to STEP 1 until STEP 0 is complete and verified.

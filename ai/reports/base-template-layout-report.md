# Base Template Layout Report

## Purpose

This project is now organized as a reusable Astro frontend base template for Taxi, Tour, Travel Agent, and similar service websites. The goal is to make future redesigns possible by updating data, section components, styles, and assets without creating a new documentation trail for every small change.

## Active Documentation Model

- Active report: `ai/reports/base-template-layout-report.md`
- Active handoff: `ai/handoffs/base-template-layout-handoff.md`
- Historical reports and handoffs: `ai/history/project-journey/`

Old step-by-step reports were archived as project history. Future work should update the two active files above unless the user explicitly asks for a separate milestone report.

## Source Layout

```txt
src/
├── components/
│   ├── core/
│   ├── site/
│   ├── features/
│   └── sections/
├── data/
├── layouts/
├── pages/
└── styles/
```

## Main Connection Map

### Global Shell

- `src/layouts/BaseLayout.astro`
  - Imports global styles from `@styles/global.css`.
  - Connects SEO, JSON-LD, navigation, footer, floating WhatsApp, and page slot.
  - Use this layout for every public page.

- `src/components/site/SEO.astro`
  - Reads site defaults from `@data/site`.
  - Receives page-level SEO props from each `src/pages/*` file.

- `src/components/site/JsonLd.astro`
  - Renders schema objects passed by pages.

- `src/components/site/Navbar.astro`
  - Reads navigation links from `@data/navigation`.

- `src/components/site/MobileNav.astro`
  - Reads navigation links and WhatsApp contact data from `@data/navigation` and `@data/site`.

- `src/components/site/Footer.astro`
  - Reads navigation links and contact data from `@data/navigation` and `@data/site`.

- `src/components/site/FloatingWhatsApp.astro`
  - Reads WhatsApp number and message defaults from `@data/site`.

### Core Components

- `src/components/core/Breadcrumb.astro`
  - Used by inner pages such as about, contact, blog, and package pages.

- `src/components/core/FeatureCard.astro`
  - Used for reusable benefit/value cards.

- `src/components/core/GalleryGrid.astro`
  - Used by home/gallery sections.

- `src/components/core/HeroBackdrop.astro`
  - Used by hero sections that need image/video background handling.

- `src/components/core/ImageCard.astro`
  - Used by package and visual card patterns.

- `src/components/core/SectionHeader.astro`
  - Used for reusable section headings.

- `src/components/core/SwipeControls.astro`
  - Used by mobile swipers and card pagination.

- `src/components/core/WhatsAppCTA.astro`
  - Used by sections and pages that need WhatsApp call-to-action blocks.

### Home Page

- Page: `src/pages/index.astro`
- Main data:
  - `src/data/gallery.ts`
  - `src/data/schema.ts`
  - `src/data/routes.ts`
  - `src/data/tours.ts`
  - `src/data/packages.ts`
  - `src/data/carTypes.ts`
  - `src/data/faqs.ts`
  - `src/data/site.ts`
- Sections:
  - `src/components/sections/home/Hero.astro`
  - `src/components/sections/home/ServiceCards.astro`
  - `src/components/sections/home/WhyChooseUs.astro`
  - `src/components/sections/home/BentoShowcase.astro`
  - `src/components/sections/home/RouteHighlights.astro`
  - `src/components/sections/home/LuxuryExperience.astro`
  - `src/components/sections/home/ConciergeFlow.astro`
  - `src/components/sections/home/FAQPreview.astro`
  - `src/components/sections/home/PremiumCarSelector.astro`
  - `src/components/sections/home/PremiumCarSelector.tsx`

To update home content, prefer updating `src/data/*` first. Only edit section components when layout or markup needs to change.

### About Page

- Page: `src/pages/about.astro`
- Main data:
  - `src/data/schema.ts`
  - `src/data/media.ts`
- Sections:
  - `src/components/sections/about/AboutHero.astro`
  - `src/components/sections/about/AboutStory.astro`
  - `src/components/sections/about/AboutSoftSell.astro`
  - `src/components/sections/about/TrustSignals.astro`

To update about content, edit the section component only when the copy is local to the section. Shared hero images should stay in `src/data/media.ts`.

### Contact Page

- Page: `src/pages/contact.astro`
- Main data:
  - `src/data/schema.ts`
  - `src/data/site.ts`
  - `src/data/media.ts`
- Sections:
  - `src/components/sections/contact/ContactHero.astro`
  - `src/components/sections/contact/ContactCards.astro`
  - `src/components/sections/contact/ContactSoftSell.astro`
  - `src/components/features/whatsapp/WhatsAppPlanner.astro`

To update contact information, prefer `src/data/site.ts`. Only edit components for layout or section-specific copy.

### Blog Pages

- Pages:
  - `src/pages/blog.astro`
  - `src/pages/blog/[slug].astro`
- Main data:
  - `src/data/blog.ts`
  - `src/data/seo.ts`
  - `src/data/schema.ts`
- Components:
  - `src/components/features/blog/BlogCard.astro`
  - `src/components/features/blog/ArticleGallery.astro`

To add or edit blog articles, update `src/data/blog.ts`. Do not create a new page for each article unless the routing model changes.

### Pick Up And Drop Page

- Pages:
  - `src/pages/packages/pick-up-drop.astro`
  - `src/pages/packages/pick-up-drop/[slug].astro`
- Main data:
  - `src/data/routes.ts`
  - `src/data/transportRoutes.ts`
  - `src/data/schema.ts`
  - `src/data/seo.ts`
- Sections:
  - `src/components/sections/packages/TransferHero.astro`
  - `src/components/sections/packages/TransferFleet.astro`
  - `src/components/sections/packages/TransferProcess.astro`
- Features:
  - `src/components/features/packages/RouteList.astro`
  - `src/components/features/packages/IncludeExclude.astro`
  - `src/components/features/packages/TransferFAQ.astro`
  - `src/components/features/packages/PackageDetailHero.astro`
  - `src/components/features/packages/PackageDetailContent.astro`
  - `src/components/features/booking/PackageBookingForm.astro`
  - `src/components/features/booking/PackageBookingFields.astro`

To add or update transfer routes, start with `src/data/routes.ts` and `src/data/transportRoutes.ts`.

### Activities And Island Tour Pages

- Pages:
  - `src/pages/packages/activities-packages.astro`
  - `src/pages/packages/activities-packages/[slug].astro`
  - `src/pages/packages/island-tour.astro`
  - `src/pages/packages/island-tour/[slug].astro`
- Main data:
  - `src/data/tours.ts`
  - `src/data/schema.ts`
  - `src/data/seo.ts`
- Sections:
  - `src/components/sections/packages/TourHero.astro`
  - `src/components/sections/packages/TourExperience.astro`
- Features:
  - `src/components/features/packages/TourPackageGrid.astro`
  - `src/components/features/packages/TourItinerary.astro`
  - `src/components/features/packages/TourFAQ.astro`
  - `src/components/features/packages/PackageDetailHero.astro`
  - `src/components/features/packages/PackageDetailContent.astro`
  - `src/components/features/booking/PackageBookingForm.astro`

To add or update tours, start with `src/data/tours.ts`.

### Legal And Utility Pages

- Pages:
  - `src/pages/privacy.astro`
  - `src/pages/terms.astro`
  - `src/pages/refund.astro`
  - `src/pages/cancellation.astro`
  - `src/pages/404.astro`
  - `src/pages/robots.txt.ts`
  - `src/pages/sitemap.xml.ts`
- Main data:
  - `src/data/site.ts`
  - `src/data/seo.ts`

To update site-wide legal contact details, start with `src/data/site.ts`.

## Styling Map

- `src/styles/global.css`
  - Import manifest only. Keep it small.

- `src/styles/tokens.css`
  - Design tokens, colors, fonts, and theme-level variables.

- `src/styles/typography.css`
  - Global reset, base typography, shared containers, legal prose.

- `src/styles/utilities.css`
  - Shared editorial layout, luxury surfaces, reusable utility classes.

- `src/styles/components.css`
  - Reusable component systems such as cards, swipers, WhatsApp, booking forms, blog UI.

- `src/styles/sections.css`
  - Page section styling, gallery/fleet systems, footer, responsive overrides, keyframes.

- `src/styles/themes/*`
  - Optional theme overrides for future redesigns.

## Update Rule

When adding or changing content, update the smallest source of truth:

- Navigation: `src/data/navigation.ts`
- Site identity, WhatsApp, contact, env-backed values: `src/data/site.ts`
- SEO routes and canonical helpers: `src/data/seo.ts`
- Schema helpers: `src/data/schema.ts`
- Blog: `src/data/blog.ts`
- Gallery: `src/data/gallery.ts`
- Images and hero media mapping: `src/data/media.ts`
- Transfer routes: `src/data/routes.ts` and `src/data/transportRoutes.ts`
- Tours and activities: `src/data/tours.ts`
- Package categories: `src/data/packages.ts`
- Fleet/car selector: `src/data/carTypes.ts`
- FAQ: `src/data/faqs.ts`

Only create a new file when a new reusable concept cannot fit one of the existing source files cleanly.

## Verification

Last known local verification after the structure refactor:

- `npm.cmd run check` passed.
- `npm.cmd run build` passed.
- No push or Cloudflare deployment was run.

## Known Notes

- The active branch is local `develop`.
- Local `develop` is ahead of `origin/develop` because the work has intentionally not been pushed.
- Rollback point before the structure refactor:
  - `rollback/pre-structure-refactor-20260712`
  - `backup/pre-structure-refactor-20260712`

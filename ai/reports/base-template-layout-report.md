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
  - Adds a scroll-aware glass/blur header state so logo and menu remain readable.

- `src/components/site/MobileNav.astro`
  - Reads navigation links and WhatsApp contact data from `@data/navigation` and `@data/site`.

- `src/components/site/Footer.astro`
  - Reads navigation links and contact data from `@data/navigation` and `@data/site`.

- `src/components/site/FloatingWhatsApp.astro`
  - Reads WhatsApp number, message defaults, and promo ticker copy from `@data/site`.
  - Uses `src/components/core/PromoTicker.astro` under the Continue to WhatsApp button.
  - Owns the global floating action row: WhatsApp assistant plus Back to Top button.

- `src/components/site/ScrollEffects.astro`
  - Adds lightweight IntersectionObserver reveal hooks and count-up behavior for static pages.

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

- `src/components/core/PromoTicker.astro`
  - Reusable running text component for soft promo, announcement, or trust copy.
  - Defaults to `site.promoTickerText`, which is controlled by `PUBLIC_PROMO_TICKER_TEXT`.

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

Blog index layout note:

- `src/pages/blog.astro` owns the full-width editorial hero, Browse Topics filters, nearby article results, Favorite Reads panel, article pagination, and service-focus soft selling section.
- `src/styles/components.css` owns the blog hero, blog discovery layout, Favorite Reads panel, service-focus cards, and article pagination surface.
- `BlogCard.astro` supports `showFavoriteBadge={false}` so the Browse Topics article list can avoid duplicating the Favorite Reads signal.

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
  - Owns Home booking form field-card internal gradient drift and booking form interaction surfaces.
  - Owns floating WhatsApp toggle sizing, Back to Top button styling, responsive label/icon treatment, pulse, glow, badge, gradient attention motion, panel content styling, and reusable promo ticker styling.
  - Owns adaptive luxury pagination surfaces for `SwipeControls` and blog pagination.

- `src/styles/sections.css`
  - Page section styling, gallery/fleet systems, footer, responsive overrides, keyframes.
  - Owns the floating WhatsApp focus layer, raised bottom position, and mobile stacking rule that keeps the widget visible above `.booking-floating-form` without clipping outside the viewport.
  - Owns scroll reveal polish, title reveal, badge shimmer, WhatsApp CTA gradient motion, FAQ internal gradient drift/open animation, stat count glow, randomized info-card border light rail, and Private Concierge promo styling.

- `src/styles/themes/*`
  - Optional theme overrides for future redesigns.

## Update Rule

When adding or changing content, update the smallest source of truth:

- Navigation: `src/data/navigation.ts`
- Site identity, WhatsApp, contact, env-backed values: `src/data/site.ts`
- WhatsApp panel running promo: `.env`, `.env.example`, `src/data/site.ts`, `src/components/core/PromoTicker.astro`
- SEO routes and canonical helpers: `src/data/seo.ts`
- Schema helpers: `src/data/schema.ts`
- Blog: `src/data/blog.ts`
- Gallery: `src/data/gallery.ts`
- Images, logo, icon, page hero, and activity package asset mapping: `src/data/assets.ts`
- Hero media adapter: `src/data/media.ts`
- Transfer routes: `src/data/routes.ts` and `src/data/transportRoutes.ts`
- Tours and activities: `src/data/tours.ts`
- Package categories: `src/data/packages.ts`
- Fleet/car selector: `src/data/carTypes.ts`
- FAQ: `src/data/faqs.ts`

Transfer route card note:

- `src/data/routes.ts` owns the Avanza/Innova, Hiace, and Alphard card capacity badge text and the three visible price bullets for one way, half-day, and full-day options.
- `RouteList.astro` and `RouteHighlights.astro` support `Capacity : ...` values in `priceFrom` so the former "Start From" badge can display seater capacity.

Only create a new file when a new reusable concept cannot fit one of the existing source files cleanly.

## Verification

Last known local verification:

- `npm.cmd run check` passed.
- `npm.cmd run build` passed.
- Mobile preview at 375px checked `/`, `/packages/island-tour`, `/packages/activities-packages`, `/packages/pick-up-drop`, `/about`, `/contact`, and `/blog`.
- Home mobile keeps the floating WhatsApp widget inside the viewport and stacked above the booking form layer for easier tapping; opening the widget blurs the page background to focus the form.
- Floating WhatsApp mobile panel uses a safer viewport height, a softer luxury glass header, and a reusable running promo below the Continue to WhatsApp button.
- `PUBLIC_PROMO_TICKER_TEXT` controls the default running promo text through `src/data/site.ts`.
- Global floating actions now stack WhatsApp above the Back to Top button, keeping both controls available on every `BaseLayout` page without blocking horizontal content.
- Navbar scroll state adds a blurred luxury header surface so logo and menu remain visible over page content.
- Scroll animation pass adds reveal hooks, animated stat numbers, package badge/price shimmer, WhatsApp CTA gradient motion, FAQ internal gradient drift/open animation, randomized information-card border light rail, and a stronger Private Concierge promo panel.
- Pagination polish keeps non-Fleet carousel/blog controls visually aligned with dark and warm section backgrounds while preserving focus-visible accessibility.
- Blog index now uses a full-width hero treatment, a Browse Topics discovery panel with nearby article results, a Favorite Reads panel, activity/taxy-inspired article pagination, and a service-focus section instead of internal content-structure copy.
- No push or Cloudflare deployment was run.
- Asset registry pass centralizes page hero images and activity package card/detail/gallery images in `src/data/assets.ts`; maintenance notes are updated in `ai/guides/manual-image-content-guide.md` and `ai/guides/mapping-file-project-travel-agent.md`.
- Responsive hero image pass adds full-cover mobile/tablet/desktop variants, a reusable `npm.cmd run images:hero` generator, and `<picture>` support in `HeroBackdrop.astro` so hero sections can serve sharper device-specific images while staying lightweight.
- Floating WhatsApp now uses an explicit full-screen blur backdrop on all breakpoints, and mobile navigation reuses the promo ticker below the WhatsApp CTA.

## Known Notes

- The active branch is local `develop`.
- Local `develop` is ahead of `origin/develop` because the work has intentionally not been pushed.
- Rollback point before the structure refactor:
  - `rollback/pre-structure-refactor-20260712`
  - `backup/pre-structure-refactor-20260712`

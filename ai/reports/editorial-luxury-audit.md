# Editorial Luxury Audit

## Current State Summary

The project is an Astro static frontend for a premium taxi, private transfer,
and island tour website. It already has a strong static-first foundation,
React islands only where needed, local TypeScript data, SEO helpers, schema,
sitemap, robots output, public image folders, and deployment configuration.

The current visual language is dark luxury with gold/silver accents. It is
closer to premium dark UI than a full editorial travel magazine style. The
next design direction should keep the existing routes and data flow, but move
toward larger typography, more whitespace, calmer editorial surfaces, stronger
image-led sections, and fewer glass-heavy effects.

## Files Inspected

- `package.json`
- `src/layouts/BaseLayout.astro`
- `src/styles/global.css`
- `src/pages/index.astro`
- `src/pages/about.astro`
- `src/pages/contact.astro`
- `src/pages/packages/pick-up-drop.astro`
- `src/pages/packages/island-tour.astro`
- `src/components/common/*`
- `src/components/home/*`
- `src/components/about/*`
- `src/components/contact/*`
- `src/components/packages/*`
- `src/data/site.ts`
- `src/data/media.ts`
- `src/data/packages.ts`
- `src/data/routes.ts`
- `src/data/tours.ts`
- `src/data/gallery.ts`
- `src/data/schema.ts`
- `src/data/seo.ts`
- `src/pages/sitemap.xml.ts`
- `src/pages/robots.txt.ts`
- `public/images/*`
- `ai/reports/*`
- `ai/guides/manual-image-content-guide.md`

## Current Project Structure

### Main Pages

- `/` through `src/pages/index.astro`
- `/about` through `src/pages/about.astro`
- `/contact` through `src/pages/contact.astro`
- `/packages/pick-up-drop` through `src/pages/packages/pick-up-drop.astro`
- `/packages/island-tour` through `src/pages/packages/island-tour.astro`
- `/sitemap.xml` through `src/pages/sitemap.xml.ts`
- `/robots.txt` through `src/pages/robots.txt.ts`

### Layout

- `src/layouts/BaseLayout.astro` owns global CSS import, SEO, JSON-LD, navbar,
  footer, floating WhatsApp CTA, and page slot.

### Reusable Components

- Common: `Navbar`, `MobileNav`, `Footer`, `SEO`, `JsonLd`, `Breadcrumb`,
  `SectionHeader`, `HeroBackdrop`, `ImageCard`, `GalleryGrid`, `WhatsAppCTA`,
  `FloatingWhatsApp`, `FeatureCard`.
- Home: `Hero`, `ServiceCards`, `LuxuryExperience`, `BentoShowcase`,
  `RouteHighlights`, `PremiumCarSelector`, `ConciergeFlow`, `WhyChooseUs`,
  `FAQPreview`.
- Packages: `TransferHero`, `TourHero`, `PackageCard`, `TransferFleet`,
  `RouteList`, `TourPackageGrid`, `TourItinerary`, `IncludeExclude`, FAQ
  components.
- About and Contact: hero, story/trust, contact cards, planner.

### Styling

- Global Tailwind import and custom utility classes live in
  `src/styles/global.css`.
- The current foundation uses CSS utility classes such as `container-page`,
  `section-padding`, `luxury-surface`, `luxury-card`, `luxury-btn-primary`,
  `luxury-btn-secondary`, `gold-pill`, `hero-slide`, and mobile menu helpers.

### Assets

- Public assets live under `public/images`.
- Existing folders include `brand`, `hero`, `cars`, `tours`, and `gallery`.
- Some file names still contain spaces, which work in browser paths but are
  less maintainable than kebab-case names.

### Data Source

- Local TypeScript data lives in `src/data`.
- Main content data: `site.ts`, `media.ts`, `packages.ts`, `carTypes.ts`,
  `routes.ts`, `tours.ts`, `gallery.ts`, `faqs.ts`.
- SEO/schema data: `seo.ts`, `schema.ts`.

## Frontend Design Audit

### Hero Sections

- Home and inner pages now support image-led hero backdrops with lightweight
  crossfade.
- Current hero direction is premium dark luxury, but not yet fully editorial.
- The hero image system is good for launch, but image choices and cropping need
  manual curation per page.

### Navigation/Header

- Header is static-first and mobile menu uses native HTML details/summary.
- Logo support is available through `PUBLIC_LOGO_IMAGE`.
- Desktop nav is simple and stable.
- Editorial polish opportunity: slightly calmer header density and more refined
  brand presentation once real logo dimensions are final.

### Services and Packages

- Services and package cards are data-driven and reusable.
- Cards already have gold/silver accent treatment.
- Editorial opportunity: cards should become more image-forward with stronger
  title rhythm and less generic wording.

### Destination/Gallery

- Gallery is ready but still partly placeholder-like in text and image mapping.
- Real photos are present in `public/images`, but several data entries still
  point to older placeholder filenames.

### Booking/WhatsApp CTA

- WhatsApp-first flow is clear.
- CTA styling has improved contrast with gold primary buttons.
- Editorial opportunity: CTA copy can feel more concierge-like and less
  transactional.

### FAQ

- FAQ content is present and short.
- Visual treatment is functional, not yet editorial.

### Footer

- Footer is simple and launch-safe.
- Needs final business contact details, domain, social links, and stronger
  editorial brand closing later.

### Mobile Layout

- Mobile layout is mostly stable.
- The native mobile menu reduces hydration risk.
- Some sections may still feel dense on small screens because many sections use
  repeated cards and dark bands.

### Accessibility Basics

- Skip link exists.
- Links and buttons have visible focus styles.
- Hero background images are decorative through `aria-hidden`.
- Most image cards use `role="img"` and `aria-label`.
- Remaining risk: some decorative icons and card groups should be reviewed in
  a manual screen-reader pass before launch.

### SEO Basics

- SEO component provides title, description, canonical, OG, and Twitter tags.
- JSON-LD, sitemap, and robots are present.
- Production domain is still configurable and must be finalized.
- Placeholder business details should be replaced before launch.

### Performance Risks

- Static build is appropriate for launch.
- React is limited to selected islands.
- `PremiumCarSelector` remains a deferred React/Motion island.
- Large uploaded images in `public/images` may affect real hosting bandwidth
  when used directly. Some files are over 3-4 MB and should be optimized to
  WebP/AVIF before launch.
- Hero crossfade with several large images should be curated carefully on
  mobile.

## Launch Readiness Findings

| Area | Finding | Severity |
| --- | --- | --- |
| Git/branch | `develop` was ahead of GitHub before this branch was created; it has now been pushed before work started. | Resolved |
| Routes | Current route set is complete for the initial public website. | Low |
| Content | Some copy still says foundation/placeholder and should be replaced with real business wording. | High |
| Images | Several data entries point to placeholder filenames or image paths that may not exist after asset renames. | High |
| Image size | Several real photos are multi-megabyte and should be compressed. | High |
| Design | Current style is dark luxury, but editorial magazine spacing and typography are not fully established. | Medium |
| Buttons/cards | Gold/silver accents exist, but need a cleaner editorial token system. | Medium |
| Mobile | Menu is static-first now; remaining mobile concern is section density. | Medium |
| SEO | Metadata/schema exists, but domain, address, social links, and OG image are still production inputs. | High |
| Accessibility | Good baseline, but needs final manual QA after visual changes. | Medium |

## Risk Classification

### Critical

- None currently identified that blocks local build or routing.

### High

- Production business data is still placeholder-driven.
- Some image paths and large image assets need final cleanup.
- Real launch depends on final domain, OG image, maps link, and contact details.

### Medium

- Visual language is not yet fully editorial luxury.
- Repeated dark card sections can feel visually dense on mobile.
- FAQ/footer/cards need a calmer editorial hierarchy.

### Low

- Some file names have spaces and inconsistent naming.
- Some old report wording references placeholder/foundation state.

## Launch Readiness Score

**74 / 100**

The site has a strong Astro, SEO, static build, routing, and content foundation.
It is not yet launch-polished because real business content, image optimization,
domain configuration, and editorial visual refinement remain.

## Recommended Implementation Plan

1. Phase A: add editorial design tokens and base utility classes in global CSS.
2. Phase B: refine navbar/footer/base layout with editorial spacing and logo
   treatment.
3. Phase C: redesign homepage sections into a stronger magazine-style flow.
4. Phase D: refine cards, package sections, gallery, and reusable content
   blocks.
5. Phase E: mobile, accessibility, SEO, and image performance cleanup.
6. Phase F: final build, preview, route check, launch checklist, and report.

## Files Likely To Change In The Next Step

- `src/styles/global.css`
- `ai/reports/editorial-luxury-phase-a-report.md`

Phase A should not rewrite pages or data. It should only establish reusable
editorial tokens/utilities that later phases can apply safely.

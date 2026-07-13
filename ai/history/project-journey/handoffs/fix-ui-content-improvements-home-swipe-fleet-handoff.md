# Home Mobile Swipe And Fleet Selector Handoff

Date: 2026-07-09
Branch: `codex/fix-ui-content-improvements`

## Summary

Homepage `Concierge details` and `Why us` now use the existing horizontal swipe-row pattern on mobile/tablet, preventing long vertical stacks on small screens. The `Fleet` selector has been replaced on the homepage with a static-first Astro component plus a small inline script so vehicle image and button interactions work without React hydration.

Latest refinement gives the fleet image a consistent 16:9 frame with `object-fit: cover`, uses a compact dot-only picker with a smooth active-pill transition, strengthens the CTA button text color for readability, and makes the mobile fleet content shorter by placing `Capacity` and `Luggage` side-by-side.

## Read Order For Next Session

1. `ai/reports/fix-ui-content-improvements-home-swipe-fleet-report.md`
2. `src/pages/index.astro`
3. `src/components/home/BentoShowcase.astro`
4. `src/components/home/WhyChooseUs.astro`
5. `src/components/home/PremiumCarSelector.astro`
6. `src/styles/global.css`

## Files Changed

- Created `src/components/home/PremiumCarSelector.astro`
- Updated `src/pages/index.astro`
- Updated `src/components/home/BentoShowcase.astro`
- Updated `src/components/home/WhyChooseUs.astro`
- Updated `src/styles/global.css`
- Added this handoff and the matching report.

## Behavior Preserved

- Homepage remains static-first.
- No backend, database, admin dashboard, or dependency was added.
- Fleet data still comes from `src/data/carTypes.ts`.
- WhatsApp number still comes from `src/data/site.ts`.
- Desktop layout keeps normal grid behavior.

## Verification Done

- `npm.cmd run build`
- `git diff --check -- src/pages/index.astro src/components/home/BentoShowcase.astro src/components/home/WhyChooseUs.astro src/components/home/PremiumCarSelector.astro src/styles/global.css`
- Browser QA at 390px, 768px, and 1280px:
  - No horizontal page overflow.
  - Concierge and Why us swipe rows work on mobile.
  - Fleet image loads.
  - Fleet buttons are present.
  - `Next vehicle` updates the active fleet item.
  - Fleet WhatsApp link updates to the active vehicle.
- Follow-up fleet QA at 390px and 1280px:
  - Frame ratio is 16:9.
  - Fleet image uses `object-fit: cover`.
  - `Next vehicle` changes `Luxury Sedan` to `Confortable Alphard`.
  - CTA text color is dark and readable.
- Latest dot-control QA at 390px and 1280px:
  - Dot controls have no visible text.
  - Active dot is a compact 41px pill.
  - Dot group is only 97px wide, so it fits mobile cleanly.
- Compact mobile fleet QA at 360px and 390px:
  - `Capacity` and `Luggage` render in two columns.
  - Spec cards remain readable at 132px wide on 360px.
  - Fleet controls remain in one row.
  - CTA remains 46px tall and comfortable to tap.
  - Next button still updates the active vehicle and WhatsApp link.
  - No horizontal page overflow.

## Remaining QA

- Check swipe feel on a real mobile device.
- Confirm the floating WhatsApp widget does not interfere with card swiping in natural scrolling.
- Existing unrelated `astro check` issue remains in `src/components/packages/PackageDetailContent.astro` line 51.

# Transfer Detail Hero Slideshow Handoff

Date: 2026-07-07
Branch: `codex/fix-ui-content-improvements`

## Summary

Taxi Transfer package detail heroes now render as full-height sections with lighter overlay treatment and multiple background images that crossfade smoothly.

## Files Changed

- `src/components/packages/PackageDetailHero.astro`
  - Imports and uses `HeroBackdrop`.
  - Supports `item.heroImages`.
  - Falls back to `item.image`.
  - Keeps `showSummaryCard` behavior intact.
- `src/data/routes.ts`
  - Adds `heroImages` arrays to all four Taxi Transfer routes.
- `src/styles/global.css`
  - Adds `.package-detail-hero`, `.package-detail-hero__shade`, and `.package-detail-hero__inner` rules.
  - Uses `100svh` for full hero height.
  - Reduces dark overlay intensity so background images are clearer.

## Where To Add Images Later

1. Place files in `public/images/cars/`.
2. Open `src/data/routes.ts`.
3. Add or replace paths in the related package's `heroImages` array.

## Verification Done

- `npm run build`
- Browser check on `/packages/pick-up-drop/package-transfer-avanza-innova`:
  - Desktop 1280x900: hero filled the viewport.
  - Mobile 390x844: hero filled the viewport.
  - 3 slideshow layers were rendered.
  - No right-side summary box rendered for Taxi Transfer detail.
  - No horizontal overflow.

## Remaining QA

- Check all four Taxi Transfer detail pages at desktop, tablet, and mobile widths.
- Confirm final photo choices for each package.
- Replace temporary/shared image choices in `src/data/routes.ts` if more specific vehicle photos are added.

# Transfer Detail Hero Cleanup Handoff

Date: 2026-07-07
Branch: `codex/fix-ui-content-improvements`

## Summary

Taxi Transfer package detail pages no longer show the summary box inside the hero. This keeps the hero cleaner, exposes more of the background image, and reduces vertical density on mobile.

## Files Changed

- `src/components/packages/PackageDetailHero.astro`
  - Added `showSummaryCard?: boolean`.
  - Keeps summary box visible by default for existing package detail pages.
  - Uses a single-column hero layout when the summary box is disabled.
- `src/pages/packages/pick-up-drop/[slug].astro`
  - Passes `showSummaryCard={false}` for Taxi Transfer detail pages.

## Behavior Confirmed

- Taxi Transfer detail pages: summary box hidden.
- Island Tour detail pages: summary box still visible.
- Pick Up Drop index page: route list cards still visible and unaffected.

## Verification Done

- `npm run build`
- Browser check:
  - Transfer detail hero summary box count was `0`.
  - Island Tour detail hero summary box count was `1`.
  - Pick Up Drop index route card count was `4`.
  - No horizontal overflow on the checked transfer detail page.

## Remaining QA

- Check all 4 Taxi Transfer detail pages at mobile widths.
- Confirm the hero background crop is visually strong after the summary box removal.

# Transfer Package Detail Pricing Handoff

Date: 2026-07-07
Branch: `codex/fix-ui-content-improvements`

## Summary

The 4 Pick Up Drop transfer detail pages now have dedicated package detail cards with requested pricing/benefit content. Itinerary content was moved into its own section below Package Detail for a cleaner page flow.

## Files Changed

- `src/data/routes.ts`
  - Added `packageDetails` arrays to each transfer package.
  - Added requested pricing and benefit details for Avanza/Innova, Hiace, Alphard, and Luxury Sedan.
- `src/components/packages/PackageDetailContent.astro`
  - Renders `packageDetails` as cards when available.
  - Falls back to existing highlights for other package detail pages.
  - Splits Package Detail and Itinerary into separate sections.
- `src/styles/global.css`
  - Adds `.package-detail-card-row` and `.package-detail-card`.
  - Desktop/tablet: up to 3 cards per row.
  - Mobile: 1 full-width card per horizontal swipe frame.

## Detail Page Behavior

- Transfer detail pages no longer render the Pick Up Drop route list cards inside the detail page.
- The Pick Up Drop index page route cards remain untouched and still use `RouteList`.
- Mobile package detail swipe uses `grid-auto-columns: 100%`, so one card fills the visible frame.

## Verification Done

- `npm run build`
- Browser check on `/packages/pick-up-drop/package-transfer-avanza-innova`:
  - 1280px desktop layout showed 3 detail cards in one row.
  - 390px mobile layout showed one card per swipe frame.
  - No body horizontal overflow.
  - `.transfer-route-card` count was `0` on the detail page.

## Remaining QA

- Review all four transfer detail pages manually for final content feel.
- Check 390px, 768px, and 1280px viewports.
- Confirm the WhatsApp floating button does not visually cover key package detail text while scrolling.

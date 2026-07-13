# Transfer Package Detail Pricing Report

Date: 2026-07-07
Branch: `codex/fix-ui-content-improvements`

## Scope

Updated the 4 Pick Up Drop transfer package detail pages with dedicated package detail cards, clearer pricing/benefit descriptions, and a separate itinerary section.

## Files Modified

- `src/data/routes.ts`
- `src/components/packages/PackageDetailContent.astro`
- `src/styles/global.css`

## Package Detail Updates

- `package-transfer-avanza-innova`
  - Drop or Pickup: `IDR 350.000`
  - Half Day (5 hours): `IDR 500.000`
  - Full Day (8 hours): `IDR 800.000`
- `package-transfer-hiace`
  - Drop or Pickup: `IDR 700.000`
  - Half Day (5 hours): `IDR 1.000.000`
  - Full Day (8 hours): `IDR 1.200.000`
- `package-transfer-alphard`
  - Island Day Tours: `Full / Half Day`
  - Customizable Itineraries: `Private Plan`
  - Dedicated Local Guide Chauffeur: `Concierge Ride`
- `package-transfer-luxury-sedan`
  - Drop or Pickup: `IDR 1.000.000`

## Implementation Notes

- Added `packageDetails` data to each transfer route in `src/data/routes.ts`.
- `PackageDetailContent.astro` now prioritizes `packageDetails` and falls back to `highlights` for existing tour detail pages.
- Package Detail and Itinerary are now separate sections.
- Desktop/tablet package detail cards use a responsive grid with up to 3 cards per row.
- Mobile package detail cards use horizontal swipe with one card matching the visible frame width.
- Transfer route list cards from the Pick Up Drop index are not rendered inside transfer detail pages, keeping the detail page cleaner.

## Verification

- `npm run build` passed.
- Browser check on `package-transfer-avanza-innova`:
  - Desktop 1280px: 3 package detail cards in one row.
  - Mobile 390px: 1 package detail card per swipe frame.
  - No horizontal body overflow.
  - Confirmed `.transfer-route-card` count is `0` on the transfer detail page.

## Known Issues

- Browser visual check was focused on the Avanza/Innova detail page as the representative 3-card layout.
- Luxury Sedan has only one package detail item by request, so it renders as one card.

## Next Step

Open all four transfer detail pages in a real mobile viewport to confirm the final copy length and swipe feel.

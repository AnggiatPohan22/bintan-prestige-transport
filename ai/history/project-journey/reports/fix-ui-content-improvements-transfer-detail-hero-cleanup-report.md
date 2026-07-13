# Transfer Detail Hero Cleanup Report

Date: 2026-07-07
Branch: `codex/fix-ui-content-improvements`

## Scope

Removed the hero summary box from Taxi Transfer package detail pages only, so the background image is clearer and mobile hero height feels less crowded.

## Files Modified

- `src/components/packages/PackageDetailHero.astro`
- `src/pages/packages/pick-up-drop/[slug].astro`

## Implementation Notes

- Added `showSummaryCard?: boolean` prop to `PackageDetailHero`.
- Default value is `true`, so existing package detail pages keep the summary box unless explicitly disabled.
- Set `showSummaryCard={false}` only in `src/pages/packages/pick-up-drop/[slug].astro`.
- The Pick Up Drop index route list remains untouched and still uses its own route cards.
- The detail hero uses a single-column layout when the summary card is hidden, allowing the background image to read more clearly.

## Verification

- `npm run build` passed.
- Browser check:
  - `/packages/pick-up-drop/package-transfer-luxury-sedan` hero summary box count: `0`.
  - `/packages/island-tour/mangrove-tour` hero summary box count: `1`.
  - `/packages/pick-up-drop` route card count: `4`.
  - No horizontal overflow on the checked transfer detail page.

## Known Issues

- Visual QA was checked through DOM/browser state, not a full device screenshot pass.

## Next Step

Review the 4 Taxi Transfer detail pages on a real mobile device to confirm the hero feels shorter and cleaner with the summary box removed.

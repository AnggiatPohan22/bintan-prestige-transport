# Pick Up Drop Route Cards Handoff

Date: 2026-07-06
Branch: `codex/fix-ui-content-improvements`

## Summary

The Pick Up Drop page route cards were adjusted so `Start From` is no longer inside the price pill, and `View detail` remains on the same action row. The Fleet Fit section now presents common transport route packages instead of generic vehicle categories.

Follow-up update on 2026-07-07: the card layout was refined again to make it less dense across desktop, tablet, and mobile. Fleet Fit image overlays were reduced so the car photos stay clearer.

## Files Changed

- `src/components/packages/RouteList.astro`
  - Parses `Start From : IDR ...` into a separate label and price.
  - Normalizes `Depending Requests` to `By Request`.
  - Keeps price and `View detail` in one responsive row.
  - Now uses semantic `.transfer-route-card` classes for cleaner, more consistent layout styling.
- `src/components/packages/TransferFleet.astro`
  - Renders route package cards from `transportRoutes`.
  - Uses existing editorial card styling and responsive grid behavior.
  - Now uses `.fleet-route-card` classes for clearer image presentation and safer hover scaling.
- `src/pages/packages/pick-up-drop.astro`
  - Updates the Fleet Fit section title and description.
- `src/data/transportRoutes.ts`
  - New data source for the 4 common route packages.
- `src/styles/global.css`
  - Adds the dedicated Taxi Transfer and Fleet Fit card styling.
  - Uses neutral dark image placeholders for Fleet Fit instead of the green visual placeholder.
  - Adds image overscan on Fleet Fit hover to avoid white/empty frame flash.

## Current Route Packages

- Harbour to Hotel Pickup, Innova.
- Airport Pickup, Innova or Avanza.
- Half Day Tour, Hiace.
- Full Day Package, Innova.

## Verification Done

- `npm run build`
- Browser check at 390px, 768px, and 1280px.
- No horizontal overflow found in checked viewports.
- Taxi Transfer action row stayed aligned in checked viewports.
- Fleet Fit image hover was checked after the overlay/frame update.

## Remaining QA

- Check `/packages/pick-up-drop` at 360px, 390px, 768px, 1280px, and 1440px.
- Confirm the price pill and `View detail` button stay aligned in one row.
- Confirm Fleet Fit card image crops look good with the selected vehicle images.
- Confirm fixed WhatsApp placement does not feel intrusive during natural scrolling on real devices.

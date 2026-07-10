# Pick Up Drop Route Cards Report

Date: 2026-07-06
Branch: `codex/fix-ui-content-improvements`

## Scope

Updated the `/packages/pick-up-drop` route card layout and Fleet Fit section so the page feels cleaner across desktop, tablet, and mobile.

Follow-up update on 2026-07-07: refined the Taxi Transfer cards again because the previous version still felt dense, and reduced the Fleet Fit image overlay so vehicle photos render clearer.

## Files Modified

- `src/components/packages/RouteList.astro`
- `src/components/packages/TransferFleet.astro`
- `src/pages/packages/pick-up-drop.astro`
- `src/styles/global.css`

## Files Created

- `src/data/transportRoutes.ts`

## Implementation Notes

- Taxi Transfer cards now separate the `Start From` label from the price pill.
- Price pill and `View detail` button use matching minimum widths for better mobile symmetry.
- The card action area stays in one horizontal row across mobile, tablet, and desktop.
- `Depending Requests` is displayed as `By Request` inside a consistent price pill.
- Taxi Transfer card styling now uses dedicated `.transfer-route-card` classes to reduce dense Tailwind markup and keep spacing consistent.
- Taxi Transfer cards have a calmer height, smaller title scale, softer image layer, and a more stable action row.
- Fleet Fit now shows 4 common transport route packages:
  - Harbour to Hotel Pickup with Innova.
  - Airport Pickup with Innova or Avanza.
  - Half Day Tour with Hiace.
  - Full Day Package with Innova.
- New Fleet Fit package content lives in `src/data/transportRoutes.ts`, while `TransferFleet.astro` only renders the cards.
- The Pick Up Drop section heading was updated to match the new route package content.
- Fleet Fit cards now use dedicated `.fleet-route-card` classes.
- Fleet Fit image frames use a neutral dark background instead of the global green `visual-placeholder`.
- Fleet Fit overlay was reduced to a light shade so the vehicle images stay clearer.
- Fleet images overscan the frame by a few pixels during hover to avoid white/empty frame flash while scaling.

## Verification

- `npm run build` passed.
- Browser responsive check performed at 390px, 768px, and 1280px.
- Confirmed no horizontal overflow in the checked viewports.
- Confirmed Taxi Transfer price and `View detail` stay in one row in checked viewports.
- Confirmed Fleet Fit hover no longer exposes a frame gap during image scale.

## Known Issues

- Floating WhatsApp can still visually pass over content while scrolling because it is fixed-position. This was observed during visual QA but is outside the route card component change.
- The action row is designed for 360px and wider mobile widths, matching the project responsive rule.

## Next Step

Review `/packages/pick-up-drop` on a real mobile device to confirm the final luxury spacing feels right with native scrolling and the floating WhatsApp button.

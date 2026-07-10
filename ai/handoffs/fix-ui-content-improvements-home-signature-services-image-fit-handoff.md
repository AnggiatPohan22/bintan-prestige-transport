# Handoff: Signature Services Image Fit

## Current State
- Home service cards now use a slightly larger image frame and stronger zoom so the `Signature services` section feels more premium and proportionate.
- The change is scoped to Home service cards only.

## Modified File
- `src/styles/global.css`

## Verification
- `npm.cmd run build` completed successfully.

## Notes For Next Session
- Check the Home `Signature services` cards in a live browser, especially the taxi asset, and decide whether the crop should be nudged by asset type.
- Keep the route/package card layouts untouched unless the live view shows a shared spacing issue.

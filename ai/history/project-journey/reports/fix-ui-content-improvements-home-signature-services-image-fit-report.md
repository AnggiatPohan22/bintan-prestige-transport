# Signature Services Image Fit Report

## Summary
- Refined the Home `Signature services` card imagery so the hero images feel larger, more balanced, and less underfilled inside the card frame.
- Kept the change scoped to home service cards only, without altering package logic, names, or CTA behavior.

## Files Modified
- `src/styles/global.css`

## What Changed
- Increased the Home service image frame height slightly for a stronger visual presence.
- Increased the base image zoom for Home service cards so the image reads more premium inside the frame.
- Increased the taxi-specific Home service zoom a bit further, since that asset is the most likely to feel small.
- Kept route card styling unchanged so the existing package/route layouts stay stable.

## Verification
- `npm.cmd run build`

## Known Issues
- No runtime browser screenshot verification was performed in this pass.

## Next Step
- If the Home `Signature services` still feels undersized in a live browser, fine-tune the Home service frame ratio or add a per-asset image crop override.

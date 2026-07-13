# Fix UI Content Improvements WhatsApp Floating Report

Date: 2026-07-05
Branch: `codex/fix-ui-content-improvements`

## Summary

Adjusted the floating WhatsApp widget position and added smoother hover plus open/close transitions.

## Files Created

- `ai/reports/fix-ui-content-improvements-whatsapp-floating-report.md`
- `ai/handoffs/fix-ui-content-improvements-whatsapp-floating-handoff.md`

## Files Modified

- `src/components/common/FloatingWhatsApp.astro`
- `src/styles/global.css`

## Implementation Notes

- Moved the floating WhatsApp trigger slightly higher with responsive bottom spacing.
- Added a dedicated `whatsapp-assistant-toggle` class for hover motion and shine treatment.
- Replaced instant panel show/hide behavior with state-based open/close transitions.
- Raised the mobile widget stacking layer so the button remains clickable above the homepage booking module.
- Kept the WhatsApp message/link behavior unchanged.

## Verification

- `cmd /c npm run build` passed.
- Scoped `git diff --check` passed for the WhatsApp floating files.
- Browser preview verification passed at:
  - Mobile: 390x844
  - Desktop: 1280x800
- Verified:
  - Floating trigger sits higher from the viewport bottom.
  - Trigger exposes transform/box-shadow transitions.
  - Mobile trigger remains clickable above the homepage booking module.
  - Click opens the panel with `data-state="open"`, `aria-expanded="true"`, opacity `1`, and pointer events enabled.
  - Close transitions the panel back to `data-state="closed"`, `aria-expanded="false"`, and `hidden`.

## Known Issues

- Existing unstaged changes outside this WhatsApp floating scope were not modified.

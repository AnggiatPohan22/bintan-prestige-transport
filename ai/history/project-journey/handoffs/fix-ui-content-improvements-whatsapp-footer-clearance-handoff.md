# WhatsApp Footer Clearance Handoff

Date: 2026-07-05
Branch: `codex/fix-ui-content-improvements`

## Summary

The floating WhatsApp widget has been moved upward so the footer credit text remains visible when the user scrolls to the bottom of the site.

## Files Changed

- `src/components/common/FloatingWhatsApp.astro`
- `ai/reports/fix-ui-content-improvements-whatsapp-footer-clearance-report.md`
- `ai/handoffs/fix-ui-content-improvements-whatsapp-footer-clearance-handoff.md`

## Details

- New floating position: `bottom-[calc(5.25rem+env(safe-area-inset-bottom))]`
- Desktop/tablet override: `sm:bottom-[5.75rem]`
- Existing open/close transitions and WhatsApp message behavior were preserved.

## Verification Done

- `npm run build`
- `git diff --check -- src/components/common/FloatingWhatsApp.astro`

## Remaining QA

- Check footer bottom state on 390px, 768px, 1280px, and 1440px widths.
- Confirm floating WhatsApp does not cover the Giattech credit.
- Confirm opened WhatsApp panel still fits within the viewport on mobile.

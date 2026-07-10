# Blog Mobile Swipe Handoff

Date: 2026-07-06
Branch: `codex/fix-ui-content-improvements`

## Summary

The `/blog` `Latest guides` section now uses mobile-only horizontal swipe. On mobile, users see one article card at a time and swipe to the next card. Desktop and tablet still use the paginated grid layout.

## Files Changed

- `src/styles/global.css`
- `ai/reports/fix-ui-content-improvements-blog-pagination-report.md`
- `ai/handoffs/fix-ui-content-improvements-blog-pagination-handoff.md`

## Current Behavior

- Mobile:
  - One card appears in the swipe frame.
  - Cards move horizontally.
  - Scroll snap keeps each card aligned cleanly.
- Tablet:
  - 2 columns x 3 rows.
  - Maximum 6 visible cards per page.
- Desktop:
  - 3 columns x 2 rows.
  - Maximum 6 visible cards per page.
- Pagination remains client-side and does not refresh the full page.

## Verification Done

- `npm run build`
- `git diff --check -- src/styles/global.css`

## Remaining QA

- Check `/blog` at 375px and 390px to confirm swipe behavior feels natural.
- Check `/blog` at 768px, 1280px, and 1440px to confirm the grid/pagination layout remains unchanged.
- Add or duplicate a seventh article in local QA to confirm pagination appears while mobile remains swipe-based.

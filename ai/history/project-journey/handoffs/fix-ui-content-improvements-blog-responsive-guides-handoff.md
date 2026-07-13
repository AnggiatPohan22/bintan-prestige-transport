# Blog Responsive Guides Handoff

Date: 2026-07-06
Branch: `codex/fix-ui-content-improvements`

Status: Superseded by `ai/handoffs/fix-ui-content-improvements-blog-pagination-handoff.md`.

## Summary

The `/blog` listing has been refined so `Latest guides` does not create a long vertical stack on mobile and tablet. The article cards now swipe horizontally until large desktop, where they return to a three-column grid.

Note: this swipe approach was replaced by the later pagination implementation. Use `fix-ui-content-improvements-blog-pagination-handoff.md` as the current handoff.

## Files Changed

- `src/pages/blog.astro`
- `src/components/blog/BlogCard.astro`
- `src/styles/global.css`

## Details

- `Latest guides` wrapper now uses `blog-latest-row mt-8 xl:grid xl:grid-cols-3`.
- Non-featured blog cards receive `blog-latest-card` for scroll snap behavior.
- `Browse topics` is now a compact `blog-topic-panel`.
- Category, location, and tag chips sit in horizontally scrollable chip rows.
- The existing filter script in `src/pages/blog.astro` was preserved.

## Verification Done

- `npm run build`
- `git diff --check -- src/pages/blog.astro src/components/blog/BlogCard.astro src/styles/global.css`

## Remaining QA

- Visual check `/blog` at mobile and tablet widths to confirm swipe feels natural.
- Confirm the compact topic chips remain easy to tap.
- Confirm large desktop still uses a clean grid and does not look sparse.

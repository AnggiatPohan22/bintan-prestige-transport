# Blog Card Pagination Handoff

Date: 2026-07-06
Branch: `codex/fix-ui-content-improvements`

## Summary

The `/blog` article card list now supports client-side pagination with a maximum of 6 cards per page. It also keeps the requested responsive layout:

- Desktop: 3 columns x 2 rows.
- Tablet: 2 columns x 3 rows.
- Mobile: 1 visible card at a time in a horizontal swipe row.

Note: mobile behavior was adjusted after the first pagination pass, so the card list no longer stacks 6 articles downward on small screens.

## Files Changed

- `src/pages/blog.astro`
- `src/components/blog/BlogCard.astro`
- `src/styles/global.css`

## Behavior

- The article list uses `data-page-size="6"`.
- Pagination is rendered in `src/pages/blog.astro` with `data-blog-pagination`.
- The script keeps category/location/tag filters and pagination in sync.
- Changing a filter resets to page 1.
- Pagination buttons are hidden when there are 6 or fewer matching cards.
- The current seeded blog has exactly 6 articles, so pagination is ready but hidden.

## Implementation Notes

- No new package was added.
- No route, data source, backend, database, or CMS behavior was changed.
- This pattern can be reused for other card sections later, but this step only applies it to the blog article cards to avoid touching unrelated page sections.

## Verification Done

- `npm run build`
- `git diff --check -- src/pages/blog.astro src/components/blog/BlogCard.astro src/styles/global.css`

## Remaining QA

- Test `/blog` at 390px, 768px, 1024px, and 1440px.
- Temporarily add a 7th article or duplicate an article in local QA to confirm pagination controls appear.
- Confirm filter + pagination works together without page refresh.

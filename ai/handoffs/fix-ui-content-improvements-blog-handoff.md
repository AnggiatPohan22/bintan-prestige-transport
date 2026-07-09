# Blog SEO Page Handoff

Date: 2026-07-05
Branch: `codex/fix-ui-content-improvements`

## Summary

A static Astro blog has been added for SEO articles. The system is data-driven, so new articles should be added in one place and then Astro will generate the listing, detail pages, sitemap entries, schema, gallery, favorite list, and related posts.

The blog listing also includes lightweight client-side filtering for category, location, and tag chips. This is plain browser JavaScript inside `src/pages/blog.astro`, not React and not a new dependency.

## Read Order For Next Session

1. `ai/reports/fix-ui-content-improvements-blog-report.md`
2. `src/data/blog.ts`
3. `src/pages/blog.astro`
4. `src/pages/blog/[slug].astro`
5. `src/components/blog/BlogCard.astro`
6. `src/components/blog/ArticleGallery.astro`
7. `src/data/seo.ts`
8. `src/data/navigation.ts`

## Where To Add New Articles

Add new article objects to the `blogArticles` array in:

`src/data/blog.ts`

Keep each article complete and consistent. Required fields:

- `slug`: lowercase URL slug, no spaces.
- `title`: article title.
- `excerpt`: short card/hero summary.
- `description`: SEO meta description.
- `category`: currently `Taxi Guide`, `Travel Guide`, or `Destination`.
- `location`: location label shown on listing/detail pages.
- `tags`: array of topical tags.
- `publishedAt`: date string, for example `2026-07-05`.
- `readTime`: short label, for example `4 min read`.
- `heroImage`: public image path, for example `/images/tours/mangrove.jpg`.
- `heroAlt`: descriptive alt text.
- `gallery`: 3 or more gallery image objects.
- `intro`: lead paragraph.
- `sections`: article body sections with `title` and `body` paragraph arrays.
- `takeaway`: short bullet-style summary strings.

Optional fields:

- `favorite: true`: shows the article as a favorite/editor pick.
- `popularRank: number`: controls ordering in Favorite reads.

## Image Guidance

- Store future blog images under `public/images`, ideally `public/images/blog` if a dedicated folder is added later.
- Use stable public paths in data, starting with `/images/...`.
- Keep hero images landscape where possible.
- Use at least 3 gallery images per article.
- Write meaningful `alt` text for SEO and accessibility.

## Content Guidance

- Keep articles evergreen and avoid hardcoded prices, live schedules, or availability claims.
- Use clear sections: planning context, route/timing advice, comfort notes, and booking CTA angle.
- Keep each article connected to a business action: airport pickup, harbour pickup, hotel transfer, private tour, mangrove, snorkeling, or destination route.
- Use tags consistently so related posts stay useful.
- Reuse category/location/tag naming consistently so the blog listing filters remain clean.

## Current Articles

- `/blog/bintan-airport-pickup-private-transfer-guide`
- `/blog/bintan-harbour-pickup-ferry-transfer-guide`
- `/blog/hotel-to-hotel-private-taxi-bintan`
- `/blog/bintan-mangrove-tour-private-trip-guide`
- `/blog/bintan-snorkeling-trip-guide-private-tour`
- `/blog/blue-lake-desert-bintan-photo-stop-guide`

## Verification Done

- `npm run build`
- `git diff --check` for the blog-related files
- Static output spot-check for `/blog`, sitemap, and representative article pages

## Remaining QA

- Visual check `/blog` and article detail pages at 390px, 768px, 1280px, and 1440px.
- Confirm desktop nav still feels comfortable with the new Blog menu item.
- Confirm image crops are acceptable for every article hero and gallery.
- Confirm WhatsApp floating button does not cover footer or article CTAs.

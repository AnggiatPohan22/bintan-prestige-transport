# Editorial Luxury Phase C Handoff

## Branch

`codex/editorial-luxury-phase-a`

## Latest Focus

Homepage polish, package detail pages, availability interaction, gallery
lightbox, and WhatsApp concierge entry.

## Implemented

- Hero availability form now uses clickable filters for pick-up, drop-off,
  travel date, and service type.
- Pick-up, drop-off, and service type use custom luxury dropdown menus instead
  of native select dropdowns.
- The full card area triggers each dropdown/date picker, not only the text.
- Date selection now updates the displayed date before generating the WhatsApp
  message.
- Availability panel now sits as a floating layer between Hero and the next
  section, not inside the clipped hero content area.
- Filter menus and the date panel open downward; mobile uses static dropdown
  expansion to avoid viewport clipping.
- Lightweight load animation is applied to the floating form and its controls.
- Taxi Transfer routes and Island Tour packages have static detail pages.
- Detail pages include hero image, highlights, itinerary, included support,
  booking notes, and a custom WhatsApp booking form.
- Sitemap data includes the new detail page URLs through `src/data/seo.ts`.
- Homepage Signature Service and Featured Routes are swipeable on tablet/mobile.
- Gallery is now a pure-photo responsive client mosaic with click lightbox and
  blurred backdrop.
- FAQ preview uses click-to-open native accordion behavior.
- Footer now focuses on logo, tagline, description, navigation, contact, and a
  trusted website frame.
- Cards and secondary buttons now use emerald-black, champagne, and antique-gold
  styling instead of grey/slate surfaces.
- `Check Availability` opens WhatsApp with the selected values included in the
  message.
- Floating WhatsApp button now opens a lightweight concierge pre-chat panel
  before sending the visitor to WhatsApp.
- The pre-chat panel supports quick intent buttons and editable message text.
- Brand logo assets were added under `public/images/brand`.
- Site contact defaults were updated in `src/data/site.ts`.

## Verification Snapshot

- `npm.cmd run astro check`: pass, 0 errors, 0 warnings, 0 hints.
- `npm.cmd run build`: pass, 15 pages built.
- `git diff --check`: pass.
- Preview smoke test passed for homepage, selected package detail pages, and
  sitemap.

## Next Session Read Order

1. `ai/reports/editorial-luxury-phase-recap.md`
2. `ai/reports/editorial-luxury-phase-c-report.md`
3. `ai/handoffs/editorial-luxury-phase-c-handoff.md`
4. `src/pages/index.astro`
5. `src/data/routes.ts`
6. `src/data/tours.ts`

## Guardrails

- Static-first frontend only.
- No backend, database, dashboard, webhook, or AI integration was added.
- No new dependency.
- WhatsApp AI bot is documented as a future backend/API phase.

## Next Notes

- Real WhatsApp AI automation needs WhatsApp Business Platform or an approved
  provider, a webhook backend, an AI service, and consent/privacy handling.
- Visual QA should be repeated on mobile after the next shared card phase.

# Production Launch Checklist

## Required Environment Values

- `PUBLIC_SITE_URL`: final production domain, for example `https://your-domain.com`.
- `PUBLIC_WHATSAPP_NUMBER`: WhatsApp number in international format without `+`.
- `PUBLIC_CONTACT_EMAIL`: business email shown on the public site.
- `PUBLIC_CONTACT_PHONE`: public phone number shown on the public site.
- `PUBLIC_BUSINESS_ADDRESS`: public service address or service area.
- `PUBLIC_GOOGLE_MAPS_URL`: Google Maps business/profile link when available.
- `PUBLIC_SOCIAL_LINKS`: comma-separated public profile URLs when available.

## Required Media

- Replace `/images/brand/og-placeholder.jpg` with a real Open Graph image.
- Add real hero media under `/public/images/hero` or `/public/videos`.
- Add real fleet photos under `/public/images/cars`.
- Add real tour and destination photos under `/public/images/tours`.
- Add trust/gallery photos under `/public/images/gallery`.

## Deployment Steps

1. Copy `.env.example` to `.env`.
2. Fill every public business value with production-ready data.
3. Run `npm.cmd run astro check`.
4. Run `npm.cmd run build`.
5. Preview with `npm.cmd run preview`.
6. Check `/`, `/about/`, `/contact/`, `/packages/pick-up-drop/`, `/packages/island-tour/`, `/sitemap.xml`, and `/robots.txt`.
7. Deploy to the chosen static host.
8. Submit `/sitemap.xml` in Google Search Console after DNS is live.

## Hosting Notes

- Vercel can use `vercel.json`.
- Netlify and Cloudflare Pages can use `public/_headers`.
- Build command: `npm run build`.
- Output directory: `dist`.

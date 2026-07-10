# Mapping File Project Travel Agent

Panduan ini adalah peta kerja untuk project Astro Travel Agent. Gunakan file ini saat ingin mencari sumber halaman, section, komponen, data, gambar, SEO, dan blok CSS yang terkait.

## Ringkasan Struktur Project

### `src/pages`
Folder induk semua route publik Astro. Setiap file di sini menjadi halaman atau endpoint.

- `src/pages/index.astro`: Home.
- `src/pages/about.astro`: About.
- `src/pages/contact.astro`: Contact.
- `src/pages/blog.astro`: Blog listing.
- `src/pages/blog/[slug].astro`: Blog detail dinamis dari `src/data/blog.ts`.
- `src/pages/packages/pick-up-drop.astro`: Halaman overview taxi transfer.
- `src/pages/packages/pick-up-drop/[slug].astro`: Detail paket taxi transfer dinamis dari `src/data/routes.ts`.
- `src/pages/packages/activities-packages.astro`: Halaman canonical overview Activities Packages.
- `src/pages/packages/activities-packages/[slug].astro`: Detail paket Activities Packages dinamis dari `src/data/tours.ts`.
- `src/pages/packages/island-tour.astro`: Fallback route lama untuk overview Activities Packages.
- `src/pages/packages/island-tour/[slug].astro`: Fallback route lama untuk detail Activities Packages.
- `src/pages/robots.txt.ts`: Endpoint robots.txt.
- `src/pages/sitemap.xml.ts`: Endpoint sitemap.

### `src/layouts`
Folder layout global. Saat ini source of truth layout utama adalah:

- `src/layouts/BaseLayout.astro`: Wrapper semua halaman publik. File ini import `src/styles/global.css`, memasang `SEO`, `JsonLd`, `Navbar`, `FloatingWhatsApp`, `Footer`, dan slot isi halaman.

### `src/components`
Folder komponen reusable. Dipakai untuk memecah halaman menjadi section kecil.

- `components/common`: Komponen lintas halaman seperti navbar, footer, SEO, breadcrumb, section header, gallery, CTA, dan swipe controls.
- `components/home`: Section khusus Home seperti hero, signature services, fleet selector, featured routes, concierge detail, why us, FAQ preview.
- `components/packages`: Section halaman package, detail package, booking form, fleet, FAQ, route list, tour grid.
- `components/about`: Section khusus About.
- `components/contact`: Section khusus Contact.
- `components/blog`: Blog card dan article gallery.
- `components/animations`: React animation islands ringan.

### `src/data`
Folder data lokal terstruktur. Ini adalah tempat utama untuk mengganti konten, gambar, harga, daftar paket, blog, SEO, dan schema sebelum nanti tersambung ke CMS.

### `src/styles`
Folder styling global.

- `src/styles/global.css`: Source of truth CSS utama project. Banyak class shared, responsive, micro-interaction, card system, booking form, home carousel, blog filter, navbar/mobile menu, dan layout premium dark theme ada di sini.

## Layout Global

### `src/layouts/BaseLayout.astro`

Dipakai oleh hampir semua halaman. Fungsi:

- Import `src/styles/global.css`.
- Render SEO melalui `components/common/SEO.astro`.
- Render JSON-LD schema melalui `components/common/JsonLd.astro`.
- Render `Navbar` di atas semua halaman.
- Render `<slot />` sebagai isi halaman.
- Render `FloatingWhatsApp`.
- Render `Footer`.

Jika navbar, footer, floating WhatsApp, atau SEO muncul di semua halaman, mulai cek dari `BaseLayout.astro`.

## Mapping Per Halaman

### Home

File induk:

- `src/pages/index.astro`

Layout:

- `src/layouts/BaseLayout.astro`

Section dan sumber komponennya:

1. Hero
   - Komponen: `src/components/home/Hero.astro`
   - Background media: `src/data/media.ts` lewat `heroSlides.home`
   - Booking mini form: `src/components/home/MinimalBookingForm.astro`
   - Site/WhatsApp config: `src/data/site.ts`

2. Luxury Experience
   - Komponen: `src/components/home/LuxuryExperience.astro`

3. Signature services
   - Wrapper section: `src/pages/index.astro`
   - Header: `src/components/common/SectionHeader.astro`
   - Cards: `src/components/home/ServiceCards.astro`
   - Data cards: `src/data/packages.ts`
   - Package detail data yang ikut dipakai: `src/data/routes.ts` dan `src/data/tours.ts`
   - Swipe/dot pagination: `src/components/common/SwipeControls.astro`
   - CSS utama: `.package-offer-card`, `.package-offer-card--home-service`, `.service-image-frame`, `.home-package-dots`

4. Concierge details
   - Komponen: `src/components/home/BentoShowcase.astro`
   - CSS terkait: home scroll/card responsive rules dan editorial card utilities.

5. Featured routes
   - Komponen: `src/components/home/RouteHighlights.astro`
   - Data transfer: `src/data/routes.ts`
   - Data tour: `src/data/tours.ts`
   - Swipe/dot pagination: `src/components/common/SwipeControls.astro`
   - CSS utama: `.package-offer-card--home-route`, `.route-image-frame`, `.home-package-dots`

6. Fleet - Choose the tone of the ride
   - Komponen aktif: `src/components/home/PremiumCarSelector.astro`
   - Data fleet: `src/data/carTypes.ts`
   - WhatsApp config: `src/data/site.ts`
   - CSS utama: `.fleet-selector`, `.fleet-car-frame`, `.fleet-dot-group`, `.fleet-dot-button`, `.fleet-whatsapp-button`
   - Catatan: ada juga `src/components/home/PremiumCarSelector.tsx` sebagai versi React lama/alternatif. Home saat ini import `.astro`.

7. How it works
   - Komponen: `src/components/home/ConciergeFlow.astro`

8. Gallery
   - Komponen: `src/components/common/GalleryGrid.astro`
   - Data: `src/data/gallery.ts`
   - CSS utama: `.client-gallery-*`

9. Why us
   - Komponen: `src/components/home/WhyChooseUs.astro`
   - Card reusable: `src/components/common/FeatureCard.astro`

10. FAQ
    - Komponen: `src/components/home/FAQPreview.astro`
    - Data: `src/data/faqs.ts`

11. Final WhatsApp CTA
    - Komponen: `src/components/common/WhatsAppCTA.astro`
    - Site/WhatsApp config: `src/data/site.ts`

Schema:

- `src/data/schema.ts` lewat `homeSchema`.

### About

File induk:

- `src/pages/about.astro`

Section dan sumber komponennya:

- Hero: `src/components/about/AboutHero.astro`
- Breadcrumb: `src/components/common/Breadcrumb.astro`
- Story/content utama: `src/components/about/AboutStory.astro`
- Trust signals: `src/components/about/TrustSignals.astro`
- CTA: `src/components/common/WhatsAppCTA.astro`

Data dan media:

- Hero image: `src/data/media.ts` lewat `heroSlides.about`
- Schema: `src/data/schema.ts` lewat `organizationSchema` dan `breadcrumbSchema`

### Contact

File induk:

- `src/pages/contact.astro`

Section dan sumber komponennya:

- Hero: `src/components/contact/ContactHero.astro`
- Breadcrumb: `src/components/common/Breadcrumb.astro`
- Contact options: `src/components/contact/ContactCards.astro`
- WhatsApp planner: `src/components/contact/WhatsAppPlanner.astro`
- CTA: `src/components/common/WhatsAppCTA.astro`

Data:

- Kontak, phone, email, address, WhatsApp: `src/data/site.ts`
- Hero image: `src/data/media.ts` lewat `heroSlides.contact`
- Schema: `src/data/schema.ts`

### Blog Listing

File induk:

- `src/pages/blog.astro`

Section dan sumber:

- Hero blog editorial: ditulis langsung di `src/pages/blog.astro`
- Featured article card: `src/components/blog/BlogCard.astro`
- Filter panel dan pagination: script inline di `src/pages/blog.astro`
- Latest guides: `src/components/blog/BlogCard.astro`
- CTA: `src/components/common/WhatsAppCTA.astro`

Data:

- Semua artikel: `src/data/blog.ts`
- Category/location/tag otomatis: `blogCategories`, `blogLocations`, `blogTags`
- Featured/favorite: `favoriteBlogArticles`
- SEO URL helper: `src/data/seo.ts`
- Schema: `src/data/schema.ts`

CSS utama:

- `.blog-filter-chip`
- `.blog-topic-panel`
- `.blog-topic-row`
- `.blog-latest-row`
- `.blog-pagination`

### Blog Detail

File induk:

- `src/pages/blog/[slug].astro`

Routing:

- `getStaticPaths()` membaca `blogArticles` dari `src/data/blog.ts`.
- Setiap object artikel dengan `slug` akan menjadi `/blog/{slug}`.

Section dan sumber:

- Hero article: ditulis langsung di `src/pages/blog/[slug].astro`
- Breadcrumb: `src/components/common/Breadcrumb.astro`
- Article body: data `article.sections` dari `src/data/blog.ts`
- Quick takeaway: data `article.takeaway`
- Article gallery: `src/components/blog/ArticleGallery.astro`
- Related posts: `src/components/blog/BlogCard.astro`
- CTA: `src/components/common/WhatsAppCTA.astro`

Data:

- Konten artikel: `src/data/blog.ts`
- Related logic: `getRelatedBlogArticles()` di `src/data/blog.ts`
- SEO URL helper: `src/data/seo.ts`
- Schema: `src/data/schema.ts`

CSS utama:

- `.blog-prose`
- `.article-gallery-frame`
- `.blog-filter-chip`
- shared `.editorial-card`, `.site-hero-section`, `.editorial-section-*`

### Pick Up & Drop Overview

File induk:

- `src/pages/packages/pick-up-drop.astro`

Section dan sumber:

- Hero: `src/components/packages/TransferHero.astro`
- Breadcrumb: `src/components/common/Breadcrumb.astro`
- Premium route transfer packages: `src/components/packages/RouteList.astro`
- Fleet fit: `src/components/packages/TransferFleet.astro`
- Booking flow: `src/components/packages/TransferProcess.astro`
- Transfer basics: `src/components/packages/IncludeExclude.astro`
- FAQ: `src/components/packages/TransferFAQ.astro`
- CTA: `src/components/common/WhatsAppCTA.astro`

Data:

- Route cards: `src/data/routes.ts`
- Fleet route cards: `src/data/transportRoutes.ts`
- FAQ: `src/data/faqs.ts`
- Hero images: `src/data/media.ts` lewat `heroSlides.transfer`
- Schema: `src/data/schema.ts`

CSS utama:

- `.package-card-grid`
- `.package-offer-card`
- `.fleet-route-card`
- `.transfer-route-card`
- `.faq-accordion`

### Pick Up & Drop Detail

File induk:

- `src/pages/packages/pick-up-drop/[slug].astro`

Routing:

- `getStaticPaths()` membaca `routes` dari `src/data/routes.ts`.
- Setiap object route dengan `slug` akan menjadi `/packages/pick-up-drop/{slug}`.

Section dan sumber:

- Detail hero: `src/components/packages/PackageDetailHero.astro`
- Breadcrumb: `src/components/common/Breadcrumb.astro`
- Detail content: `src/components/packages/PackageDetailContent.astro`
- Booking Information form: `src/components/packages/PackageBookingForm.astro`
- Form fields: `src/components/packages/PackageBookingFields.astro`
- CTA: `src/components/common/WhatsAppCTA.astro`

Data:

- Semua detail package transfer: `src/data/routes.ts`
- WhatsApp/site config: `src/data/site.ts`
- SEO URL helper: `src/data/seo.ts`
- Schema: `src/data/schema.ts`

CSS utama:

- `.package-detail-hero`
- `.package-detail-card-row`
- `.package-detail-card`
- `.package-booking-section`
- `.package-booking-summary`
- `.package-booking-form`
- `.package-field-*`
- `.package-booking-cta`

Catatan penting:

- Jangan ubah nama field form di `PackageBookingFields.astro` jika tidak ingin mengubah alur WhatsApp.
- Logic pembentukan WhatsApp link ada di script `PackageBookingForm.astro`.

### Activities Packages Overview

File induk:

- `src/pages/packages/activities-packages.astro`
- `src/pages/packages/island-tour.astro`

Section dan sumber:

- Hero: `src/components/packages/TourHero.astro`
- Breadcrumb: `src/components/common/Breadcrumb.astro`
- Tour packages: `src/components/packages/TourPackageGrid.astro`
- Activity card item: `src/components/packages/ActivityPackageCard.astro`
- Experience: `src/components/packages/TourExperience.astro`
- Itinerary: `src/components/packages/TourItinerary.astro`
- FAQ: `src/components/packages/TourFAQ.astro`
- CTA: `src/components/common/WhatsAppCTA.astro`

Data:

- Activity package cards: `src/data/tours.ts`
- FAQ: `src/data/faqs.ts`
- Hero images: `src/data/media.ts` lewat `heroSlides.islandTour`
- Schema: `src/data/schema.ts`

CSS utama:

- `.package-card-grid`
- `.package-offer-card`
- `.activities-package-carousel`
- `.activities-package-track`
- `.activities-package-page`
- `.activities-package-controls`
- `.faq-accordion`
- shared `.editorial-section-*`, `.editorial-card`

Responsive behavior:

- Mobile: one package card per swipe.
- Tablet: swipeable page carousel, 2 columns x 2 rows per page, navigation via dots without page refresh.
- Desktop: swipeable page carousel, 4 columns x 2 rows per page, navigation via dots plus left/right buttons without page refresh.
- Last pagination pages keep the same card width and natural card height; do not stretch 1-2 remaining cards to fill empty grid space.

### Activities Packages Detail

File induk:

- `src/pages/packages/activities-packages/[slug].astro`
- `src/pages/packages/island-tour/[slug].astro`

Routing:

- `getStaticPaths()` membaca `tours` dari `src/data/tours.ts`.
- Setiap object activity dengan `slug` akan menjadi `/packages/activities-packages/{slug}`.
- Route lama `/packages/island-tour/{slug}` tetap tersedia sebagai fallback compatibility.

Section dan sumber:

- Detail hero: `src/components/packages/PackageDetailHero.astro`
- Breadcrumb: `src/components/common/Breadcrumb.astro`
- Detail content: `src/components/packages/PackageDetailContent.astro`
- Booking Information form: `src/components/packages/PackageBookingForm.astro`
- Form fields: `src/components/packages/PackageBookingFields.astro`
- CTA: `src/components/common/WhatsAppCTA.astro`

Data:

- Semua detail package Activities: `src/data/tours.ts`
- WhatsApp/site config: `src/data/site.ts`
- SEO URL helper: `src/data/seo.ts`
- Schema: `src/data/schema.ts`

CSS utama:

- Sama seperti detail transfer: `.package-detail-*`, `.package-booking-*`, `.package-field-*`

### SEO Utility Pages

File:

- `src/pages/sitemap.xml.ts`
- `src/pages/robots.txt.ts`

Data:

- `src/data/seo.ts`

Fungsi:

- `sitemap.xml.ts` membuat sitemap dari `seoPages`.
- `robots.txt.ts` membuat robots.txt memakai `absoluteUrl()`.

## Mapping Folder `src/data`

### `src/data/site.ts`

Fungsi:

- Konfigurasi global website.
- Nama site, URL, title/description default, phone, email, address, WhatsApp number, default WhatsApp message, hero image/video.
- Banyak value bisa datang dari environment variable `PUBLIC_*`.

Jika ingin mengubah:

- Nomor WhatsApp global: edit `whatsappNumber`.
- Pesan WhatsApp default: edit `whatsappMessage`.
- Nama brand/site: edit `name` dan `shortName`.
- Kontak di Contact page: edit `email`, `phone`, `address`.
- Hero video default: edit `heroVideo`.
- Hero images dari environment: `PUBLIC_HERO_IMAGES`.

### `src/data/navigation.ts`

Fungsi:

- Daftar menu navigasi.
- Dipakai oleh Navbar/MobileNav/Footer jika komponen tersebut membaca navigation.

Jika ingin mengubah:

- Label menu: edit `label`.
- Tujuan link: edit `href`.
- Urutan menu: pindahkan posisi object di array.

### `src/data/media.ts`

Fungsi:

- Kumpulan gambar hero per halaman.
- `heroSlides.home`, `heroSlides.transfer`, `heroSlides.islandTour`, `heroSlides.about`, `heroSlides.contact`.

Jika ingin mengubah:

- Gambar hero Home: edit `heroSlides.home`, atau set `PUBLIC_HERO_IMAGES`.
- Gambar hero Pick Up & Drop: edit `heroSlides.transfer`.
- Gambar hero Activities Packages: edit `heroSlides.islandTour`.
- Gambar hero About: edit `heroSlides.about`.
- Gambar hero Contact: edit `heroSlides.contact`.

Catatan gambar:

- Path gambar memakai folder `public/images/...`.
- Di kode, path publik ditulis mulai dari `/images/...`, bukan `public/images/...`.

### `src/data/packages.ts`

Fungsi:

- Data ringkas untuk Home `Signature services`.
- Saat ini berisi dua service utama: Taxi Transfer dan Activities Packages.
- File ini import `routes` dan `tours`, lalu memasukkannya ke field `items`.

Dipakai oleh:

- `src/components/home/ServiceCards.astro`

Jika ingin mengubah:

- Judul card Home Signature Services: edit `title`.
- Gambar card Home Signature Services: edit `image`.
- Deskripsi singkat: edit `description`.
- Harga ringkas: edit `priceFrom`.
- CTA WhatsApp per service: edit `whatsappMessage`.

### `src/data/routes.ts`

Fungsi:

- Source of truth package taxi transfer.
- Dipakai untuk halaman Pick Up & Drop overview, detail dynamic route, dan sebagian Home Featured Routes.

Dipakai oleh:

- `src/pages/packages/pick-up-drop.astro`
- `src/pages/packages/pick-up-drop/[slug].astro`
- `src/components/packages/RouteList.astro`
- `src/components/home/RouteHighlights.astro`
- `src/data/packages.ts`

Field penting:

- `title`: judul paket.
- `slug`: URL detail. Jangan ubah sembarangan karena mengubah alamat halaman.
- `description`: deskripsi pendek untuk cards.
- `overview`: deskripsi panjang untuk detail page/schema.
- `image`: gambar card utama.
- `heroImages`: gambar hero detail.
- `alt`: alt text gambar.
- `priceFrom`: harga yang tampil.
- `duration`, `capacity`: badge/meta card.
- `highlights`: bullet di card.
- `packageDetails`: detail harga/pilihan di detail page.
- `itinerary`, `includes`, `bookingNotes`: detail content page.
- `whatsappMessage`: pesan default CTA WhatsApp.

Jika ingin mengganti gambar taxi card:

- Ubah `image` untuk card.
- Ubah `heroImages` untuk slideshow/hero detail.
- Pastikan file gambar ada di `public/images/cars/...`.

### `src/data/tours.ts`

Fungsi:

- Source of truth package Activities Packages.
- Dipakai untuk halaman Activities Packages overview, detail dynamic activities, fallback island-tour routes, dan Home Featured Routes.

Dipakai oleh:

- `src/pages/packages/activities-packages.astro`
- `src/pages/packages/activities-packages/[slug].astro`
- `src/pages/packages/island-tour.astro`
- `src/pages/packages/island-tour/[slug].astro`
- `src/components/packages/TourPackageGrid.astro`
- `src/components/packages/ActivityPackageCard.astro`
- `src/components/home/RouteHighlights.astro`
- `src/data/packages.ts`

Field penting:

- Sama pola dengan `routes.ts`: `title`, `slug`, `description`, `overview`, `image`, `alt`, `priceFrom`, `duration`, `capacity`, `highlights`, `itinerary`, `includes`, `bookingNotes`, `whatsappMessage`.
- Field tambahan untuk detail Activities: `heroImages`, `location`, `excludes`, `whyChoose`, dan `terms`.

Jika ingin mengganti gambar Activities card:

- Ubah `image`.
- Pastikan file gambar ada di `public/images/tours/...`.

### `src/data/carTypes.ts`

Fungsi:

- Data Fleet di Home section `Choose the tone of the ride`.

Dipakai oleh:

- `src/components/home/PremiumCarSelector.astro`
- `src/components/home/PremiumCarSelector.tsx` jika versi React digunakan lagi.

Jika ingin mengubah:

- Nama kendaraan: `name` atau `title`.
- Jenis/label: `type`.
- Deskripsi: `shortDescription` dan `description`.
- Gambar fleet: `image`.
- Kapasitas: `capacity`.
- Bagasi: `luggage`.
- Harga: `priceFrom`.
- Chips fitur: `features`.

### `src/data/gallery.ts`

Fungsi:

- Data Home Gallery.

Dipakai oleh:

- `src/pages/index.astro`
- `src/components/common/GalleryGrid.astro`

Jika ingin mengubah:

- Gambar gallery: edit field gambar di object gallery.
- Judul/caption: edit text pada object terkait.
- Tambah gambar: tambah object baru di array.

### `src/data/faqs.ts`

Fungsi:

- Data pertanyaan/jawaban FAQ.

Dipakai oleh:

- `src/components/home/FAQPreview.astro`
- `src/components/packages/TransferFAQ.astro`
- `src/components/packages/TourFAQ.astro`

Jika ingin mengubah:

- Pertanyaan: edit `question`.
- Jawaban: edit `answer`.
- Tambah FAQ: tambah object baru di array.

### `src/data/blog.ts`

Fungsi:

- Source of truth semua artikel blog.
- Menyediakan type artikel, daftar artikel, filter category/location/tag, favorite articles, detail article lookup, dan related article logic.

Dipakai oleh:

- `src/pages/blog.astro`
- `src/pages/blog/[slug].astro`
- `src/components/blog/BlogCard.astro`
- `src/components/blog/ArticleGallery.astro`
- `src/data/seo.ts`

Field penting:

- `title`: judul artikel.
- `slug`: URL artikel. Jangan ubah sembarangan.
- `description`: SEO description.
- `excerpt`: ringkasan untuk hero/card.
- `heroImage`: gambar hero.
- `heroAlt`: alt hero.
- `gallery`: gambar tambahan artikel.
- `category`, `location`, `tags`: filter blog.
- `sections`: isi artikel.
- `takeaway`: quick takeaway.

### `src/data/seo.ts`

Fungsi:

- Membuat daftar halaman untuk sitemap.
- Membuat URL absolut dengan `absoluteUrl()`.
- Menggabungkan static pages, route pages, tour pages, dan blog pages.

Dipakai oleh:

- `src/pages/sitemap.xml.ts`
- `src/pages/robots.txt.ts`
- Detail blog/package schema URL.

Jika ingin menambah halaman static baru:

- Tambahkan entry ke daftar static SEO pages di file ini.

### `src/data/schema.ts`

Fungsi:

- JSON-LD schema untuk SEO.
- Organization, local business, website, navigation, service, FAQ, breadcrumb, home schema, package schema.

Dipakai oleh:

- Banyak halaman via `BaseLayout` prop `schema`.

Jika ingin mengubah informasi bisnis/schema:

- Edit `organizationSchema` atau `localBusinessSchema`.
- Untuk breadcrumb, biasanya halaman memanggil `breadcrumbSchema(breadcrumbs)`.

### `src/data/transportRoutes.ts`

Fungsi:

- Data untuk section transfer/fleet route cards di halaman Pick Up & Drop.

Dipakai oleh:

- `src/components/packages/TransferFleet.astro`

Jika ingin mengubah:

- Judul route/fleet: edit title/name field.
- Gambar: edit image field.
- Deskripsi/highlight: edit text pada object terkait.

## Mapping `src/styles/global.css`

`global.css` adalah pusat styling project. Karena file ini besar, gunakan peta selector berikut sebelum mengubah CSS.

### Foundation dan Token

Lokasi kira-kira:

- `:root`
- `html`, `body`
- `.editorial-site`
- global `a`, `button`, focus visible
- `.container-page`, `.editorial-container`
- `.section-padding`, `.editorial-section-*`

Fungsi:

- Token warna, font, background global, container width, section spacing, dan focus state.

Dipakai oleh:

- Semua halaman.

### Shared Editorial UI

Selector utama:

- `.site-hero-section`
- `.site-hero-inner`
- `.site-home-hero-inner`
- `.site-page-hero-inner`
- `.home-hero-shade`
- `.editorial-kicker`
- `.editorial-heading`
- `.editorial-title`
- `.editorial-lede`
- `.editorial-copy`
- `.editorial-grid`
- `.editorial-card`
- `.editorial-card-warm`
- `.editorial-image-frame`
- `.editorial-button-primary`
- `.editorial-button-secondary`
- `.luxury-surface`
- `.luxury-card`
- `.gold-pill`
- `.silver-glow`

Fungsi:

- Bahasa visual utama: dark premium, editorial typography, card, CTA, hero spacing.

Dipakai oleh:

- Home, About, Contact, Blog, Package pages.

### Navbar, Mobile Menu, Footer, Floating WhatsApp

Selector yang terkait:

- `.mobile-menu`
- `.mobile-menu-panel`
- `.skip-link`
- `.whatsapp-assistant-*`

Fungsi:

- Mobile menu behavior, accessibility skip link, floating WhatsApp panel/button.

Komponen terkait:

- `src/components/common/Navbar.astro`
- `src/components/common/MobileNav.astro`
- `src/components/common/FloatingWhatsApp.astro`
- `src/components/common/Footer.astro`

### Package Cards Shared System

Selector utama:

- `.package-card-grid`
- `.package-offer-card`
- `.package-offer-card__media`
- `.package-offer-card__image`
- `.package-offer-card__shade`
- `.package-offer-card__badges`
- `.package-offer-card__category`
- `.package-offer-card__price`
- `.package-offer-card__body`
- `.package-offer-card__title`
- `.package-offer-card__description`
- `.package-offer-card__meta`
- `.package-offer-card__highlights`
- `.package-offer-card__actions`
- `.package-offer-card__link`

Fungsi:

- Format kartu product service untuk taxi transfer, Activities Packages, Home Signature Services, Home Featured Routes, Pick Up & Drop cards, dan Activities cards.

Komponen terkait:

- `src/components/home/ServiceCards.astro`
- `src/components/home/RouteHighlights.astro`
- `src/components/packages/RouteList.astro`
- `src/components/packages/TourPackageGrid.astro`
- `src/components/packages/ActivityPackageCard.astro`

Catatan:

- Jika ingin mengubah semua cards package, edit selector base `.package-offer-card`.
- Jika hanya Home Signature Services, edit `.package-offer-card--home-service`.
- Jika hanya Home Featured Routes, edit `.package-offer-card--home-route`.
- Jika hanya taxi image crop, edit `.package-offer-card--taxi` atau `.package-offer-card--taxi-transfer`.
- Jika hanya Activities image crop, edit `.package-offer-card--activities-package`, `.package-offer-card--tour`, atau `.package-offer-card--island-tour`.

### Activities Package Pagination

Selector utama:

- `.activities-package-carousel`
- `.activities-package-carousel--mobile`
- `.activities-package-carousel--tablet`
- `.activities-package-carousel--desktop`
- `.activities-package-track`
- `.activities-package-page`
- `.activities-package-controls`

Fungsi:

- `TourPackageGrid.astro` membuat tiga carousel responsif dari `src/data/tours.ts`.
- Mobile menampilkan satu card per swipe.
- Tablet menampilkan halaman 2x2, tetap bisa swipe, dan berpindah page via dots tanpa refresh.
- Desktop menampilkan halaman 4x2, tetap bisa swipe, dan berpindah page via dots serta tombol kiri/kanan tanpa refresh.
- Halaman terakhir dengan 1 atau 2 card harus tetap memakai ukuran card normal dan tinggi natural, bukan dilebarkan atau dipanjangkan untuk mengisi area kosong.

### Home Card Swipe dan Dot Pagination

Selector utama:

- `.home-scroll-row`
- `.home-scroll-card`
- `.home-package-dots`
- `.home-package-dots .swipe-pagination-dot`
- `.home-package-dots .swipe-pagination-dot::after`

Komponen terkait:

- `src/components/home/ServiceCards.astro`
- `src/components/home/RouteHighlights.astro`
- `src/components/common/SwipeControls.astro`

Fungsi:

- Mengatur swipe mobile untuk Home cards dan dot pagination yang serasi dengan Fleet selector.

Catatan penting:

- Dot harus tetap memiliki `position: relative` dan `overflow: hidden` supaya pseudo-element tidak melebar dan menutupi area hero/mobile.

### Home Signature Services Image Fit

Selector utama:

- `.service-image-frame`
- `.package-offer-card--home-service .service-image-frame`
- `.package-offer-card--home-service .package-offer-card__image`
- `.package-offer-card--home-service.package-offer-card--taxi .package-offer-card__image`

Komponen terkait:

- `src/components/home/ServiceCards.astro`

Fungsi:

- Mengatur tinggi frame dan crop gambar untuk Home Signature Services.

Jika gambar masih terasa kecil:

- Naikkan `height` pada `.package-offer-card--home-service .service-image-frame`.
- Naikkan `transform: scale(...)` pada selector image terkait.
- Untuk taxi saja, ubah selector taxi-specific agar route/tour lain tidak ikut berubah.

### Home Featured Routes Image Fit

Selector utama:

- `.route-image-frame`
- `.package-offer-card--home-route .route-image-frame`
- `.package-offer-card--home-route .package-offer-card__image`
- `.package-offer-card--home-route.package-offer-card--taxi-transfer .package-offer-card__image`
- `.package-offer-card--home-route.package-offer-card--activities-package .package-offer-card__image`
- `.package-offer-card--home-route.package-offer-card--island-tour .package-offer-card__image`

Komponen terkait:

- `src/components/home/RouteHighlights.astro`

Fungsi:

- Mengatur ukuran image frame dan crop Home Featured Routes.

### Fleet Selector Home

Selector utama:

- `.fleet-selector`
- `.fleet-visual-panel`
- `.fleet-car-frame`
- `.fleet-car-image`
- `.fleet-dot-group`
- `.fleet-dot-button`
- `.fleet-whatsapp-button`
- `@keyframes fleetImageSettle`
- `@keyframes fleetCopySettle`

Komponen terkait:

- `src/components/home/PremiumCarSelector.astro`

Data terkait:

- `src/data/carTypes.ts`

Fungsi:

- Mengatur frame gambar fleet, dot navigation, transition, capacity/luggage frame, dan CTA WhatsApp.

### Concierge Details dan Why Us Mobile Swipe

Selector terkait:

- `.home-scroll-row`
- mobile media query rules untuk horizontal scroll/swipe
- shared `.editorial-card`

Komponen terkait:

- `src/components/home/BentoShowcase.astro`
- `src/components/home/WhyChooseUs.astro`

Fungsi:

- Membuat section panjang di mobile lebih ringan dengan pola swipe/scroll horizontal.

### Gallery dan Lightbox

Selector utama:

- `.client-gallery-shell`
- `.client-gallery`
- `.client-gallery-photo`
- `.client-gallery-caption`
- `.client-gallery-lightbox`
- `.client-gallery-dialog`
- `.gallery-is-open`

Komponen terkait:

- `src/components/common/GalleryGrid.astro`

Data terkait:

- `src/data/gallery.ts`

Fungsi:

- Home gallery carousel/scroll, active image styling, caption, dan lightbox.

### Blog UI

Selector utama:

- `.blog-filter-chip`
- `.blog-topic-panel`
- `.blog-topic-row`
- `.blog-topic-label`
- `.blog-topic-chips`
- `.blog-latest-row`
- `.blog-pagination`
- `.blog-prose`
- `.article-gallery-frame`

Komponen/halaman terkait:

- `src/pages/blog.astro`
- `src/pages/blog/[slug].astro`
- `src/components/blog/BlogCard.astro`
- `src/components/blog/ArticleGallery.astro`

Fungsi:

- Filter chips, pagination, blog listing, article typography, gallery frame.

### Package Detail Hero dan Detail Content

Selector utama:

- `.package-detail-hero`
- `.package-detail-hero__shade`
- `.package-detail-hero__inner`
- `.package-detail-card-row`
- `.package-detail-card`
- `.package-detail-swipe-ui`
- `.swipe-pagination-ui`
- `.swipe-pagination-dot`
- `.swipe-pagination-arrow`

Komponen terkait:

- `src/components/packages/PackageDetailHero.astro`
- `src/components/packages/PackageDetailContent.astro`
- `src/components/common/SwipeControls.astro`

Fungsi:

- Hero detail package, card detail content, mobile swipe controls di detail page.

### Booking Information Form

Selector utama:

- `.package-booking-section`
- `.package-booking-copy`
- `.package-booking-summary`
- `.package-booking-form`
- `.package-booking-grid`
- `.package-field`
- `.package-field-card`
- `.package-field-icon`
- `.package-field-body`
- `.package-field-label`
- `.package-field input`
- `.package-field select`
- `.package-field textarea`
- `.package-booking-cta`

Komponen terkait:

- `src/components/packages/PackageBookingForm.astro`
- `src/components/packages/PackageBookingFields.astro`

Fungsi:

- Styling Booking Information / Customize your request before WhatsApp.
- Mengatur field Travel Date, Preferred Time, Guests, Pickup Point, Drop-off Point, Custom Request, package summary, dan CTA WhatsApp.

Catatan penting:

- Styling boleh diubah di CSS.
- Jangan ubah `name` input/select/textarea atau script WhatsApp jika hanya ingin polish visual.

### Transfer Page Cards

Selector utama:

- `.transfer-route-card`
- `.fleet-route-card`

Komponen terkait:

- `src/components/packages/TransferFleet.astro`
- Komponen package/cards lama yang masih memakai class ini.

Data terkait:

- `src/data/transportRoutes.ts`

### FAQ

Selector utama:

- `.faq-accordion`
- `.faq-accordion summary`
- `.faq-accordion-icon`

Komponen terkait:

- `src/components/packages/TransferFAQ.astro`
- `src/components/packages/TourFAQ.astro`
- `src/components/home/FAQPreview.astro`

Data terkait:

- `src/data/faqs.ts`

### Responsive Breakpoints

Blok media penting:

- `@media (max-width: 420px)`: compact mobile sangat kecil.
- `@media (max-width: 639px)`: mobile.
- `@media (max-width: 767px)`: mobile/tablet kecil.
- `@media (max-width: 1023px)`: tablet ke bawah.
- `@media (min-width: 640px)`: tablet awal.
- `@media (min-width: 768px)`: tablet.
- `@media (min-width: 1024px)`: desktop.
- `@media (prefers-reduced-motion: reduce)`: mengurangi animasi.

Gunakan breakpoint ini sebelum menambah breakpoint baru agar pattern CSS tetap konsisten.

## Panduan Cepat Mengubah Gambar

### Ganti gambar hero Home

1. Buka `src/data/media.ts`.
2. Edit `heroSlides.home`.
3. Pastikan file gambar berada di `public/images/...`.
4. Tulis path seperti `/images/hero/nama-file.jpg`.

### Ganti gambar Signature Services Home

1. Buka `src/data/packages.ts`.
2. Edit `image` pada service terkait.
3. Jika gambar terlihat terlalu kecil/besar, cek CSS `.package-offer-card--home-service`.

### Ganti gambar Featured Routes Home

1. Untuk taxi route: buka `src/data/routes.ts`.
2. Untuk activities route: buka `src/data/tours.ts`.
3. Edit `image`.
4. Jika crop perlu disesuaikan, cek CSS `.package-offer-card--home-route`.

### Ganti gambar Fleet Home

1. Buka `src/data/carTypes.ts`.
2. Edit `image`.
3. Jika frame/crop kurang pas, cek CSS `.fleet-car-frame` dan `.fleet-car-image`.

### Ganti gambar detail package

1. Untuk taxi transfer: buka `src/data/routes.ts`.
2. Untuk Activities Packages: buka `src/data/tours.ts`.
3. Edit `heroImages` untuk hero detail.
4. Edit `image` untuk card utama.

### Ganti gambar blog

1. Buka `src/data/blog.ts`.
2. Edit `heroImage` untuk hero.
3. Edit `gallery` untuk gallery artikel.

## Panduan Cepat Mengubah Text dan CTA

### Navbar

- Cek `src/components/common/Navbar.astro`.
- Jika menu berasal dari data, cek `src/data/navigation.ts`.

### Footer

- Cek `src/components/common/Footer.astro`.
- Data contact/social biasanya dari `src/data/site.ts`.

### WhatsApp global

- Nomor global: `src/data/site.ts` field `whatsappNumber`.
- Pesan default: `src/data/site.ts` field `whatsappMessage`.

### WhatsApp per package

- Taxi transfer: `src/data/routes.ts` field `whatsappMessage`.
- Activities Packages: `src/data/tours.ts` field `whatsappMessage`.
- Home Signature Services: `src/data/packages.ts` field `whatsappMessage`.

### Booking Information form

- Struktur form: `src/components/packages/PackageBookingForm.astro`.
- Field form: `src/components/packages/PackageBookingFields.astro`.
- Styling: `src/styles/global.css` selector `.package-booking-*` dan `.package-field-*`.
- Jangan ubah field `name` kecuali memang ingin mengubah format WhatsApp request.

## Source Of Truth Utama

Gunakan daftar ini saat ragu harus edit di mana:

- Layout semua halaman: `src/layouts/BaseLayout.astro`
- CSS utama: `src/styles/global.css`
- Home page order: `src/pages/index.astro`
- Home Signature Services data: `src/data/packages.ts`
- Transfer package data: `src/data/routes.ts`
- Activities package data: `src/data/tours.ts`
- Fleet Home data: `src/data/carTypes.ts`
- Hero slide images: `src/data/media.ts`
- Gallery Home data: `src/data/gallery.ts`
- FAQ data: `src/data/faqs.ts`
- Blog data: `src/data/blog.ts`
- SEO sitemap data: `src/data/seo.ts`
- Schema SEO: `src/data/schema.ts`
- Contact/site config: `src/data/site.ts`

## Catatan Safety Untuk Edit Berikutnya

- Untuk visual polish, prioritaskan `src/styles/global.css`.
- Untuk mengganti konten/gambar/harga, prioritaskan `src/data/*.ts`.
- Untuk mengubah urutan section halaman, edit file di `src/pages/*.astro`.
- Untuk mengubah markup sebuah section, edit file component terkait di `src/components`.
- Jangan mengubah logic WhatsApp, nama field form, atau slug URL kecuali memang itu tujuan perubahan.
- Setelah perubahan visual, jalankan `npm.cmd run build`.

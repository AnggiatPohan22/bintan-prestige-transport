# Manual Image & Content Guide

## Folder Gambar

Simpan gambar di dalam folder `public/images`.

- Logo: `public/images/brand`
- Hero background: `public/images/hero`
- Mobil/fleet: `public/images/cars`
- Tour/destinasi: `public/images/tours`
- Gallery umum: `public/images/gallery`

Gunakan format `.webp` jika bisa. Nama file sebaiknya huruf kecil, tanpa spasi.

## File Pusat Asset

File utama untuk mapping gambar, logo, dan icon:

- `src/data/assets.ts`

Gunakan file ini sebagai pintu utama untuk:

- Logo dan brand image: `brandAssets`
- Hero per halaman: `pageHeroAssets`
- Icon custom: `iconAssets`
- Card, hero detail, dan gallery activity package: `activityPackageAssets`

Jika file gambar sudah di-upload ke `public/images`, path di code selalu dimulai dari `/images`, bukan `public/images`.

Untuk hero image, upload gambar original ke folder halaman seperti `public/images/hero/home`, lalu jalankan:

```powershell
npm.cmd run images:hero
```

Command ini membuat versi responsive di `public/images/hero/{halaman}/responsive`:

- `*-mobile.webp`: 1080 x 1920 untuk smartphone.
- `*-tablet.webp`: 1440 x 1080 untuk tablet.
- `*-desktop.webp`: 1920 x 1080 untuk desktop.

Contoh:

```txt
public/images/hero/home-1.webp
public/images/cars/innova-reborn.webp
public/images/tours/mangrove-tour.webp
public/images/gallery/blue-lake.webp
```

Path yang dipakai di code selalu dimulai dari `/images`.

Contoh:

```txt
/images/hero/home-1.webp
/images/cars/innova-reborn.webp
```

## Logo Navbar

File yang dibuka:

- `.env`
- `.env.example`
- `src/data/site.ts`

Isi di `.env`:

```env
PUBLIC_LOGO_IMAGE=/images/brand/bintan-prestige-logo.png
```

Jika `PUBLIC_LOGO_IMAGE` kosong, navbar akan kembali menampilkan teks `Travel Agent`.

## Hero Gambar Banyak Per Halaman

File utama:

- `src/data/assets.ts`
- `src/data/media.ts`

Edit list gambar di `pageHeroAssets` dalam `src/data/assets.ts`.

```ts
export const pageHeroAssets = {
  home: [responsiveHeroImage("home", "home-1.webp")],
  taxy: [responsiveHeroImage("taxy", "toyota-innova.webp")],
  activity: [responsiveHeroImage("activity", "mangrove.webp")],
  blog: [responsiveHeroImage("blog", "mangrove-2.webp")],
  about: [responsiveHeroImage("about", "destinasi-tanjungpinang-1.webp")],
  contact: [responsiveHeroImage("contact", "blue-lake.webp")],
};
```

Hero akan otomatis crossfade halus antar gambar dan memakai `<picture>` responsive source. Jika hanya satu gambar, animasi dimatikan otomatis.

Mapping halaman:

- Home: `pageHeroAssets.home`
- Taxy / Pick Up Drop: `pageHeroAssets.taxy`
- Activities Packages / Island Tour: `pageHeroAssets.activity`
- Blog: `pageHeroAssets.blog`
- About: `pageHeroAssets.about`
- Contact: `pageHeroAssets.contact`

Alternatif khusus homepage:

```env
PUBLIC_HERO_IMAGES=/images/hero/home/home-1.webp,/images/hero/home/home-2.webp,/images/hero/home/home-3.webp
```

Jika `PUBLIC_HERO_IMAGES` memakai path di dalam `/images/hero/{halaman}/...`, sistem akan otomatis mencari versi responsive-nya.

## Gambar Card Paket Home

File yang dibuka:

- `src/data/packages.ts`

Field yang diganti:

```ts
image: "/images/cars/innova-reborn.webp",
alt: "Private taxi transfer in Bintan",
```

## Gambar Mobil / Fleet

File yang dibuka:

- `src/data/carTypes.ts`

Field yang diganti:

```ts
image: "/images/cars/innova-reborn.webp",
alt: "Toyota Innova private transfer car",
```

## Gambar Route Transfer

File yang dibuka:

- `src/data/routes.ts`

Field yang diganti:

```ts
image: "/images/cars/premium-transfer.webp",
alt: "Airport transfer private car",
```

## Gambar Tour Package

File yang dibuka:

- `src/data/assets.ts`
- `src/data/tours.ts`

Untuk activity package, gambar card, hero detail, dan gallery diambil dari `activityPackageAssets`.

```ts
export const activityPackageAssets = {
  "mangrove-discovery-tour": {
    folder: "mangrove-discory-tour",
    card: "/images/gallery/mangrove-discory-tour/mangrove-2.webp",
    hero: [
      "/images/gallery/mangrove-discory-tour/mangrove-2.webp",
      "/images/gallery/mangrove-discory-tour/mangrove-4.webp",
    ],
    gallery: [
      {
        title: "Quiet mangrove route",
        description: "A calm boat route through Bintan's mangrove forest.",
        image: "/images/gallery/mangrove-discory-tour/mangrove-2.webp",
        alt: "Mangrove river route in Bintan",
      },
    ],
  },
};
```

## Gallery Detail Activity Package

Gallery yang muncul di halaman detail activity package diatur dari:

- Mapping gambar: `src/data/assets.ts`
- Data package: `src/data/tours.ts`
- Komponen tampilan: `src/components/features/packages/ActivityPackageGallery.astro`
- Layout detail package: `src/components/features/packages/PackageDetailContent.astro`
- Folder gambar: `public/images/gallery/{nama-folder-package}`

Halaman yang memakai data ini:

- `/packages/activities-packages/{slug}`
- `/packages/island-tour/{slug}` sebagai fallback route lama

Untuk menambah atau mengganti foto gallery pada salah satu activity package, upload gambar ke folder package di `public/images/gallery`, lalu update object sesuai slug di `activityPackageAssets`.

Contoh:

```ts
"mangrove-discovery-tour": {
  folder: "mangrove-discory-tour",
  card: "/images/gallery/mangrove-discory-tour/mangrove-2.webp",
  hero: [
    "/images/gallery/mangrove-discory-tour/mangrove-2.webp",
    "/images/gallery/mangrove-discory-tour/mangrove-4.webp",
    "/images/gallery/mangrove-discory-tour/mangrove-5.webp",
  ],
  gallery: [
    {
      title: "Quiet mangrove route",
      description: "A calm boat route through Bintan's mangrove forest with local nature scenery.",
      image: "/images/gallery/mangrove-discory-tour/mangrove-2.webp",
      alt: "Mangrove river route in Bintan",
    },
    {
      title: "Nature boat experience",
      description: "Guests can enjoy a slower soft-adventure activity with guide and wildlife viewing.",
      image: "/images/gallery/mangrove-discory-tour/mangrove-4.webp",
      alt: "Mangrove boat tour scenery in Bintan",
    },
  ],
},
```

Catatan update:

- `card` adalah thumbnail utama card activity.
- `hero` adalah slideshow hero detail package.
- `gallery` adalah section gallery yang muncul di atas itinerary.
- Setiap item `gallery` wajib punya `title`, `image`, dan `alt`.
- `description` boleh dikosongkan jika tidak diperlukan.
- Jika ingin menambah lebih dari 3 foto, cukup tambah object baru di array `gallery`; lightbox sudah bisa pindah foto kanan/kiri tanpa menutup preview.
- Path gambar di code selalu dimulai dari `/images`, bukan `public/images`.

Folder activity package yang aktif saat ini:

- `public/images/gallery/Shooting-Experience-Package` -> `shooting-experience-package`
- `public/images/gallery/mangrove-discory-tour` -> `mangrove-discovery-tour`
- `public/images/gallery/fireflies-night-tour` -> `fireflies-night-tour`
- `public/images/gallery/snorkeling-adventure` -> `snorkeling-adventure`
- `public/images/gallery/fishing-trip` -> `fishing-trip`
- `public/images/gallery/golf-transfer` -> `golf-transfer`
- `public/images/gallery/shopping-tour` -> `shopping-tour`
- `public/images/gallery/spa` -> `spa-wellness-experience`
- `public/images/gallery/beach-hopping-tour` -> `beach-hopping-tour`
- `public/images/gallery/custome` -> `customized-tour`

## Gambar Gallery

File yang dibuka:

- `src/data/gallery.ts`

Field yang diganti atau ditambah:

```ts
{
  title: "Blue Lake",
  slug: "blue-lake",
  description: "Scenic private tour stop in Bintan.",
  image: "/images/gallery/blue-lake.webp",
  alt: "Blue Lake Bintan tour destination",
  category: "tour",
}
```

## File Komponen Jika Perlu Edit Lanjutan

- Home hero: `src/components/home/Hero.astro`
- Transfer hero: `src/components/packages/TransferHero.astro`
- Island Tour hero: `src/components/packages/TourHero.astro`
- About hero: `src/components/about/AboutHero.astro`
- Contact hero: `src/components/contact/ContactHero.astro`
- Backdrop animasi hero: `src/components/common/HeroBackdrop.astro`
- Style animasi dan luxury gold/silver: `src/styles/global.css`

## Jalankan Setelah Ganti Gambar

```powershell
npm.cmd run dev
```

Buka:

```txt
http://127.0.0.1:4321
```

Untuk cek production:

```powershell
npm.cmd run astro check
npm.cmd run build
npm.cmd run preview
```

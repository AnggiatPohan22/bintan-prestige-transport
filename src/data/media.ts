import { site } from "./site";

const configuredHomeImages = site.heroImages.length > 0 ? site.heroImages : site.heroImage ? [site.heroImage] : [];

export const heroSlides = {
  home:
    configuredHomeImages.length > 0
      ? configuredHomeImages
      : ["/images/hero/atv.jpg", "/images/hero/blue-lake-2.png", "/images/hero/jetski 4.jpg", "/images/hero/mangrove 2.webp", "/images/hero/snorkeling 1.jpg", "/images/hero/spa 1.webp"],
  transfer: ["/images/cars/premium-sedan.jpg", "/images/cars/luxury-mpv.jpg", "/images/cars/executive-van.jpg"],
  islandTour: ["/images/tours/atv.jpg", "/images/tours/mangrove.jpg", "/images/tours/snorkeling.jpg"],
  about: ["/images/gallery/blue lake.jpg", "/images/gallery/mangrove 4.webp", "/images/gallery/spa 2.webp"],
  contact: ["/images/gallery/jetski 1.webp", "/images/gallery/blue lake 2.png", "/images/gallery/spa 3.jpg"],
};

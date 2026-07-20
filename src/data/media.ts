import { site } from "./site";
import { pageHeroAssets, responsiveHeroSource } from "./assets";

const configuredHomeImages = site.heroImages.length > 0 ? site.heroImages : site.heroImage ? [site.heroImage] : [];

export const heroSlides = {
  home: configuredHomeImages.length > 0 ? configuredHomeImages.map(responsiveHeroSource) : pageHeroAssets.home,
  transfer: pageHeroAssets.taxy,
  islandTour: pageHeroAssets.activity,
  blog: pageHeroAssets.blog,
  about: pageHeroAssets.about,
  contact: pageHeroAssets.contact,
};

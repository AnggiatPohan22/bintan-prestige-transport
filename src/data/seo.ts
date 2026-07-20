import { site } from "./site";
import { blogArticles } from "./blog";
import { routes } from "./routes";
import { tours } from "./tours";

const staticSeoPages = [
  {
    path: "/",
    title: "Premium Private Taxi & Island Tour Experience",
    description:
      "Bintan Prestige Transport provides private taxi, airport and ferry transfers, island tours, and curated Bintan activities with WhatsApp-first booking.",
    priority: 1,
  },
  {
    path: "/packages/pick-up-drop",
    title: "Pick Up & Drop",
    description:
      "Premium private pick up and drop transfer service for airport, ferry terminal, hotel, dinner, and custom routes.",
    priority: 0.9,
  },
  {
    path: "/packages/activities-packages",
    title: "Activities Packages",
    description:
      "Private Bintan activity packages for shooting, mangrove, fireflies, snorkeling, fishing, golf, shopping, spa, beach, and custom tours.",
    priority: 0.9,
  },
  {
    path: "/blog",
    title: "Bintan Taxi & Island Tour Blog",
    description:
      "SEO travel guides for Bintan private taxi transfers, harbour pickup, airport pickup, hotel rides, mangrove tours, snorkeling, and island destinations.",
    priority: 0.8,
  },
  {
    path: "/about",
    title: "About Us",
    description:
      "Learn about Bintan Prestige Transport, a private taxi, transfer, and island tour concierge service for comfortable travel in Bintan.",
    priority: 0.7,
  },
  {
    path: "/contact",
    title: "Contact",
    description:
      "Contact the premium private taxi and island tour service through WhatsApp, phone, or email.",
    priority: 0.8,
  },
];

const tourSeoPages = tours.map((tour) => ({
  path: `/packages/activities-packages/${tour.slug}`,
  title: tour.title,
  description: tour.description,
  priority: 0.8,
}));

const routeSeoPages = routes.map((route) => ({
  path: `/packages/pick-up-drop/${route.slug}`,
  title: route.title,
  description: route.description,
  priority: 0.8,
}));

const blogSeoPages = blogArticles.map((article) => ({
  path: `/blog/${article.slug}`,
  title: article.title,
  description: article.description,
  priority: article.favorite ? 0.8 : 0.7,
}));

export const seoPages = [...staticSeoPages, ...tourSeoPages, ...routeSeoPages, ...blogSeoPages];

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();

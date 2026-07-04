import { site } from "./site";
import { routes } from "./routes";
import { tours } from "./tours";

const staticSeoPages = [
  {
    path: "/",
    title: "Premium Private Taxi & Island Tour Experience",
    description:
      "Premium private taxi, airport transfer, VIP driver, and island tour experience with WhatsApp-first reservations.",
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
    path: "/packages/island-tour",
    title: "Island Tour",
    description:
      "Premium private island tour packages for beaches, culture, scenic routes, night movement, and custom concierge itineraries.",
    priority: 0.9,
  },
  {
    path: "/about",
    title: "About Us",
    description:
      "About the premium private taxi, transfer, and island tour concierge service foundation.",
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
  path: `/packages/island-tour/${tour.slug}`,
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

export const seoPages = [...staticSeoPages, ...tourSeoPages, ...routeSeoPages];

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();

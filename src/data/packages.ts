import { routes } from "./routes";
import { tours } from "./tours";

export const packages = [
  {
    title: "Pick Up & Drop",
    slug: "pick-up-drop",
    description:
      "Private taxi transfer for airport, ferry terminal, hotel, and custom routes.",
    image: "/images/cars/comfort-mpv.jpg",
    alt: "Private taxi transfer service",
    priceFrom: "IDR 200K",
    duration: "Flexible",
    capacity: "1-8 passengers",
    category: "taxi",
    whatsappMessage: "Hello, I want to ask about Pick Up & Drop service.",
    items: routes,
  },
  {
    title: "Island Tour",
    slug: "island-tour",
    description:
      "Private island tour packages for beaches, landmarks, culture, and food stops.",
    image: "/images/tours/island-highlight.jpg",
    alt: "Private island tour service",
    priceFrom: "IDR 650K",
    duration: "Half day or full day",
    capacity: "1-8 passengers",
    category: "tour",
    whatsappMessage: "Hello, I want to ask about Island Tour packages.",
    items: tours,
  },
];

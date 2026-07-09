import { routes } from "./routes";
import { tours } from "./tours";

export const packages = [
  {
    title: "Taxy Transfer",
    slug: "taxi-transfer",
    description:
      "More options for private taxi transfer with premium sedan, luxury MPV, or executive van. Flexible timing and multi-stop routes available.",
    image: "/images/cars/toyota-avanza.png",
    alt: "Premium private taxi transfer service",
    priceFrom: "IDR 300K",
    duration: "Flexible",
    capacity: "1-8 passengers",
    category: "taxi",
    whatsappMessage: "Hello, I want to ask about Taxi Transfer service.",
    items: routes,
  },
  {
    title: "Island Tour",
    slug: "island-tour",
    description:
      "Explore the island with a private driver and flexible half-day or full-day tour packages. Choose from various attractions and enjoy a personalized experience.",
    image: "/images/tours/snorkeling.jpg",
    alt: "Luxury private island tour service",
    priceFrom: "IDR 750K",
    duration: "Half day or full day",
    capacity: "1-8 passengers",
    category: "tour",
    whatsappMessage: "Hello, I want to ask about Island Tour packages.",
    items: tours,
  },
];

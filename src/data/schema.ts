import { faqs } from "./faqs";
import { navigation } from "./navigation";
import { packages } from "./packages";
import { routes } from "./routes";
import { site } from "./site";
import { tours } from "./tours";
import { absoluteUrl } from "./seo";

const sameAs = site.socialLinks;

export const organizationSchema = {
  "@type": "TravelAgency",
  "@id": `${absoluteUrl("/")}#organization`,
  name: site.name,
  url: absoluteUrl("/"),
  telephone: site.phone,
  email: site.email,
  areaServed: site.address,
  description: site.defaultDescription,
  sameAs,
};

export const localBusinessSchema = {
  "@type": "LocalBusiness",
  "@id": `${absoluteUrl("/")}#localbusiness`,
  name: site.name,
  url: absoluteUrl("/"),
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: site.addressLocality,
    addressRegion: site.addressRegion,
    addressCountry: site.addressCountry,
  },
  hasMap: site.googleMapsUrl || undefined,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "22:00",
  },
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${absoluteUrl("/")}#website`,
  name: site.name,
  url: absoluteUrl("/"),
  publisher: {
    "@id": organizationSchema["@id"],
  },
};

export const navigationSchema = {
  "@type": "SiteNavigationElement",
  name: navigation.map((item) => item.label),
  url: navigation.map((item) => absoluteUrl(item.href)),
};

export const serviceSchemas = [
  {
    "@type": "Service",
    "@id": `${absoluteUrl("/packages/pick-up-drop")}#service`,
    name: "Premium Pick Up & Drop Transfer",
    serviceType: "Private taxi transfer",
    provider: { "@id": organizationSchema["@id"] },
    areaServed: site.address,
    url: absoluteUrl("/packages/pick-up-drop"),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Transfer routes",
      itemListElement: routes.map((route) => ({
        "@type": "Offer",
        name: route.title,
        description: route.description,
        priceSpecification: route.priceFrom,
      })),
    },
  },
  {
    "@type": "Service",
    "@id": `${absoluteUrl("/packages/island-tour")}#service`,
    name: "Premium Private Island Tour",
    serviceType: "Private island tour",
    provider: { "@id": organizationSchema["@id"] },
    areaServed: site.address,
    url: absoluteUrl("/packages/island-tour"),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Island tour packages",
      itemListElement: tours.map((tour) => ({
        "@type": "Offer",
        name: tour.title,
        description: tour.description,
        priceSpecification: tour.priceFrom,
      })),
    },
  },
];

export const faqSchema = {
  "@type": "FAQPage",
  "@id": `${absoluteUrl("/")}#faq`,
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const breadcrumbSchema = (items: Array<{ label: string; href: string }>) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    item: absoluteUrl(item.href),
  })),
});

export const homeSchema = [
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
  navigationSchema,
  ...serviceSchemas,
  faqSchema,
];

export const packageSchema = (type: "transfer" | "tour") => {
  const service = type === "transfer" ? serviceSchemas[0] : serviceSchemas[1];

  return [organizationSchema, localBusinessSchema, service];
};

export const packagesOverviewSchema = {
  "@type": "ItemList",
  itemListElement: packages.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.title,
    url: absoluteUrl(`/packages/${item.slug}`),
  })),
};

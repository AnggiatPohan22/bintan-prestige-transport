const envValue = (value: string | undefined, fallback: string) => {
  const trimmed = value?.trim();

  return trimmed && trimmed.length > 0 ? trimmed : fallback;
};

const normalizeSiteUrl = (value: string) => {
  try {
    return new URL(value).origin;
  } catch {
    return "https://bintanprestige.com";
  }
};

const csvList = (value: string | undefined) =>
  value
    ?.split(",")
    .map((item) => item.trim())
    .filter(Boolean) ?? [];

export const site = {
  name: envValue(import.meta.env.PUBLIC_SITE_NAME, "Bintan Prestige Transport"),
  shortName: envValue(import.meta.env.PUBLIC_SITE_SHORT_NAME, "Bintan Prestige"),
  tagline: envValue(import.meta.env.PUBLIC_SITE_TAGLINE, "Private taxi, transfers, and curated Bintan activities"),
  url: normalizeSiteUrl(envValue(import.meta.env.PUBLIC_SITE_URL, "https://bintanprestige.com")),
  defaultTitle: envValue(
    import.meta.env.PUBLIC_SITE_DEFAULT_TITLE,
    "Bintan Prestige Transport | Private Taxi, Transfers & Activities",
  ),
  defaultDescription:
    envValue(
      import.meta.env.PUBLIC_SITE_DESCRIPTION,
      "Bintan Prestige provides private taxi, airport and ferry transfers, custom tours, and curated Bintan activities with WhatsApp-first reservations.",
    ),
  logoImage: envValue(import.meta.env.PUBLIC_LOGO_IMAGE, "/images/brand/bintan-prestige-gold-logo.png"),
  defaultOgImage: envValue(import.meta.env.PUBLIC_DEFAULT_OG_IMAGE, "/images/brand/bintan-prestige-gold-logo.png"),
  whatsappNumber: envValue(import.meta.env.PUBLIC_WHATSAPP_NUMBER, "6282386357012"),
  whatsappMessage: envValue(
    import.meta.env.PUBLIC_WHATSAPP_MESSAGE,
    "Hello, I want to check availability for a premium taxi or island tour service.",
  ),
  email: envValue(import.meta.env.PUBLIC_CONTACT_EMAIL, "reservation@bintanprestige.com"),
  phone: envValue(import.meta.env.PUBLIC_CONTACT_PHONE, "+62 823-8635-7012"),
  address: envValue(import.meta.env.PUBLIC_BUSINESS_ADDRESS, "Bintan, Riau Islands, Indonesia"),
  addressLocality: envValue(import.meta.env.PUBLIC_ADDRESS_LOCALITY, "Bintan"),
  addressRegion: envValue(import.meta.env.PUBLIC_ADDRESS_REGION, "Riau Islands"),
  addressCountry: envValue(import.meta.env.PUBLIC_ADDRESS_COUNTRY, "ID"),
  responseWindow: envValue(import.meta.env.PUBLIC_RESPONSE_WINDOW, "Daily, 08:00 - 22:00"),
  heroImage: envValue(import.meta.env.PUBLIC_HERO_IMAGE, ""),
  heroImages: csvList(import.meta.env.PUBLIC_HERO_IMAGES),
  heroVideo: envValue(import.meta.env.PUBLIC_HERO_VIDEO, ""),
  googleMapsUrl: envValue(import.meta.env.PUBLIC_GOOGLE_MAPS_URL, ""),
  socialLinks: csvList(import.meta.env.PUBLIC_SOCIAL_LINKS),
};

export type BlogCategory = "Taxi Guide" | "Travel Guide" | "Destination";

export interface BlogGalleryImage {
  src: string;
  alt: string;
}

export interface BlogSection {
  title: string;
  body: string[];
}

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  category: BlogCategory;
  location: string;
  tags: string[];
  publishedAt: string;
  readTime: string;
  heroImage: string;
  heroAlt: string;
  gallery: BlogGalleryImage[];
  favorite?: boolean;
  popularRank?: number;
  intro: string;
  sections: BlogSection[];
  takeaway: string[];
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "bintan-airport-pickup-private-transfer-guide",
    title: "Bintan Airport Pickup Guide for a Smooth Private Transfer",
    excerpt:
      "A simple airport arrival guide for guests who want calm timing, luggage support, and direct hotel movement in Bintan.",
    description:
      "Plan a private airport pickup in Bintan with arrival timing, luggage notes, hotel drop-off planning, and WhatsApp confirmation tips.",
    category: "Taxi Guide",
    location: "Raja Haji Fisabilillah Airport",
    tags: ["Airport pickup", "Private taxi", "Arrival transfer", "Bintan hotel"],
    publishedAt: "2026-07-05",
    readTime: "4 min read",
    heroImage: "/images/cars/toyota-avanza.png",
    heroAlt: "Private car prepared for Bintan airport pickup",
    favorite: true,
    popularRank: 1,
    gallery: [
      { src: "/images/cars/toyota-avanza.png", alt: "Private transfer car for Bintan airport arrival" },
      { src: "/images/cars/luxury-mpv.jpg", alt: "Luxury MPV option for airport transfer in Bintan" },
      { src: "/images/cars/premium-sedan.jpg", alt: "Premium sedan option for private airport pickup" },
    ],
    intro:
      "Airport pickup is usually the first moment that shapes a guest's Bintan trip. A private transfer keeps the arrival calm because pickup timing, luggage space, hotel area, and contact details can be confirmed before landing.",
    sections: [
      {
        title: "Confirm the arrival details early",
        body: [
          "Share the flight arrival time, guest count, luggage count, and hotel name before the trip. These details help the driver prepare the right vehicle size and avoid rushed coordination at the airport.",
          "If the arrival time changes, WhatsApp confirmation keeps the plan flexible without forcing guests to search for transport while carrying luggage.",
        ],
      },
      {
        title: "Choose the vehicle around comfort",
        body: [
          "A couple with light bags may only need a compact private car, while families and groups usually feel better in an MPV or van. The best option depends on luggage volume as much as passenger count.",
          "For premium travel, the goal is not only reaching the hotel. It is making the first movement feel quiet, direct, and already handled.",
        ],
      },
      {
        title: "Keep the route direct but flexible",
        body: [
          "Most airport pickups go directly to the resort, hotel, villa, or ferry connection. If guests need a food stop, SIM card stop, or short errand, it should be mentioned before pickup so the route can be paced properly.",
        ],
      },
    ],
    takeaway: [
      "Send flight time, hotel name, guest count, and luggage notes.",
      "Confirm the vehicle size before arrival.",
      "Use WhatsApp for timing changes and route notes.",
    ],
  },
  {
    slug: "bintan-harbour-pickup-ferry-transfer-guide",
    title: "Bintan Harbour Pickup: Ferry Arrival to Resort Transfer",
    excerpt:
      "A practical guide for guests arriving by ferry who want a private harbour pickup and smooth transfer to hotels or resorts.",
    description:
      "Learn how to plan a private Bintan harbour pickup from ferry arrival points to resorts, hotels, villas, or dinner venues.",
    category: "Taxi Guide",
    location: "Bintan Ferry Harbour",
    tags: ["Harbour pickup", "Ferry transfer", "Private driver", "Resort transfer"],
    publishedAt: "2026-07-05",
    readTime: "4 min read",
    heroImage: "/images/cars/luxury-mpv.jpg",
    heroAlt: "Luxury MPV prepared for ferry harbour pickup in Bintan",
    favorite: true,
    popularRank: 2,
    gallery: [
      { src: "/images/cars/luxury-mpv.jpg", alt: "Private MPV for harbour pickup" },
      { src: "/images/cars/executive-van.jpg", alt: "Executive van option for group ferry transfer" },
      { src: "/images/cars/innova 2.jpg", alt: "Comfort vehicle for Bintan ferry transfer" },
    ],
    intro:
      "Many Bintan visitors arrive by ferry, then continue to resorts, villas, golf areas, restaurants, or island tour starting points. A private harbour pickup helps the trip feel organized from the moment guests exit the terminal.",
    sections: [
      {
        title: "Share ferry timing and terminal notes",
        body: [
          "Ferry arrivals can feel busy, especially when several groups leave the terminal at the same time. Sending the ferry arrival time, passenger name, and destination helps the driver prepare the meeting flow.",
          "If there are immigration or luggage delays, WhatsApp is the easiest way to keep the pickup calm and updated.",
        ],
      },
      {
        title: "Plan the drop-off around the whole day",
        body: [
          "Some guests go straight to the resort, while others need lunch, a beach stop, or a dinner transfer after arrival. Mentioning the full plan makes it easier to recommend direct transfer or a more flexible route.",
        ],
      },
      {
        title: "Match the vehicle to the group",
        body: [
          "Ferry travelers often carry luggage, shopping bags, golf equipment, or family items. A private MPV or van can keep the cabin more comfortable than forcing bags into a smaller car.",
        ],
      },
    ],
    takeaway: [
      "Send ferry arrival time and destination before departure.",
      "Mention luggage, golf bags, or child seats early.",
      "Use a private MPV or van for groups and resort transfers.",
    ],
  },
  {
    slug: "hotel-to-hotel-private-taxi-bintan",
    title: "Hotel to Hotel Private Taxi in Bintan: When to Book Ahead",
    excerpt:
      "Private hotel transfers help guests move between resorts, restaurants, beaches, and ferry points without waiting or guessing.",
    description:
      "A hotel transfer guide for Bintan guests moving between resorts, villas, dinner venues, beaches, and ferry terminals.",
    category: "Taxi Guide",
    location: "Bintan Resorts and Hotels",
    tags: ["Hotel transfer", "Private taxi", "Dinner ride", "Point to point"],
    publishedAt: "2026-07-05",
    readTime: "3 min read",
    heroImage: "/images/cars/innova 2.jpg",
    heroAlt: "Comfort private car for hotel to hotel transfer in Bintan",
    popularRank: 4,
    gallery: [
      { src: "/images/cars/innova 2.jpg", alt: "Comfort vehicle for hotel transfer" },
      { src: "/images/cars/Toyota-Innova_7.png", alt: "Private MPV option for Bintan hotel ride" },
      { src: "/images/cars/executive-van.jpg", alt: "Executive van for group hotel transfer" },
    ],
    intro:
      "Hotel to hotel transfers are useful when guests move from one resort area to another, visit a dinner venue, connect to a ferry terminal, or plan a relaxed day outside the property.",
    sections: [
      {
        title: "Book ahead for time-sensitive movement",
        body: [
          "Dinner reservations, ferry departures, spa appointments, and tour starting times should not depend on last-minute transport. Booking ahead gives the driver a clear pickup time and route.",
        ],
      },
      {
        title: "Keep the pickup point specific",
        body: [
          "Large resorts can have multiple lobbies, villas, beach clubs, and security points. A clear pickup point helps avoid confusion and makes the ride feel more polished.",
        ],
      },
      {
        title: "Use private transfer for multi-stop plans",
        body: [
          "If the day includes restaurant stops, shopping, beach time, or a return pickup, mention the complete plan. A private taxi can be arranged as a simple point-to-point ride or as a more flexible movement plan.",
        ],
      },
    ],
    takeaway: [
      "Confirm exact lobby or villa pickup point.",
      "Book ahead for ferry, dinner, and tour timing.",
      "Share multi-stop plans before the ride starts.",
    ],
  },
  {
    slug: "bintan-mangrove-tour-private-trip-guide",
    title: "Bintan Mangrove Tour Guide for a Calm Nature Escape",
    excerpt:
      "Mangrove routes offer a softer side of Bintan with waterway scenery, local nature, and a slower private-tour rhythm.",
    description:
      "Explore how to plan a Bintan mangrove tour with private pickup, relaxed pacing, photo stops, and WhatsApp trip coordination.",
    category: "Destination",
    location: "Bintan Mangrove",
    tags: ["Mangrove tour", "Nature trip", "Private tour", "Eco travel"],
    publishedAt: "2026-07-05",
    readTime: "5 min read",
    heroImage: "/images/tours/mangrove.jpg",
    heroAlt: "Mangrove scenery for a Bintan private nature tour",
    favorite: true,
    popularRank: 3,
    gallery: [
      { src: "/images/gallery/mangrove 1.png", alt: "Mangrove river route in Bintan" },
      { src: "/images/gallery/mangrove 2.jpg", alt: "Mangrove exploration scenery" },
      { src: "/images/gallery/mangrove 5.jpg", alt: "Mangrove kayaking and nature atmosphere" },
    ],
    intro:
      "A mangrove tour is a good choice for guests who want nature, slower pacing, and a quieter itinerary between beach days. It works well as a half-day plan or as one stop inside a private island route.",
    sections: [
      {
        title: "Why mangrove tours feel different",
        body: [
          "The experience is less about rushing through attractions and more about moving gently through waterways, watching the landscape, and enjoying a cooler nature-focused break from resort areas.",
          "For families, couples, and small groups, mangrove routes are easy to combine with lunch, beach time, or an evening transfer.",
        ],
      },
      {
        title: "Plan around weather and daylight",
        body: [
          "Outdoor nature routes feel better when timing is discussed before the day starts. Rain, tide, and daylight can influence the best pickup window, so flexible WhatsApp coordination is useful.",
        ],
      },
      {
        title: "Make it part of a private route",
        body: [
          "A private driver can connect the mangrove experience with hotel pickup, photo stops, food, and return transfer. This keeps the day smooth without turning the tour into a rigid group schedule.",
        ],
      },
    ],
    takeaway: [
      "Choose mangrove tours for calm nature pacing.",
      "Confirm timing around weather and daylight.",
      "Combine the route with lunch, beach, or hotel transfer.",
    ],
  },
  {
    slug: "bintan-snorkeling-trip-guide-private-tour",
    title: "Bintan Snorkeling Trip Guide for Private Island Guests",
    excerpt:
      "Snorkeling in Bintan is best planned with pickup timing, weather flexibility, gear notes, and a clear return transfer.",
    description:
      "Plan a Bintan snorkeling trip with private transport, weather-aware timing, guest preparation, and flexible island tour support.",
    category: "Destination",
    location: "Bintan Snorkeling Spots",
    tags: ["Snorkeling", "Island tour", "Beach day", "Private transfer"],
    publishedAt: "2026-07-05",
    readTime: "5 min read",
    heroImage: "/images/tours/snorkeling.jpg",
    heroAlt: "Snorkeling trip atmosphere in Bintan Island",
    favorite: true,
    popularRank: 5,
    gallery: [
      { src: "/images/gallery/snorkeling 1.png", alt: "Snorkeling activity in Bintan" },
      { src: "/images/gallery/snorkeling 2.jpg", alt: "Clear water snorkeling tour moment" },
      { src: "/images/gallery/snorkeling 3.jpg", alt: "Private snorkeling island experience" },
    ],
    intro:
      "Snorkeling adds a memorable ocean moment to a Bintan itinerary. The best experience is planned with realistic timing, weather flexibility, and transport that does not leave guests waiting after the activity.",
    sections: [
      {
        title: "Prepare the details before pickup",
        body: [
          "Share guest count, hotel location, preferred date, and whether the group includes children or first-time snorkelers. These details help shape a calmer activity plan.",
          "Guests should also ask about basic preparation such as swimwear, dry clothes, sun protection, and where personal items can be kept during the activity.",
        ],
      },
      {
        title: "Stay flexible with weather",
        body: [
          "Sea-based activities depend on conditions. A private trip plan should leave room for timing adjustment, alternate stops, or a relaxed return transfer if the day changes.",
        ],
      },
      {
        title: "Pair snorkeling with a comfortable route",
        body: [
          "Snorkeling can be combined with beach time, lunch, resort pickup, or ferry drop-off. A private driver makes the flow easier because the transport schedule follows the guests, not the other way around.",
        ],
      },
    ],
    takeaway: [
      "Send guest count and hotel pickup point before booking.",
      "Keep timing flexible for weather and sea conditions.",
      "Arrange return transfer before starting the activity.",
    ],
  },
  {
    slug: "blue-lake-desert-bintan-photo-stop-guide",
    title: "Blue Lake and Desert Bintan: Private Photo Stop Guide",
    excerpt:
      "Blue Lake and the desert-style landscape make an easy private-tour stop for photos, relaxed pacing, and light exploration.",
    description:
      "A private tour guide for visiting Blue Lake and desert-style photo spots in Bintan with pickup planning and route pairing tips.",
    category: "Destination",
    location: "Blue Lake Bintan",
    tags: ["Blue Lake", "Photo stop", "Island tour", "Private route"],
    publishedAt: "2026-07-05",
    readTime: "4 min read",
    heroImage: "/images/tours/blue-lake-2.png",
    heroAlt: "Blue Lake Bintan scenic destination",
    popularRank: 6,
    gallery: [
      { src: "/images/gallery/blue lake.jpg", alt: "Blue Lake Bintan destination view" },
      { src: "/images/gallery/blue-lake-2.png", alt: "Blue Lake and desert-style scenery" },
      { src: "/images/gallery/blue-lake-3.jpg", alt: "Private photo stop at Blue Lake Bintan" },
    ],
    intro:
      "Blue Lake and the desert-style landscape are popular because they are visually striking and easy to understand as a photo stop. The visit works best when folded into a private route instead of treated as a rushed standalone stop.",
    sections: [
      {
        title: "Visit as part of a wider island route",
        body: [
          "A photo stop becomes more enjoyable when paired with lunch, beach time, ATV, mangrove, or another nearby experience. This keeps travel time feeling useful and gives the day a stronger shape.",
        ],
      },
      {
        title: "Plan for light and comfort",
        body: [
          "Open scenic areas can feel bright and warm during the day. Guests should bring sun protection and keep the schedule realistic, especially when traveling with children or older family members.",
        ],
      },
      {
        title: "Keep the driver timing clear",
        body: [
          "Private pickup and return timing help guests enjoy the stop without worrying about how to continue to the next destination. Share the preferred route and final drop-off point before the trip starts.",
        ],
      },
    ],
    takeaway: [
      "Use Blue Lake as a photo stop inside a private route.",
      "Bring sun protection and keep timing comfortable.",
      "Confirm pickup, waiting time, and next destination early.",
    ],
  },
];

export const blogCategories = Array.from(new Set(blogArticles.map((article) => article.category)));
export const blogLocations = Array.from(new Set(blogArticles.map((article) => article.location)));
export const blogTags = Array.from(new Set(blogArticles.flatMap((article) => article.tags)));
export const favoriteBlogArticles = blogArticles
  .filter((article) => article.favorite || article.popularRank)
  .sort((a, b) => (a.popularRank ?? 99) - (b.popularRank ?? 99))
  .slice(0, 4);

export const getBlogArticle = (slug: string) => blogArticles.find((article) => article.slug === slug);

export const getRelatedBlogArticles = (article: BlogArticle, limit = 3) =>
  blogArticles
    .filter((candidate) => candidate.slug !== article.slug)
    .map((candidate) => {
      const tagMatches = candidate.tags.filter((tag) => article.tags.includes(tag)).length;
      const categoryMatch = candidate.category === article.category ? 2 : 0;
      const locationMatch = candidate.location === article.location ? 1 : 0;

      return {
        article: candidate,
        score: tagMatches + categoryMatch + locationMatch + (candidate.favorite ? 1 : 0),
      };
    })
    .sort((a, b) => b.score - a.score || (a.article.popularRank ?? 99) - (b.article.popularRank ?? 99))
    .slice(0, limit)
    .map((item) => item.article);

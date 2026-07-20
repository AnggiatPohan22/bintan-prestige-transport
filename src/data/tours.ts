import { activityPackageAssets } from "./assets";

const whyChooseBintanPrestige = [
  "Professional & friendly drivers",
  "Comfortable & clean vehicles",
  "Flexible itinerary",
  "Competitive prices",
  "Private tours only",
  "Complimentary mineral water",
  "On-time service",
  "English speaking driver available",
  "Family friendly",
  "Corporate service available",
];

const activityTerms = [
  "Prices are quoted in Indonesian Rupiah (IDR).",
  "Entrance tickets and activity tickets are excluded unless otherwise stated.",
  "Rates may vary during public holidays and peak seasons.",
  "Advance booking is highly recommended.",
  "Customized packages are available upon request.",
];

export const tours = [
  {
    title: "Shooting Experience Package",
    slug: "shooting-experience-package",
    description:
      "Experience the thrill of target shooting at Teluk Bintan Shooting Range with certified instructors and international safety standards.",
    overview:
      "A private activity transfer package for guests who want a safe and exciting target shooting experience at Teluk Bintan Shooting Range, with transport, reservation assistance, and clear package options arranged before arrival.",
    image: activityPackageAssets["shooting-experience-package"].card,
    heroImages: activityPackageAssets["shooting-experience-package"].hero,
    gallery: activityPackageAssets["shooting-experience-package"].gallery,
    alt: "Target shooting experience in Bintan",
    priceFrom: "IDR 1,100 K",
    duration: "1-2 hours",
    capacity: "Private activity",
    location: "Teluk Bintan Shooting Range",
    category: "activities",
    mood: "Certified range activity",
    goodFor: ["Adventure travelers", "Corporate groups", "Friends & family", "Team building activities", "International visitors"],
    highlights: [
      "Certified instructors and range supervision",
      "Real gun sport and Remington .308 sniper options",
      "Private hotel to shooting range transportation",
      "Reservation assistance before the activity",
    ],
    packageDetails: [
      {
        title: "Real Gun Sport Package",
        value: "From IDR 1,100,000",
        description:
          "Basic Experience, 20 bullets: IDR 1,100,000. Standard Experience, 30 bullets: IDR 1,600,000. Premium Experience, 40 bullets: IDR 2,200,000.",
      },
      {
        title: "Remington .308 Sniper Experience",
        value: "From IDR 1,100,000",
        description:
          "Basic, 10 bullets: IDR 1,100,000. Premium, 15 bullets: IDR 1,600,000. Ultimate, 30 bullets: IDR 3,000,000.",
      },
      {
        title: "Safety Information",
        description:
          "All shooting activities are supervised by certified instructors and follow the safety standards established by the shooting range. Participants must follow all range staff instructions.",
      },
    ],
    itinerary: [
      "Confirm guest details, preferred package, date, and pickup point",
      "Private pickup from hotel, resort, villa, or ferry terminal",
      "Transfer to Teluk Bintan Shooting Range",
      "Complete activity registration, safety briefing, and selected shooting package",
      "Private return transfer to hotel or selected drop-off point",
    ],
    includes: [
      "Private transportation (hotel to shooting range return)",
      "Professional driver",
      "Air-conditioned vehicle",
      "Complimentary mineral water",
      "Assistance with reservation",
    ],
    excludes: [
      "Shooting package fee charged according to the selected package",
      "Personal expenses",
      "Meals",
    ],
    bookingNotes: [
      "Advance booking is required.",
      "A valid ID or passport may be requested by the shooting range.",
      "Prices for the shooting experience are provided by the activity operator and may change without prior notice.",
      "Transportation charges are provided by Bintan Prestige Transport.",
    ],
    relatedLinks: [
      {
        label: "Customized Tour",
        href: "/packages/activities-packages/customized-tour",
        description: "Build a custom activity day around shooting, food, or photo stops.",
      },
      {
        label: "Avanza or Innova transfer",
        href: "/packages/pick-up-drop/package-transfer-avanza-innova",
        description: "Compare private transport support for compact groups.",
      },
      {
        label: "Contact concierge",
        href: "/contact",
        description: "Confirm range availability, pickup point, and package choice.",
      },
    ],
    whyChoose: whyChooseBintanPrestige,
    terms: activityTerms,
    whatsappMessage: "Hello, I want to ask about the Shooting Experience Package.",
  },
  {
    title: "Mangrove Discovery Tour",
    slug: "mangrove-discovery-tour",
    description:
      "A calm nature tour through Bintan's mangrove forest with wildlife sightings, local guide insight, and private return transfer.",
    overview:
      "Explore Bintan's mangrove ecosystem by boat with a local guide while keeping the trip easy from pickup to return. This activity is ideal for guests who want a soft adventure with nature, wildlife, and quiet river scenery.",
    image: activityPackageAssets["mangrove-discovery-tour"].card,
    heroImages: activityPackageAssets["mangrove-discovery-tour"].hero,
    gallery: activityPackageAssets["mangrove-discovery-tour"].gallery,
    alt: "Mangrove Discovery Tour in Bintan",
    priceFrom: "IDR 350K/pax",
    duration: "1-2 hours",
    capacity: "Private activity",
    category: "activities",
    mood: "Nature and wildlife route",
    goodFor: ["Nature lovers", "Families", "Couples", "Soft adventure", "Morning or afternoon route"],
    highlights: [
      "Explore Bintan's beautiful mangrove forest",
      "Discover wildlife such as monkeys, kingfishers, eagles, and mangrove snakes",
      "Learn about the unique mangrove ecosystem from a local guide",
      "Private return transfer with boat ticket included",
    ],
    packageDetails: [
      {
        title: "Starting from",
        value: "IDR 350,000 per pax",
        description: "Includes private return transfer, driver support, mineral water, mangrove boat ticket, and personal experience.",
      },
      {
        title: "Recommended time",
        description: "Morning: 09.00-11.00. Afternoon: 16.00-18.00.",
      },
      {
        title: "Tour style",
        description: "A relaxing boat-based nature experience with flexible private transfer timing before and after the activity.",
      },
    ],
    itinerary: [
      "Confirm pickup location and preferred morning or afternoon schedule",
      "Private transfer to the mangrove boat departure point",
      "Join the mangrove boat activity with local guide support",
      "Return to the departure point after the boat experience",
      "Private drop-off at hotel, ferry terminal, or selected destination",
    ],
    includes: ["Private return transfer", "Professional driver", "Air-conditioned vehicle", "Complimentary mineral water", "Mangrove boat ticket", "Personal experience"],
    excludes: ["Personal expenses", "Meals"],
    bookingNotes: [
      "Morning and afternoon timings are recommended for comfortable weather and better nature viewing.",
      "Boat operation may depend on local weather and operator conditions.",
      "Guest count and pickup area should be confirmed before final quotation.",
    ],
    relatedLinks: [
      {
        label: "Mangrove tour guide",
        href: "/blog/bintan-mangrove-tour-private-trip-guide",
        description: "Read nature timing, weather notes, and route planning tips.",
      },
      {
        label: "Fireflies Night Tour",
        href: "/packages/activities-packages/fireflies-night-tour",
        description: "Compare the evening mangrove experience before choosing.",
      },
      {
        label: "Bintan Highlights",
        href: "/packages/pick-up-drop/bintan-highlights",
        description: "Pair mangrove with a private highlights route.",
      },
    ],
    whyChoose: whyChooseBintanPrestige,
    terms: activityTerms,
    whatsappMessage: "Hello, I want to ask about the Mangrove Discovery Tour.",
  },
  {
    title: "Fireflies Night Tour",
    slug: "fireflies-night-tour",
    description:
      "A peaceful evening boat experience to see thousands of fireflies lighting up the mangrove trees after sunset.",
    overview:
      "Enjoy a magical night activity in Bintan with private return transport and a fireflies boat experience. This package is designed for guests who want a relaxed after-dinner nature moment without complicated transport planning.",
    image: activityPackageAssets["fireflies-night-tour"].card,
    heroImages: activityPackageAssets["fireflies-night-tour"].hero,
    gallery: activityPackageAssets["fireflies-night-tour"].gallery,
    alt: "Fireflies night tour in Bintan mangrove",
    priceFrom: "IDR 350K/pax",
    duration: "1-2 hours",
    capacity: "Private activity",
    category: "activities",
    mood: "Magical night nature",
    goodFor: ["Couples", "Families", "Evening activity", "Nature lovers", "Relaxed night plan"],
    highlights: [
      "Thousands of fireflies lighting up mangrove trees after sunset",
      "Private return transfer for a simple evening plan",
      "Fireflies boat experience included",
      "Comfortable timing for hotel and resort guests",
    ],
    packageDetails: [
      {
        title: "Starting from",
        value: "IDR 350,000 per pax",
        description: "Includes private return transfer, driver support, mineral water, mangrove boat ticket, personal experience, and fireflies boat.",
      },
      {
        title: "Best time",
        description: "7.00 PM-9.00 PM is recommended for the fireflies night experience.",
      },
      {
        title: "Tour style",
        description: "A short evening activity with quiet boat movement, nature atmosphere, and easy return transport.",
      },
    ],
    itinerary: [
      "Confirm hotel pickup point and preferred evening timing",
      "Private transfer to the fireflies boat departure point",
      "Join the night boat experience through the mangrove area",
      "Enjoy the fireflies viewing session after sunset",
      "Private return transfer to hotel or selected destination",
    ],
    includes: ["Private return transfer", "Professional driver", "Air-conditioned vehicle", "Complimentary mineral water", "Mangrove boat ticket", "Personal experience", "Fireflies boat"],
    excludes: ["Personal expenses", "Meals"],
    bookingNotes: [
      "Best viewing depends on weather, moonlight, and local operating conditions.",
      "Advance booking is recommended for evening boat availability.",
      "Bring comfortable clothing and follow local boat operator safety guidance.",
    ],
    relatedLinks: [
      {
        label: "Mangrove tour guide",
        href: "/blog/bintan-mangrove-tour-private-trip-guide",
        description: "Understand mangrove timing and weather before booking.",
      },
      {
        label: "Mangrove Discovery Tour",
        href: "/packages/activities-packages/mangrove-discovery-tour",
        description: "Compare the daytime nature route with the night experience.",
      },
      {
        label: "Contact concierge",
        href: "/contact",
        description: "Confirm evening boat availability and hotel return timing.",
      },
    ],
    whyChoose: whyChooseBintanPrestige,
    terms: activityTerms,
    whatsappMessage: "Hello, I want to ask about the Fireflies Night Tour.",
  },
  {
    title: "Snorkeling Adventure",
    slug: "snorkeling-adventure",
    description:
      "A half-day marine activity for clear water, coral reefs, tropical fish, and relaxed beach time with private transport support.",
    overview:
      "Plan a snorkeling day in Bintan with private transportation and flexible add-ons such as equipment, speed boat, and local guide support. This package works well for beginners, families, and guests who want an easy beach activity.",
    image: activityPackageAssets["snorkeling-adventure"].card,
    heroImages: activityPackageAssets["snorkeling-adventure"].hero,
    gallery: activityPackageAssets["snorkeling-adventure"].gallery,
    alt: "Snorkeling Adventure in Bintan",
    priceFrom: "IDR 400K/pax",
    duration: "Half day (4 hours)",
    capacity: "Private activity",
    category: "activities",
    mood: "Marine soft adventure",
    goodFor: ["Beginners", "Families", "Beach lovers", "Small groups", "Marine activity"],
    highlights: ["Crystal-clear water", "Colorful coral reefs", "Tropical fish", "Great for beginners and families"],
    packageDetails: [
      {
        title: "Starting from",
        value: "IDR 400,000 per pax",
        description: "Includes private transportation, driver, and mineral water. Optional snorkeling equipment, speed boat, and local guide can be arranged.",
      },
      {
        title: "Optional add-ons",
        description: "Snorkeling equipment, speed boat, and local guide are available upon request based on activity operator availability.",
      },
      {
        title: "Tour style",
        description: "A half-day water activity with private land transport and flexible beach pacing.",
      },
    ],
    itinerary: [
      "Confirm pickup point, guest count, and snorkeling add-on needs",
      "Private transfer to the snorkeling area or boat departure point",
      "Prepare equipment and join snorkeling activity",
      "Enjoy beach or short rest time after the activity",
      "Private return transfer to hotel or selected destination",
    ],
    includes: ["Private transportation", "Driver", "Mineral water"],
    excludes: ["Personal expenses", "Meals"],
    bookingNotes: [
      "Snorkeling depends on weather and sea conditions.",
      "Guests should confirm swim comfort and equipment needs before booking.",
      "Optional boat, guide, and equipment fees should be confirmed separately.",
    ],
    relatedLinks: [
      {
        label: "Snorkeling trip guide",
        href: "/blog/bintan-snorkeling-trip-guide-private-tour",
        description: "Read preparation and weather-flexible planning notes.",
      },
      {
        label: "Beach Hopping Tour",
        href: "/packages/activities-packages/beach-hopping-tour",
        description: "Pair snorkeling with a relaxed beach day route.",
      },
      {
        label: "Bintan Highlights",
        href: "/packages/pick-up-drop/bintan-highlights",
        description: "Compare a land route if weather changes the water plan.",
      },
    ],
    whyChoose: whyChooseBintanPrestige,
    terms: activityTerms,
    whatsappMessage: "Hello, I want to ask about the Snorkeling Adventure.",
  },
  {
    title: "Fishing Trip",
    slug: "fishing-trip",
    description:
      "A half-day fishing activity around Bintan waters with local fishermen, fishing boat support, and private transportation.",
    overview:
      "Enjoy a relaxed fishing trip around Bintan with experienced local fishermen and private land transport. This activity is best for guests who want a simple sea experience with boat and equipment coordination included.",
    image: activityPackageAssets["fishing-trip"].card,
    heroImages: activityPackageAssets["fishing-trip"].hero,
    gallery: activityPackageAssets["fishing-trip"].gallery,
    alt: "Fishing trip around Bintan waters",
    priceFrom: "IDR 1,500K/pax",
    duration: "Half day (5 hours)",
    capacity: "Private activity",
    category: "activities",
    mood: "Local sea activity",
    goodFor: ["Fishing lovers", "Friends", "Families", "Local sea experience", "Early morning activity"],
    highlights: [
      "Fishing around the beautiful waters of Bintan",
      "Experienced local fishermen support",
      "Fishing boat and equipment included",
      "Private transportation to and from the activity point",
    ],
    packageDetails: [
      {
        title: "Starting from",
        value: "IDR 1,500,000 per pax",
        description: "Includes private transportation, driver, mineral water, fishing boat, and fishing equipment.",
      },
      {
        title: "Best time",
        description:
          "Early morning around 06.00-10.00 is recommended for cooler weather and active fish movement. Afternoon trips around 15.00-18.00 may be arranged by request, depending on tide and weather.",
      },
      {
        title: "Request notes",
        description: "Share target timing, guest count, and preferred fishing style so the local operator can recommend the most suitable plan.",
      },
    ],
    itinerary: [
      "Confirm pickup point, guest count, and preferred fishing time",
      "Private transfer to fishing boat departure point",
      "Meet local fishermen and prepare fishing equipment",
      "Enjoy the half-day fishing trip around Bintan waters",
      "Return by boat and private transfer back to hotel or selected destination",
    ],
    includes: ["Private transportation", "Driver", "Mineral water", "Fishing boat", "Fishing equipment"],
    excludes: ["Personal expenses", "Meals"],
    bookingNotes: [
      "Fishing schedule depends on tide, weather, and operator recommendation.",
      "Morning is generally preferred for comfort and activity conditions.",
      "Custom timing can be requested before confirmation.",
    ],
    relatedLinks: [
      {
        label: "Customized Tour",
        href: "/packages/activities-packages/customized-tour",
        description: "Shape a custom route around fishing, lunch, or return timing.",
      },
      {
        label: "Beach Hopping Tour",
        href: "/packages/activities-packages/beach-hopping-tour",
        description: "Compare a softer coastal plan for mixed groups.",
      },
      {
        label: "Contact concierge",
        href: "/contact",
        description: "Confirm tide, boat timing, and pickup location.",
      },
    ],
    whyChoose: whyChooseBintanPrestige,
    terms: activityTerms,
    whatsappMessage: "Hello, I want to ask about the Fishing Trip.",
  },
  {
    title: "Golf Transfer",
    slug: "golf-transfer",
    description:
      "A private transfer service for Bintan golf guests heading to Ria Bintan Golf Club or Laguna Golf Bintan.",
    overview:
      "Keep your golf day smooth with private pickup, flexible timing, and direct transfer to Bintan's golf destinations. This package is transport-focused and can be arranged around tee time, hotel location, and return plan.",
    image: activityPackageAssets["golf-transfer"].card,
    heroImages: activityPackageAssets["golf-transfer"].hero,
    gallery: activityPackageAssets["golf-transfer"].gallery,
    alt: "Golf transfer in Bintan",
    priceFrom: "IDR 500K/trip",
    duration: "Available daily",
    capacity: "Private transfer",
    category: "activities",
    mood: "Golf day transport",
    goodFor: ["Golf guests", "Resort guests", "Private transfer", "Flexible pickup", "Small groups"],
    highlights: [
      "Private transfer to Bintan golf destinations",
      "Flexible pickup time around tee schedule",
      "Professional driver support",
      "Simple return planning available by request",
    ],
    packageDetails: [
      {
        title: "Starting from",
        value: "IDR 500,000 per trip",
        description: "Private transfer with professional driver and flexible pickup timing.",
      },
      {
        title: "Golf destinations",
        description: "Ria Bintan Golf Club and Laguna Golf Bintan.",
      },
      {
        title: "Available daily",
        description: "Pickup and return can be arranged around tee time, hotel location, and guest schedule.",
      },
    ],
    itinerary: [
      "Confirm golf destination, tee time, pickup point, and guest count",
      "Private pickup from hotel, resort, villa, or ferry terminal",
      "Direct transfer to the selected golf destination",
      "Optional waiting or return pickup based on confirmed plan",
      "Drop-off at hotel or selected destination",
    ],
    includes: ["Private transfer", "Professional driver", "Flexible pickup time"],
    excludes: ["Golf green fees", "Personal expenses", "Meals"],
    bookingNotes: [
      "Confirm tee time before booking transfer.",
      "Golf fees, cart, caddie, and equipment are not included unless requested.",
      "Return transfer or waiting arrangement should be confirmed in advance.",
    ],
    relatedLinks: [
      {
        label: "Hotel transfer guide",
        href: "/blog/hotel-to-hotel-private-taxi-bintan",
        description: "Read timing notes for hotel, resort, and appointment transfers.",
      },
      {
        label: "Alphard premium transfer",
        href: "/packages/pick-up-drop/package-transfer-alphard",
        description: "Compare a premium cabin option for golf day movement.",
      },
      {
        label: "Hiace group transfer",
        href: "/packages/pick-up-drop/package-transfer-hiace",
        description: "Useful for golf groups carrying more equipment.",
      },
    ],
    whyChoose: whyChooseBintanPrestige,
    terms: activityTerms,
    whatsappMessage: "Hello, I want to ask about Golf Transfer.",
  },
  {
    title: "Shopping Tour",
    slug: "shopping-tour",
    description:
      "A private shopping route for Plaza Lagoi, souvenir shops, traditional markets, and oleh-oleh stops with flexible driver timing.",
    overview:
      "Spend a relaxed shopping day in Bintan with private transportation and driver support. This package is designed for guests who want souvenir stops, local market browsing, and flexible pickup or return timing.",
    image: activityPackageAssets["shopping-tour"].card,
    heroImages: activityPackageAssets["shopping-tour"].hero,
    gallery: activityPackageAssets["shopping-tour"].gallery,
    alt: "Shopping tour in Bintan",
    priceFrom: "IDR 600K/car",
    duration: "4-6 hours",
    capacity: "Private car",
    category: "activities",
    mood: "Flexible local shopping",
    goodFor: ["Souvenir hunting", "Families", "Resort guests", "Local market visit", "Flexible route"],
    highlights: [
      "Visit Plaza Lagoi and local shopping stops",
      "Private transportation with driver support",
      "Flexible pacing for browsing and souvenir shopping",
      "Easy route pairing with lunch or local snack stops",
    ],
    packageDetails: [
      {
        title: "Starting from",
        value: "IDR 600,000 per car",
        description: "Private transportation, driver, and mineral water included for a 4-6 hour shopping route.",
      },
      {
        title: "Destinations",
        description: "Plaza Lagoi, local souvenir shops, traditional market, and oleh-oleh centre.",
      },
      {
        title: "Tour style",
        description: "A flexible private car route for shopping, local browsing, and easy return coordination.",
      },
    ],
    itinerary: [
      "Confirm pickup point and preferred shopping stops",
      "Visit Plaza Lagoi or selected shopping area",
      "Continue to local souvenir shops, traditional market, or oleh-oleh centre",
      "Optional food or coffee stop based on timing",
      "Private drop-off at hotel, ferry terminal, or selected destination",
    ],
    includes: ["Private transportation", "Driver", "Mineral water"],
    excludes: ["Shopping expenses", "Personal expenses", "Meals"],
    bookingNotes: [
      "Shopping destinations can be adjusted based on guest interest.",
      "Store opening hours may vary.",
      "Share specific shopping requests before booking.",
    ],
    relatedLinks: [
      {
        label: "Hotel transfer guide",
        href: "/blog/hotel-to-hotel-private-taxi-bintan",
        description: "Plan resort pickup, dinner, and return timing around shopping.",
      },
      {
        label: "Tanjung Pinang City Tour",
        href: "/packages/pick-up-drop/tanjung-pinang-city-tour",
        description: "Pair shopping with city culture and local food stops.",
      },
      {
        label: "Customized Tour",
        href: "/packages/activities-packages/customized-tour",
        description: "Shape shopping stops into a custom private route.",
      },
    ],
    whyChoose: whyChooseBintanPrestige,
    terms: activityTerms,
    whatsappMessage: "Hello, I want to ask about the Shopping Tour.",
  },
  {
    title: "Spa & Wellness Experience",
    slug: "spa-wellness-experience",
    description:
      "Relax and rejuvenate with professional spa treatments across Bintan Island, with transportation available upon request.",
    overview:
      "Create a calm wellness plan in Bintan with spa treatment options and optional private transport. This experience suits couples, families, and resort guests who want a slow, restorative activity.",
    image: activityPackageAssets["spa-wellness-experience"].card,
    heroImages: activityPackageAssets["spa-wellness-experience"].hero,
    gallery: activityPackageAssets["spa-wellness-experience"].gallery,
    alt: "Spa and wellness experience in Bintan",
    priceFrom: "By packages",
    duration: "Flexible",
    capacity: "Private activity",
    category: "activities",
    mood: "Wellness and slow travel",
    goodFor: ["Couples", "Wellness guests", "Relaxed day", "Resort guests", "Private transport add-on"],
    highlights: [
      "Professional spa treatments across Bintan Island",
      "Traditional massage, aromatherapy, reflexology, scrub, and couple spa options",
      "Transportation available upon request",
      "Flexible timing based on selected spa package",
    ],
    packageDetails: [
      {
        title: "Price",
        value: "By packages",
        description: "Final price depends on selected spa venue, treatment type, duration, and transport request.",
      },
      {
        title: "Available treatments",
        description: "Traditional Indonesian Massage, Aromatherapy Massage, Foot Reflexology, Body Scrub, and Couple Spa.",
      },
      {
        title: "Transportation",
        description: "Private transportation is available upon request and can be coordinated with your treatment time.",
      },
    ],
    itinerary: [
      "Confirm treatment preference, date, time, and pickup point",
      "Private transfer to selected spa venue if transportation is requested",
      "Enjoy selected spa or wellness treatment",
      "Optional relaxed stop after treatment based on schedule",
      "Private return transfer to hotel or selected destination",
    ],
    includes: ["Treatment coordination", "Transportation available upon request", "Flexible schedule support", "WhatsApp concierge"],
    excludes: ["Spa treatment fee unless confirmed in the selected package", "Personal expenses", "Meals"],
    bookingNotes: [
      "Spa treatment availability and package menu should be confirmed before booking.",
      "Treatment duration may vary by selected package.",
      "Transportation charges are confirmed based on pickup area and route.",
    ],
    relatedLinks: [
      {
        label: "Hotel transfer guide",
        href: "/blog/hotel-to-hotel-private-taxi-bintan",
        description: "Read when to book private pickup for appointment-based movement.",
      },
      {
        label: "Alphard premium transfer",
        href: "/packages/pick-up-drop/package-transfer-alphard",
        description: "Compare premium transport support for wellness plans.",
      },
      {
        label: "Contact concierge",
        href: "/contact",
        description: "Confirm spa timing, treatment choice, and route support.",
      },
    ],
    whyChoose: whyChooseBintanPrestige,
    terms: activityTerms,
    whatsappMessage: "Hello, I want to ask about the Spa & Wellness Experience.",
  },
  {
    title: "Beach Hopping Tour",
    slug: "beach-hopping-tour",
    description:
      "A flexible full-day beach route for Trikora Beach, Lagoi Bay, and optional White Sands Island with private vehicle support.",
    overview:
      "Visit Bintan beach spots at a comfortable private pace with time for swimming, relaxing, and photography. This package can be shaped around route distance, guest interest, and optional island stop availability.",
    image: activityPackageAssets["beach-hopping-tour"].card,
    heroImages: activityPackageAssets["beach-hopping-tour"].hero,
    gallery: activityPackageAssets["beach-hopping-tour"].gallery,
    alt: "Beach hopping tour in Bintan",
    priceFrom: "By routes",
    duration: "Full day",
    capacity: "Private route",
    category: "activities",
    mood: "Beach day route",
    goodFor: ["Beach lovers", "Photography", "Families", "Couples", "Flexible day tour"],
    highlights: [
      "Visit Trikora Beach and Lagoi Bay",
      "White Sands Island optional by request",
      "Perfect for swimming, relaxing, and photography",
      "Private route pacing with flexible return",
    ],
    packageDetails: [
      {
        title: "Price",
        value: "By routes",
        description: "Final price depends on pickup area, selected beach route, guest count, and optional island stop request.",
      },
      {
        title: "Visit",
        description: "Trikora Beach, Lagoi Bay, and White Sands Island as an optional request.",
      },
      {
        title: "Perfect for",
        description: "Swimming, relaxing, photography, beach walking, and a slower full-day island pace.",
      },
    ],
    itinerary: [
      "Confirm pickup point, route preference, and beach stops",
      "Private transfer to the first beach destination",
      "Continue beach hopping with flexible photo and rest time",
      "Optional White Sands Island coordination if requested and available",
      "Private return transfer to hotel or selected destination",
    ],
    includes: ["Private vehicle", "Professional driver", "Flexible beach route", "Complimentary mineral water"],
    excludes: ["Entrance tickets", "Activity tickets", "Personal expenses", "Meals"],
    bookingNotes: [
      "Beach route may vary by pickup location and weather.",
      "Optional island stop availability should be confirmed before booking.",
      "Bring swimwear, sun protection, and spare clothes if planning to swim.",
    ],
    relatedLinks: [
      {
        label: "Snorkeling trip guide",
        href: "/blog/bintan-snorkeling-trip-guide-private-tour",
        description: "Read water activity preparation and weather notes.",
      },
      {
        label: "Blue Lake photo guide",
        href: "/blog/blue-lake-desert-bintan-photo-stop-guide",
        description: "Pair beach time with a private photo-stop route.",
      },
      {
        label: "Bintan Highlights",
        href: "/packages/pick-up-drop/bintan-highlights",
        description: "Compare a broader route with beach and resort-area stops.",
      },
    ],
    whyChoose: whyChooseBintanPrestige,
    terms: activityTerms,
    whatsappMessage: "Hello, I want to ask about the Beach Hopping Tour.",
  },
  {
    title: "Customized Tour",
    slug: "customized-tour",
    description:
      "Create your own private itinerary in Bintan based on your interests, timing, group type, and preferred destinations.",
    overview:
      "Build a flexible private tour around your own interests, from couples and families to corporate groups, school trips, honeymoon guests, and cruise passengers. The route can be planned around comfort, timing, and the places you want to visit.",
    image: activityPackageAssets["customized-tour"].card,
    heroImages: activityPackageAssets["customized-tour"].hero,
    gallery: activityPackageAssets["customized-tour"].gallery,
    alt: "Customized private tour in Bintan",
    priceFrom: "By routes",
    duration: "Flexible",
    capacity: "Private itinerary",
    category: "activities",
    mood: "Custom private route",
    goodFor: ["Couples", "Families", "Corporate groups", "School trips", "Honeymoon", "Cruise passengers"],
    highlights: [
      "Create your own itinerary based on your interests",
      "Private vehicle and professional driver",
      "Flexible route and timing",
      "Suitable for leisure, corporate, school, honeymoon, and cruise groups",
    ],
    packageDetails: [
      {
        title: "Price",
        value: "By routes",
        description: "Final quotation depends on selected destinations, pickup area, route distance, guest count, and duration.",
      },
      {
        title: "Suitable for",
        description: "Couples, families, corporate groups, school trips, honeymoon guests, and cruise passengers.",
      },
      {
        title: "Flexible itinerary",
        description: "Choose your preferred stops and let the team help shape the timing into a practical private route.",
      },
    ],
    itinerary: [
      "Share your interests, guest count, date, pickup point, and preferred duration",
      "Receive a suggested route flow based on your priorities",
      "Confirm vehicle, timing, and key stops through WhatsApp",
      "Enjoy the custom private route with driver support",
      "Finish with drop-off at hotel, ferry terminal, restaurant, or selected point",
    ],
    includes: ["Private vehicle", "Professional driver", "Flexible itinerary", "Complimentary mineral water"],
    excludes: ["Entrance tickets", "Activity tickets", "Personal expenses", "Meals"],
    bookingNotes: [
      "Customized packages are available upon request.",
      "Advance booking helps create a smoother route plan.",
      "Share must-visit places and timing limits before confirmation.",
    ],
    relatedLinks: [
      {
        label: "Blue Lake photo guide",
        href: "/blog/blue-lake-desert-bintan-photo-stop-guide",
        description: "Use this guide to plan photo stops inside a private route.",
      },
      {
        label: "Bintan Highlights",
        href: "/packages/pick-up-drop/bintan-highlights",
        description: "Start from a proven highlights route before customizing.",
      },
      {
        label: "Contact concierge",
        href: "/contact",
        description: "Send your must-visit places and timing limits.",
      },
    ],
    whyChoose: whyChooseBintanPrestige,
    terms: activityTerms,
    whatsappMessage: "Hello, I want to ask about a Customized Tour.",
  },
];

/* ==========================================================================
   VAYU HOLIDAYS — SEED DATASET (2026 LUXURY TRAVEL EDITION)
   Authentic Brand Details, Curated Packages, Day-wise Itineraries, Services
   ========================================================================== */

const INITIAL_DATA = {
  company: {
    name: "Vayu Holidays",
    tagline: "Your Journey. Beautifully Planned.",
    type: "Travel Agency & Tour Operator",
    office: "Raksha Vihar, Vayu Residency, Airport Road, Bhopal, Madhya Pradesh, India - 462030",
    phone: "+91 755 492 8899",
    whatsapp: "+91 98260 12345",
    whatsappMessage: "Hello Vayu Holidays Concierge, I would like to inquire about planning a luxury journey.",
    email: "concierge@vayuholidays.com",
    supportEmail: "travel@vayuholidays.com",
    hours: "Mon - Sat: 9:30 AM – 7:30 PM | 24/7 VIP Traveler Support",
    leadership: [
      {
        name: "Simran Singh Sengar",
        role: "Chairman",
        bio: "Providing vision and strategic stewardship, championing trust, hospitality, and bespoke luxury travel from Central India to the world."
      },
      {
        name: "Shubham Vishwkarma",
        role: "Managing Director & CEO",
        bio: "Leading executive operations, international partnerships, bespoke itinerary architecture, and cutting-edge guest experiences."
      },
      {
        name: "Hardik Singh Sengar",
        role: "Director",
        bio: "Directing strategic alliances, domestic destination expansion, MICE partnerships, and premium customer journey management."
      }
    ]
  },

  destinations: [
    {
      id: "kashmir",
      name: "Kashmir & Ladakh",
      type: "domestic",
      tagline: "Paradise in Bloom & High Pass Vistas",
      image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
      description: "Pristine pine valleys of Pahalgam, snow-draped Gulmarg meadows, Dal Lake shikhara serenades, and Pangong blue horizons.",
      packagesCount: 4,
      startingPrice: 32500,
      featured: true
    },
    {
      id: "kerala",
      name: "Kerala Backwaters",
      type: "domestic",
      tagline: "God's Own Country in Quiet Luxury",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
      description: "Private luxury houseboats in Alleppey, emerald tea gardens of Munnar, spice trails, and Ayurvedic wellness sanctuaries.",
      packagesCount: 3,
      startingPrice: 28900,
      featured: true
    },
    {
      id: "rajasthan",
      name: "Royal Rajasthan",
      type: "domestic",
      tagline: "Imperial Palaces & Thar Desert Sunset",
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
      description: "Lake Palace Udaipur sunsets, Amber Fort majesty in Jaipur, desert glamping in Jaisalmer, and timeless Rajputana heritage.",
      packagesCount: 5,
      startingPrice: 36000,
      featured: true
    },
    {
      id: "dubai",
      name: "Dubai & Abu Dhabi",
      type: "international",
      tagline: "Futuristic Skyline & Private Desert Caravans",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
      description: "Ultra-modern architecture, private yacht sails along the Marina, Burj Khalifa Sky lounge, and Bedouin desert sanctuaries.",
      packagesCount: 4,
      startingPrice: 58000,
      featured: true
    },
    {
      id: "bali",
      name: "Bali & Nusa Penida",
      type: "international",
      tagline: "Tropical Sanctuaries & Cliffside Temples",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
      description: "Private jungle pool villas in Ubud, turquoise waves at Kelingking cliff, sunset fire dances, and Balinese holistic wellness.",
      packagesCount: 4,
      startingPrice: 48500,
      featured: true
    },
    {
      id: "switzerland",
      name: "Swiss Alps & Lakes",
      type: "international",
      tagline: "Timeless Alpine Panorama & Scenic Trains",
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80",
      description: "Glacier Express panoramic rail, Zermatt Matterhorn views, Lucerne lake cruises, and fairytale chalet hospitality.",
      packagesCount: 3,
      startingPrice: 165000,
      featured: true
    },
    {
      id: "maldives",
      name: "The Maldives",
      type: "international",
      tagline: "Overwater Villas & Azure Coral Lagoons",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
      description: "Private seaplane transfers, glass-floor ocean pavilions, reef snorkeling with manta rays, and world-class culinary curation.",
      packagesCount: 3,
      startingPrice: 110000,
      featured: true
    },
    {
      id: "vietnam",
      name: "Vietnam & Indochina",
      type: "international",
      tagline: "Emerald Karsts & Ancient Lantern Towns",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
      description: "Ha Long Bay luxury boutique overnight cruise, Hoi An lantern quarters, French colonial Hanoi, and Golden Bridge in Ba Na Hills.",
      packagesCount: 3,
      startingPrice: 52000,
      featured: false
    }
  ],

  packages: [
    {
      id: "pkg-kashmir-01",
      title: "Paradise in Bloom: Srinagar, Gulmarg & Pahalgam",
      slug: "paradise-in-bloom-kashmir",
      destinationId: "kashmir",
      destinationName: "Kashmir, India",
      category: "domestic",
      experienceType: "honeymoon",
      durationDays: 6,
      durationNights: 5,
      price: 36500,
      originalPrice: 42000,
      rating: 4.95,
      reviewsCount: 84,
      image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      ],
      tag: "Signature Domestic",
      highlights: [
        "Private heritage luxury Houseboat stay on Nigeen / Dal Lake",
        "Phase 1 & Phase 2 Gondola Cable Ride in Gulmarg",
        "Pahalgam Betaab & Aru Valley private excursion",
        "Sunset Shikara ride with Kahwa tasting"
      ],
      overview: "Experience the ethereal magic of Kashmir in supreme comfort. Handcrafted by Vayu Holidays, this journey balances peaceful moments on cedar-wood royal houseboats with the thrilling alpine grandeur of Gulmarg and the tranquil pine meadows of Pahalgam.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Srinagar & Royal Dal Lake Shikara",
          description: "Arrive at Sheikh Ul-Alam International Airport Srinagar where your dedicated chauffeur greets you with warm Kashmiri hospitality. Transfer to your luxury houseboat. In the late afternoon, embark on an exclusive sunset Shikara ride across Dal Lake and through the floating lotus gardens.",
          meals: "Dinner Included",
          stay: "Luxury Heritage Houseboat (Nigeen/Dal Lake)"
        },
        {
          day: 2,
          title: "Srinagar to Gulmarg: Meadow of Flowers & Gondola Skyway",
          description: "After breakfast, scenic drive to Gulmarg (2,730m). Board the famous Gulmarg Gondola — one of the highest in the world — ascending to Kongdoori and onward to Apharwat Peak for breathtaking views of Nanga Parbat and Pir Panjal range.",
          meals: "Breakfast & Dinner",
          stay: "Boutique Alpine Resort, Gulmarg"
        },
        {
          day: 3,
          title: "Gulmarg to Pahalgam: Valley of Shepherds via Saffron Fields",
          description: "Traverse scenic mountain corridors through the famous Pampore saffron fields and ancient Awantipora ruins. Arrive at Pahalgam, situated beside the rushing Lidder River.",
          meals: "Breakfast & Dinner",
          stay: "Riverside Luxury Resort, Pahalgam"
        },
        {
          day: 4,
          title: "Pahalgam: Betaab Valley, Aru & Chandanwari",
          description: "A full day exploring the pristine Betaab Valley, named after the Bollywood classic, and picturesque Aru Valley surrounded by snow peaks and alpine woods. Evening at leisure strolling Pahalgam local handicraft bazaars.",
          meals: "Breakfast & Dinner",
          stay: "Riverside Luxury Resort, Pahalgam"
        },
        {
          day: 5,
          title: "Pahalgam to Srinagar & Mughal Gardens Discovery",
          description: "Return to Srinagar for a private heritage tour of Shalimar Bagh, Nishat Bagh, and the historic Shankaracharya Temple offering panoramic vistas of the entire Kashmir Valley.",
          meals: "Breakfast & Dinner",
          stay: "5-Star Hotel / Luxury Resort, Srinagar"
        },
        {
          day: 6,
          title: "Departure with Unforgettable Memories",
          description: "Enjoy a leisurely morning Kahwa tea breakfast. Your chauffeur transfers you to Srinagar Airport in time for your homeward flight with cherished memories.",
          meals: "Breakfast Included",
          stay: "Check-out"
        }
      ],
      inclusions: [
        "05 Nights accommodation in handpicked 4★ & 5★ luxury properties",
        "01 Night in private Royal Houseboat with traditional heating",
        "Daily lavish buffet breakfast and multi-course chef dinners",
        "Private chauffeur-driven luxury vehicle (Innova Crysta / Luxury Coach)",
        "Exclusive 01-Hour Shikara ride on Dal Lake with Kahwa",
        "All toll taxes, parking, driver allowances, and fuel charges",
        "24/7 Vayu Holidays dedicated trip concierge support"
      ],
      exclusions: [
        "Airfare / Train tickets (Available on request via our Flight Desk)",
        "Gulmarg Gondola tickets (Can be pre-booked directly by our concierge)",
        "Pahalgam local union pony or village vehicle charges if required",
        "Personal expenses, laundry, tips, and personal insurance"
      ],
      hotelInfo: "Properties featured include Khyber Himalayan Resort / Pine N Peak / Mascot Houseboats or certified luxury equivalent.",
      bestTime: "April to October (Floral & Green) | Dec to Feb (Snow & Skiing)"
    },

    {
      id: "pkg-kerala-01",
      title: "Enchanted Backwaters & Misty Munnar Sanctuaries",
      slug: "enchanted-backwaters-misty-munnar",
      destinationId: "kerala",
      destinationName: "Kerala, India",
      category: "domestic",
      experienceType: "luxury",
      durationDays: 5,
      durationNights: 4,
      price: 29500,
      originalPrice: 34500,
      rating: 4.92,
      reviewsCount: 68,
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
      ],
      tag: "Best Seller",
      highlights: [
        "Private air-conditioned luxury houseboat in Alleppey backwaters",
        "Munnar sprawling tea gardens & Mattupetty Dam",
        "Authentic Kathakali and Kalaripayattu martial art performance",
        "Traditional Kerala spice plantation guided aroma walk"
      ],
      overview: "Immerse yourself in God's Own Country with Vayu Holidays. Drift through the palm-fringed tranquility of Vembanad Lake on a private luxury houseboat and breathe the crisp mountain air in the misty rolling tea plantations of Munnar.",
      itinerary: [
        {
          day: 1,
          title: "Cochin to Munnar: Into the Misty Hills",
          description: "Arrive at Cochin Airport. Chauffeur reception and scenic drive through Cheeyappara and Valara waterfalls into Munnar. Check into your luxury hillside resort.",
          meals: "Dinner Included",
          stay: "Luxury Tea Resort, Munnar"
        },
        {
          day: 2,
          title: "Munnar: Tea Museum, Eravikulam & Mattupetty",
          description: "Visit Eravikulam National Park (home to the endangered Nilgiri Tahr), Tata Tea Museum, Mattupetty Dam, and Echo Point. Evening spice garden tour.",
          meals: "Breakfast & Dinner",
          stay: "Luxury Tea Resort, Munnar"
        },
        {
          day: 3,
          title: "Munnar to Thekkady: Periyar Wildlife Sanctuary",
          description: "Scenic descent to Thekkady. Bamboo rafting / boat safari on Periyar Lake to spot wild elephants and birdlife. Evening Kathakali cultural show.",
          meals: "Breakfast & Dinner",
          stay: "Forest Canopy Luxury Retreat, Thekkady"
        },
        {
          day: 4,
          title: "Thekkady to Alleppey: The Private Luxury Houseboat Cruise",
          description: "Board your private luxury houseboat at noon. Cruise through the backwater canals, witnessing traditional village life. Onboard freshly prepared chef meals.",
          meals: "Breakfast, Lunch, High Tea & Dinner",
          stay: "Private Premium Houseboat, Alleppey"
        },
        {
          day: 5,
          title: "Alleppey to Cochin Departure",
          description: "Disembark after morning breakfast cruise. Transfer to Cochin Airport or railway station for onward departure.",
          meals: "Breakfast Included",
          stay: "Check-out"
        }
      ],
      inclusions: [
        "04 Nights accommodation in boutique & luxury properties",
        "01 Night exclusive private luxury houseboat cruise in Alleppey",
        "All meals on the houseboat prepared by dedicated private chef",
        "Daily gourmet breakfast at all hotels",
        "Private AC Innova Crysta throughout the journey",
        "Entrance fees to tea museum and cultural shows",
        "Dedicated 24/7 personal trip concierge"
      ],
      exclusions: [
        "Air/Rail tickets (Vayu Holidays Flight Desk assistance available)",
        "Personal laundry, phone calls, Ayurvedic spa treatments",
        "Camera fees at monuments"
      ],
      hotelInfo: "Fragrant Nature Munnar / Spice Village Thekkady / Vayu Premium Houseboat.",
      bestTime: "September to May"
    },

    {
      id: "pkg-dubai-01",
      title: "Futuristic Dunes & Luxury Marina: Dubai & Abu Dhabi",
      slug: "dubai-abu-dhabi-luxury-experience",
      destinationId: "dubai",
      destinationName: "Dubai, United Arab Emirates",
      category: "international",
      experienceType: "luxury",
      durationDays: 5,
      durationNights: 4,
      price: 59900,
      originalPrice: 68000,
      rating: 4.96,
      reviewsCount: 92,
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=800&q=80"
      ],
      tag: "Top International",
      highlights: [
        "At the Top Burj Khalifa (Level 124/125) with VIP access",
        "Private Red Dune Desert Safari in 4x4 with gourmet BBQ dinner",
        "Abu Dhabi Grand Mosque & Louvre Museum day excursion",
        "Dubai Marina luxury mega-yacht cruise with dinner"
      ],
      overview: "Experience the glittering marvel of the Arabian Gulf. From high-fashion shopping in Dubai to the serene majesty of Sheikh Zayed Grand Mosque in Abu Dhabi, this itinerary balances world-class modernity with royal desert hospitality.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Dubai & Marina Dhow Cruise",
          description: "VIP meet and greet at Dubai International Airport. Private transfer to your luxury hotel. Evening private marina dhow cruise with international dinner buffet against the illuminated skyline.",
          meals: "Dinner Included",
          stay: "5-Star Hotel, Downtown / Marina, Dubai"
        },
        {
          day: 2,
          title: "Dubai City Tour & Burj Khalifa Sky Deck",
          description: "Morning guided city tour covering Dubai Frame, Palm Jumeirah, and Burj Al Arab photo stop. Afternoon visit to the world's tallest tower, Burj Khalifa.",
          meals: "Breakfast",
          stay: "5-Star Hotel, Dubai"
        },
        {
          day: 3,
          title: "Desert Safari: Dune Bashing & Bedouin Camp",
          description: "Leisure morning. Afternoon 4x4 Land Cruiser desert safari over golden Lahbab dunes, sandboarding, camel rides, and Tanoura dance dinner show.",
          meals: "Breakfast & Desert BBQ Dinner",
          stay: "5-Star Hotel, Dubai"
        },
        {
          day: 4,
          title: "Abu Dhabi Day Excursion: Grand Mosque & Louvre",
          description: "Full day tour to the UAE capital. Marvel at the white marble architecture of Sheikh Zayed Grand Mosque and explore world-class art at Louvre Abu Dhabi.",
          meals: "Breakfast",
          stay: "5-Star Hotel, Dubai"
        },
        {
          day: 5,
          title: "Leisure Shopping & Departure",
          description: "Morning at Dubai Mall or Gold Souk. Chauffeur transfer to Dubai Airport for departure.",
          meals: "Breakfast Included",
          stay: "Check-out"
        }
      ],
      inclusions: [
        "04 Nights in 5★ luxury hotel in Dubai with daily breakfast",
        "VIP airport transfers in private luxury vehicle",
        "Burj Khalifa At the Top entrance ticket",
        "Private 4x4 Desert Safari with BBQ dinner & cultural entertainment",
        "Full day Abu Dhabi tour with Grand Mosque entrance",
        "Dubai tourist visa & insurance processing assistance",
        "All UAE hotel tourism dirham fees"
      ],
      exclusions: [
        "International airfare (Our Flight Desk offers negotiated group fares)",
        "Meals other than specified",
        "Personal shopping expenses"
      ],
      hotelInfo: "JW Marriott Marquis / Address Downtown / Sofitel Dubai Jumeirah or equivalent.",
      bestTime: "October to April"
    },

    {
      id: "pkg-bali-01",
      title: "Tropical Sanctuary: Ubud Jungles & Nusa Penida Cliffs",
      slug: "bali-nusa-penida-tropical-sanctuary",
      destinationId: "bali",
      destinationName: "Bali, Indonesia",
      category: "international",
      experienceType: "honeymoon",
      durationDays: 7,
      durationNights: 6,
      price: 52500,
      originalPrice: 61000,
      rating: 4.97,
      reviewsCount: 114,
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=800&q=80"
      ],
      tag: "Romantic Favorite",
      highlights: [
        "03 Nights in Private Pool Villa in Ubud rainforest",
        "Nusa Penida Island day tour (Kelingking T-Rex cliff, Angel's Billabong)",
        "Balinese Jungle Swing & Tegalalang Rice Terraces",
        "Tanah Lot and Uluwatu cliff sunset temple tours"
      ],
      overview: "An unhurried journey through Bali's lush interior and dramatic coastlines. Rejuvenate in private jungle pool sanctuaries, taste kopi luwak amidst green valleys, and behold the iconic turquoise waters of Nusa Penida with Vayu Holidays.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Denpasar & Ubud Transfer",
          description: "VIP welcome at Ngurah Rai Airport. Private transfer to Ubud private pool villa. Traditional Balinese flower lei welcome.",
          meals: "Dinner Included",
          stay: "Private Pool Villa, Ubud"
        },
        {
          day: 2,
          title: "Ubud: Tegalalang, Jungle Swing & Monkey Forest",
          description: "Visit the iconic rice terraces, experience the famous Bali swing with scenic forest backdrops, and visit Ubud Sacred Monkey Forest Sanctuary.",
          meals: "Breakfast",
          stay: "Private Pool Villa, Ubud"
        },
        {
          day: 3,
          title: "Kintamani Volcano & Tirta Empul Holy Water Temple",
          description: "Panoramic vistas of Mount Batur and Lake Batur with lunch. Purification ritual ceremony at sacred Tirta Empul spring temple.",
          meals: "Breakfast & Lunch",
          stay: "Private Pool Villa, Ubud"
        },
        {
          day: 4,
          title: "Nusa Penida Island Day Excursion",
          description: "Speedboat transfer to Nusa Penida. Visit Kelingking Beach, Broken Beach, and Angel's Billabong natural infinity pool. Return to Seminyak.",
          meals: "Breakfast & Island Lunch",
          stay: "Luxury Beachfront Resort, Seminyak"
        },
        {
          day: 5,
          title: "Uluwatu Sunset Temple & Kecak Dance",
          description: "Morning at leisure relaxing on the beach. Afternoon excursion to Uluwatu temple perched on a 70m ocean cliff with dramatic Kecak fire dance.",
          meals: "Breakfast",
          stay: "Luxury Beachfront Resort, Seminyak"
        },
        {
          day: 6,
          title: "Water Sports & Sunset at Tanah Lot",
          description: "Visit Tanjung Benoa for marine activities, followed by sunset at the sea temple of Tanah Lot.",
          meals: "Breakfast",
          stay: "Luxury Beachfront Resort, Seminyak"
        },
        {
          day: 7,
          title: "Balinese Farewell & Airport Transfer",
          description: "Last minute souvenir shopping in Kuta or Seminyak. Private transfer to airport.",
          meals: "Breakfast Included",
          stay: "Check-out"
        }
      ],
      inclusions: [
        "03 Nights in Private Pool Villa (Ubud)",
        "03 Nights in 5★ Luxury Beach Resort (Seminyak)",
        "Daily gourmet breakfasts & selected lunch experiences",
        "Full day Nusa Penida Island tour with private boat transfers",
        "All private vehicle transfers with English-speaking chauffeur",
        "Bali Swing ticket, temple admissions, and Kecak dance show",
        "Complimentary SIM card with data"
      ],
      exclusions: [
        "International flights",
        "Indonesian Visa on Arrival ($35 USD approx)",
        "Personal expenses and spa treatments"
      ],
      hotelInfo: "Komaneka at Bisma Ubud / W Bali Seminyak or luxury equivalent.",
      bestTime: "April to October"
    },

    {
      id: "pkg-swiss-01",
      title: "Alpine Panorama & Glacier Wonders: Swiss Grand Tour",
      slug: "swiss-alpine-glacier-tour",
      destinationId: "switzerland",
      destinationName: "Switzerland",
      category: "international",
      experienceType: "luxury",
      durationDays: 7,
      durationNights: 6,
      price: 175000,
      originalPrice: 198000,
      rating: 4.98,
      reviewsCount: 47,
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80"
      ],
      tag: "Ultra Luxury",
      highlights: [
        "Swiss Travel Pass 1st Class (Unlimited trains, boats & city buses)",
        "Mount Titlis with Rotair 360° revolving cable car & Cliff Walk",
        "Jungfraujoch — Top of Europe cogwheel railway adventure",
        "Scenic Lake Lucerne steamer cruise"
      ],
      overview: "The pinnacle of European elegance. Glide through glacier-fed valleys, historic lakeside promenades, and the world's most scenic mountain railways aboard Switzerland's immaculate rail network, backed by Vayu Holidays concierge service.",
      itinerary: [
        {
          day: 1,
          title: "Zurich to Lucerne: The City of Lights",
          description: "Arrive at Zurich Airport. Board the Swiss Rail to charming Lucerne. Stroll across the historic Chapel Bridge and through Old Town.",
          meals: "Dinner Included",
          stay: "Luxury Lakeside Hotel, Lucerne"
        },
        {
          day: 2,
          title: "Mount Titlis & Glacier Cave",
          description: "Ascend Mount Titlis via the Titlis Rotair. Experience the Glacier Cave and Europe's highest suspension bridge, the Titlis Cliff Walk.",
          meals: "Breakfast",
          stay: "Luxury Lakeside Hotel, Lucerne"
        },
        {
          day: 3,
          title: "Lucerne to Interlaken via GoldenPass Express",
          description: "Board the scenic GoldenPass train past crystal-clear lakes into Interlaken, nestled between Lake Thun and Lake Brienz.",
          meals: "Breakfast",
          stay: "Boutique Alpine Hotel, Interlaken"
        },
        {
          day: 4,
          title: "Jungfraujoch: Top of Europe Experience",
          description: "Take the modern Eiger Express tricable gondola and the Jungfrau Railway to Europe's highest railway station (3,454m).",
          meals: "Breakfast",
          stay: "Boutique Alpine Hotel, Interlaken"
        },
        {
          day: 5,
          title: "Interlaken to Zermatt & The Matterhorn",
          description: "Travel to car-free Zermatt. Enjoy unmatched views of the iconic pyramidal Matterhorn peak.",
          meals: "Breakfast",
          stay: "Chalet Hotel, Zermatt"
        },
        {
          day: 6,
          title: "Gornergrat Bahn & Alpine Reflection Lakes",
          description: "Ascend on the Gornergrat cogwheel train for 360° panorama of 29 four-thousand-meter peaks.",
          meals: "Breakfast",
          stay: "Chalet Hotel, Zermatt"
        },
        {
          day: 7,
          title: "Zurich Departure",
          description: "Scenic train back to Zurich Airport for your onward international flight.",
          meals: "Breakfast Included",
          stay: "Check-out"
        }
      ],
      inclusions: [
        "06 Nights in handpicked 4★ Superior and 5★ Swiss properties",
        "Swiss Travel Pass (First Class) for unlimited travel throughout",
        "Excursion tickets to Mount Titlis and Jungfraujoch",
        "Daily gourmet Swiss buffet breakfasts",
        "Schengen Visa documentation and appointment assistance",
        "24/7 dedicated European trip assistance"
      ],
      exclusions: [
        "International Flights",
        "City tourist taxes (payable directly at hotel check-in)",
        "Meals other than specified"
      ],
      hotelInfo: "Grand Hotel National Lucerne / Victoria-Jungfrau Interlaken / Mont Cervin Palace Zermatt.",
      bestTime: "Year Round (May-Oct for hiking | Dec-Mar for snow)"
    },

    {
      id: "pkg-maldives-01",
      title: "Overwater Serenity: Private Island Lagoon Villa",
      slug: "maldives-overwater-serenity-villa",
      destinationId: "maldives",
      destinationName: "The Maldives",
      category: "international",
      experienceType: "honeymoon",
      durationDays: 5,
      durationNights: 4,
      price: 118000,
      originalPrice: 135000,
      rating: 4.99,
      reviewsCount: 52,
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
      ],
      tag: "Romantic Luxury",
      highlights: [
        "Private Seaplane transfers over azure atolls",
        "04 Nights in Premium Overwater Villa with direct lagoon access",
        "All-Inclusive gourmet dining & premium beverages",
        "Sunset dolphin safari cruise & house reef snorkeling"
      ],
      overview: "Escape to unblemished serenity in the Indian Ocean. Step directly from your overwater sundeck into crystal-clear turquoise waters teeming with marine life, complemented by private butler service and sunset champagne toasts.",
      itinerary: [
        {
          day: 1,
          title: "Seaplane Arrival & Overwater Villa Check-in",
          description: "Touch down at Velana International Airport, Male. Be escorted to the private resort seaplane lounge before a scenic flight over turquoise atolls. Check in to your overwater bungalow.",
          meals: "Dinner & Drinks",
          stay: "Overwater Villa, 5-Star Luxury Island Resort"
        },
        {
          day: 2,
          title: "Reef Snorkeling & Couples Spa Rejuvenation",
          description: "Morning guided snorkeling with marine biologists. Afternoon signature overwater couples massage with organic coconut oils.",
          meals: "All-Inclusive (Breakfast, Lunch, Dinner & Drinks)",
          stay: "Overwater Villa"
        },
        {
          day: 3,
          title: "Sunset Dolphin Cruise & Candlelight Beach Dinner",
          description: "Board a traditional Dhoni for a sunset cruise to spot spinner dolphins. Followed by a private 5-course candlelight dinner on the beach.",
          meals: "All-Inclusive",
          stay: "Overwater Villa"
        },
        {
          day: 4,
          title: "Lagoon Kayaking & Private Sandbank Picnic",
          description: "Spend your day stand-up paddleboarding or take an optional private sandbank excursion surrounded by pristine coral waters.",
          meals: "All-Inclusive",
          stay: "Overwater Villa"
        },
        {
          day: 5,
          title: "Seaplane Return & Homeward Flight",
          description: "Breakfast overlooking the lagoon. Scenic seaplane transfer back to Male Airport for departure.",
          meals: "Breakfast Included",
          stay: "Check-out"
        }
      ],
      inclusions: [
        "04 Nights in Luxury Overwater Villa",
        "Roundtrip scenic seaplane transfers from Male",
        "All-Inclusive meal plan (Breakfast, Lunch, 5-course Dinner & Selected Drinks)",
        "Complimentary snorkeling equipment and non-motorized watersports",
        "Sunset dolphin safari cruise",
        "Personal island villa host / butler service",
        "All Maldivian Green Taxes and service charges"
      ],
      exclusions: [
        "International airfare",
        "Motorized water sports",
        "Personal boutique purchases"
      ],
      hotelInfo: "Adaaran Prestige Vadoo / Sun Siyam Olhuveli / Anantara Veli.",
      bestTime: "November to April"
    },

    {
      id: "pkg-rajasthan-01",
      title: "Royal Heritage: Jaipur, Jodhpur & Udaipur Lakes",
      slug: "royal-heritage-rajasthan-palaces",
      destinationId: "rajasthan",
      destinationName: "Rajasthan, India",
      category: "domestic",
      experienceType: "luxury",
      durationDays: 7,
      durationNights: 6,
      price: 44000,
      originalPrice: 51000,
      rating: 4.94,
      reviewsCount: 75,
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1609137144820-272cb2507873?auto=format&fit=crop&w=800&q=80"
      ],
      tag: "Heritage Classic",
      highlights: [
        "Stay in historic heritage Havelis and palace hotels",
        "Private boat cruise on Lake Pichola, Udaipur",
        "Sunrise tour of Mehrangarh Fort, Jodhpur",
        "Amber Fort jeep safari & City Palace private guide in Jaipur"
      ],
      overview: "Step into the regal grandeur of the Maharajas. Relive Rajputana history through towering sandstone fortresses, intricate hand-painted havelis, and sunset lake palaces across Rajasthan's Golden Triangle and lake country.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Jaipur: The Pink City",
          description: "Arrive in Jaipur. Check in to your heritage hotel. Evening visit to the vibrant bazaars and Chokhi Dhani ethnic cultural resort.",
          meals: "Dinner Included",
          stay: "Heritage Haveli, Jaipur"
        },
        {
          day: 2,
          title: "Jaipur: Amber Fort, Hawa Mahal & City Palace",
          description: "Full day exploring Amber Fort via private jeep, Hawa Mahal facade, Jantar Mantar observatory, and the Royal City Palace.",
          meals: "Breakfast",
          stay: "Heritage Haveli, Jaipur"
        },
        {
          day: 3,
          title: "Jaipur to Jodhpur via Pushkar",
          description: "Drive through the holy town of Pushkar, visiting the rare Brahma Temple. Arrive in Jodhpur, the Blue City.",
          meals: "Breakfast & Dinner",
          stay: "Heritage Hotel, Jodhpur"
        },
        {
          day: 4,
          title: "Jodhpur to Udaipur via Ranakpur Jain Temples",
          description: "Morning tour of Mehrangarh Fort and Jaswant Thada. Scenic drive through the Aravali hills to Udaipur, stopping at Ranakpur's marble marvel.",
          meals: "Breakfast",
          stay: "Lakeview Heritage Hotel, Udaipur"
        },
        {
          day: 5,
          title: "Udaipur: City Palace, Saheliyon ki Bari & Pichola Cruise",
          description: "Explore the City Palace on Lake Pichola, Saheliyon ki Bari gardens, and sunset boat cruise past Jag Mandir.",
          meals: "Breakfast",
          stay: "Lakeview Heritage Hotel, Udaipur"
        },
        {
          day: 6,
          title: "Udaipur: Vintage Car Museum & Monsoon Palace",
          description: "Visit the Royal Vintage Car collection and take a sunset drive up to the hilltop Monsoon Palace (Sajjangarh).",
          meals: "Breakfast",
          stay: "Lakeview Heritage Hotel, Udaipur"
        },
        {
          day: 7,
          title: "Udaipur Departure",
          description: "Morning at leisure before transfer to Udaipur Airport or railway station.",
          meals: "Breakfast Included",
          stay: "Check-out"
        }
      ],
      inclusions: [
        "06 Nights in authentic heritage 4★ & 5★ properties",
        "Daily royal buffet breakfasts and welcome dinners",
        "Chauffeur-driven private AC Innova Crysta for all 7 days",
        "Private boat ride on Lake Pichola",
        "Dedicated monument guides and entry assistance",
        "24/7 Vayu Holidays concierge support"
      ],
      exclusions: [
        "Airfare / Train tickets",
        "Monument entrance fees",
        "Personal expenses"
      ],
      hotelInfo: "Alsisar Haveli Jaipur / Ajit Bhawan Jodhpur / Fatehprakash Palace Udaipur.",
      bestTime: "October to March"
    }
  ],

  services: [
    {
      id: "flights",
      title: "Flight Bookings & Charters",
      slug: "flights",
      icon: "plane",
      shortDesc: "Domestic & international air tickets with premium seat selections, group fares, and private charters.",
      heroDesc: "Seamless flight reservations across 300+ global airlines. From executive business class cabins to bulk group fares for weddings and corporate delegations.",
      features: [
        "Best route optimization & flexible booking policies",
        "Special negotiated group rates for 10+ travelers",
        "Baggage upgrades, seat assignments, and meal requests",
        "24/7 flight rescheduling, web check-in, and cancellation assistance"
      ],
      faqs: [
        { q: "Can Vayu Holidays arrange urgent or Tatkal flight bookings?", a: "Yes, our airline desk in Bhopal has direct GDS access for instant ticketing, same-day flights, and emergency re-routing." },
        { q: "Do you handle international multi-city routes?", a: "Yes, our flight specialists specialize in complex multi-destination itineraries with minimum layovers and seamless baggage transfers." }
      ]
    },
    {
      id: "hotels",
      title: "Hotels & Luxury Resorts",
      slug: "hotels",
      icon: "building",
      shortDesc: "Curated 4★, 5★ luxury stays, heritage palace villas, and boutique experiential properties worldwide.",
      heroDesc: "We don't book random rooms — we handpick sanctuary stays, private pool villas, and heritage havelis verified by our inspection team.",
      features: [
        "Exclusive room upgrades & early check-in perks where available",
        "Direct hotel relationships with leading international luxury chains",
        "Pre-verified hygiene, location, and guest hospitality ratings",
        "Special honeymoon, anniversary, and family hospitality packages"
      ],
      faqs: [
        { q: "What types of stays do you offer?", a: "From boutique heritage havelis in Rajasthan and overwater villas in the Maldives to high-altitude ski chalets in Switzerland." },
        { q: "Can you negotiate corporate corporate rates?", a: "Yes, we provide corporate contracted rates for recurring business travel and conference groups." }
      ]
    },
    {
      id: "bus",
      title: "Bus & Coach Booking",
      slug: "bus",
      icon: "bus",
      shortDesc: "Comfortable multi-axle Volvo, Scania, and luxury sleeper coach tickets across major Indian intercity corridors.",
      heroDesc: "Reliable, sanitized, and punctual intercity bus charters and seat bookings connecting Bhopal, MP, and pan-India destinations.",
      features: [
        "Premium Volvo B9R / B11R multi-axle & luxury sleeper coaches",
        "Private tourist bus charters (18, 27, 35, 45, 55 seaters)",
        "Verified professional drivers with verified safety records",
        "Live GPS tracking and transparent boarding assistance"
      ],
      faqs: [
        { q: "Can we hire a full luxury bus for family weddings or corporate trips?", a: "Yes, we manage complete coach rentals for weddings, pilgrimage tours, and corporate team offsites originating from Bhopal and major hubs." }
      ]
    },
    {
      id: "train",
      title: "Train Ticketing & Rail Tours",
      slug: "train",
      icon: "train",
      shortDesc: "Authorized IRCTC booking assistance, premium tourist trains, and luxury royal rail journeys.",
      heroDesc: "Effortless Indian Railways and international train booking. From high-speed Vande Bharat and Tejas expresses to royal luxury trains like Palace on Wheels.",
      features: [
        "IRCTC confirmed ticket assistance across all travel classes",
        "Tatkal and premium tatkal booking guidance",
        "Specialist booking for Palace on Wheels, Maharajas' Express & Golden Chariot",
        "Group rail travel planning with luggage handling guidance"
      ],
      faqs: [
        { q: "How early should we book train tickets?", a: "Regular train reservations open 120 days in advance. We recommend contacting our rail desk at the earliest for confirmed berths." }
      ]
    },
    {
      id: "visa",
      title: "Visa Assistance & Processing",
      slug: "visa",
      icon: "file-check",
      shortDesc: "Comprehensive tourist, business, and visitor visa documentation for 50+ countries worldwide.",
      heroDesc: "Avoid delays and rejection risks. Our experienced visa desk handles form filling, document checklists, cover letters, appointment slots, and biometrics guidance.",
      features: [
        "99% first-time visa approval rate with meticulous document vetting",
        "Tourist & business visas for Schengen, USA, UK, UAE, Singapore, Japan, etc.",
        "Express e-Visa processing for Dubai, Bali, Vietnam, Sri Lanka, and Thailand",
        "Personalized mock interview guidance for US and European consular appointments"
      ],
      faqs: [
        { q: "Which countries offer instant e-Visas?", a: "Countries like UAE, Vietnam, Indonesia, Sri Lanka, Azerbaijan, and Malaysia offer fast-track e-Visas, which we process within 24 to 72 hours." },
        { q: "Do you help with Schengen visa appointments in India?", a: "Yes, we monitor VFS and TLS appointment slots constantly to secure the earliest available dates for our travelers." }
      ]
    },
    {
      id: "passport",
      title: "Passport Services",
      slug: "passport",
      icon: "book-open",
      shortDesc: "Consultation, application submission, documentation review, and appointment booking at PSK centers.",
      heroDesc: "Hassle-free passport assistance in Bhopal and across India for fresh applications, renewals, minor passports, and Tatkaal submissions.",
      features: [
        "Fresh passport & renewal application filing",
        "Tatkaal passport express processing consultation",
        "Name change, address change, and spouse endorsement documentation",
        "Passport Seva Kendra (PSK) appointment slot booking in Bhopal and other cities"
      ],
      faqs: [
        { q: "Can Vayu Holidays help if my passport is expiring in less than 6 months?", a: "Yes, we expedite passport renewal under the normal or Tatkaal scheme so your international travel plans are never interrupted." }
      ]
    },
    {
      id: "forex",
      title: "Forex & Travel Cards",
      slug: "forex",
      icon: "dollar-sign",
      shortDesc: "Zero-markup multi-currency travel cards and genuine foreign currency cash at competitive exchange rates.",
      heroDesc: "Travel the world without hidden bank fees or extortionate currency conversion markups. RBI-compliant foreign exchange delivered to your doorstep.",
      features: [
        "Multi-currency chip & PIN contactless travel cards (USD, EUR, GBP, AED, etc.)",
        "Instant card reload via UPI / Net banking while traveling abroad",
        "Physical currency cash notes for 30+ countries",
        "Full RBI LRS (Liberalized Remittance Scheme) compliance documentation"
      ],
      faqs: [
        { q: "Why use a multi-currency travel card instead of regular credit cards?", a: "A multi-currency card locks in the exchange rate, protects you from 3-5% forex markups charged by standard credit cards, and avoids ATM withdrawal shocks." }
      ]
    },
    {
      id: "insurance",
      title: "Travel Insurance",
      slug: "insurance",
      icon: "shield",
      shortDesc: "Comprehensive medical, baggage loss, trip cancellation, and flight delay cover for peaceful travel.",
      heroDesc: "Don't let medical emergencies, misplaced luggage, or unexpected weather ruin your trip. Global cashless healthcare and trip protection for you and your loved ones.",
      features: [
        "Cashless hospitalization coverage up to $500,000 across global hospital networks",
        "Reimbursement for trip cancellation, flight delays, and missed connections",
        "Baggage delay & permanent loss reimbursement",
        "Schengen & worldwide visa-compliant policy certificates issued in 15 minutes"
      ],
      faqs: [
        { q: "Is travel insurance mandatory for Europe / Schengen trips?", a: "Yes, a minimum €30,000 medical coverage travel insurance policy is legally required for all Schengen visa applications. We issue fully compliant policies instantly." }
      ]
    },
    {
      id: "mice",
      title: "Corporate MICE & Offsites",
      slug: "mice",
      icon: "users",
      shortDesc: "Meetings, Incentives, Conferences & Exhibitions orchestrated with corporate precision and luxury flair.",
      heroDesc: "From executive board retreats in the Swiss Alps to 300-delegate annual conferences in Goa or Dubai, Vayu Holidays delivers turnkey corporate logistics.",
      features: [
        "End-to-end venue sourcing, AV setup, and gala dinner curation",
        "Chartered flights, group ticketing, and airport concierge escort",
        "Team-building adventures, motivational keynotes, and experiential offsites",
        "Dedicated on-ground Vayu Holidays project directors for flawless execution"
      ],
      faqs: [
        { q: "What is the minimum and maximum group size for MICE?", a: "We manage executive groups from 15 leadership delegates up to 500+ attendees for mega dealer meets and sales incentive conventions." }
      ]
    }
  ],

  experiences: [
    {
      id: "honeymoon",
      title: "Honeymoon & Romance",
      tagline: "Intimate Sanctuaries for Two",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
      description: "Private island overwater villas, secluded candlelight dinners, couples' spa rituals, and curated sunset cruises."
    },
    {
      id: "luxury",
      title: "Ultra-Luxury Escapes",
      tagline: "Privacy, Palaces & Private Jets",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      description: "Handpicked 5-star suites, private chauffeurs, Michelin-star dining, and personal 24/7 dedicated trip concierges."
    },
    {
      id: "family",
      title: "Family & Multi-Gen Journeys",
      tagline: "Cherished Memories Across Generations",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      description: "Comfortable spacious vehicles, kid-friendly itineraries, inter-generational experiences, and unhurried pacing."
    },
    {
      id: "group",
      title: "Guided Group Expeditions",
      tagline: "Shared Wonders with Expert Tour Managers",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
      description: "Hassle-free fixed departures, authentic regional dining, senior-citizen friendly pacing, and warm camaraderie."
    },
    {
      id: "adventure",
      title: "High-Altitude & Nature Adventures",
      tagline: "Rugged Mountain Passes & Untamed Trails",
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80",
      description: "Himalayan valley treks, Swiss alpine hiking, wildlife safaris, scuba diving in pristine coral reefs, and desert sandboarding."
    },
    {
      id: "mice-exp",
      title: "Corporate MICE & Retreats",
      tagline: "Executive Precision & Unmatched Polish",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
      description: "High-impact annual conferences, leadership retreats, incentive rewards trips, and dealer summits."
    }
  ],

  testimonials: [
    {
      id: "test-1",
      name: "Dr. Anirudh & Meenakshi Saxena",
      location: "Bhopal, MP",
      trip: "Kashmir 6D Luxury Tour",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      quote: "Vayu Holidays planned our 25th anniversary trip to Kashmir with pure perfection. The private houseboat in Nigeen lake was pristine, and our chauffeur was courteous and punctual. The personal care from their Bhopal office gave us absolute confidence!"
    },
    {
      id: "test-2",
      name: "Rajesh & Priya Agrawal",
      location: "Indore, MP",
      trip: "Switzerland Grand Alpine Tour",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      quote: "Our Swiss vacation was flawlessly organized. From Schengen visa guidance within days to 1st class Swiss Rail passes and breathtaking hotel views in Lucerne and Zermatt, Vayu Holidays lived up to their promise of minimal luxury and zero stress."
    },
    {
      id: "test-3",
      name: "Vikramaditya Solanki",
      location: "Bhopal & Delhi",
      trip: "Corporate Annual Offsite (Dubai - 45 Delegates)",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      quote: "Managing 45 corporate leaders in Dubai requires meticulous execution. Managing Director Shubham and the Vayu Holidays team managed flights, luxury coaches, gala dinner at Dubai Marina, and desert safari without a single hitch. Exceptional!"
    }
  ],

  blogs: [
    {
      id: "blog-1",
      slug: "kashmir-travel-guide-2026",
      title: "The Connoisseur's Guide to Kashmir in 2026: Seasons, Valleys & Hidden Retreats",
      category: "Destination Guide",
      date: "September 15, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
      excerpt: "From springtime almond blooms in Srinagar to the winter snow powder of Gulmarg, discover how to experience Kashmir like a private traveler.",
      content: `Kashmir has always held an ethereal charm that transcends ordinary vacationing. To experience it with true quiet luxury requires moving beyond the crowded tourist trails. 

### Timing Your Journey
- **Spring (April – May):** The Mughal gardens burst with tulips and almond blossoms. Perfect for leisurely shikara mornings and pleasant afternoon strolls.
- **Summer (June – August):** Crisp alpine weather ideal for higher elevation valleys such as Aru, Betaab, and Doodhpathri.
- **Autumn (September – November):** The iconic golden Chinar trees turn fiery amber and crimson. The harvest of saffron in Pampore fills the air with delicate aroma.
- **Winter (December – February):** Gulmarg transforms into Asia’s premier powder skiing sanctuary.

### The Houseboat Heritage
Rather than staying on the bustling commercial shore of Dal Lake, we curate stays on secluded lotus bays of Nigeen Lake. Hand-carved cedar-wood ceilings, brass fireplace bukharis, and private balconies overlooking the Pir Panjal mountains offer a level of timeless serenity that no modern chain hotel can match.`
    },
    {
      id: "blog-2",
      slug: "schengen-visa-guide-india-2026",
      title: "European Schengen Visa in 2026: Essential Checklist & Application Insights",
      category: "Visa & Tips",
      date: "August 28, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80",
      excerpt: "Crucial guidance on documentation, VFS appointment strategies, biometric procedures, and cover letters for smooth Schengen visa approvals.",
      content: `Planning a European vacation in 2026 begins months before departure at the visa desk. With high application volumes across major European consulates, strategic preparation makes all the difference.

### The Golden Rules of Schengen Documentation
1. **Accurate Day-Wise Itinerary:** Consular officers look for logical route progressions with confirmed hotel reservations and internal train / flight vouchers.
2. **Financial Solidity:** Maintain consistent bank statements for the last 6 months without sudden unexplained lump-sum deposits right before filing.
3. **Mandatory €30,000 Medical Insurance:** Ensure your insurance policy explicitly covers emergency hospitalization and repatriation across all Schengen states.

At Vayu Holidays, our dedicated Visa Desk conducts thorough pre-submission audits for every traveler, ensuring a seamless 99% approval experience.`
    },
    {
      id: "blog-3",
      slug: "bali-private-pool-villas-guide",
      title: "Why Bali's Private Pool Villas Redefined Luxury Honeymoons",
      category: "Luxury Travel",
      date: "August 10, 2026",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
      excerpt: "How pairing the mystical jungles of Ubud with the clifftop horizons of Uluwatu creates the ultimate romantic escape.",
      content: `Few destinations capture romantic tranquility quite like Bali. The island’s secret lies in its architecture: sanctuaries designed around natural river valleys, infinity pools overlooking dense palm canopies, and open-air pavilion living.

### Ubud: The Spiritual Heart
Starting your journey in Ubud allows you to decompress. Waking up to morning mist rising from the Ayung river, private yoga sessions, and floating breakfasts in your private plunge pool set an unhurried, contemplative rhythm.

### Seminyak & Uluwatu: Coastal Elegance
After three nights in the forest, moving to the coast introduces world-class beach clubs, dramatic sunset fire dances at Uluwatu Temple, and private chartered catamarans to Nusa Penida.`
    }
  ],

  enquiries: [
    {
      id: "enq-101",
      name: "Aditya Verma",
      email: "aditya.v@example.com",
      phone: "+91 98261 44552",
      destination: "Switzerland Alps",
      packageId: "pkg-swiss-01",
      travelMonth: "October 2026",
      duration: "7 Days",
      travelers: "2 Adults (Honeymoon)",
      budgetPerPerson: "₹1,50,000 - ₹2,00,000",
      notes: "Need 1st class Swiss passes and hotel room with direct Matterhorn view in Zermatt.",
      status: "Quoted",
      createdAt: "2026-09-22T14:20:00Z"
    },
    {
      id: "enq-102",
      name: "Dr. Sunita Sharma",
      email: "sunita.sharma@example.com",
      phone: "+91 94250 88219",
      destination: "Kashmir in Bloom",
      packageId: "pkg-kashmir-01",
      travelMonth: "November 2026",
      duration: "6 Days",
      travelers: "4 Adults, 2 Kids (Family)",
      budgetPerPerson: "₹35,000 - ₹45,000",
      notes: "Require private luxury Innova Crysta throughout and heated houseboat stay.",
      status: "New",
      createdAt: "2026-09-23T10:15:00Z"
    },
    {
      id: "enq-103",
      name: "Karan Johri",
      email: "karan.j@techcorp.in",
      phone: "+91 99811 77340",
      destination: "Dubai & Abu Dhabi",
      packageId: "pkg-dubai-01",
      travelMonth: "December 2026",
      duration: "5 Days",
      travelers: "2 Adults",
      budgetPerPerson: "₹60,000 - ₹75,000",
      notes: "Interested in Burj Khalifa Sky lounge access and private yacht dinner.",
      status: "Contacted",
      createdAt: "2026-09-21T09:40:00Z"
    }
  ],

  offers: [
    {
      id: "offer-1",
      title: "Early Bird Festive 2026 Privilege",
      code: "VAYU2026",
      discount: "Save up to ₹8,000 per couple on International Packages",
      validity: "Valid for bookings made 45 days prior to travel",
      active: true
    },
    {
      id: "offer-2",
      title: "Complimentary Flight Concierge & Travel Insurance",
      code: "COMPINSURE",
      discount: "Free Schengen/Worldwide travel insurance with full Europe & Bali bookings",
      validity: "Ongoing Season 2026",
      active: true
    }
  ]
};

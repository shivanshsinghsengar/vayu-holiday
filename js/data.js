/* ==========================================================================
   VAYU HOLIDAYS — SEED DATASET (2026 LUXURY TRAVEL EDITION)
   Authentic Brand Details, Curated Packages, Day-wise Itineraries, Services
   ========================================================================== */

const INITIAL_DATA = {
  company: {
    name: "Vayu Holidays",
    tagline: "Your Journey. Beautifully Planned.",
    type: "Travel Agency & Tour Operator",
    office: "Vayu Pride Residency, Raksha Vihar, Bhopal, Madhya Pradesh - 462031",
    phone: "+91 888 975 4969",
    whatsapp: "+91 888 975 4969",
    whatsappMessage: "Hello Vayu Holidays Concierge, I would like to inquire about planning a luxury journey.",
    email: "concierge@vayuholidays.com",
    supportEmail: "travel@vayuholidays.com",
    hours: "Mon - Sat: 9:30 AM – 7:30 PM | 24/7 VIP Traveler Support",
    branches: [
      {
        id: "gurugram-ava",
        name: "Ava Hotel – Sector 45",
        city: "Gurugram",
        address: "Plot No. 2010, Block A, Greenwood City, Opposite Chimes 61, Sector 45, Gurugram, Haryana – 122003",
        phone: "+91 888 975 4969",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ava+Hotel+Sector+45+Greenwood+City+Gurugram+Haryana"
      },
      {
        id: "gurugram-mehmaan",
        name: "Mehmaan Manor – Sector 57",
        city: "Gurugram",
        address: "Building No. G-219, G-Block, Sushant Lok-2, Sector 57, Gurugram, Haryana – 122011",
        phone: "+91 888 975 4969",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Mehmaan+Manor+Sushant+Lok+2+Sector+57+Gurugram"
      },
      {
        id: "zirakpur-ava",
        name: "Ava Hotel – Zirakpur",
        city: "Zirakpur",
        address: "Ambala-Chandigarh Expressway (NH-22), Adjoining Paras Downtown Square Mall, Zirakpur, Punjab – 140603",
        phone: "+91 888 975 4969",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ava+Hotel+Zirakpur+NH-22+Paras+Downtown+Square+Mall"
      },
      {
        id: "mathura-priya",
        name: "Priya Nagari",
        city: "Mathura",
        address: "Mathura Bypass, NH-2, Near Highway Thana (Police Station), Mathura, Uttar Pradesh – 281001",
        phone: "+91 888 975 4969",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Mathura+Bypass+NH2+Highway+Thana+Mathura+UP"
      }
    ],
    leadership: [
      {
        name: "Simran Sengar",
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
    },
    {
      id: "thailand",
      name: "Thailand",
      type: "international",
      tagline: "Golden Temples, Tropical Beaches & Island Hopping",
      image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
      description: "Bangkok's glittering Grand Palace and floating markets, Coral Island waters off Pattaya, and Phuket's sunset beaches with island-hopping adventures.",
      packagesCount: 2,
      startingPrice: 39900,
      featured: false
    },
    {
      id: "singapore",
      name: "Singapore",
      type: "international",
      tagline: "The Garden City of Future Wonders",
      image: "https://images.unsplash.com/photo-1525628084225-2d25d6b1e6f8?auto=format&fit=crop&w=1200&q=80",
      description: "Marina Bay Sands skyline, Gardens by the Bay Supertrees, Universal Studios Sentosa, and the world's best airport at Changi.",
      packagesCount: 2,
      startingPrice: 75000,
      featured: false
    },
    {
      id: "mauritius",
      name: "Mauritius",
      type: "international",
      tagline: "Turquoise Lagoons & Coral Sand Romance",
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80",
      description: "Catamaran sunset cruises, Chamarel seven-coloured earth, underwater waterfall illusion, and all-inclusive beachfront resorts.",
      packagesCount: 2,
      startingPrice: 89000,
      featured: false
    },
    {
      id: "srilanka",
      name: "Sri Lanka",
      type: "international",
      tagline: "Pearl of the Indian Ocean",
      image: "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=1200&q=80",
      description: "Sigiriya rock fortress, Kandy's Temple of the Tooth, Ceylon tea trails, and Bentota beach relaxation in one compact island.",
      packagesCount: 2,
      startingPrice: 42000,
      featured: false
    },
    {
      id: "nepal",
      name: "Nepal",
      type: "international",
      tagline: "Himalayan Kingdom of Temples & Lakes",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
      description: "Kathmandu Valley UNESCO heritage, sunrise over Annapurna from Pokhara, and jungle safari at Chitwan National Park.",
      packagesCount: 2,
      startingPrice: 36000,
      featured: false
    },
    {
      id: "bhutan",
      name: "Bhutan",
      type: "international",
      tagline: "The Last Shangri-La of Happiness",
      image: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?auto=format&fit=crop&w=1200&q=80",
      description: "Tiger's Nest monastery cliff hike, Thimphu dzongs, Punakha valley suspension bridge, and the Gross National Happiness kingdom.",
      packagesCount: 2,
      startingPrice: 58000,
      featured: false
    },
    {
      id: "hongkong",
      name: "Hong Kong & Macau",
      type: "international",
      tagline: "Skyline Thrills & Cotai Strip Glamour",
      image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=1200&q=80",
      description: "Victoria Peak tram panorama, Disneyland Hong Kong, Star Ferry harbour crossing, and Macau's Ruins of St. Paul and Cotai casinos.",
      packagesCount: 2,
      startingPrice: 72000,
      featured: false
    },
    {
      id: "egypt",
      name: "Egypt",
      type: "international",
      tagline: "Pyramids, Pharaohs & Nile Cruising",
      image: "https://images.unsplash.com/photo-1539650116574-75c6c85f1c1a?auto=format&fit=crop&w=1200&q=80",
      description: "Giza Pyramids and Sphinx, Luxor's Valley of the Kings, a luxury Nile cruise to Aswan, and the bazaars of Cairo.",
      packagesCount: 2,
      startingPrice: 95000,
      featured: false
    },
    {
      id: "kenya",
      name: "Kenya Safari",
      type: "international",
      tagline: "The Great Wildebeest Migration",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
      description: "Masai Mara Big Five game drives, Lake Nakuru flamingos, Amboseli elephants under Kilimanjaro, and a hot air balloon safari at dawn.",
      packagesCount: 2,
      startingPrice: 115000,
      featured: false
    },
    {
      id: "japan",
      name: "Japan",
      type: "international",
      tagline: "Cherry Blossoms, Neon Cities & Sacred Peaks",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
      description: "Tokyo's Shibuya crossing and Senso-ji, Mt Fuji panoramas, bullet train to Kyoto's bamboo grove and golden temples, and Osaka street food.",
      packagesCount: 2,
      startingPrice: 145000,
      featured: false
    },
    {
      id: "europe",
      name: "Europe (Paris, Italy & Switzerland)",
      type: "international",
      tagline: "The Grand European Dream Circuit",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
      description: "Eiffel Tower and Seine romance in Paris, Venetian canals and Roman Colosseum in Italy, and Swiss alpine railways across the continent.",
      packagesCount: 2,
      startingPrice: 185000,
      featured: false
    },
    {
      id: "australia",
      name: "Australia",
      type: "international",
      tagline: "Harbour City & Reef Adventure",
      image: "https://images.unsplash.com/photo-1523428096881-5bd79d043006?auto=format&fit=crop&w=1200&q=80",
      description: "Sydney Opera House and Harbour Bridge climb, Great Barrier Reef snorkeling, Gold Coast theme parks, and Blue Mountains escapes.",
      packagesCount: 2,
      startingPrice: 155000,
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
        "Private Basis-driven luxury vehicle (Innova Crysta / Luxury Coach)",
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

    // ── NEW PACKAGES FROM PDF (2026) ────────────────────────────────────────
    {
      id: "pkg-uttarakhand-01",
      title: "Rishikesh, Mussoorie, Nainital & Haridwar Escape",
      slug: "rishikesh-mussoorie-nainital-haridwar-escape",
      destinationId: "uttarakhand",
      destinationName: "Uttarakhand, India",
      category: "domestic",
      experienceType: "group",
      durationDays: 5,
      durationNights: 4,
      price: 20750,
      originalPrice: null,
      rating: 4.7,
      reviewsCount: 0,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1531778272849-d1dd22444c06?auto=format&fit=crop&w=800&q=80"
      ],
      tag: "Scenic Getaway",
      highlights: [
        "River Rafting & Ganga Aarti at Triveni Ghat, Rishikesh",
        "Sightseeing at Ram Jhula, Laxman Jhula & Parmarth Niketan",
        "Mussoorie Mall Road & scenic viewpoints",
        "Naini Lake boating & Nainital Mall Road",
        "Haridwar local sightseeing & Railway Station drop"
      ],
      overview: "A scenic 4-night escape covering four iconic Uttarakhand destinations — spiritual Rishikesh on the Ganges, misty hill station Mussoorie, charming lake city Nainital, and holy Haridwar. Ideal for families and small groups seeking Himalayan foothills, adventure, and culture in one seamless journey.",
      itinerary: [
        {
          day: 1,
          title: "Arrival Haridwar – Transfer to Rishikesh – River Rafting & Local Sightseeing",
          description: "On arrival in Rishikesh, check-in at the hotel and relax. Later, proceed for local sightseeing including Ram Jhula, Laxman Jhula and Parmarth Niketan. In the evening, enjoy the beautiful Ganga Aarti at Triveni Ghat. Return to the hotel for dinner and overnight stay in Rishikesh.",
          meals: "Dinner Included",
          stay: "Hotel Kedar Inn / Perfectstayz Premium, Rishikesh (3 Star)"
        },
        {
          day: 2,
          title: "Rishikesh – Transfer to Mussoorie – Local Sightseeing",
          description: "After breakfast, check out from the hotel and drive towards Mussoorie. On arrival, check in to the hotel and relax. Later, enjoy Mussoorie local sightseeing covering popular spots, viewpoints, and local attractions. In the evening, you can explore the market and enjoy leisure time at Mall Road.",
          meals: "Breakfast & Dinner",
          stay: "The Pride Mussoorie / Hotel Seven Oaks, Mussoorie (3 Star)"
        },
        {
          day: 3,
          title: "Mussoorie Half Day Sightseeing – Transfer to Nainital",
          description: "After breakfast, check out from the hotel and drive towards Nainital, the beautiful Lake City of Uttarakhand. Enjoy scenic views during the journey and take a halt for lunch en-route (own expense). Upon arrival in Nainital, check-in at the hotel and relax. In the evening, visit Naini Lake for boating (optional) and enjoy a pleasant walk at Mall Road Market.",
          meals: "Breakfast & Dinner",
          stay: "Sweet Home Sunset Resort / Hotel Silverton by Aspen, Nainital"
        },
        {
          day: 4,
          title: "Nainital Local Sightseeing + Nearby Lakes Tour",
          description: "After breakfast, proceed for half-day local sightseeing in Haridwar and visit nearby attractions. Later, as per your train timing, you will be dropped at Haridwar Railway Station for your onward journey, ending the trip with memorable experiences.",
          meals: "Breakfast",
          stay: "Sweet Home Sunset Resort / Hotel Silverton by Aspen, Nainital"
        },
        {
          day: 5,
          title: "Nainital → Haridwar (Drop)",
          description: "After breakfast, check out from the hotel and proceed towards Haridwar. Enjoy the scenic drive through the hills and plains. On arrival in Haridwar, you will be dropped at the Railway Station / Bus Stand / Hotel as per schedule. Tour ends with wonderful memories.",
          meals: "Breakfast Included",
          stay: "Check-out"
        }
      ],
      inclusions: [
        "04 Nights accommodation in 3-star hotels/resorts on twin/double sharing",
        "Daily breakfast and dinner (MAP meal plan) at all hotels",
        "All road transfers by AC vehicle as per itinerary",
        "Hotel check-in/check-out assistance"
      ],
      exclusions: [
        "Airfare / Train tickets",
        "Lunch (own expense throughout)",
        "River rafting charges (optional activity)",
        "Naini Lake boating charges (optional)",
        "Personal expenses, tips, and travel insurance"
      ],
      hotelInfo: "Option 1: Hotel Kedar Inn (Rishikesh) + The Pride Mussoorie + Sweet Home Sunset Resort (Nainital). Option 2: Perfectstayz Premium (Rishikesh) + Hotel Seven Oaks (Mussoorie) + Hotel Silverton by Aspen (Nainital).",
      bestTime: "March to June | September to November"
    },

    {
      id: "pkg-himachal-01",
      title: "Shimla, Manali & Kasol Hill Tour",
      slug: "shimla-manali-kasol-hill-tour",
      destinationId: "himachal",
      destinationName: "Himachal Pradesh, India",
      category: "domestic",
      experienceType: "group",
      durationDays: 5,
      durationNights: 4,
      price: 56268,
      originalPrice: null,
      rating: 4.75,
      reviewsCount: 0,
      image: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"
      ],
      tag: "Scenic Getaway",
      highlights: [
        "Shimla Mall Road, Kufri, The Ridge & Scandal Point",
        "Atal Tunnel, Solang Valley (adventure activities) & Sissu Valley",
        "Hadimba Devi Temple & Manali Mall Road",
        "Kasol riverside views & Manikaran Sahib Gurudwara",
        "Pickup from Chandigarh Airport, drop at Ludhiana"
      ],
      overview: "A classic Himachal hill tour covering the 'Queen of Hills' Shimla, the adventure capital Manali, and the serene Parvati Valley hamlet of Kasol. Perfect for couples, families, and groups seeking snow-capped peaks, adventure sports, and riverside tranquility.",
      itinerary: [
        {
          day: 1,
          title: "Chandigarh → Shimla (123 KM / Approx. 4 Hrs)",
          description: "Pickup from Chandigarh Airport at 01:00 PM and proceed towards Shimla, the beautiful Queen of Hills. Enjoy a comfortable drive through scenic mountain roads. Upon arrival in Shimla, check-in at the hotel and freshen up. In the evening visit the famous Shimla Mall Road for a pleasant walk, local shopping, and sightseeing.",
          meals: "Dinner Included",
          stay: "Snow Valley Resorts, Shimla (Premium Resort)"
        },
        {
          day: 2,
          title: "Shimla – Kufri – Shimla (Local Sightseeing)",
          description: "After breakfast at the hotel, proceed for local sightseeing of Shimla and Kufri. Visit Kufri, a popular hill station known for its scenic beauty, cool climate, and panoramic views. Evening is free for self-exploration around nearby areas such as The Ridge, Scandal Point, and Lakkar Bazaar.",
          meals: "Breakfast & Dinner",
          stay: "Snow Valley Resorts, Shimla (Premium Resort)"
        },
        {
          day: 3,
          title: "Shimla → Manali (250 KM / Approx. 8 Hrs)",
          description: "After breakfast, check-out from the hotel at 09:00 AM and proceed towards Manali. Enjoy a long scenic drive through beautiful hills, valleys, rivers, and pine forests. Upon arrival in Manali, check-in at the hotel. In the evening, visit popular attractions such as Mall Road, Hadimba Devi Temple, and local markets.",
          meals: "Breakfast & Dinner",
          stay: "Sun Park Boutique & Spa, Prini, Manali (5 Star)"
        },
        {
          day: 4,
          title: "Manali Local Sightseeing (Atal Tunnel – Solang Valley – Sissu Valley)",
          description: "After breakfast, proceed for a full day sightseeing tour around Manali. Visit the famous Atal Tunnel, then continue towards Solang Valley — popular for paragliding, ATV rides, ropeway, and snow activities (seasonal). After that, visit the beautiful Sissu Valley surrounded by snow-covered mountains.",
          meals: "Breakfast & Dinner",
          stay: "Sun Park Boutique & Spa, Prini, Manali (5 Star)"
        },
        {
          day: 5,
          title: "Manali → Kasol → Ludhiana Drop",
          description: "After breakfast at 08:00 AM, check-out from the hotel and proceed towards Kasol, located in the scenic Parvati Valley. On arrival, visit the Kasol market and enjoy riverside views. Visit Manikaran Sahib Gurudwara. By 02:00 PM, proceed towards Ludhiana for drop at desired location around 08:00–09:00 PM.",
          meals: "Breakfast Included",
          stay: "Check-out"
        }
      ],
      inclusions: [
        "04 Nights accommodation in premium resort & 5-star hotel",
        "Daily breakfast and dinner (MAP meal plan)",
        "All road transfers by AC vehicle as per itinerary",
        "Pickup from Chandigarh Airport, drop at Ludhiana"
      ],
      exclusions: [
        "Airfare / Train tickets",
        "Lunch (own expense throughout)",
        "Adventure activities at Solang Valley (paragliding, ATV, ropeway)",
        "Personal expenses, tips, and travel insurance"
      ],
      hotelInfo: "Snow Valley Resorts Shimla (Premium Resort, 2 nights) + Sun Park Boutique & Spa Prini Manali (5 Star, 2 nights).",
      bestTime: "March to June | October to January (for snow)"
    },

    {
      id: "pkg-turkey-01",
      title: "Turkey: Istanbul Heritage & Leisure Tour",
      slug: "turkey-istanbul-heritage-leisure-tour",
      destinationId: "turkey",
      destinationName: "Istanbul & Bursa, Turkey",
      category: "international",
      experienceType: "luxury",
      durationDays: 6,
      durationNights: 5,
      price: 85500,
      originalPrice: null,
      rating: 4.8,
      reviewsCount: 0,
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?auto=format&fit=crop&w=800&q=80"
      ],
      tag: "International Escape",
      highlights: [
        "Dinner Cruise on the Bosphorus with Belly Dancing & DJ show",
        "Full Day Ottoman Tour: St. Sophia, Blue Mosque, Topkapi Palace & Grand Bazaar",
        "Princess Island (Buyukada) cruise & seafood lunch on Marmara Sea",
        "Bursa day tour with Uludağ Mountain chairlift & Green Mosque",
        "Turkey Visa included in package"
      ],
      overview: "Explore Istanbul's magnificent blend of Byzantine and Ottoman heritage in 5 nights. From the grand domes of the Blue Mosque to the vibrant lanes of the Grand Bazaar, a Bosphorus dinner cruise, and a scenic day trip to Bursa — Turkey's ancient Ottoman capital.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Istanbul – Dinner Cruise",
          description: "Arrive at the Airport. Meet & Greet by our representative at 11:00 Hrs and transfer to your hotel. Check in and take some rest. In the evening go for a Dinner Cruise with a Belly Dancing show at 7:30 PM — featuring Welcome Drink, Belly Dancing Show, Turkish Romani Show, DJ Music and live performance by a comedian. Overnight in Istanbul Hotel.",
          meals: "Dinner Cruise Included",
          stay: "Istanbul Hotel (5 Nights)"
        },
        {
          day: 2,
          title: "Istanbul Ottoman Tour with Lunch",
          description: "Morning pick up at 08:00 AM. Full Day Ottoman walking tour with Lunch covering St. Sophia (outside view), the iconic Blue Mosque, Hippodrome with the Obelisk of Egypt, Topkapi Palace (inside view — one of the largest collections of Chinese & Japanese porcelain), and the Grand Bazaar.",
          meals: "Lunch & Dinner at Restaurant",
          stay: "Istanbul Hotel"
        },
        {
          day: 3,
          title: "Istanbul Princess Island with Local Lunch",
          description: "After a relaxing cruise on the Marmara Sea, arrive at Buyukada — famous for its beautifully decorated old wooden houses, pine trees, and wonderful panoramic views. Enjoy a walk through quiet, narrow streets and good food at a seafood restaurant. Also visited: Topkapi Palace and Leander's Tower from the sea.",
          meals: "Local Lunch & Dinner at Restaurant",
          stay: "Istanbul Hotel"
        },
        {
          day: 4,
          title: "Istanbul – Bursa Day Tour",
          description: "After breakfast, pick up for the Bursa tour. Ferry from Istanbul to Yalova across the Marmara Sea, then bus sightseeing to Bursa. Chairlift to the peak of Uludağ Mountain (2543m), free time on top, and visit to the Green Social Complex — Green Mosque, Green Tomb, Ottoman House, and the Silk Market.",
          meals: "Lunch & Dinner at Restaurant",
          stay: "Istanbul Hotel"
        },
        {
          day: 5,
          title: "Istanbul – Free Day for Leisure",
          description: "After breakfast, a free day for leisure to explore Istanbul's bazaars, rooftop cafes, or Bosphorus promenade at your own pace. Overnight stay at Istanbul Hotel.",
          meals: "Breakfast & Dinner",
          stay: "Istanbul Hotel"
        },
        {
          day: 6,
          title: "Fly Back Home",
          description: "After Breakfast, proceed to the airport for the onward journey. Tour ends with wonderful memories.",
          meals: "Breakfast Included",
          stay: "Check-out"
        }
      ],
      inclusions: [
        "05 Nights Accommodation in Istanbul Hotel",
        "Daily Breakfast at Hotel",
        "Airport Transfers on Private Basis",
        "Dinner Cruise with Entertainment Show (Day 1)",
        "Full Day Ottoman Tour with Lunch",
        "Princess Island Tour with Local Lunch",
        "Bursa & Uludağ Tour with Lunch (SIC Basis)",
        "Dinner at Restaurant as Mentioned in Itinerary",
        "All Sightseeing & Tours as per Itinerary",
        "All Entrance Fees Included",
        "Professional English-Speaking Guide",
        "VAT Included",
        "Turkey Visa"
      ],
      exclusions: [
        "International Airfare",
        "Travel Insurance",
        "Personal Expenses (Laundry, Telephone, Room Service etc.)",
        "Any Meals Not Mentioned in the Itinerary",
        "Early Check-In / Late Check-Out at Hotel",
        "Tips & Gratuities for Driver & Guide",
        "Any Extra Sightseeing or Activity Not Mentioned",
        "TCS (Tax Collected at Source) as per Government of India Rules"
      ],
      hotelInfo: "Istanbul Hotel (5 Nights). Hotel name not specified in source; similar category will be provided. Standard check-in 14:00 hrs.",
      bestTime: "April to October"
    },

    {
      id: "pkg-turkey-02",
      title: "Turkey: Istanbul & Cappadocia Discovery",
      slug: "turkey-istanbul-cappadocia-discovery",
      destinationId: "turkey",
      destinationName: "Istanbul & Cappadocia, Turkey",
      category: "international",
      experienceType: "luxury",
      durationDays: 6,
      durationNights: 5,
      price: 72000,
      originalPrice: null,
      rating: 4.85,
      reviewsCount: 0,
      image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?auto=format&fit=crop&w=800&q=80"
      ],
      tag: "International Escape",
      highlights: [
        "Dinner Cruise with Belly Dancing & Romani Show on Day 1",
        "Full Day Istanbul City Ottoman Tour (walking)",
        "Princess Island (Buyukada) seafood lunch cruise",
        "Cappadocia RED Tour with Love Valley, Uchisar Castle & Pottery Workshop",
        "Optional Hot Air Balloon at €170 per person extra"
      ],
      overview: "The ultimate Turkey experience — combine Istanbul's legendary Ottoman grandeur with the surreal fairy-chimney landscapes of Cappadocia. Fly internally for a seamless 5-night journey that takes you from Bosphorus dinner cruises to sunrise hot air balloons over ancient valleys.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Istanbul – Dinner Cruise",
          description: "Arrive at Istanbul International Airport. Meet & Greet by our representative. Transfer to your hotel. Check in and rest. In the evening go for a Dinner Cruise with a Belly Dancing show at 7:30 PM (SIC Transfers) — featuring Welcome Drink, Belly Dancing Show, Turkish Romani Show, DJ music and live performance by a comedian. Overnight stay in hotel.",
          meals: "Dinner Cruise Included",
          stay: "Istanbul Hotel"
        },
        {
          day: 2,
          title: "Istanbul City Tour / Lunch",
          description: "Morning pick up at 08:00 AM. Full Day Ottoman walking tour with Lunch. Visit St. Sophia (outside view), Blue Mosque, Hippodrome, Topkapi Palace (inside view), and the Grand Bazaar. Overnight in hotel.",
          meals: "Lunch & Dinner",
          stay: "Istanbul Hotel"
        },
        {
          day: 3,
          title: "Istanbul Princess Island / Lunch",
          description: "After a relaxing cruise on the Marmara Sea, arrive at Buyukada — famous for its old wooden houses, pine trees and panoramic views. Walk through quiet narrow streets. Good food at a seafood restaurant. Also visited: Topkapi Palace, Leander's Tower, and Uskudar from the sea. Overnight in Istanbul Hotel.",
          meals: "Local Lunch & Dinner",
          stay: "Istanbul Hotel"
        },
        {
          day: 4,
          title: "Cappadocia (Fly ASR)",
          description: "After Breakfast, pick up from the Hotel and transfer to Istanbul Airport to catch a flight to Cappadocia. Check into the hotel. Overnight stay at Cappadocia Hotel.",
          meals: "Breakfast",
          stay: "Cappadocia Hotel"
        },
        {
          day: 5,
          title: "Cappadocia RED Tour with Lunch (Hot Air Ballooning Optional @ 04:30 AM)",
          description: "Optional Hot Air Ballooning at 04:30 AM (extra €170 per person). At 08:30 AM, start the full day Cappadocia RED Tour with Lunch covering Love Valley, Monks Valley, Zelve Open-Air Museum, Uchisar Castle, Avanos Pottery Workshop, and Imagination Valley. Overnight in Cappadocia Hotel.",
          meals: "Breakfast & Lunch",
          stay: "Cappadocia Hotel"
        },
        {
          day: 6,
          title: "Fly Back Home",
          description: "After breakfast, transfer to airport for onward journey. Tour ends with wonderful memories.",
          meals: "Breakfast Included",
          stay: "Check-out"
        }
      ],
      inclusions: [
        "All Airport Transfers on Private Basis",
        "05 Nights Hotel Accommodation (Istanbul + Cappadocia)",
        "Daily Breakfast at Hotel",
        "Meals as per itinerary mentioned",
        "Dinner Cruise with Welcome Drink, Belly Dancing Show, Turkish Romani Show, DJ Music & Live Entertainment",
        "Full Day Istanbul Ottoman City Tour",
        "Princess Island Tour",
        "Cappadocia RED Tour with Lunch",
        "All Entrance Fees Included",
        "Professional English-Speaking Guide",
        "01 Water Bottle per person per day (During Tours)",
        "All Tours on Private Basis",
        "VAT Included"
      ],
      exclusions: [
        "International Airfare",
        "Domestic Flight Tickets (Istanbul to Cappadocia)",
        "Turkey Visa Charges (if applicable)",
        "Personal Expenses (Laundry, Telephone, Room Service etc.)",
        "Any Meals Not Mentioned in the Itinerary",
        "Early Check-in / Late Check-out",
        "Tips & Gratuities for Driver & Guide",
        "Hot Air Balloon Charges (Optional — €170 per person)",
        "Travel Insurance",
        "TCS (Tax Collected at Source) as per Government of India Rules"
      ],
      hotelInfo: "Istanbul Hotel (3 nights) + Cappadocia Hotel (2 nights). Hotel names not specified in source; similar category will be provided.",
      bestTime: "April to October"
    },

    {
      id: "pkg-pondicherry-01",
      title: "Pondicherry & Mahabalipuram Coastal Heritage",
      slug: "pondicherry-mahabalipuram-coastal-heritage",
      destinationId: "pondicherry",
      destinationName: "Pondicherry & Mahabalipuram, India",
      category: "domestic",
      experienceType: "group",
      durationDays: 4,
      durationNights: 3,
      price: 20000,
      originalPrice: null,
      rating: 4.7,
      reviewsCount: 0,
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
      ],
      tag: "Scenic Getaway",
      highlights: [
        "Pondicherry French Town (White Town), Promenade Beach & Auroville",
        "Paradise Beach boat excursion & Serenity Beach",
        "Sri Aurobindo Ashram & Manakula Vinayagar Temple",
        "Shore Temple (UNESCO) & Pancha Rathas at Mahabalipuram",
        "Arjuna's Penance rock carving & Krishna's Butterball"
      ],
      overview: "A 3-night coastal heritage escape blending the French-colonial charm of Pondicherry with the ancient Pallava rock-cut temples of Mahabalipuram. From Auroville's golden dome to UNESCO World Heritage shores, this itinerary is perfect for culture and beach lovers.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Pondicherry – French Town & Beach Experience",
          description: "On arrival at Pondicherry, check-in to the hotel and relax. Later proceed for local sightseeing: White Town (French Colony) — famous for French-style buildings and colorful streets. Enjoy the European vibe with charming cafés and colonial architecture. Visit Promenade Beach (Rock Beach) for sunset views and sea breeze. Shopping at Mission Street / Nehru Street.",
          meals: "Dinner Included",
          stay: "Treebo South Avenue / Hotel Tamizh Grand, Pondicherry (3 Star)"
        },
        {
          day: 2,
          title: "Auroville + Paradise Beach + Serenity Beach",
          description: "After breakfast, proceed for a full-day excursion. Visit Auroville's famous Matrimandir (Golden Dome) viewpoint area. Enjoy organic food at Auroville Café/Bakery. Then Chunnambar Boat House for boating to Paradise Beach — one of the cleanest beaches accessible only by boat. Evening at Serenity Beach for sunset views.",
          meals: "Breakfast & Dinner",
          stay: "Treebo South Avenue / Hotel Tamizh Grand, Pondicherry (3 Star)"
        },
        {
          day: 3,
          title: "Pondicherry Spiritual Tour – Transfer to Mahabalipuram",
          description: "After breakfast, check-out and proceed for sightseeing. Visit Sri Aurobindo Ashram — a world-famous spiritual place. Manakula Vinayagar Temple dedicated to Lord Ganesha. Optional: Botanical Garden / Pondicherry Museum. Then transfer to Mahabalipuram (approx 100 KM, 2.5–3 hours). Evening visit to Shore Temple (UNESCO World Heritage Site) at sunset.",
          meals: "Breakfast & Dinner",
          stay: "Hotel Mamalla / Sea Breeza Beach Resort, Mahabalipuram (3 Star)"
        },
        {
          day: 4,
          title: "Mahabalipuram UNESCO Sightseeing + Drop",
          description: "After breakfast, proceed for full-day sightseeing: Pancha Rathas (five monolithic rock temples), Arjuna's Penance (world-famous rock carving), Krishna's Butterball (giant balancing rock), Lighthouse (outside view), and Local Market Shopping for stone handicrafts. After sightseeing, proceed for drop at Chennai / Pondicherry as per requirement.",
          meals: "Breakfast Included",
          stay: "Check-out"
        }
      ],
      inclusions: [
        "03 Nights accommodation in 3-star hotels/resort on twin/double sharing",
        "Daily breakfast and dinner (MAP meal plan)",
        "All road transfers by AC vehicle as per itinerary",
        "Hotel check-in/check-out assistance"
      ],
      exclusions: [
        "Airfare / Train tickets",
        "Lunch (own expense throughout)",
        "Chunnambar boat charges to Paradise Beach (optional)",
        "Camera fees at monuments",
        "Personal expenses, tips, and travel insurance"
      ],
      hotelInfo: "Option 1: Treebo South Avenue Pondicherry (3 Star, 2N) + Hotel Mamalla Mahabalipuram (3 Star, 1N). Option 2: Hotel Tamizh Grand Pondicherry (3 Star, 2N) + Sea Breeza Beach Resort Mahabalipuram (Resort, 1N).",
      bestTime: "October to February"
    },

    {
      id: "pkg-goa-group-01",
      title: "Goa Group Tour — Casino & North/South Goa",
      slug: "goa-group-tour-casino-north-south",
      destinationId: "goa",
      destinationName: "Goa, India",
      category: "domestic",
      experienceType: "group",
      durationDays: 4,
      durationNights: 3,
      price: 15500,
      originalPrice: null,
      rating: 4.7,
      reviewsCount: 0,
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80"
      ],
      tag: "Group Favourite",
      highlights: [
        "Casino Night with gaming and entertainment (Day 1 evening)",
        "North Goa full-day: Fort Aguada, Baga, Calangute, Chapora Fort & Anjuna Beach",
        "South Goa full-day: Old Goa Churches, Dona Paula, Miramar & Panaji",
        "Gala Dinner with cocktail party & DJ Night",
        "Boat Cruise evening experience"
      ],
      overview: "The ultimate Goa group experience covering casino excitement, vibrant North Goa beaches, historic South Goa churches, and a memorable Gala Dinner — all packed into 3 nights at Hotel Silver Shell Goa. Ideal for friends, families, and corporate groups.",
      itinerary: [
        {
          day: 1,
          title: "Arrival – Goa",
          description: "On arrival at the airport, greeted and transferred to the hotel for check-in (standard time 2:00 PM). After check-in, enjoy a fresh lunch at the hotel and take some rest. The evening is free for relaxation. Later at 7:00 PM, transferred to the casino for gaming and entertainment till 12:00 AM midnight (post midnight: ₹500/hr extra). After casino, transferred back to hotel for overnight stay.",
          meals: "Lunch & Dinner Included",
          stay: "Hotel Silver Shell Goa (3 Star)"
        },
        {
          day: 2,
          title: "North Goa Sightseeing",
          description: "After breakfast, full-day North Goa sightseeing tour (10:00 AM – 05:00 PM). Visit Fort Aguada, Sinquerim Beach, Candolim Beach, Baga Beach, Chapora Fort, Calangute Beach, Anjuna Beach, and Vagator Beach. Optional activities: Dolphin Trip, Wax Museum, and Snow Park (tickets extra). In the evening, enjoy a lively Gala Dinner with cocktail party and DJ night.",
          meals: "Breakfast, Lunch & Gala Dinner",
          stay: "Hotel Silver Shell Goa (3 Star)"
        },
        {
          day: 3,
          title: "South Goa Sightseeing",
          description: "After breakfast, full-day South Goa sightseeing tour (10:00 AM – 06:00 PM). Visit Old Goa Churches, St. Augustine Church, Mangeshi Temple, Balaji Temple, Dona Paula Beach, Miramar Beach, Panaji Church, and enjoy Panjim shopping. In the evening, experience a Boat Cruise (ticket excluded). After completing the tour, dinner served at the hotel.",
          meals: "Breakfast & Dinner",
          stay: "Hotel Silver Shell Goa (3 Star)"
        },
        {
          day: 4,
          title: "Departure – Goa",
          description: "After breakfast at the hotel, check-out at 11:00 AM. Transfer to the airport as per your flight timing for your onward journey. This marks the end of your memorable tour.",
          meals: "Breakfast Included",
          stay: "Check-out"
        }
      ],
      inclusions: [
        "03 Nights accommodation at Hotel Silver Shell Goa (3 Star, Superior Room, double occupancy)",
        "Breakfast, Lunch on Day 1 & Gala Dinner on Day 2 (MAP + extras as per itinerary)",
        "All airport/hotel transfers by AC vehicle",
        "Casino transfer on Day 1 evening",
        "North Goa and South Goa full-day sightseeing by AC vehicle"
      ],
      exclusions: [
        "Airfare / Train tickets",
        "Casino charges (₹500/hr post midnight)",
        "Optional activities: Dolphin Trip, Wax Museum, Snow Park (tickets extra)",
        "Boat Cruise ticket on Day 3",
        "South Goa lunch (own expense)",
        "Personal expenses, tips, and travel insurance"
      ],
      hotelInfo: "Hotel Silver Shell Goa — 3 Star Hotel, Superior Room, Double Occupancy. Check-in: 14-Jun-2026, Check-out: 17-Jun-2026. Meal Plan: Room + Breakfast + Dinner (MAP). 14 rooms.",
      bestTime: "November to March"
    },

    {
      id: "pkg-goa-group-02",
      title: "Goa Group Tour — Beaches & Casino Night",
      slug: "goa-group-tour-beaches-casino-night",
      destinationId: "goa",
      destinationName: "Goa, India",
      category: "domestic",
      experienceType: "group",
      durationDays: 4,
      durationNights: 3,
      price: 16578,
      originalPrice: null,
      rating: 4.7,
      reviewsCount: 0,
      image: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80"
      ],
      tag: "Group Favourite",
      highlights: [
        "North Goa evening beaches: Calangute, Baga & Anjuna with local market",
        "South Goa full-day: Basilica of Bom Jesus, Dona Paula, Miramar & Colva Beach",
        "Casino Night at Mandovi River Cruise / Casino",
        "Gala Dinner with DJ Night at hotel",
        "Full All-inclusive meal plan (AP) included"
      ],
      overview: "Goa's beaches and casino excitement in a fully all-inclusive group package. Covering both North and South Goa's iconic sights, a Gala Dinner with DJ, and a night at the famous Mandovi River Casino — all at Ocean Park Resort. Best value group deal for 14–28 pax.",
      itinerary: [
        {
          day: 1,
          title: "Arrival – Goa",
          description: "Arrival in Goa and transfer to the hotel. After check-in, enjoy lunch at the hotel and take some rest. In the evening, proceed for North Goa sightseeing covering popular beaches like Calangute Beach, Baga Beach, and Anjuna Beach along with local market visit. Return to the hotel for dinner and overnight stay.",
          meals: "Lunch & Dinner Included (AP)",
          stay: "Ocean Park Resort, Goa (Standard Resort, Economy Room)"
        },
        {
          day: 2,
          title: "South Goa Sightseeing",
          description: "After breakfast, proceed for full day South Goa sightseeing. Visit famous places like Old Goa Churches (Basilica of Bom Jesus), Dona Paula, Miramar Beach, and Colva Beach. Enjoy lunch during the tour and later return to the hotel. Dinner at the hotel and overnight stay.",
          meals: "Breakfast, Lunch & Dinner (AP)",
          stay: "Ocean Park Resort, Goa (Standard Resort)"
        },
        {
          day: 3,
          title: "Casino Night + Gala Dinner",
          description: "After breakfast, the day will be free for leisure activities, shopping, or optional water sports. In the evening, enjoy a special Gala Dinner with DJ Night at the hotel. Later proceed for an exciting Casino Night experience at Mandovi River Cruise / Casino. Return back to the hotel for overnight stay.",
          meals: "Breakfast, Gala Dinner (AP)",
          stay: "Ocean Park Resort, Goa (Standard Resort)"
        },
        {
          day: 4,
          title: "Departure – Goa",
          description: "After breakfast, check-out from the hotel and proceed for departure transfer to Goa Airport/Railway Station with beautiful memories of the trip.",
          meals: "Breakfast Included (AP)",
          stay: "Check-out"
        }
      ],
      inclusions: [
        "03 Nights accommodation at Ocean Park Resort Goa (Standard Resort, Economy Room, double occupancy)",
        "Full All-Inclusive meal plan: Breakfast, Lunch & Dinner throughout (AP)",
        "All airport/hotel transfers by AC vehicle",
        "North Goa evening sightseeing on Day 1",
        "South Goa full-day sightseeing on Day 2",
        "Gala Dinner with DJ Night on Day 3"
      ],
      exclusions: [
        "Airfare / Train tickets",
        "Casino charges (own expense at Mandovi River Casino)",
        "Optional water sports on Day 3",
        "Personal expenses, tips, and travel insurance"
      ],
      hotelInfo: "Ocean Park Resort, Goa — Standard Resort, Economy Room, Double Occupancy. Meal Plan: Room + Breakfast + Lunch + Dinner (AP). 14 rooms. Check-in: 14-Jun-2026, Check-out: 17-Jun-2026.",
      bestTime: "November to March"
    },

    {
      id: "pkg-kashmir-valley-01",
      title: "Kashmir Valley Tour",
      slug: "kashmir-valley-tour",
      destinationId: "kashmir",
      destinationName: "Srinagar, Pahalgam & Gulmarg/Sonamarg, India",
      category: "domestic",
      experienceType: "group",
      durationDays: 4,
      durationNights: 3,
      price: 11999,
      originalPrice: null,
      rating: 4.7,
      reviewsCount: 0,
      image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80"
      ],
      tag: "Scenic Getaway",
      highlights: [
        "Dal Lake Shikara Ride & Mughal Gardens: Shalimar Bagh, Nishat Bagh & Chashme Shahi",
        "Pahalgam scenic drive via Lidder River (Betaab, Aru & Chandanwari optional)",
        "Gulmarg: snow meadows & Gondola Cable Car (optional) OR Sonamarg: Thajiwas Glacier",
        "Boulevard Road evening walk & local market shopping in Srinagar",
        "3 nights at Hotel Samar, Srinagar"
      ],
      overview: "Experience the magic of Kashmir in 3 nights at an unbeatable price. Starting from Srinagar, explore the iconic Dal Lake, the serene Pahalgam valley, and choose between the snow-capped meadows of Gulmarg or the glacier landscapes of Sonamarg — all from one base hotel.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Srinagar – Check-In – Local Sightseeing",
          description: "On arrival at Srinagar Railway Station / Airport, transfer to Hotel Samar, Srinagar. After check-in, relax and freshen up. Post lunch, proceed for Srinagar local sightseeing covering the famous Dal Lake (Shikara Ride optional) and visit the beautiful Mughal Gardens including Shalimar Bagh, Nishat Bagh, and Chashme Shahi. In the evening, enjoy a peaceful walk at Boulevard Road and explore the local market for shopping.",
          meals: "Dinner Included",
          stay: "Hotel Samar, Srinagar (3 Star)"
        },
        {
          day: 2,
          title: "Srinagar → Pahalgam – Sightseeing",
          description: "After breakfast, depart for a scenic drive to Pahalgam (approx 2.5–3 hours). On arrival, enjoy local sightseeing and explore the natural beauty. Visit the famous Lidder River. Optional additional sightseeing to Betaab Valley, Aru Valley, and Chandanwari (at extra cost). After a memorable day in Pahalgam, return back to Srinagar by evening.",
          meals: "Breakfast & Dinner",
          stay: "Hotel Samar, Srinagar (3 Star)"
        },
        {
          day: 3,
          title: "Srinagar → Gulmarg / Sonamarg (Choose One)",
          description: "After breakfast, proceed for a full-day excursion to either Gulmarg or Sonamarg as per your choice. If Gulmarg: enjoy stunning meadows, snow-covered mountain views, and optional Gondola Cable Car Ride. If Sonamarg: explore mesmerizing landscapes and optional visit to Thajiwas Glacier. Return to Srinagar in the evening.",
          meals: "Breakfast & Dinner",
          stay: "Hotel Samar, Srinagar (3 Star)"
        },
        {
          day: 4,
          title: "Srinagar Half-Day Sightseeing & Departure",
          description: "After breakfast, enjoy half-day sightseeing in Srinagar and visit any remaining attractions. Last-minute shopping or a relaxing stroll around Dal Lake. Check out from Hotel Samar and proceed for drop at Srinagar Railway Station / Airport as per your departure time.",
          meals: "Breakfast Included",
          stay: "Check-out"
        }
      ],
      inclusions: [
        "03 Nights accommodation at Hotel Samar, Srinagar (3 Star, Deluxe Room, double occupancy)",
        "Daily breakfast and dinner (MAP meal plan)",
        "All road transfers by AC vehicle as per itinerary",
        "Srinagar railway station / airport pickup and drop"
      ],
      exclusions: [
        "Airfare / Train tickets",
        "Dal Lake Shikara Ride (optional, own expense)",
        "Pahalgam local union vehicle / pony charges (optional)",
        "Betaab Valley, Aru Valley & Chandanwari entry (optional, extra cost)",
        "Gulmarg Gondola Cable Car (optional, extra)",
        "Sonamarg Thajiwas Glacier visit (optional, extra)",
        "Personal expenses, tips, and travel insurance"
      ],
      hotelInfo: "Hotel Samar, Srinagar — 3 Star Hotel, Deluxe Room, Double Occupancy. Meal Plan: Room + Breakfast + Dinner (MAP). Check-in: 15-May-2026, Check-out: 18-May-2026.",
      bestTime: "April to October"
    },
    // ── END NEW PACKAGES ──────────────────────────────────────────────────────

    // ── PACKAGES FROM HTML DATA (BATCH 2) ─────────────────────────────────────
    {
      id: "pkg-kerala-gods-own",
      title: "Kerala — God's Own Country",
      slug: "kerala-gods-own-country-4n5d",
      destinationId: "kerala",
      destinationName: "Munnar, Thekkady & Alleppey, Kerala",
      category: "domestic",
      experienceType: "honeymoon",
      durationDays: 5,
      durationNights: 4,
      price: 13499,
      originalPrice: 16499,
      rating: 4.9,
      reviewsCount: 128,
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=800&q=80"
      ],
      tag: "Romantic & Family Favorite",
      highlights: [
        "Munnar: Eravikulam National Park (Nilgiri Tahr) & Mattupetty Dam",
        "Tea Museum & Blossom International Park, Munnar",
        "Periyar Wildlife Sanctuary boat ride, Thekkady",
        "Alleppey backwater boating & Alleppey Beach",
        "Cheeyappara & Valara waterfalls en route"
      ],
      overview: "Discover God's Own Country in 4 nights — from Munnar's emerald tea gardens and Thekkady's wildlife sanctuary to Alleppey's serene palm-fringed backwaters. A perfect blend of nature, wildlife, and leisure for couples and families.",
      itinerary: [
        {
          day: 1,
          title: "Cochin to Munnar",
          description: "Arrive in Cochin and drive to Munnar. En route visit Cheeyappara and Valara waterfalls. Afternoon visit Tea Museum and Blossom International Park.",
          meals: "Breakfast (CP)",
          stay: "Cloud Castle Resort, Munnar (4 Star, Deluxe Room)"
        },
        {
          day: 2,
          title: "Munnar Local Sightseeing",
          description: "Visit Eravikulam National Park — home to the endangered Nilgiri Tahr. Stroll through tea gardens, visit Mattupetty Dam and Kundala Lake.",
          meals: "Breakfast (CP)",
          stay: "Cloud Castle Resort, Munnar (4 Star, Deluxe Room)"
        },
        {
          day: 3,
          title: "Munnar to Thekkady",
          description: "Drive to Thekkady. Afternoon boat ride on Periyar Lake in Periyar Wildlife Sanctuary. Visit spice plantations and learn about various spices.",
          meals: "Breakfast (CP)",
          stay: "Hotel Lincoln Square, Thekkady (Deluxe Room)"
        },
        {
          day: 4,
          title: "Thekkady to Alleppey",
          description: "Drive to Alleppey. Enjoy serene backwater boating (cost extra) through lush paddy fields and coconut groves. Evening at Alleppey Beach.",
          meals: "Breakfast (CP)",
          stay: "Lake Way Resort, Alleppey (Deluxe Room)"
        },
        {
          day: 5,
          title: "Alleppey to Cochin Departure",
          description: "Drive to Cochin, enjoy last-minute shopping, and drop off at Cochin Airport for departure.",
          meals: "Breakfast Included",
          stay: "Check-out"
        }
      ],
      inclusions: [
        "04 Nights accommodation on twin sharing basis",
        "Daily Breakfast (CP) at all hotels",
        "All transfers and sightseeing by AC vehicle as per itinerary",
        "Road taxes, parking fees, and fuel charges"
      ],
      exclusions: [
        "Onward & return flight / train tickets",
        "Travel Insurance",
        "Entrance fees at sightseeing spots and boating charges",
        "Lunch & Dinner",
        "Personal expenses (tips, laundry, calls, medical)"
      ],
      hotelInfo: "Cloud Castle Resort Munnar (4 Star, 2N) + Hotel Lincoln Square Thekkady (1N) + Lake Way Resort Alleppey (1N). All CP meal plan.",
      bestTime: "September to February"
    },

    {
      id: "pkg-andaman-5star",
      title: "Andaman & Nicobar Islands Tour",
      slug: "andaman-port-blair-havelock-3n4d",
      destinationId: "andaman",
      destinationName: "Port Blair & Swaraj Dweep (Havelock), Andaman",
      category: "domestic",
      experienceType: "luxury",
      durationDays: 4,
      durationNights: 3,
      price: 24500,
      originalPrice: 28999,
      rating: 4.95,
      reviewsCount: 96,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
      ],
      tag: "Featured Island Escape",
      highlights: [
        "Cellular Jail National Memorial & evening Light & Sound Show",
        "Corbyn's Cove Beach, Port Blair",
        "Radhanagar Beach, Havelock — Asia's 7th Best Beach",
        "Kalapathar Beach & Chidiya Tapu sunset",
        "5-Star stays at Seashell Port Blair & Seashell Havelock"
      ],
      overview: "Experience the pristine turquoise islands of Andaman in luxury. Visit the historic Cellular Jail, cruise to legendary Radhanagar Beach, and stay at the award-winning 5-star Seashell properties — all in just 3 nights.",
      itinerary: [
        {
          day: 1,
          title: "Arrival at Port Blair & Tour Around",
          description: "Airport pickup and hotel drop. After lunch visit Cellular Jail (National Memorial), Corbyn's Cove Beach, and attend the evening Light & Sound Show at Cellular Jail. Complimentary photography at Corbyn's Cove.",
          meals: "Breakfast (CP)",
          stay: "Seashell Port Blair (5 Star, Standard AC Room)"
        },
        {
          day: 2,
          title: "Trip to Swaraj Dweep (Havelock Island)",
          description: "Transfer to Port Blair Jetty. Private cruise (Green Ocean / Nautika / Makruzz) to Havelock Island. Visit Kalapathar Beach and the iconic Radhanagar Beach — Asia's 7th best beach.",
          meals: "Breakfast (CP)",
          stay: "Seashell Havelock (5 Star, Nicobar Cottage)"
        },
        {
          day: 3,
          title: "Return to Port Blair",
          description: "Checkout and return cruise from Havelock to Port Blair. Afternoon visit Chidiya Tapu Beach for beautiful sunset views. Return to hotel overnight.",
          meals: "Breakfast (CP)",
          stay: "Seashell Port Blair (5 Star, Standard AC Room)"
        },
        {
          day: 4,
          title: "Return with Sweet Memories",
          description: "Checkout from hotel and drop at Airport 2 hours prior to flight. Fly home with unforgettable Andaman memories.",
          meals: "Breakfast Included",
          stay: "Check-out"
        }
      ],
      inclusions: [
        "03 Nights 5-Star accommodation at Seashell hotels (CP)",
        "1 Private AC car for all pickups, drops & sightseeing",
        "Private cruise transfers (Green Ocean / Nautika / Makruzz) Port Blair ↔ Havelock",
        "Light & Sound Show tickets at Cellular Jail",
        "Speed boat charges, permits, parking & GST",
        "Complimentary Photography at Corbyn's Cove",
        "24/7 support"
      ],
      exclusions: [
        "Flight tickets to Port Blair",
        "Lunch & Dinner",
        "Laundry, calls, beverages, camera charges",
        "Water sports charges",
        "Personal expenses"
      ],
      hotelInfo: "Seashell Port Blair (5 Star, Standard AC Room, 2N) + Seashell Havelock (5 Star, Nicobar Cottage, 1N). All CP meal plan.",
      bestTime: "November to May"
    },

    {
      id: "pkg-ujjain-omkareshwar",
      title: "Ujjain Omkareshwar 2N/3D Spiritual Tour",
      slug: "ujjain-omkareshwar-indore-tour-2n3d",
      destinationId: "madhyapradesh",
      destinationName: "Ujjain, Omkareshwar & Indore, MP",
      category: "domestic",
      experienceType: "group",
      durationDays: 3,
      durationNights: 2,
      price: 6499,
      originalPrice: 8499,
      rating: 4.92,
      reviewsCount: 142,
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80"
      ],
      tag: "Spiritual Bestseller",
      highlights: [
        "Mahakaleshwar Jyotirlinga Temple & Mahakal Lok Corridor, Ujjain",
        "Kal Bhairav Temple & Harsiddhi Mata Mandir, Ujjain",
        "Omkareshwar Jyotirlinga on Mandhata Island, Narmada River",
        "Ram Ghat, Ujjain",
        "Half-day Indore sightseeing & drop"
      ],
      overview: "A divine 2-night spiritual journey covering two of the 12 Jyotirlingas — Mahakaleshwar in Ujjain and Omkareshwar on Narmada's sacred island. Ideal for pilgrimage groups, families, and solo seekers departing from Bhopal, Indore, or Ujjain.",
      itinerary: [
        {
          day: 1,
          title: "Pickup from Indore/Ujjain & Sightseeing",
          description: "Pickup and transfer to Ujjain hotel. Visit Kal Bhairav Temple, Harsiddhi Mata Mandir, Mahakaleshwar Jyotirlinga Temple, and the grand Mahakal Corridor. Evening Ram Ghat darshan.",
          meals: "Breakfast (CP)",
          stay: "Hotel SS-1, Ujjain (Deluxe Room)"
        },
        {
          day: 2,
          title: "Ujjain to Omkareshwar Local Sightseeing",
          description: "Drive to Omkareshwar on Mandhata Island. Visit Omkareshwar Jyotirlinga Temple, Mamleshwar Temple, Narmada River Ghats, and local markets. Return to Ujjain.",
          meals: "Breakfast (CP)",
          stay: "Hotel SS-1, Ujjain (Deluxe Room)"
        },
        {
          day: 3,
          title: "Half-Day Indore Sightseeing & Drop",
          description: "Checkout after breakfast, enjoy half-day sightseeing and shopping in Indore (Chappan Dukan, Rajwada, Lal Bagh Palace), and drop at Indore Airport / Railway Station.",
          meals: "Breakfast Included",
          stay: "Check-out"
        }
      ],
      inclusions: [
        "02 Nights accommodation in Ujjain (CP)",
        "Daily Breakfast",
        "Pickup & Drop from Indore/Ujjain",
        "Private vehicle for all transfers & sightseeing",
        "Driver allowance, fuel, toll & parking"
      ],
      exclusions: [
        "Flight / Train tickets",
        "VIP Darshan / Aarti tickets",
        "Entry tickets, boating charges, temple donations",
        "Lunch & Dinner",
        "Travel Insurance & personal expenses"
      ],
      hotelInfo: "Hotel SS-1, Ujjain — Deluxe Room, CP meal plan. 2 Nights.",
      bestTime: "October to March | Mahashivratri special"
    },

    {
      id: "pkg-manali-kasol",
      title: "Manali Kasol 4N/5D Hill Adventure",
      slug: "manali-kasol-himachal-tour-4n5d",
      destinationId: "himachal",
      destinationName: "Manali & Kasol, Himachal Pradesh",
      category: "domestic",
      experienceType: "group",
      durationDays: 5,
      durationNights: 4,
      price: 12999,
      originalPrice: 16999,
      rating: 4.88,
      reviewsCount: 110,
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1531778272849-d1dd22444c06?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80"
      ],
      tag: "Mountain Adventure Favorite",
      highlights: [
        "Manali: Solang Valley, Hadimba Devi Temple & Mall Road",
        "Paragliding & River Rafting (optional activities)",
        "Kasol: Parvati Valley riverside views",
        "Manikaran Sahib Gurudwara & hot springs",
        "Snow peaks & mountain viewpoints"
      ],
      overview: "A thrilling 4-night Himachal escape combining Manali's snow-capped adventure with the tranquil charm of Kasol's Parvati Valley. Perfect for groups, friends, and adventure seekers looking for mountains, rafting, and riverside peace.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Manali & Local Sightseeing",
          description: "Check in at Manali hotel and enjoy local sightseeing including Hadimba Devi Temple, Mall Road, and the vibrant local markets.",
          meals: "Dinner Included",
          stay: "Khushbu Resort, Manali"
        },
        {
          day: 2,
          title: "Manali Adventure Excursion",
          description: "Visit adventure valley points for Paragliding and River Rafting activities (charges extra). Experience the thrill of Himalayan adventure.",
          meals: "Breakfast & Dinner",
          stay: "Khushbu Resort, Manali"
        },
        {
          day: 3,
          title: "Manali Scenic Tour",
          description: "Explore surrounding mountain viewpoints including Rohtang Pass area (subject to permit), Solang Valley, and local markets. Enjoy stunning snow-capped panoramas.",
          meals: "Breakfast & Dinner",
          stay: "Khushbu Resort, Manali"
        },
        {
          day: 4,
          title: "Manali to Kasol & Manikaran",
          description: "Drive through the scenic Parvati Valley to Kasol. Visit the sacred Manikaran Sahib Gurudwara with its famous hot water springs. Overnight in Kasol.",
          meals: "Breakfast & Dinner",
          stay: "Hotel Anupam, Kasol"
        },
        {
          day: 5,
          title: "Kasol Exploration & Departure",
          description: "Morning walk along the Parvati River. Enjoy Kasol's cafes and riverside charm before checkout and departure with fond Himalayan memories.",
          meals: "Breakfast Included",
          stay: "Check-out"
        }
      ],
      inclusions: [
        "04 Nights accommodation on double sharing basis",
        "Daily Breakfast & Dinner as per itinerary",
        "Private cab transfers and local sightseeing",
        "All taxes, toll & parking"
      ],
      exclusions: [
        "Airfare / Train fare",
        "Adventure sport charges (Paragliding, Rafting)",
        "Monument / Rohtang Pass permit charges",
        "Lunch (own expense)",
        "Personal expenses"
      ],
      hotelInfo: "Khushbu Resort Manali (3N) + Hotel Anupam Kasol (1N). Double occupancy.",
      bestTime: "March to June | October to January (for snow)"
    },

    {
      id: "pkg-bali-escape",
      title: "Beautiful Bali Escape",
      slug: "beautiful-bali-escape-5n6d",
      destinationId: "bali",
      destinationName: "Ubud, Kuta & Seminyak, Bali",
      category: "international",
      experienceType: "honeymoon",
      durationDays: 6,
      durationNights: 5,
      price: 52500,
      originalPrice: null,
      rating: 4.97,
      reviewsCount: 114,
      image: "https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80"
      ],
      tag: "Romantic Favorite",
      highlights: [
        "Ubud jungle resort stay: rice terraces & waterfalls",
        "Kuta/Seminyak beach resort & beach clubs",
        "Coastal temples, Tanah Lot & Uluwatu sunset",
        "Water sports & Bali markets",
        "Airport transfers & guided sightseeing throughout"
      ],
      overview: "Bali's most beautiful sides in one seamless 5-night journey — mystical Ubud jungles, terraced rice paddies, coastal sunset temples, and vibrant Seminyak beach clubs. Ideal for honeymoon couples and leisure travelers.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Bali & Transfer to Ubud",
          description: "Pickup from Denpasar Airport and transfer to your Ubud jungle resort. Welcome with traditional Balinese hospitality.",
          meals: "Breakfast",
          stay: "Bakung Ubud Resort & Villa / Keep Jungle Resort, Ubud"
        },
        {
          day: 2,
          title: "Ubud Cultural & Nature Tour",
          description: "Explore Ubud Tegalalang rice terraces, scenic waterfalls, Monkey Forest Sanctuary, and local art galleries. Balinese cooking class optional.",
          meals: "Breakfast",
          stay: "Bakung Ubud Resort & Villa / Keep Jungle Resort, Ubud"
        },
        {
          day: 3,
          title: "Island Excursion & Transfer to Kuta/Seminyak",
          description: "Morning island sightseeing en route. Check-in at Kuta/Seminyak beachfront hotel. Evening at leisure on the beach.",
          meals: "Breakfast",
          stay: "Best Western Kuta Villa / Seminyak Paradise Hotel Bali"
        },
        {
          day: 4,
          title: "Bali Beaches & Sunset Temple Tour",
          description: "Visit Tanah Lot sea temple for sunset, enjoy coastal beaches, and experience optional water sports at Tanjung Benoa.",
          meals: "Breakfast",
          stay: "Best Western Kuta Villa / Seminyak Paradise Hotel Bali"
        },
        {
          day: 5,
          title: "Leisure & Bali Exploration",
          description: "Explore Seminyak's beach clubs, trendy cafes, boutique shopping markets, and local souvenir stores. Evening sunset cocktails at Seminyak.",
          meals: "Breakfast",
          stay: "Best Western Kuta Villa / Seminyak Paradise Hotel Bali"
        },
        {
          day: 6,
          title: "Departure from Bali",
          description: "Checkout and transfer to Ngurah Rai Airport. Tour ends with beautiful Bali memories.",
          meals: "Breakfast Included",
          stay: "Check-out"
        }
      ],
      inclusions: [
        "05 Nights accommodation in Ubud jungle resort & Kuta/Seminyak hotel",
        "Daily Breakfast at all properties",
        "Airport transfers and guided sightseeing by private vehicle",
        "English-speaking driver throughout"
      ],
      exclusions: [
        "International Flights & Indonesia Visa on Arrival",
        "Travel Insurance",
        "Lunch & Dinner",
        "Water sports charges (optional)",
        "Personal expenses & currency exchange fluctuations"
      ],
      hotelInfo: "Bakung Ubud Resort & Villa / Keep Jungle Resort (2N, Ubud) + Best Western Kuta Villa / Seminyak Paradise Hotel Bali (3N). All daily breakfast.",
      bestTime: "April to October"
    },

    {
      id: "pkg-mp-heritage",
      title: "Madhya Pradesh Heritage Jyotirlinga Escape",
      slug: "mp-heritage-jyotirlinga-escape-3n4d",
      destinationId: "madhyapradesh",
      destinationName: "Ujjain, Omkareshwar, Maheshwar, Mandu & Indore, MP",
      category: "domestic",
      experienceType: "group",
      durationDays: 4,
      durationNights: 3,
      price: 16833,
      originalPrice: 19500,
      rating: 4.94,
      reviewsCount: 89,
      image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
      ],
      tag: "Heritage & Spiritual Special",
      highlights: [
        "Mahakaleshwar Jyotirlinga & Mahakal Lok Corridor, Ujjain",
        "Omkareshwar & Mamleshwar Jyotirlinga, Narmada River",
        "Ahilya Fort & historic temples, Maheshwar",
        "Mandu Heritage: Hindola Mahal, Jahaz Mahal & Roopmati Pavilion",
        "Indore Chappan Dukan street food experience"
      ],
      overview: "A rich 3-night journey through Madhya Pradesh's most sacred and historically significant destinations — two Jyotirlingas, the ancient fort city of Maheshwar, the medieval splendor of Mandu, and cosmopolitan Indore. Perfect for heritage lovers and pilgrims.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Ujjain & Sightseeing",
          description: "Check in to hotel. Visit Mahakaleshwar Temple, the grand Mahakal Lok Corridor, Ram Ghat, and Kal Bhairav Temple. Evening Aarti at Ram Ghat.",
          meals: "Breakfast (CP)",
          stay: "Hotel Perfect Stay / Perfectstayz Premium Shree Narayana, Ujjain"
        },
        {
          day: 2,
          title: "Ujjain to Omkareshwar & Maheshwar",
          description: "Visit Omkareshwar & Mamleshwar Jyotirlinga on the sacred Mandhata Island on the Narmada River. Proceed to Maheshwar to visit Ahilya Fort, historic temples, and the beautiful Narmada Ghat.",
          meals: "Breakfast (CP)",
          stay: "Hotel Narmada Residency, Maheshwar"
        },
        {
          day: 3,
          title: "Maheshwar to Mandu & Indore",
          description: "Explore Mandu's iconic heritage monuments — Hindola Mahal, Jahaz Mahal, and Roopmati Pavilion. Drive to Indore and explore the famous Chappan Dukan street food hub.",
          meals: "Breakfast (CP)",
          stay: "Amaya — A Boutique Hotel, Indore"
        },
        {
          day: 4,
          title: "Indore Sightseeing & Departure",
          description: "Checkout after breakfast. Explore local Indore markets (Rajwada Palace, Lal Bagh). Drop at Indore Airport / Railway Station.",
          meals: "Breakfast Included",
          stay: "Check-out"
        }
      ],
      inclusions: [
        "03 Nights accommodation (Ujjain, Maheshwar, Indore) with CP",
        "Sightseeing: Mahakal Lok, Ram Ghat, Kal Bhairav Temple",
        "All transfers & sightseeing in Omkareshwar, Maheshwar, Mandu & Indore",
        "Private vehicle with driver, fuel, toll & parking"
      ],
      exclusions: [
        "Airfare / Train fare",
        "Personal expenses (laundry, calls, room service)",
        "Guide charges & monument entry fees",
        "Unforeseen weather / roadblock expenses",
        "Travel Insurance"
      ],
      hotelInfo: "Hotel Perfect Stay / Perfectstayz Premium Ujjain (1N) + Hotel Narmada Residency Maheshwar (1N) + Amaya Boutique Hotel Indore (1N). All CP.",
      bestTime: "October to March"
    },
    // ── END BATCH 2 PACKAGES ─────────────────────────────────────────────────

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
    },

    // ── NEW INTERNATIONAL PACKAGES (2026 EXPANSION) ──────────────────────────
    {
      id: "pkg-thailand-01",
      title: "Bangkok, Pattaya & Coral Island Escape",
      slug: "bangkok-pattaya-coral-island-escape",
      destinationId: "thailand",
      destinationName: "Bangkok & Pattaya, Thailand",
      category: "international",
      experienceType: "luxury",
      durationDays: 6,
      durationNights: 5,
      price: 39900,
      originalPrice: 49000,
      rating: 4.88,
      reviewsCount: 156,
      image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1563492065-1a3c6cf6c1c0?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=800&q=80"
      ],
      tag: "Best Value International",
      highlights: [
        "Grand Palace & Emerald Buddha Temple guided tour in Bangkok",
        "Coral Island (Koh Larn) full day with speedboat & snorkeling",
        "Nong Nooch Village cultural show & botanical gardens",
        "Chao Phraya river dinner cruise with live music",
        "Thailand Visa on Arrival assistance included"
      ],
      overview: "Thailand's most-loved twin-city circuit. Combine Bangkok's glittering temples and floating markets with Pattaya's turquoise Coral Island waters, all wrapped in warm Thai hospitality and seamless Vayu Holidays transfers.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Bangkok & Chao Phraya Dinner Cruise",
          description: "VIP meet and greet at Suvarnabhumi Airport. Private transfer to your hotel in the heart of Bangkok. Evening Chao Phraya River dinner cruise with international buffet and live music against the illuminated temples.",
          meals: "Dinner Cruise Included",
          stay: "4-Star Hotel, Bangkok (Pratunam / Sukhumvit)"
        },
        {
          day: 2,
          title: "Bangkok City Tour: Grand Palace & Temples",
          description: "Guided half-day tour of the spectacular Grand Palace complex, the revered Emerald Buddha (Wat Phra Kaew), and the giant Reclining Buddha at Wat Pho. Afternoon free for shopping at MBK or Chatuchak market.",
          meals: "Breakfast",
          stay: "4-Star Hotel, Bangkok"
        },
        {
          day: 3,
          title: "Bangkok to Pattaya & Nong Nooch Village",
          description: "Transfer to Pattaya (approx 2 hours). Visit Nong Nooch Tropical Village for the cultural elephant show and beautifully landscaped gardens. Evening at Walking Street or leisure.",
          meals: "Breakfast & Lunch",
          stay: "4-Star Beachfront Hotel, Pattaya"
        },
        {
          day: 4,
          title: "Coral Island (Koh Larn) Full Day",
          description: "Speedboat transfer to Coral Island. Enjoy crystal-clear waters for snorkeling, parasailing, and sunbathing on the white-sand beach. Indian lunch included at the island restaurant.",
          meals: "Breakfast & Island Lunch",
          stay: "4-Star Beachfront Hotel, Pattaya"
        },
        {
          day: 5,
          title: "Pattaya to Bangkok: Safari World & Marine Park",
          description: "Return to Bangkok. Visit Safari World open zoo and Marine Park with dolphin and orangutan shows. Evening at leisure for shopping at Indra Market or Platinum Mall.",
          meals: "Breakfast & Lunch",
          stay: "4-Star Hotel, Bangkok"
        },
        {
          day: 6,
          title: "Departure from Bangkok",
          description: "After breakfast, transfer to Suvarnabhumi Airport for your return flight with wonderful Thai memories.",
          meals: "Breakfast Included",
          stay: "Check-out"
        }
      ],
      inclusions: [
        "05 Nights in 4-star hotels with daily breakfast",
        "All airport and intercity transfers in private AC vehicle",
        "Half day Bangkok city tour with Grand Palace entrance",
        "Full day Coral Island tour with speedboat and lunch",
        "Safari World & Marine Park with lunch",
        "Nong Nooch Village entrance ticket",
        "Chao Phraya dinner cruise",
        "Thailand Visa on Arrival assistance",
        "24/7 Vayu Holidays trip concierge"
      ],
      exclusions: [
        "International airfare (Flight Desk offers negotiated fares)",
        "Personal expenses, tips, and travel insurance",
        "Optional water sports at Coral Island"
      ],
      hotelInfo: "Bangkok: Baiyoke Sky / The Berkeley Pratunam. Pattaya: Centara Grand Mirage or equivalent 4-star.",
      bestTime: "November to February"
    },

    {
      id: "pkg-singapore-01",
      title: "Singapore Marvel: Universal Studios & Sentosa",
      slug: "singapore-marvel-universal-studios-sentosa",
      destinationId: "singapore",
      destinationName: "Singapore",
      category: "international",
      experienceType: "luxury",
      durationDays: 5,
      durationNights: 4,
      price: 78000,
      originalPrice: 89000,
      rating: 4.9,
      reviewsCount: 98,
      image: "https://images.unsplash.com/photo-1525628084225-2d25d6b1e6f8?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1525628084225-2d25d6b1e6f8?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1567950796986-46e9087ce0c4?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1538485399081-7c8ed714d7cc?auto=format&fit=crop&w=800&q=80"
      ],
      tag: "Family Favourite",
      highlights: [
        "Universal Studios Singapore full day at Sentosa",
        "Gardens by the Bay Flower Dome & Cloud Forest conservatories",
        "Marina Bay Sands SkyPark observation deck",
        "Half day Singapore city tour with Merlion & Chinatown",
        "Singapore Tourist Visa assistance included"
      ],
      overview: "The Garden City delivers the ultimate family international escape. From thrilling Universal Studios rides to the futuristic Supertree Grove and Marina Bay skyline, Singapore packs world-class experiences into a safe, walkable, English-speaking city.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Singapore & Night Safari",
          description: "Arrive at Changi Airport (world's best). Private transfer to your hotel. Evening visit to the Singapore Night Safari — the world's first nocturnal wildlife park with tram ride and creatures-of-the-night show.",
          meals: "Dinner Included",
          stay: "4-Star Hotel, Singapore (Little India / Geylang)"
        },
        {
          day: 2,
          title: "Singapore City Tour & Marina Bay Sands SkyPark",
          description: "Half day city tour covering the Merlion Park, Chinatown heritage, Little India, and the colonial Civic District. Afternoon visit to Marina Bay Sands SkyPark observation deck for panoramic city views.",
          meals: "Breakfast",
          stay: "4-Star Hotel, Singapore"
        },
        {
          day: 3,
          title: "Sentosa Island: Universal Studios Singapore",
          description: "Full day at Universal Studios Singapore on Sentosa Island. Enjoy rides and attractions across Hollywood, Far Far Away, Ancient Egypt, and Sci-Fi City zones.",
          meals: "Breakfast",
          stay: "4-Star Hotel, Singapore"
        },
        {
          day: 4,
          title: "Gardens by the Bay & Chinatown Food Walk",
          description: "Visit the iconic Gardens by the Bay with entry to the Flower Dome and Cloud Forest cooled conservatories. Evening explore Chinatown food street for authentic local cuisine.",
          meals: "Breakfast",
          stay: "4-Star Hotel, Singapore"
        },
        {
          day: 5,
          title: "Departure from Singapore",
          description: "Morning at leisure. Transfer to Changi Airport, where you can enjoy the Jewel Rain Vortex, for your return flight.",
          meals: "Breakfast Included",
          stay: "Check-out"
        }
      ],
      inclusions: [
        "04 Nights in 4-star hotel with daily breakfast",
        "Private airport transfers",
        "Half day city tour with Merlion and Chinatown",
        "Universal Studios Singapore one-day pass",
        "Gardens by the Bay Flower Dome & Cloud Forest entry",
        "Marina Bay Sands SkyPark observation deck ticket",
        "Night Safari with tram tour",
        "Singapore Tourist Visa assistance",
        "24/7 Vayu Holidays concierge support"
      ],
      exclusions: [
        "International airfare (Flight Desk available)",
        "Lunches and dinners not specified",
        "Personal shopping and optional Sentosa attractions"
      ],
      hotelInfo: "V Hotel Lavender / Parkroyal on Kitchener / Grand Mercure Singapore or equivalent 4-star.",
      bestTime: "February to April (dry & pleasant)"
    },

    {
      id: "pkg-mauritius-01",
      title: "Mauritius Paradise: Beach Resort & Catamaran Cruise",
      slug: "mauritius-paradise-beach-catamaran-cruise",
      destinationId: "mauritius",
      destinationName: "Mauritius",
      category: "international",
      experienceType: "honeymoon",
      durationDays: 7,
      durationNights: 6,
      price: 89000,
      originalPrice: 105000,
      rating: 4.93,
      reviewsCount: 71,
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
      ],
      tag: "Honeymoon Paradise",
      highlights: [
        "06 Nights all-inclusive luxury beachfront resort stay",
        "Full day catamaran cruise to Ile aux Cerfs with BBQ lunch",
        "Chamarel Seven Coloured Earth & Black River Gorges",
        "North & South island sightseeing tours included",
        "Speedboat to Île aux Gabrielf & underwater sea walk option"
      ],
      overview: "Surrender to the slow rhythm of the Indian Ocean. Mauritius wraps you in powder-white beaches, swaying casuarina palms, and reef-protected turquoise lagoons, with all-inclusive luxury and catamaran island-hopping curated by Vayu Holidays.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Mauritius & Resort Check-in",
          description: "Arrive at Sir Seewoosagur Ramgoolam International Airport. Private transfer to your all-inclusive beachfront resort on the west or east coast. Welcome cocktails and leisure evening.",
          meals: "All-Inclusive (Dinner)",
          stay: "4-Star All-Inclusive Beach Resort"
        },
        {
          day: 2,
          title: "North Island Tour: Port Louis & Pamplemousses",
          description: "Guided tour of Port Louis capital, the Citadel Fort Adelaide viewpoint, and the famous Pamplemousses Botanical Garden with its giant water lilies. Shopping at Caudan Waterfront.",
          meals: "All-Inclusive (Breakfast & Dinner)",
          stay: "4-Star All-Inclusive Beach Resort"
        },
        {
          day: 3,
          title: "Ile aux Cerfs Catamaran Cruise & BBQ",
          description: "Full day catamaran cruise to the picture-perfect Ile aux Cerfs. Snorkeling in the lagoon, swimming in crystal waters, and a Creole BBQ lunch on the beach with unlimited rum punch.",
          meals: "Breakfast & Catamaran BBQ Lunch",
          stay: "4-Star All-Inclusive Beach Resort"
        },
        {
          day: 4,
          title: "South Island Tour: Chamarel & Black River Gorges",
          description: "Visit the volcanic crater of Trou aux Cerfs, the sacred Grand Bassin lake, Black River Gorges viewpoint, and the surreal Seven Coloured Earth of Chamarel with its giant tortoises.",
          meals: "All-Inclusive (Breakfast & Dinner)",
          stay: "4-Star All-Inclusive Beach Resort"
        },
        {
          day: 5,
          title: "Leisure Day & Optional Water Sports",
          description: "A full day at leisure to enjoy the resort's beach, pool, and complimentary non-motorized water sports (kayaking, paddleboarding, snorkeling). Optional undersea walk or submarine scooter.",
          meals: "All-Inclusive",
          stay: "4-Star All-Inclusive Beach Resort"
        },
        {
          day: 6,
          title: "Casela Nature Park & Sunset Beach Dinner",
          description: "Visit Casela Nature Parks for a safari experience, zip-line, and walk with lions (optional). Evening candlelight beach dinner to celebrate your holiday.",
          meals: "All-Inclusive & Candlelight Dinner",
          stay: "4-Star All-Inclusive Beach Resort"
        },
        {
          day: 7,
          title: "Departure from Mauritius",
          description: "Morning at leisure. Private transfer to the airport for your return flight home.",
          meals: "Breakfast Included",
          stay: "Check-out"
        }
      ],
      inclusions: [
        "06 Nights all-inclusive 4-star beachfront resort stay",
        "All meals (breakfast, lunch, dinner) and selected beverages",
        "Return airport transfers in private vehicle",
        "North Island tour (Port Louis, Pamplemousses, Caudan)",
        "South Island tour (Chamarel, Black River Gorges, Grand Bassin)",
        "Full day Ile aux Cerfs catamaran cruise with BBQ lunch",
        "Casela Nature Park entry",
        "Complimentary non-motorized water sports at resort",
        "Mauritius visa assistance"
      ],
      exclusions: [
        "International airfare",
        "Optional motorized water sports and undersea walk",
        "Personal expenses, spa treatments, and tips"
      ],
      hotelInfo: "Le Palmiste Resort & Spa / Sugar Beach Resort / Tropical Attitude or equivalent 4-star all-inclusive.",
      bestTime: "May to December (cool dry season)"
    },

    {
      id: "pkg-srilanka-01",
      title: "Sri Lanka Cultural Trail & Beach: Sigiriya to Bentota",
      slug: "sri-lanka-cultural-trail-beach-sigiriya-bentota",
      destinationId: "srilanka",
      destinationName: "Sri Lanka",
      category: "international",
      experienceType: "luxury",
      durationDays: 6,
      durationNights: 5,
      price: 42000,
      originalPrice: 50000,
      rating: 4.85,
      reviewsCount: 64,
      image: "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
      ],
      tag: "Cultural Discovery",
      highlights: [
        "Sigiriya Lion Rock Fortress (UNESCO) sunrise climb",
        "Temple of the Sacred Tooth Relic in Kandy",
        "Ceylon tea plantation visit in Nuwara Eliya",
        "Bentota beach stay & Madu River mangrove safari",
        "Sri Lanka ETA visa assistance included"
      ],
      overview: "A compact jewel of an island where ancient kingdoms, emerald tea hills, and golden beaches unfold within hours. Climb Sigiriya's lion-paw fortress, witness Kandy's sacred rituals, and unwind on Bentota's palm-fringed coast.",
      itinerary: [
        {
          day: 1,
          title: "Arrival Colombo – Transfer to Dambulla/Sigiriya",
          description: "Arrive at Bandaranaike International Airport. Drive to the cultural triangle. En route visit the Dambulla Cave Temple with its ancient Buddhist murals and statues.",
          meals: "Dinner Included",
          stay: "4-Star Hotel, Dambulla / Sigiriya"
        },
        {
          day: 2,
          title: "Sigiriya Rock Climb & Polonnaruwa Ruins",
          description: "Early morning climb of Sigiriya Lion Rock — a 5th-century fortress palace atop a 200m monolith with frescoes and water gardens. Afternoon explore the UNESCO medieval city of Polonnaruwa.",
          meals: "Breakfast & Dinner",
          stay: "4-Star Hotel, Dambulla / Sigiriya"
        },
        {
          day: 3,
          title: "Dambulla to Kandy: Spice Garden & Temple of the Tooth",
          description: "Drive to Kandy via a spice garden. Visit the Temple of the Sacred Tooth Relic and enjoy a Kandyan cultural dance performance in the evening.",
          meals: "Breakfast & Dinner",
          stay: "4-Star Hotel, Kandy"
        },
        {
          day: 4,
          title: "Kandy to Nuwara Eliya: Tea Country Train Ride",
          description: "Scenic drive (or optional train ride) to Nuwara Eliya, 'Little England'. Visit a Ceylon tea plantation and factory, and enjoy the cool hill-country climate and colonial architecture.",
          meals: "Breakfast & Dinner",
          stay: "4-Star Hotel, Nuwara Eliya / Bentota"
        },
        {
          day: 5,
          title: "Bentota Beach & Madu River Safari",
          description: "Transfer to the coastal town of Bentota. Enjoy a mangrove boat safari on the Madu River, visit a turtle hatchery, and relax on the golden beach.",
          meals: "Breakfast & Dinner",
          stay: "4-Star Beach Resort, Bentota"
        },
        {
          day: 6,
          title: "Bentota to Colombo & Departure",
          description: "Morning at leisure. Drive to Colombo for a short city tour and shopping before transfer to the airport for departure.",
          meals: "Breakfast Included",
          stay: "Check-out"
        }
      ],
      inclusions: [
        "05 Nights in 4-star hotels and beach resort with daily breakfast & dinner",
        "All transfers and sightseeing in private AC vehicle",
        "Sigiriya, Dambulla Caves, and Polonnaruwa entrance tickets",
        "Temple of the Tooth Relic visit in Kandy",
        "Tea plantation and factory tour in Nuwara Eliya",
        "Madu River boat safari and turtle hatchery visit",
        "English-speaking chauffeur guide throughout",
        "Sri Lanka ETA visa assistance"
      ],
      exclusions: [
        "International airfare",
        "Lunches throughout",
        "Optional Kandy–Nuwara Eliya train ticket",
        "Personal expenses and travel insurance"
      ],
      hotelInfo: "Dambulla: Sigiri Chaaya / Kandy: Cinnamon Citadel / Bentota: Cinnamon Bey or equivalent 4-star.",
      bestTime: "December to April (west & south coast)"
    },

    {
      id: "pkg-nepal-01",
      title: "Nepal Himalayan Heritage: Kathmandu, Pokhara & Chitwan",
      slug: "nepal-himalayan-heritage-kathmandu-pokhara-chitwan",
      destinationId: "nepal",
      destinationName: "Nepal",
      category: "international",
      experienceType: "luxury",
      durationDays: 7,
      durationNights: 6,
      price: 36000,
      originalPrice: 42000,
      rating: 4.87,
      reviewsCount: 53,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1543248939-4296e1fea89b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1546484959-f9a381d1330d?auto=format&fit=crop&w=800&q=80"
      ],
      tag: "Himalayan Getaway",
      highlights: [
        "UNESCO Kathmandu Valley heritage tour (Pashupatinath, Boudhanath, Patan)",
        "Sunrise Annapurna Himalayan panorama at Sarangkot, Pokhara",
        "Full day jungle safari & canoe ride at Chitwan National Park",
        "Phewa Lake boating & Davis Fall in Pokhara",
        "Nepal visa-free entry for Indian citizens (with passport/Aadhaar)"
      ],
      overview: "The Himalayan kingdom next door. From Kathmandu's medieval temple squares to the mirror-still lakes of Pokhara framed by Annapurna, and the jungle rhinos of Chitwan, Nepal delivers mountains, spirituality, and wilderness in one seamless loop.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Kathmandu & Heritage Walk",
          description: "Arrive at Tribhuvan International Airport. Transfer to hotel. Evening stroll through Thamel market and welcome Nepali dinner.",
          meals: "Dinner Included",
          stay: "4-Star Hotel, Kathmandu"
        },
        {
          day: 2,
          title: "Kathmandu Valley UNESCO Tour",
          description: "Full day sightseeing: Pashupatinath riverside temple, the colossal Boudhanath Stupa, Swayambhunath Monkey Temple, and Patan Durbar Square.",
          meals: "Breakfast",
          stay: "4-Star Hotel, Kathmandu"
        },
        {
          day: 3,
          title: "Kathmandu to Pokhara: Enchanting Lakeside",
          description: "Scenic drive or flight to Pokhara (approx 6 hours by road / 30 min flight). Evening at leisure along Phewa Lake with sunset views.",
          meals: "Breakfast & Dinner",
          stay: "4-Star Lakeview Hotel, Pokhara"
        },
        {
          day: 4,
          title: "Sarangkot Sunrise & Pokhara Sightseeing",
          description: "Early morning drive to Sarangkot for sunrise over the Annapurna and Dhaulagiri range. Then visit Davis Fall, Gupteshwor Cave, and Tibetan refugee settlement. Afternoon boating on Phewa Lake.",
          meals: "Breakfast",
          stay: "4-Star Lakeview Hotel, Pokhara"
        },
        {
          day: 5,
          title: "Pokhara to Chitwan: Jungle Safari",
          description: "Drive to Chitwan National Park. Afternoon jeep safari into the jungle to spot the one-horned rhinoceros, deer, and exotic birdlife. Evening Tharu cultural dance.",
          meals: "Breakfast, Lunch & Dinner",
          stay: "Jungle Lodge / Resort, Chitwan"
        },
        {
          day: 6,
          title: "Chitwan: Canoe Ride & Elephant Bath & Return to Kathmandu",
          description: "Morning canoe ride on the Rapti river and visit the elephant breeding centre. Drive back to Kathmandu in the afternoon.",
          meals: "Breakfast & Lunch",
          stay: "4-Star Hotel, Kathmandu"
        },
        {
          day: 7,
          title: "Departure from Kathmandu",
          description: "Morning at leisure for last-minute shopping. Transfer to the airport for your return flight.",
          meals: "Breakfast Included",
          stay: "Check-out"
        }
      ],
      inclusions: [
        "06 Nights in 4-star hotels and jungle lodge (twin sharing)",
        "Daily breakfast and selected dinners",
        "All transfers and sightseeing in private AC vehicle",
        "Kathmandu Valley UNESCO monument entrance fees",
        "Sarangkot sunrise trip and Pokhara sightseeing",
        "Chitwan jungle safari, canoe ride, and Tharu cultural show",
        "English-speaking local guide",
        "Visa-free entry assistance for Indian citizens"
      ],
      exclusions: [
        "Airfare (domestic and international)",
        "Lunches (except as specified)",
        "Optional Pokhara mountain flight",
        "Personal expenses and tips"
      ],
      hotelInfo: "Kathmandu: Hotel Shanker / Yak & Yeti category. Pokhara: Hotel Barahi / Landmark. Chitwan: Green Park / Park Safari Lodge.",
      bestTime: "September to November | March to May"
    },

    {
      id: "pkg-bhutan-01",
      title: "Bhutan Kingdom of Happiness: Thimphu, Paro & Punakha",
      slug: "bhutan-kingdom-happiness-thimphu-paro-punakha",
      destinationId: "bhutan",
      destinationName: "Bhutan",
      category: "international",
      experienceType: "luxury",
      durationDays: 7,
      durationNights: 6,
      price: 58000,
      originalPrice: 68000,
      rating: 4.92,
      reviewsCount: 41,
      image: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1546484959-f9a381d1330d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80"
      ],
      tag: "Spiritual Journey",
      highlights: [
        "Tiger's Nest (Taktsang) monastery cliff hike in Paro",
        "Punakha Dzong — Bhutan's most beautiful fortress at river confluence",
        "Dochula Pass 108 stupas with Himalayan panorama",
        "Buddha Dordenma giant statue & Thimphu heritage tour",
        "Sustainable Development Fee and Bhutanese visa included"
      ],
      overview: "The world's only carbon-negative kingdom, where Gross National Happiness measures more than wealth. Hike to the gravity-defying Tiger's Nest, wander golden-roofed dzongs, and breathe the pristine air of the last Himalayan Shangri-La.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Paro & Transfer to Thimphu",
          description: "Arrive at Paro Airport with spectacular Himalayan landing views. Drive to Thimphu (1.5 hours). Evening at leisure exploring the capital's cafes and craft bazaar.",
          meals: "Dinner Included",
          stay: "3-Star Hotel, Thimphu"
        },
        {
          day: 2,
          title: "Thimphu Sightseeing: Buddha, Memorial Chorten & Dzong",
          description: "Visit the towering Buddha Dordenma statue, the National Memorial Chorten, Changangkha Lhakhang, and Tashichho Dzong seat of government. Optional visit to the Takin preserve.",
          meals: "Breakfast & Dinner",
          stay: "3-Star Hotel, Thimphu"
        },
        {
          day: 3,
          title: "Thimphu to Punakha via Dochula Pass",
          description: "Drive to Punakha over the Dochula Pass (3,100m) with 108 memorial stupas and clear-day views of the eastern Himalayas. Visit Chimi Lhakhang fertility temple.",
          meals: "Breakfast & Dinner",
          stay: "3-Star Hotel, Punakha / Wangdue"
        },
        {
          day: 4,
          title: "Punakha Dzong & Suspension Bridge",
          description: "Visit the majestic Punakha Dzong at the confluence of the Pho Chu and Mo Chu rivers — arguably Bhutan's most beautiful fortress. Walk the longest suspension bridge in Bhutan.",
          meals: "Breakfast & Dinner",
          stay: "3-Star Hotel, Punakha / Wangdue"
        },
        {
          day: 5,
          title: "Punakha to Paro via Thimphu",
          description: "Scenic drive back to Paro. Visit the National Museum (Ta Dzong) and Rinpung Dzong. Evening stroll through Paro town.",
          meals: "Breakfast & Dinner",
          stay: "3-Star Hotel, Paro"
        },
        {
          day: 6,
          title: "Tiger's Nest (Taktsang) Monastery Hike",
          description: "The highlight of Bhutan — a 2-3 hour uphill hike to the iconic Tiger's Nest monastery clinging to a vertical cliff at 3,120m. Spectacular views and profound spirituality. (Pony ride available halfway).",
          meals: "Breakfast & Dinner",
          stay: "3-Star Hotel, Paro"
        },
        {
          day: 7,
          title: "Departure from Paro",
          description: "Morning at leisure. Transfer to Paro Airport for your onward flight.",
          meals: "Breakfast Included",
          stay: "Check-out"
        }
      ],
      inclusions: [
        "06 Nights in 3-star Bhutanese hotels (twin sharing)",
        "Daily breakfast and dinner",
        "All transfers and sightseeing in private AC vehicle",
        "English-speaking licensed Bhutanese guide",
        "Tiger's Nest monastery hike and all monument fees",
        "Punakha Dzong and Dochula Pass visit",
        "Sustainable Development Fee (SDF) included",
        "Bhutan visa processing assistance"
      ],
      exclusions: [
        "International airfare (Paro flights via Delhi/Kathmandu)",
        "Lunches throughout",
        "Optional pony ride to Tiger's Nest viewpoint",
        "Personal expenses, tips, and travel insurance"
      ],
      hotelInfo: "Thimphu: Hotel Jhomolhari / Namgay Heritage. Paro: Tashi Namgay Resort / Khangkhu. Punakha: Damchen Resort or equivalent.",
      bestTime: "March to May | September to November"
    },

    {
      id: "pkg-hongkong-01",
      title: "Hong Kong & Macau: Disneyland & Cotai Strip",
      slug: "hong-kong-macau-disneyland-cotai-strip",
      destinationId: "hongkong",
      destinationName: "Hong Kong & Macau",
      category: "international",
      experienceType: "luxury",
      durationDays: 6,
      durationNights: 5,
      price: 72000,
      originalPrice: 85000,
      rating: 4.89,
      reviewsCount: 87,
      image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1538485399081-7c8ed714d7cc?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1555881400-74d7acaacd6c?auto=format&fit=crop&w=800&q=80"
      ],
      tag: "Family Thrills",
      highlights: [
        "Hong Kong Disneyland full day with fireworks",
        "Victoria Peak tram & Symphony of Lights harbour show",
        "Macau day tour: Ruins of St. Paul, Senado Square & Cotai casino",
        "Ngong Ping 360 cable car & Big Buddha on Lantau",
        "Hong Kong & Macau visa assistance included"
      ],
      overview: "Two dazzling territories, one unforgettable trip. Scale Victoria Peak for the world's most photographed skyline, live the magic at Hong Kong Disneyland, then ferry across to Macau's Portuguese heritage and glittering Cotai Strip.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Hong Kong & Avenue of Stars",
          description: "Arrive at Hong Kong International Airport. Private transfer to hotel. Evening visit to the Avenue of Stars on the Tsim Sha Tsui promenade for the Symphony of Lights harbour show.",
          meals: "Dinner Included",
          stay: "4-Star Hotel, Hong Kong (Kowloon)"
        },
        {
          day: 2,
          title: "Hong Kong City Tour: Victoria Peak & Aberdeen",
          description: "Half day tour: ride the Peak Tram to Victoria Peak for panoramic harbour views, visit Aberdeen fishing village and the glittering Repulse Bay. Afternoon free for shopping at Harbour City.",
          meals: "Breakfast",
          stay: "4-Star Hotel, Hong Kong"
        },
        {
          day: 3,
          title: "Hong Kong Disneyland Full Day",
          description: "Full day at Hong Kong Disneyland with seven themed lands, parades, character meets, and the spectacular evening fireworks over Sleeping Beauty Castle.",
          meals: "Breakfast",
          stay: "4-Star Hotel, Hong Kong"
        },
        {
          day: 4,
          title: "Ngong Ping 360 & Big Buddha – Ferry to Macau",
          description: "Morning Ngong Ping 360 cable car ride to the Tian Tan Big Buddha and Po Lin Monastery on Lantau Island. Afternoon ferry transfer to Macau (1 hour).",
          meals: "Breakfast & Dinner",
          stay: "4-Star Hotel, Macau (Cotai Strip)"
        },
        {
          day: 5,
          title: "Macau City Tour: Ruins, Temples & Casinos",
          description: "Macau sightseeing: UNESCO Ruins of St. Paul's Cathedral, Senado Square, A-Ma Temple, Macau Tower (outside). Evening free to try your luck on the Cotai Strip casinos and shows.",
          meals: "Breakfast",
          stay: "4-Star Hotel, Macau"
        },
        {
          day: 6,
          title: "Macau to Hong Kong & Departure",
          description: "Ferry back to Hong Kong. Transfer to the airport for your return flight.",
          meals: "Breakfast Included",
          stay: "Check-out"
        }
      ],
      inclusions: [
        "05 Nights in 4-star hotels (3N Hong Kong + 2N Macau) with daily breakfast",
        "All airport, ferry, and sightseeing transfers",
        "Hong Kong city tour with Peak Tram",
        "Full day Hong Kong Disneyland ticket",
        "Ngong Ping 360 cable car and Big Buddha visit",
        "Macau city tour with all monument visits",
        "Hong Kong–Macau ferry tickets",
        "Hong Kong and Macau visa assistance",
        "24/7 Vayu Holidays concierge"
      ],
      exclusions: [
        "International airfare",
        "Lunches and dinners not specified",
        "Optional casino show tickets and personal expenses"
      ],
      hotelInfo: "Hong Kong: Dorsett Mongkok / Royal Plaza / Metropark. Macau: Broadway Macau / Artyzen Grand Lapa or equivalent 4-star.",
      bestTime: "October to December (cool & dry)"
    },

    {
      id: "pkg-egypt-01",
      title: "Egypt Eternal: Pyramids, Nile Cruise & Luxor Temples",
      slug: "egypt-pyramids-nile-cruise-luxor-temples",
      destinationId: "egypt",
      destinationName: "Egypt",
      category: "international",
      experienceType: "luxury",
      durationDays: 8,
      durationNights: 7,
      price: 95000,
      originalPrice: 112000,
      rating: 4.9,
      reviewsCount: 58,
      image: "https://images.unsplash.com/photo-1539650116574-75c6c85f1c1a?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1539650116574-75c6c85f1c1a?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1567361808960-dec9cb578182?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=800&q=80"
      ],
      tag: "Ancient Wonders",
      highlights: [
        "Great Pyramids of Giza & Sphinx with inside access option",
        "4-night luxury Nile Cruise from Luxor to Aswan",
        "Valley of the Kings & Temple of Hatshepsut",
        "Temples of Karnak, Edfu, Philae & Abu Simbel (optional)",
        "Egypt e-Visa assistance included"
      ],
      overview: "Stand before the only surviving Ancient Wonder of the World. Sail the timeless Nile on a luxury cruiser from Luxor's temple complexes to Aswan's serene cataracts, uncovering 5,000 years of pharaonic glory with expert Egyptologist guides.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Cairo & Welcome Dinner",
          description: "Arrive at Cairo International Airport. Transfer to hotel. Evening welcome dinner with Nile-view restaurant and orientation.",
          meals: "Dinner Included",
          stay: "5-Star Hotel, Cairo"
        },
        {
          day: 2,
          title: "Giza Pyramids, Sphinx & Egyptian Museum",
          description: "Full day tour of the Great Pyramids of Giza, the Sphinx, and the Valley Temple. Afternoon visit the Egyptian Museum in Tahrir with the Tutankhamun treasures and royal mummy rooms.",
          meals: "Breakfast & Lunch",
          stay: "5-Star Hotel, Cairo"
        },
        {
          day: 3,
          title: "Fly to Luxor & Board Nile Cruise: Karnak & Luxor Temples",
          description: "Morning flight to Luxor. Board your 5-star Nile cruiser. Afternoon visit the colossal Karnak Temple complex and the avenue of sphinxes to Luxor Temple by night.",
          meals: "Breakfast, Lunch & Dinner",
          stay: "5-Star Nile Cruise, Luxor"
        },
        {
          day: 4,
          title: "Valley of the Kings, Hatshepsut & Sail to Edfu",
          description: "Cross to the West Bank: Valley of the Kings (Tutankhamun's tomb), Temple of Queen Hatshepsut, and the Colossi of Memnon. Sail south toward Edfu.",
          meals: "All Meals Onboard",
          stay: "5-Star Nile Cruise, Edfu"
        },
        {
          day: 5,
          title: "Edfu Temple & Kom Ombo — Sail to Aswan",
          description: "Horse-carriage ride to the well-preserved Temple of Horus at Edfu. Afternoon visit Kom Ombo, the unique double temple of Sobek and Haroeris. Sail to Aswan.",
          meals: "All Meals Onboard",
          stay: "5-Star Nile Cruise, Aswan"
        },
        {
          day: 6,
          title: "Aswan: Philae Temple & High Dam – Fly to Cairo",
          description: "Visit the beautiful Philae Temple (Isis) by motorboat, the Aswan High Dam, and the Unfinished Obelisk. Evening flight back to Cairo.",
          meals: "Breakfast & Lunch",
          stay: "5-Star Hotel, Cairo"
        },
        {
          day: 7,
          title: "Old Cairo Bazaars & Optional Pyramids Light Show",
          description: "Explore historic Coptic Cairo, the Hanging Church, and the labyrinthine Khan el-Khalili bazaar for souvenirs, spices, and gold. Optional evening Sound & Light show at Giza.",
          meals: "Breakfast",
          stay: "5-Star Hotel, Cairo"
        },
        {
          day: 8,
          title: "Departure from Cairo",
          description: "Transfer to Cairo International Airport for your return flight.",
          meals: "Breakfast Included",
          stay: "Check-out"
        }
      ],
      inclusions: [
        "07 Nights (3N Cairo 5-star hotel + 4N luxury Nile Cruise)",
        "Daily breakfast and all meals on cruise (full board)",
        "Internal flights: Cairo–Luxor and Aswan–Cairo",
        "All sightseeing in private AC vehicle with Egyptologist guide",
        "Giza Pyramids, Sphinx, and Egyptian Museum entrance",
        "Valley of the Kings, Karnak, Edfu, Kom Ombo, Philae entrance fees",
        "Egypt e-Visa processing assistance",
        "24/7 Vayu Holidays trip concierge"
      ],
      exclusions: [
        "International airfare",
        "Optional Abu Simbel excursion (flight + tour)",
        "Personal expenses, tips for guide and cruise staff",
        "Travel insurance"
      ],
      hotelInfo: "Cairo: Le Méridien Pyramids / Cairo Marriott. Nile Cruise: MS Royal Lily / MS Sonesta St George 5-star category.",
      bestTime: "October to April (cool season)"
    },

    {
      id: "pkg-kenya-01",
      title: "Kenya Safari Expedition: Masai Mara, Nakuru & Amboseli",
      slug: "kenya-safari-expedition-masai-mara-nakuru-amboseli",
      destinationId: "kenya",
      destinationName: "Kenya",
      category: "international",
      experienceType: "luxury",
      durationDays: 7,
      durationNights: 6,
      price: 115000,
      originalPrice: 138000,
      rating: 4.94,
      reviewsCount: 46,
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=800&q=80"
      ],
      tag: "Wildlife Safari",
      highlights: [
        "Masai Mara Big Five game drives in 4x4 safari vehicles",
        "Optional dawn hot air balloon safari over the savanna",
        "Lake Nakuru flamingo & rhino sanctuary",
        "Amboseli elephants with Kilimanjaro backdrop",
        "Masai village cultural visit included"
      ],
      overview: "The original safari country. Track the Big Five across the Masai Mara's golden plains, witness a million flamingos at Lake Nakuru, and photograph elephants silhouetted against Kilimanjaro at Amboseli. Kenya delivers the Africa of your imagination.",
      itinerary: [
        {
          day: 1,
          title: "Arrival Nairobi & Transfer to Masai Mara",
          description: "Arrive at Jomo Kenyatta International Airport. Drive (or fly) to the legendary Masai Mara National Reserve. Afternoon game drive en route to your safari lodge.",
          meals: "Lunch & Dinner",
          stay: "Safari Lodge / Tented Camp, Masai Mara"
        },
        {
          day: 2,
          title: "Masai Mara: Full Day Game Drives",
          description: "Morning and afternoon game drives in search of lions, leopards, elephants, buffalo, and the great migration herds (Jul–Oct). Picnic lunch in the bush.",
          meals: "Breakfast, Lunch & Dinner",
          stay: "Safari Lodge / Tented Camp, Masai Mara"
        },
        {
          day: 3,
          title: "Masai Mara: Balloon Safari & Masai Village",
          description: "Optional dawn hot air balloon safari with champagne breakfast. Visit a traditional Masai village to learn about their nomadic culture and dances.",
          meals: "Breakfast, Lunch & Dinner",
          stay: "Safari Lodge / Tented Camp, Masai Mara"
        },
        {
          day: 4,
          title: "Masai Mara to Lake Nakuru",
          description: "Morning game drive, then drive to Lake Nakuru National Park. Afternoon game drive to see rhinos, Rothschild giraffes, and the famous flamingo flocks.",
          meals: "Breakfast, Lunch & Dinner",
          stay: "Lodge, Lake Nakuru"
        },
        {
          day: 5,
          title: "Lake Nakuru to Amboseli via Nairobi",
          description: "Drive to Amboseli National Park at the foot of Mount Kilimanjaro. Afternoon game drive with the chance to spot large elephant herds.",
          meals: "Breakfast, Lunch & Dinner",
          stay: "Safari Lodge, Amboseli"
        },
        {
          day: 6,
          title: "Amboseli: Kilimanjaro Views & Game Drive",
          description: "Early morning game drive for the classic elephant-and-Kilimanjaro photograph. Visit a Masai community project and Observation Hill for sweeping marsh views.",
          meals: "Breakfast, Lunch & Dinner",
          stay: "Safari Lodge, Amboseli"
        },
        {
          day: 7,
          title: "Amboseli to Nairobi & Departure",
          description: "Morning game drive. Drive to Nairobi. Optional Giraffe Centre and Karen Blixen Museum before transfer to the airport for departure.",
          meals: "Breakfast & Lunch",
          stay: "Check-out"
        }
      ],
      inclusions: [
        "06 Nights in safari lodges and tented camps (full board)",
        "All park and reserve entrance fees",
        "Game drives in pop-top 4x4 safari vehicles",
        "Services of a professional English-speaking driver-guide",
        "Masai village cultural visit",
        "All transfers between parks",
        "Kenya e-Visa assistance",
        "Bottled water during game drives"
      ],
      exclusions: [
        "International airfare",
        "Optional hot air balloon safari (approx $450)",
        "Beverages, laundry, and personal expenses",
        "Tips for guide and lodge staff",
        "Travel insurance"
      ],
      hotelInfo: "Mara: Mara Simba / Keekorok Lodge. Nakuru: Sarova Lion Hill. Amboseli: Amboseli Sopa / Sentrim or equivalent.",
      bestTime: "July to October (migration) | Jan–Feb (dry)"
    },

    {
      id: "pkg-japan-01",
      title: "Japan Discovery: Tokyo, Mt Fuji & Kyoto",
      slug: "japan-discovery-tokyo-mt-fuji-kyoto",
      destinationId: "japan",
      destinationName: "Japan",
      category: "international",
      experienceType: "luxury",
      durationDays: 8,
      durationNights: 7,
      price: 145000,
      originalPrice: 168000,
      rating: 4.95,
      reviewsCount: 39,
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=800&q=80"
      ],
      tag: "Premium Discovery",
      highlights: [
        "Tokyo: Shibuya Crossing, Senso-ji Temple & teamLab digital art",
        "Mt Fuji 5th station & Lake Ashi pirate cruise with Hakone hot springs",
        "Bullet train (Shinkansen) to Kyoto",
        "Kyoto: Fushimi Inari torii gates, Arashiyama bamboo grove & golden pavilion",
        "Japan Tourist Visa assistance included"
      ],
      overview: "Where ancient tradition meets neon future. From Tokyo's buzzing crossings to the serenity of Mt Fuji, ride the bullet train into Kyoto's 1,000 temples, bamboo groves, and geisha streets. Japan is precise, beautiful, and unforgettable.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Tokyo",
          description: "Arrive at Narita/Haneda Airport. Shared or private transfer to hotel in Tokyo. Evening at leisure to explore Shinjuku or Ginza.",
          meals: "Dinner Included",
          stay: "4-Star Hotel, Tokyo"
        },
        {
          day: 2,
          title: "Tokyo City Tour: Senso-ji, Shibuya & Meiji Shrine",
          description: "Guided tour of Asakusa's Senso-ji Temple and Nakamise market, the Meiji Shrine forest, Harajuku, and the famous Shibuya Crossing. Evening at teamLab Planets immersive digital art museum.",
          meals: "Breakfast",
          stay: "4-Star Hotel, Tokyo"
        },
        {
          day: 3,
          title: "Mt Fuji, Hakone & Lake Ashi Cruise",
          description: "Drive to Mt Fuji 5th station for panoramic views. Ride the Hakone ropeway over volcanic Owakudani valley, take the Lake Ashi pirate cruise, and relax in a traditional onsen hot spring. Overnight in Hakone.",
          meals: "Breakfast & Dinner",
          stay: "Ryokan / Onsen Hotel, Hakone"
        },
        {
          day: 4,
          title: "Bullet Train to Kyoto",
          description: "Board the Shinkansen bullet train to Kyoto (approx 2 hours). Afternoon explore the Gion geisha district and Yasaka Shrine.",
          meals: "Breakfast",
          stay: "4-Star Hotel, Kyoto"
        },
        {
          day: 5,
          title: "Kyoto: Fushimi Inari, Kinkaku-ji & Nijo Castle",
          description: "Walk the vermilion torii gates of Fushimi Inari shrine. Visit the Golden Pavilion (Kinkaku-ji), Ryoan-ji rock garden, and Nijo Castle with its singing nightingale floors.",
          meals: "Breakfast",
          stay: "4-Star Hotel, Kyoto"
        },
        {
          day: 6,
          title: "Arashiyama Bamboo Grove & Nara Day Trip",
          description: "Morning at the surreal Arashiyama bamboo grove and Tenryu-ji temple. Afternoon visit to Nara: the giant Todai-ji Buddha and friendly sika deer park.",
          meals: "Breakfast",
          stay: "4-Star Hotel, Kyoto"
        },
        {
          day: 7,
          title: "Kyoto to Osaka: Castle & Dotonbori Food Street",
          description: "Transfer to Osaka. Visit Osaka Castle and explore Dotonbori's neon food street for takoyaki, okonomiyaki, and street-food adventures.",
          meals: "Breakfast",
          stay: "4-Star Hotel, Osaka"
        },
        {
          day: 8,
          title: "Departure from Osaka",
          description: "Morning at leisure. Transfer to Kansai International Airport for your return flight.",
          meals: "Breakfast Included",
          stay: "Check-out"
        }
      ],
      inclusions: [
        "07 Nights in 4-star hotels + 1 night ryokan (twin sharing)",
        "Daily breakfast and selected dinners",
        "Mt Fuji and Hakone day tour with Lake Ashi cruise",
        "Shinkansen bullet train ticket Kyoto",
        "All city tours with English-speaking guide",
        "Senso-ji, teamLab, Kinkaku-ji, Fushimi Inari and Nara deer park entry",
        "All intercity and airport transfers",
        "Japan Tourist Visa assistance",
        "24/7 Vayu Holidays concierge"
      ],
      exclusions: [
        "International airfare",
        "Lunches and dinners not specified",
        "JR Pass (if extended travel desired)",
        "Personal expenses and travel insurance"
      ],
      hotelInfo: "Tokyo: Shinjuku Granbell / Hotel Gracery. Hakone: Hakone Gora Byakudan. Kyoto: Mitsui Garden / Cross. Osaka: Cross Hotel Osaka or equivalent.",
      bestTime: "March–April (cherry blossom) | October–November (autumn)"
    },

    {
      id: "pkg-europe-01",
      title: "Europe Grand Tour: Paris, Switzerland & Italy",
      slug: "europe-grand-tour-paris-switzerland-italy",
      destinationId: "europe",
      destinationName: "Paris, Switzerland & Italy",
      category: "international",
      experienceType: "luxury",
      durationDays: 9,
      durationNights: 8,
      price: 185000,
      originalPrice: 215000,
      rating: 4.96,
      reviewsCount: 52,
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?auto=format&fit=crop&w=800&q=80"
      ],
      tag: "Ultra Luxury",
      highlights: [
        "Paris: Eiffel Tower summit, Seine river cruise & Louvre Museum",
        "Switzerland: Mt Titlis, Jungfraujoch & Lucerne old town",
        "Italy: Venice gondola, Florence Duomo & Rome Colosseum",
        "Scenic Eurail transfers between countries",
        "Schengen Visa documentation & appointment assistance"
      ],
      overview: "The European dream in one grand loop. Romance in Paris beneath the Eiffel Tower, alpine grandeur in Switzerland aboard scenic trains, and Renaissance glory through Italy's Venice, Florence, and Rome. Three countries, countless icons.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Paris & Seine River Cruise",
          description: "Arrive at Paris Charles de Gaulle Airport. Transfer to hotel. Evening illuminated Seine river cruise past the Eiffel Tower and Notre Dame.",
          meals: "Dinner Included",
          stay: "4-Star Hotel, Paris"
        },
        {
          day: 2,
          title: "Paris: Eiffel Tower, Louvre & Champs-Élysées",
          description: "Guided city tour: Eiffel Tower summit access, Arc de Triomphe, Champs-Élysées, and a visit to the Louvre Museum to see the Mona Lisa.",
          meals: "Breakfast",
          stay: "4-Star Hotel, Paris"
        },
        {
          day: 3,
          title: "Paris to Switzerland: Basel & Lucerne",
          description: "High-speed train to Basel, transfer to Lucerne. Stroll the historic Chapel Bridge and Old Town by the lake.",
          meals: "Breakfast & Dinner",
          stay: "4-Star Hotel, Lucerne"
        },
        {
          day: 4,
          title: "Mt Titlis & Lucerne",
          description: "Ascend Mt Titlis via the Rotair revolving cable car and Cliff Walk suspension bridge. Afternoon at leisure in lakeside Lucerne.",
          meals: "Breakfast",
          stay: "4-Star Hotel, Lucerne"
        },
        {
          day: 5,
          title: "Jungfraujoch — Top of Europe",
          description: "Day trip to Interlaken and up to Jungfraujoch (3,454m) by cogwheel railway — Europe's highest railway station with glacier palace and snow plateau.",
          meals: "Breakfast",
          stay: "4-Star Hotel, Lucerne / Interlaken"
        },
        {
          day: 6,
          title: "Switzerland to Venice: Gondola & St. Mark's",
          description: "Travel to Venice. Evening gondola ride through the romantic canals past St. Mark's Square and the Rialto Bridge.",
          meals: "Breakfast & Dinner",
          stay: "4-Star Hotel, Venice / Mestre"
        },
        {
          day: 7,
          title: "Venice to Florence: Duomo & Ponte Vecchio",
          description: "Train to Florence. Tour the magnificent Duomo, Baptistery, Piazza della Signoria, and the medieval Ponte Vecchio bridge.",
          meals: "Breakfast",
          stay: "4-Star Hotel, Florence"
        },
        {
          day: 8,
          title: "Florence to Rome: Colosseum & Vatican",
          description: "High-speed train to Rome. Visit the Colosseum and Roman Forum. Optional Vatican Museums, Sistine Chapel, and St. Peter's Basilica tour.",
          meals: "Breakfast",
          stay: "4-Star Hotel, Rome"
        },
        {
          day: 9,
          title: "Departure from Rome",
          description: "Morning at leisure for a final Italian espresso. Transfer to Fiumicino Airport for your return flight.",
          meals: "Breakfast Included",
          stay: "Check-out"
        }
      ],
      inclusions: [
        "08 Nights in 4-star hotels (twin sharing) with daily breakfast",
        "Eiffel Tower summit, Louvre Museum, and Seine cruise in Paris",
        "Mt Titlis and Jungfraujoch excursion tickets in Switzerland",
        "Gondola ride in Venice; Colosseum entrance in Rome",
        "High-speed train transfers Paris–Switzerland and within Italy",
        "All sightseeing transfers and English-speaking local guides",
        "Schengen Visa documentation and appointment assistance",
        "24/7 Vayu Holidays European trip concierge"
      ],
      exclusions: [
        "International airfare",
        "Lunches and dinners not specified",
        "City tourist taxes (payable directly at hotels)",
        "Optional Vatican Museums tour and personal expenses",
        "Travel insurance"
      ],
      hotelInfo: "Paris: Novotel Les Halles / Mercure. Lucerne: Astoria / Continental Park. Venice: NH / Sheraton Mestre. Florence: Hotel Brunelleschi / c-hotels. Rome: c-hotels Club House / Nazionale or equivalent.",
      bestTime: "April to June | September to October"
    },

    {
      id: "pkg-australia-01",
      title: "Australia Adventure: Sydney, Reef & Gold Coast",
      slug: "australia-adventure-sydney-reef-gold-coast",
      destinationId: "australia",
      destinationName: "Australia",
      category: "international",
      experienceType: "luxury",
      durationDays: 8,
      durationNights: 7,
      price: 155000,
      originalPrice: 180000,
      rating: 4.93,
      reviewsCount: 44,
      image: "https://images.unsplash.com/photo-1523428096881-5bd79d043006?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1523428096881-5bd79d043006?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1523428096881-5bd79d043006?auto=format&fit=crop&w=800&q=80"
      ],
      tag: "Adventure Down Under",
      highlights: [
        "Sydney Opera House guided tour & Harbour Bridge climb (optional)",
        "Full day Great Barrier Reef snorkeling & glass-bottom boat cruise",
        "Gold Coast theme parks: Movie World or Sea World",
        "Blue Mountains Scenic World & Three Sisters rock formation",
        "Australia Tourist Visa (Subclass 600) assistance included"
      ],
      overview: "The land of extraordinary contrasts. Photograph the iconic Sydney Opera House, snorkel the kaleidoscopic Great Barrier Reef, ride rollercoasters on the Gold Coast, and breathe the eucalyptus air of the Blue Mountains — all in one epic Australian adventure.",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Sydney & Harbour Dinner Cruise",
          description: "Arrive at Sydney Kingsford Smith Airport. Transfer to hotel. Evening Sydney Harbour dinner cruise past the Opera House and Harbour Bridge.",
          meals: "Dinner Cruise Included",
          stay: "4-Star Hotel, Sydney (CBD)"
        },
        {
          day: 2,
          title: "Sydney City Tour: Opera House, Bondi & The Rocks",
          description: "Guided Sydney Opera House tour, walk through The Rocks historic quarter, Mrs Macquarie's Chair viewpoint, and the famous Bondi Beach. Optional Harbour Bridge climb.",
          meals: "Breakfast",
          stay: "4-Star Hotel, Sydney"
        },
        {
          day: 3,
          title: "Blue Mountains Day Trip: Scenic World & Three Sisters",
          description: "Full day excursion to the Blue Mountains. Ride the Scenic Railway, Skyway, and Cableway, see the Three Sisters rock formation, and meet koalas and kangaroos at Featherdale Wildlife Park.",
          meals: "Breakfast",
          stay: "4-Star Hotel, Sydney"
        },
        {
          day: 4,
          title: "Fly Sydney to Cairns & Kuranda Scenic Railway",
          description: "Morning flight to Cairns. Afternoon Skyrail rainforest cableway and historic Kuranda Scenic Railway through UNESCO Wet Tropics rainforest.",
          meals: "Breakfast",
          stay: "4-Star Hotel, Cairns / Palm Cove"
        },
        {
          day: 5,
          title: "Great Barrier Reef Full Day Cruise",
          description: "Outer reef cruise with snorkeling, glass-bottom boat, and semi-submersible viewing of the world's largest coral reef system. Tropical buffet lunch onboard.",
          meals: "Breakfast & Reef Lunch",
          stay: "4-Star Hotel, Cairns / Palm Cove"
        },
        {
          day: 6,
          title: "Fly Cairns to Gold Coast & Beach Leisure",
          description: "Flight to the Gold Coast. Afternoon at leisure on the golden surf beaches of Surfers Paradise.",
          meals: "Breakfast",
          stay: "4-Star Hotel, Gold Coast"
        },
        {
          day: 7,
          title: "Gold Coast Theme Park Full Day",
          description: "Full day at Warner Bros. Movie World (thrill rides and shows) or Sea World (marine shows and dolphin encounters).",
          meals: "Breakfast",
          stay: "4-Star Hotel, Gold Coast"
        },
        {
          day: 8,
          title: "Departure from Gold Coast / Brisbane",
          description: "Morning at leisure. Transfer to Brisbane or Gold Coast Airport for your return flight.",
          meals: "Breakfast Included",
          stay: "Check-out"
        }
      ],
      inclusions: [
        "07 Nights in 4-star hotels with daily breakfast",
        "Sydney–Cairns and Cairns–Gold Coast domestic flights",
        "Sydney Opera House guided tour and Harbour dinner cruise",
        "Blue Mountains day trip with Scenic World and Featherdale Wildlife Park",
        "Great Barrier Reef full day cruise with snorkeling and lunch",
        "Kuranda Scenic Railway and Skyrail rainforest cableway",
        "Gold Coast theme park entry (Movie World or Sea World)",
        "All transfers and Australia Tourist Visa assistance",
        "24/7 Vayu Holidays concierge"
      ],
      exclusions: [
        "International airfare",
        "Optional Sydney Harbour Bridge climb",
        "Lunches and dinners not specified",
        "Personal expenses, optional reef dives, and travel insurance"
      ],
      hotelInfo: "Sydney: Vibe Hotel Sydney / Novotel Darling Harbour. Cairns: Shangri-La The Marina / Riley. Gold Coast: Mantra Legends / QT Surfers Paradise or equivalent.",
      bestTime: "September to November (spring) | March–May (autumn)"
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
      heroDesc: "Hassle-free passport assistance in Bhopal and across India for fresh applications, renewals, minor passports, and Tatkal submissions.",
      features: [
        "Fresh passport & renewal application filing",
        "Tatkal passport express processing consultation",
        "Name change, address change, and spouse endorsement documentation",
        "Passport Seva Kendra (PSK) appointment slot booking in Bhopal and other cities"
      ],
      faqs: [
        { q: "Can Vayu Holidays help if my passport is expiring in less than 6 months?", a: "Yes, we expedite passport renewal under the normal or Tatkal scheme so your international travel plans are never interrupted." }
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
      description: "Handpicked 5-star suites, Private Basiss, Michelin-star dining, and personal 24/7 dedicated trip concierges."
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
      avatar: "/icons/face1.jpeg",
      quote: "Vayu Holidays planned our 25th anniversary trip to Kashmir with pure perfection. The private houseboat in Nigeen lake was pristine, and our chauffeur was courteous and punctual. The personal care from their Bhopal office gave us absolute confidence!"
    },
    {
      id: "test-2",
      name: "Rajesh & Priya Agrawal",
      location: "Indore, MP",
      trip: "Switzerland Grand Alpine Tour",
      rating: 5,
      avatar: "/icons/face2.jpeg",
      quote: "Our Swiss vacation was flawlessly organized. From Schengen visa guidance within days to 1st class Swiss Rail passes and breathtaking hotel views in Lucerne and Zermatt, Vayu Holidays lived up to their promise of minimal luxury and zero stress."
    },
    {
      id: "test-3",
      name: "Vikramaditya Solanki",
      location: "Bhopal & Delhi",
      trip: "Corporate Annual Offsite (Dubai - 45 Delegates)",
      rating: 5,
      avatar: "/icons/face3.jpeg",
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

  enquiries: [],   // Real enquiries come from Firestore / user submissions only

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

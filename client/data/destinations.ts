export interface Destination {
  id: number;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  budget: string;
  budgetBreakdown: {
    travel: string;
    stay: string;
    food: string;
  };
  duration: string;
  image: string;
  attractions: string[];
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Goa",
    slug: "goa",
    description: "Beach paradise with vibrant nightlife and water sports",
    longDescription:
      "Goa is the ultimate beach destination for students looking for a perfect blend of relaxation and adventure. Enjoy pristine beaches, water sports, Portuguese architecture, and vibrant nightlife. Perfect for creating unforgettable memories with friends.",
    budget: "₹5,500–₹8,000",
    budgetBreakdown: {
      travel: "₹1,500–₹2,500 (bus/flight)",
      stay: "₹500–₹800/night (hostels)",
      food: "₹300–₹500/day (street food & cafes)",
    },
    duration: "3–5 days",
    image:
      "https://images.pexels.com/photos/32262470/pexels-photo-32262470.jpeg?w=800&h=600&fit=crop",
    attractions: [
      "Baga Beach",
      "Palolem Beach",
      "Fort Aguada",
      "Dudhsagar Waterfall",
      "Spice Plantations",
      "Anjuna Flea Market",
    ],
  },
  {
    id: 2,
    name: "Manali",
    slug: "manali",
    description: "Mountain adventure with trekking and scenic beauty",
    longDescription:
      "Manali is a paradise for adventure seekers and nature lovers. Located in the Himalayas, it offers trekking, paragliding, skiing, and breathtaking mountain views. Perfect for students who want an active outdoor experience.",
    budget: "₹6,000–₹9,000",
    budgetBreakdown: {
      travel: "₹2,000–₹3,000 (bus)",
      stay: "₹600–₹900/night (hostels & homestays)",
      food: "₹400–₹600/day (local restaurants)",
    },
    duration: "4–6 days",
    image:
      "https://images.pexels.com/photos/31776512/pexels-photo-31776512.jpeg?w=800&h=600&fit=crop",
    attractions: [
      "Rohtang Pass",
      "Solang Valley",
      "Hadimba Temple",
      "Old Manali",
      "Parasailing",
      "Trekking Trails",
    ],
  },
  {
    id: 3,
    name: "Jaipur",
    slug: "jaipur",
    description: "Cultural heritage and pink city charm with rich history",
    longDescription:
      "Jaipur, the pink city, is a treasure trove of Rajasthani culture and heritage. Explore magnificent palaces, forts, bazaars, and experience the warmth of royal history. Ideal for students interested in history and culture.",
    budget: "₹5,000–₹7,500",
    budgetBreakdown: {
      travel: "₹1,500–₹2,500 (bus/train)",
      stay: "₹400–₹600/night (budget hotels)",
      food: "₹250–₹400/day (street food)",
    },
    duration: "2–3 days",
    image:
      "https://images.pexels.com/photos/16534739/pexels-photo-16534739.jpeg?w=800&h=600&fit=crop",
    attractions: [
      "City Palace",
      "Hawa Mahal (Palace of Winds)",
      "Jantar Mantar",
      "Albert Hall Museum",
      "Nahargarh Fort",
      "Bapu Bazaar",
    ],
  },
  {
    id: 4,
    name: "Pondicherry",
    slug: "pondicherry",
    description: "Coastal charm with French colonial architecture",
    longDescription:
      "Pondicherry is a serene coastal town with a unique blend of Indian and French cultures. Walk along the promenade, explore colorful buildings, relax on beaches, and experience a laid-back lifestyle.",
    budget: "₹4,500–₹7,000",
    budgetBreakdown: {
      travel: "₹1,200–₹2,000 (bus)",
      stay: "₹350–₹500/night (hostels)",
      food: "₹250–₹400/day (beach cafes)",
    },
    duration: "2–4 days",
    image:
      "https://images.pexels.com/photos/27000210/pexels-photo-27000210.jpeg?w=800&h=600&fit=crop",
    attractions: [
      "Promenade Beach",
      "Paradise Beach",
      "Auroville",
      "French Quarter",
      "Sri Aurobindo Ashram",
      "Street Art & Murals",
    ],
  },
  {
    id: 5,
    name: "Munnar",
    slug: "munnar",
    description: "Tea plantations and misty mountain views",
    longDescription:
      "Munnar is a picturesque hill station surrounded by emerald tea plantations and misty mountains. Experience cool weather, scenic trekking, and the tranquility of nature. Perfect for a rejuvenating escape.",
    budget: "₹6,000–₹8,500",
    budgetBreakdown: {
      travel: "₹2,000–₹3,000 (bus/train)",
      stay: "₹600–₹800/night (homestays)",
      food: "₹350–₹500/day (local Kerala cuisine)",
    },
    duration: "3–4 days",
    image:
      "https://images.pexels.com/photos/35491392/pexels-photo-35491392.jpeg?w=800&h=600&fit=crop",
    attractions: [
      "Tea Plantations",
      "Anamudi Peak",
      "Mattupetty Dam",
      "Eravikulam National Park",
      "Top Station",
      "Hiking Trails",
    ],
  },
];

export const budgetPlans = [
  {
    id: 1,
    range: "₹5,000–₹8,000",
    label: "Weekend Getaway",
    description: "Perfect for quick 2-3 day trips",
    transport: "Budget buses (AC/Non-AC), shared cabs",
    stay: "Hostels, shared dormitories, budget guest houses",
    food: "Street food, local eateries, self-catering",
    attractions: "Free walking tours, public beaches, temples",
    idealFor: "Budget-conscious travelers, first-time travelers",
    included: [
      "Basic accommodation in dorms",
      "Local bus travel",
      "Street food & casual dining",
      "Free/low-cost attractions",
    ],
  },
  {
    id: 2,
    range: "₹8,000–₹12,000",
    label: "Comfort Adventure",
    description: "Better comfort with more flexibility",
    transport: "Express buses, budget trains, occasional cabs",
    stay: "Budget 2-star hotels, homestays, affordable resorts",
    food: "Mix of street food and restaurant meals",
    attractions: "Popular paid attractions, guided tours, adventure activities",
    idealFor: "Groups of friends, moderate budget travelers",
    included: [
      "Private room or shared room in budget hotel",
      "Express transportation",
      "Mix of dining options",
      "1-2 paid attractions",
      "Adventure activity (hiking/water sports)",
    ],
  },
  {
    id: 3,
    range: "₹12,000–₹15,000",
    label: "Premium Experience",
    description: "More comfort and premium experiences",
    transport: "Budget airlines, first-class trains, private cabs",
    stay: "3-star hotels, resorts, luxury homestays",
    food: "Good restaurants, diverse cuisine options",
    attractions: "All major attractions, premium experiences",
    idealFor: "Group travelers, comfort-seeking students",
    included: [
      "Private hotel room",
      "Flight or first-class train",
      "Good restaurant dining",
      "Multiple paid attractions",
      "Premium activities (paragliding, water sports)",
      "Travel insurance",
    ],
  },
];

export const travelTips = [
  {
    id: 1,
    title: "Best Time to Travel Cheap",
    shortDesc: "Know the perfect timing for discounts",
    fullDesc:
      "Visit destinations during off-season months (May-June, Sept-Oct) when accommodation prices drop by 30-50% and flights are cheaper. Avoid holiday seasons and weekends for better deals. Mid-week travel is always more budget-friendly.",
  },
  {
    id: 2,
    title: "Save on Transport",
    shortDesc: "Smart transportation choices",
    fullDesc:
      "Book buses 7-10 days in advance for 20-30% discounts. Use student discounts on trains (available with valid ID). Consider carpooling with fellow travelers or using shared cabs. Night buses save on accommodation costs as you travel while sleeping.",
  },
  {
    id: 3,
    title: "Hostel vs Hotel",
    shortDesc: "Choose what's best for you",
    fullDesc:
      "Hostels offer great value (₹300-500/night) with social atmosphere and included breakfast. Budget hotels provide privacy (₹600-1000/night). Choose hostels for social experience and budget, hotels for solo travelers who prefer comfort.",
  },
  {
    id: 4,
    title: "Packing Essentials",
    shortDesc: "Pack smart, travel light",
    fullDesc:
      "Pack light to avoid baggage charges (carry-on only). Bring versatile clothes, reusable water bottle, basic toiletries, and a power bank. Leave valuables behind. Roll clothes instead of folding to save space and reduce wrinkles.",
  },
  {
    id: 5,
    title: "Safety for Students",
    shortDesc: "Travel safely and wisely",
    fullDesc:
      "Always travel in groups when possible. Inform someone of your detailed itinerary. Avoid traveling late at night. Keep valuables in hotel safe. Use registered taxis/apps. Stay aware of surroundings. Keep emergency contacts handy.",
  },
];

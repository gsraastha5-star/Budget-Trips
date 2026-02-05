import { useState } from "react";
import { MapPin, Clock, DollarSign, Send, Instagram, Twitter, Mail } from "lucide-react";

// ============================================================================
// Hero Section
// ============================================================================
function HeroSection() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-travel-100 via-white to-white">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&h=900&fit=crop")',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-travel-700 mb-4">
          Explore Budget Trips
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover affordable travel destinations tailored for students. From weekend getaways to week-long adventures—all within your budget.
        </p>
        <button className="bg-travel-500 hover:bg-travel-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition duration-300 shadow-lg hover:shadow-xl">
          Explore Budget Trips
        </button>
      </div>
    </div>
  );
}

// ============================================================================
// Destination Cards Section
// ============================================================================
interface Destination {
  id: number;
  name: string;
  description: string;
  budget: string;
  duration: string;
  image: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Goa",
    description: "Beach paradise with vibrant nightlife and water sports",
    budget: "₹5,500–₹8,000",
    duration: "3–5 days",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Manali",
    description: "Mountain adventure with trekking and scenic beauty",
    budget: "₹6,000–₹9,000",
    duration: "4–6 days",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Jaipur",
    description: "Cultural heritage and pink city charm with rich history",
    budget: "₹5,000–₹7,500",
    duration: "2–3 days",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babfca?w=500&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Pondicherry",
    description: "Coastal charm with French colonial architecture",
    budget: "₹4,500–₹7,000",
    duration: "2–4 days",
    image:
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=500&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Munnar",
    description: "Tea plantations and misty mountain views",
    budget: "₹6,000–₹8,500",
    duration: "3–4 days",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
  },
];

function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 overflow-hidden bg-gray-200">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-travel-700 mb-2">
          {destination.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{destination.description}</p>
        <div className="space-y-2 mb-5">
          <div className="flex items-center text-gray-700">
            <DollarSign className="w-4 h-4 mr-2 text-travel-500" />
            <span className="text-sm font-semibold">{destination.budget}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Clock className="w-4 h-4 mr-2 text-travel-500" />
            <span className="text-sm">{destination.duration}</span>
          </div>
        </div>
        <button className="w-full bg-travel-500 hover:bg-travel-600 text-white font-semibold py-2 rounded-lg transition duration-300">
          View Plan
        </button>
      </div>
    </div>
  );
}

function DestinationsSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-travel-700 text-center mb-3">
          Popular Destinations
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Handpicked budget-friendly destinations perfect for students
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// Budget Plans Section
// ============================================================================
interface BudgetPlan {
  id: number;
  range: string;
  label: string;
  transport: string;
  stay: string;
  food: string;
  attractions: string;
}

const budgetPlans: BudgetPlan[] = [
  {
    id: 1,
    range: "₹5,000–₹8,000",
    label: "Weekend Getaway",
    transport: "Budget buses (AC/Non-AC)",
    stay: "Hostels, shared rooms",
    food: "Street food, local eateries",
    attractions: "Free walking tours, beaches",
  },
  {
    id: 2,
    range: "₹8,000–₹12,000",
    label: "Comfort Adventure",
    transport: "Express buses, shared cabs",
    stay: "Budget hotels, homestays",
    food: "Mix of street & restaurant food",
    attractions: "Popular paid attractions",
  },
  {
    id: 3,
    range: "₹12,000–₹15,000",
    label: "Premium Experience",
    transport: "Flights (budget airlines), trains",
    stay: "3-star hotels, resorts",
    food: "Good restaurants, diverse cuisine",
    attractions: "All attractions, adventure activities",
  },
];

function BudgetPlanCard({ plan }: { plan: BudgetPlan }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-t-4 border-nature-500">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-travel-700 mb-2">{plan.range}</h3>
        <p className="text-travel-600 font-semibold mb-6 text-sm">
          {plan.label}
        </p>
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold text-travel-700 uppercase tracking-wide mb-1">
              Transport
            </p>
            <p className="text-gray-700 text-sm">{plan.transport}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-travel-700 uppercase tracking-wide mb-1">
              Stay
            </p>
            <p className="text-gray-700 text-sm">{plan.stay}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-travel-700 uppercase tracking-wide mb-1">
              Food
            </p>
            <p className="text-gray-700 text-sm">{plan.food}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-travel-700 uppercase tracking-wide mb-1">
              Attractions
            </p>
            <p className="text-gray-700 text-sm">{plan.attractions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BudgetPlansSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-travel-700 text-center mb-3">
          Budget Plans
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Choose a budget plan that fits your travel style
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {budgetPlans.map((plan) => (
            <BudgetPlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// Travel Tips Section
// ============================================================================
interface TravelTip {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const travelTips: TravelTip[] = [
  {
    id: 1,
    title: "Best Time to Travel Cheap",
    description:
      "Visit during off-season months (May-June, Sept-Oct) when prices drop significantly and crowds are smaller.",
    icon: <Clock className="w-8 h-8 text-travel-500" />,
  },
  {
    id: 2,
    title: "Save on Transport",
    description:
      "Book buses in advance, use student discounts on trains, and consider carpooling with fellow travelers to cut costs.",
    icon: <MapPin className="w-8 h-8 text-nature-500" />,
  },
  {
    id: 3,
    title: "Hostel vs Hotel",
    description:
      "Hostels offer great value with social atmosphere, while budget hotels provide privacy. Choose based on your preference.",
    icon: <DollarSign className="w-8 h-8 text-travel-500" />,
  },
  {
    id: 4,
    title: "Packing Essentials",
    description:
      "Pack light to avoid baggage charges. Bring basics: comfortable shoes, light clothes, and reusable water bottle.",
    icon: <MapPin className="w-8 h-8 text-nature-500" />,
  },
  {
    id: 5,
    title: "Safety for Students",
    description:
      "Travel in groups, inform someone of your itinerary, stay in well-lit areas, and keep valuables secure.",
    icon: <Mail className="w-8 h-8 text-travel-500" />,
  },
];

function TravelTipCard({ tip }: { tip: TravelTip }) {
  return (
    <div className="bg-gradient-to-br from-travel-50 to-nature-50 p-6 rounded-lg border border-travel-100 hover:shadow-md transition-shadow duration-300">
      <div className="mb-3">{tip.icon}</div>
      <h3 className="text-lg font-bold text-travel-700 mb-2">{tip.title}</h3>
      <p className="text-gray-700 text-sm leading-relaxed">{tip.description}</p>
    </div>
  );
}

function TravelTipsSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-travel-700 text-center mb-3">
          Travel Tips for Students
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Smart tips to help you travel smart and save money
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {travelTips.map((tip) => (
            <TravelTipCard key={tip.id} tip={tip} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// Contact & Inquiry Section
// ============================================================================
function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    budget: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitStatus("sent");
    setFormData({ name: "", email: "", destination: "", budget: "", message: "" });
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-travel-700 text-center mb-3">
          Plan Your Trip
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Send us your travel preferences and we'll help you plan the perfect
          budget trip
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-gray-50 p-8 rounded-lg border border-gray-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-travel-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-travel-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Destination
              </label>
              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-travel-500 focus:border-transparent"
              >
                <option value="">Select a destination</option>
                {destinations.map((dest) => (
                  <option key={dest.id} value={dest.name}>
                    {dest.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Budget Range
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-travel-500 focus:border-transparent"
              >
                <option value="">Select budget</option>
                <option value="5k-8k">₹5,000–₹8,000</option>
                <option value="8k-12k">₹8,000–₹12,000</option>
                <option value="12k-15k">₹12,000–₹15,000</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-travel-500 focus:border-transparent resize-none"
              placeholder="Tell us about your travel plans..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-travel-500 hover:bg-travel-600 text-white font-semibold py-3 rounded-lg transition duration-300 flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            Send Inquiry
          </button>

          {submitStatus === "sent" && (
            <p className="text-center text-nature-600 font-semibold">
              ✓ Thanks for your inquiry! We'll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

// ============================================================================
// Footer
// ============================================================================
function Footer() {
  return (
    <footer className="bg-travel-700 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Budget Trips</h3>
            <p className="text-travel-100 text-sm">
              Empowering students to explore the world on a budget.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-travel-100">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Budget Plans
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-travel-100 hover:text-white transition"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-travel-100 hover:text-white transition"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-travel-100 hover:text-white transition"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-travel-600 pt-8">
          <p className="text-center text-travel-100 text-sm">
            Made for students, by travelers. © 2024 Budget Trips. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ============================================================================
// Main Index Page
// ============================================================================
export default function Index() {
  return (
    <div className="bg-white">
      <HeroSection />
      <DestinationsSection />
      <BudgetPlansSection />
      <TravelTipsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

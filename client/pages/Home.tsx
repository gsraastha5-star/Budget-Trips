import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Clock, DollarSign } from "lucide-react";
import { destinations, travelTips } from "@/data/destinations";
import { TravelTipModal } from "@/components/TravelTipModal";

// ============================================================================
// Hero Section
// ============================================================================
function HeroSection({ onExploreClick }: { onExploreClick: () => void }) {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-travel-100 via-white to-white">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/3726469/pexels-photo-3726469.jpeg?w=1600&h=900&fit=crop")',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-travel-700 mb-4">
          Explore Budget Trips
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover affordable travel destinations tailored for students. From
          weekend getaways to week-long adventures—all within your budget.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onExploreClick}
            className="bg-travel-500 hover:bg-travel-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            Explore Destinations
          </button>
          <Link
            to="/budget-plans"
            className="bg-nature-500 hover:bg-nature-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform inline-block"
          >
            View Budget Plans
          </Link>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Destination Cards Section
// ============================================================================
function DestinationCard({ destination }: { destination: typeof destinations[0] }) {
  return (
    <Link
      to={`/destination/${destination.slug}`}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 transform cursor-pointer"
    >
      <div className="h-48 overflow-hidden bg-gray-200">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
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
          View Details
        </button>
      </div>
    </Link>
  );
}

function DestinationsSection({
  destinationRef,
}: {
  destinationRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <section
      ref={destinationRef}
      className="py-16 px-4 bg-gray-50"
      id="destinations"
    >
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
// Travel Tips Section
// ============================================================================
interface TipWithModal {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
}

function TravelTipCard({ tip, onReadMore }: { tip: TipWithModal; onReadMore: () => void }) {
  return (
    <div className="bg-gradient-to-br from-travel-50 to-nature-50 p-6 rounded-lg border border-travel-100 hover:shadow-md transition-shadow duration-300 flex flex-col">
      <h3 className="text-lg font-bold text-travel-700 mb-2">{tip.title}</h3>
      <p className="text-gray-700 text-sm leading-relaxed flex-grow mb-4">
        {tip.shortDesc}
      </p>
      <button
        onClick={onReadMore}
        className="bg-travel-500 hover:bg-travel-600 text-white font-semibold py-2 rounded-lg transition duration-300 w-full"
      >
        Read More
      </button>
    </div>
  );
}

function TravelTipsSection() {
  const [selectedTip, setSelectedTip] = useState<TipWithModal | null>(null);

  return (
    <>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-travel-700 text-center mb-3">
            Travel Tips for Students
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Smart tips to help you travel smart and save money
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {travelTips.map((tip) => (
              <TravelTipCard
                key={tip.id}
                tip={tip}
                onReadMore={() => setSelectedTip(tip)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedTip && (
        <TravelTipModal
          isOpen={!!selectedTip}
          title={selectedTip.title}
          description={selectedTip.fullDesc}
          onClose={() => setSelectedTip(null)}
        />
      )}
    </>
  );
}

// ============================================================================
// Call to Action Section
// ============================================================================
function CTASection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-travel-600 to-nature-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to Start Your Budget Journey?
        </h2>
        <p className="text-travel-100 text-lg mb-8">
          Get personalized trip recommendations and budget breakdowns from our experts
        </p>
        <Link
          to="/contact"
          className="bg-white hover:bg-gray-100 text-travel-700 font-semibold py-4 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl inline-block"
        >
          Plan Your Trip Now
        </Link>
      </div>
    </section>
  );
}

// ============================================================================
// Main Home Page
// ============================================================================
export default function Home() {
  const destinationRef = useRef<HTMLDivElement>(null);

  const handleExploreClick = () => {
    destinationRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white">
      <HeroSection onExploreClick={handleExploreClick} />
      <DestinationsSection destinationRef={destinationRef} />
      <TravelTipsSection />
      <CTASection />
    </div>
  );
}

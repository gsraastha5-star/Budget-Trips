import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, DollarSign, Clock, MapPin } from "lucide-react";
import { destinations } from "@/data/destinations";

export default function DestinationDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Destination Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find that destination.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-travel-500 hover:bg-travel-600 text-white font-semibold py-3 px-8 rounded-lg transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Header with back button */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-travel-600 hover:text-travel-700 transition font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Destinations
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Image */}
        <div className="w-full h-96 rounded-lg overflow-hidden mb-8 shadow-lg">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title and Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="md:col-span-2">
            <h1 className="text-5xl font-bold text-travel-700 mb-4">
              {destination.name}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {destination.longDescription}
            </p>
          </div>
          <div className="bg-gradient-to-br from-travel-50 to-nature-50 p-6 rounded-lg border border-travel-100 h-fit sticky top-24">
            <h3 className="text-lg font-bold text-travel-700 mb-4">
              Quick Info
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold text-travel-700 uppercase tracking-wide mb-1">
                  Duration
                </p>
                <p className="text-gray-800 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-travel-500" />
                  {destination.duration}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-travel-700 uppercase tracking-wide mb-1">
                  Budget
                </p>
                <p className="text-gray-800 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-travel-500" />
                  {destination.budget}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Budget Breakdown */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-travel-700 mb-6">
            Budget Breakdown
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 border-l-4 border-travel-500 p-6 rounded">
              <h3 className="text-lg font-semibold text-travel-700 mb-2">
                Transport
              </h3>
              <p className="text-gray-700">
                {destination.budgetBreakdown.travel}
              </p>
            </div>
            <div className="bg-green-50 border-l-4 border-nature-500 p-6 rounded">
              <h3 className="text-lg font-semibold text-travel-700 mb-2">
                Stay
              </h3>
              <p className="text-gray-700">
                {destination.budgetBreakdown.stay}
              </p>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded">
              <h3 className="text-lg font-semibold text-travel-700 mb-2">
                Food
              </h3>
              <p className="text-gray-700">
                {destination.budgetBreakdown.food}
              </p>
            </div>
          </div>
        </section>

        {/* Top Attractions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-travel-700 mb-6">
            Top Attractions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {destination.attractions.map((attraction, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-travel-300 transition"
              >
                <MapPin className="w-5 h-5 text-travel-500 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{attraction}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-travel-600 to-nature-600 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Visit {destination.name}?
          </h2>
          <p className="text-travel-100 text-lg mb-6">
            Get a personalized itinerary and detailed budget breakdown
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white hover:bg-gray-100 text-travel-700 font-semibold py-3 px-8 rounded-lg transition duration-300 inline-block"
          >
            Plan This Trip
          </button>
        </section>
      </div>
    </div>
  );
}

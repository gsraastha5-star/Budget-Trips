import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { destinations } from "@/data/destinations";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        destination: "",
        budget: "",
        message: "",
      });
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-12 pb-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold text-travel-700 text-center mb-4">
          Plan Your Trip
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Tell us about your dream destination and budget. Our team will create
          a personalized travel plan just for you.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-md border border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-travel-500 focus:border-transparent transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-travel-500 focus:border-transparent transition"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Which destination interests you? *
                </label>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-travel-500 focus:border-transparent transition"
                >
                  <option value="">Select a destination</option>
                  {destinations.map((dest) => (
                    <option key={dest.id} value={dest.name}>
                      {dest.name}
                    </option>
                  ))}
                  <option value="multiple">Multiple destinations</option>
                  <option value="surprise">Surprise me!</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Budget Range *
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-travel-500 focus:border-transparent transition"
                >
                  <option value="">Select your budget</option>
                  <option value="5k-8k">₹5,000–₹8,000 (Weekend Trip)</option>
                  <option value="8k-12k">₹8,000–₹12,000 (Comfort Adventure)</option>
                  <option value="12k-15k">₹12,000–₹15,000 (Premium)</option>
                  <option value="custom">Custom/Flexible</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tell us more about your travel plans
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-travel-500 focus:border-transparent transition resize-none"
                placeholder="Share details like: number of people, preferred travel dates, interests (beaches, mountains, culture, adventure), dietary preferences, etc."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-travel-500 hover:bg-travel-600 text-white font-semibold py-4 rounded-lg transition duration-300 flex items-center justify-center gap-2 text-lg hover:shadow-lg hover:scale-105 transform"
            >
              <Send className="w-5 h-5" />
              Send Inquiry
            </button>

            <p className="text-center text-gray-600 text-sm mt-4">
              We'll get back to you within 24 hours with personalized recommendations!
            </p>
          </form>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-md border border-nature-300 text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="w-16 h-16 text-nature-500" />
            </div>
            <h2 className="text-3xl font-bold text-nature-700 mb-4">
              Thank You!
            </h2>
            <p className="text-gray-700 text-lg mb-2">
              Your inquiry has been received successfully!
            </p>
            <p className="text-gray-600">
              We'll analyze your preferences and send you personalized budget
              trip recommendations within 24 hours.
            </p>
            <div className="mt-8 bg-nature-50 border border-nature-200 rounded-lg p-6">
              <h3 className="font-semibold text-nature-700 mb-3">
                What happens next?
              </h3>
              <ul className="text-left space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-nature-600 font-bold mt-1">1.</span>
                  <span>
                    We'll review your travel preferences and budget requirements
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-nature-600 font-bold mt-1">2.</span>
                  <span>
                    Create a customized itinerary with cost breakdown
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-nature-600 font-bold mt-1">3.</span>
                  <span>
                    Connect you with verified travel partners for discounts
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-nature-600 font-bold mt-1">4.</span>
                  <span>
                    Provide booking assistance and travel tips
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Additional Info Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-travel-700 mb-2">
              Quick Support
            </h3>
            <p className="text-gray-700 text-sm">
              Have questions? We're here to help. Response time: &lt;24 hours
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-travel-700 mb-2">
              100% Student-Friendly
            </h3>
            <p className="text-gray-700 text-sm">
              We understand student budgets. No hidden charges, just honest advice.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-travel-700 mb-2">
              Expert Recommendations
            </h3>
            <p className="text-gray-700 text-sm">
              Travel tips and deals you won't find anywhere else.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

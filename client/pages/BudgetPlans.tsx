import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { budgetPlans } from "@/data/destinations";
import { useNavigate } from "react-router-dom";

function BudgetPlanCard({
  plan,
  isExpanded,
  onToggle,
}: {
  plan: (typeof budgetPlans)[0];
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border-t-4 border-nature-500">
      <div
        className="p-6 cursor-pointer hover:bg-gray-50 transition"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-bold text-travel-700">{plan.range}</h3>
          <ChevronDown
            className={`w-6 h-6 text-travel-500 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </div>
        <p className="text-travel-600 font-semibold text-sm mb-2">
          {plan.label}
        </p>
        <p className="text-gray-600 text-sm">{plan.description}</p>
      </div>

      {/* Expandable Details */}
      {isExpanded && (
        <div className="border-t border-gray-200 bg-gray-50 p-6 space-y-6">
          <div>
            <p className="text-xs font-semibold text-travel-700 uppercase tracking-wide mb-2">
              Transport
            </p>
            <p className="text-gray-700">{plan.transport}</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-travel-700 uppercase tracking-wide mb-2">
              Accommodation
            </p>
            <p className="text-gray-700">{plan.stay}</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-travel-700 uppercase tracking-wide mb-2">
              Food & Dining
            </p>
            <p className="text-gray-700">{plan.food}</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-travel-700 uppercase tracking-wide mb-2">
              Attractions & Activities
            </p>
            <p className="text-gray-700">{plan.attractions}</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-travel-700 uppercase tracking-wide mb-3">
              Ideal For
            </p>
            <p className="text-gray-700">{plan.idealFor}</p>
          </div>

          <div className="bg-white rounded-lg p-4 border border-travel-200">
            <p className="text-xs font-semibold text-travel-700 uppercase tracking-wide mb-3">
              What's Included
            </p>
            <ul className="space-y-2">
              {plan.included.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-gray-700 text-sm"
                >
                  <span className="text-travel-500 font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => navigate("/contact")}
            className="w-full bg-travel-500 hover:bg-travel-600 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Start Planning with This Budget
          </button>
        </div>
      )}
    </div>
  );
}

export default function BudgetPlans() {
  const [expandedPlan, setExpandedPlan] = useState<number | null>(null);

  return (
    <div className="bg-gray-50 min-h-screen pt-12 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-travel-700 text-center mb-4">
          Budget Plans
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Choose a budget plan that fits your travel style and get detailed
          breakdowns
        </p>

        <div className="space-y-6">
          {budgetPlans.map((plan) => (
            <BudgetPlanCard
              key={plan.id}
              plan={plan}
              isExpanded={expandedPlan === plan.id}
              onToggle={() =>
                setExpandedPlan(expandedPlan === plan.id ? null : plan.id)
              }
            />
          ))}
        </div>

        {/* Comparison Section */}
        <section className="mt-16 bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-travel-700 mb-6">
            Plan Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-300 bg-gray-50">
                  <th className="text-left p-4 font-bold text-travel-700">
                    Category
                  </th>
                  <th className="text-left p-4 font-bold text-travel-700">
                    Budget Trip
                  </th>
                  <th className="text-left p-4 font-bold text-travel-700">
                    Comfort
                  </th>
                  <th className="text-left p-4 font-bold text-travel-700">
                    Premium
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-semibold text-gray-800">Budget</td>
                  <td className="p-4 text-gray-700">₹5,000–₹8,000</td>
                  <td className="p-4 text-gray-700">₹8,000–₹12,000</td>
                  <td className="p-4 text-gray-700">₹12,000–₹15,000</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-semibold text-gray-800">Duration</td>
                  <td className="p-4 text-gray-700">2-4 days</td>
                  <td className="p-4 text-gray-700">3-5 days</td>
                  <td className="p-4 text-gray-700">4-7 days</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-semibold text-gray-800">
                    Accommodation
                  </td>
                  <td className="p-4 text-gray-700">Dorms & Hostels</td>
                  <td className="p-4 text-gray-700">Budget Hotels</td>
                  <td className="p-4 text-gray-700">3-star Hotels</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-semibold text-gray-800">Transport</td>
                  <td className="p-4 text-gray-700">Buses & Cabs</td>
                  <td className="p-4 text-gray-700">Express Trains</td>
                  <td className="p-4 text-gray-700">Flights & 1AC</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold text-gray-800">
                    Activities
                  </td>
                  <td className="p-4 text-gray-700">Free & Budget</td>
                  <td className="p-4 text-gray-700">Mixed</td>
                  <td className="p-4 text-gray-700">All Premium</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16 bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-travel-700 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-travel-700 mb-2">
                Can I customize my budget?
              </h3>
              <p className="text-gray-700">
                Absolutely! These are guidelines. We can tailor plans based on
                your specific needs, preferences, and what you want to do.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-travel-700 mb-2">
                What about group discounts?
              </h3>
              <p className="text-gray-700">
                Group travel is cheaper! With more people, you can split
                transport and accommodation costs, bringing down the per-person
                budget significantly.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-travel-700 mb-2">
                Are peak season prices different?
              </h3>
              <p className="text-gray-700">
                Yes, prices increase during peak season (Nov-Dec, April-May).
                Off-season travel can be 30-50% cheaper. We recommend traveling
                during May-June or Sept-Oct.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-travel-700 mb-2">
                Can I book directly through you?
              </h3>
              <p className="text-gray-700">
                We provide personalized recommendations and connect you with
                verified travel partners who offer student discounts and special
                rates.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-xl text-travel-700 hover:text-travel-600 transition"
        >
          <MapPin className="w-6 h-6" />
          Budget Trips
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-travel-600 transition font-medium"
          >
            Home
          </Link>
          <Link
            to="/budget-plans"
            className="text-gray-700 hover:text-travel-600 transition font-medium"
          >
            Budget Plans
          </Link>
          <Link
            to="/contact"
            className="bg-travel-500 hover:bg-travel-600 text-white px-6 py-2 rounded-lg transition font-medium"
          >
            Plan a Trip
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
            <Link
              to="/"
              className="text-gray-700 hover:text-travel-600 transition font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/budget-plans"
              className="text-gray-700 hover:text-travel-600 transition font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Budget Plans
            </Link>
            <Link
              to="/contact"
              className="bg-travel-500 hover:bg-travel-600 text-white px-6 py-2 rounded-lg transition font-medium text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Plan a Trip
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
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
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/budget-plans"
                  className="hover:text-white transition"
                >
                  Budget Plans
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-travel-100 hover:text-white transition text-sm"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-travel-100 hover:text-white transition text-sm"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-travel-100 hover:text-white transition text-sm"
              >
                Email
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

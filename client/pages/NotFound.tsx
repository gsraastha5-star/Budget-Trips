import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-travel-50 to-white px-4">
      <div className="text-center max-w-md">
        <MapPin className="w-16 h-16 text-travel-500 mx-auto mb-4 opacity-50" />
        <h1 className="text-6xl font-bold text-travel-700 mb-2">404</h1>
        <p className="text-2xl text-gray-800 font-semibold mb-4">
          Oops! Destination Not Found
        </p>
        <p className="text-gray-600 mb-8">
          Looks like you've wandered off the map. This page doesn't exist, but don't worry—there are plenty of amazing destinations waiting for you!
        </p>
        <Link
          to="/"
          className="inline-block bg-travel-500 hover:bg-travel-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 hover:shadow-lg"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

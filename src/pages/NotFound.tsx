
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 p-3 rounded-full">
            <AlertTriangle className="h-8 w-8 text-red-500" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-2 text-gray-900">404</h1>
        <p className="text-xl text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center px-5 py-2.5 bg-blazewind-purple hover:bg-blazewind-purple-hover text-white font-medium rounded-lg transition-colors"
        >
          <Home className="mr-2 h-4 w-4" />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

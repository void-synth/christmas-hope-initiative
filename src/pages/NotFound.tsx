import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4 py-12">
      <div className="text-center space-y-4 sm:space-y-5">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">404</h1>
        <p className="text-base sm:text-lg text-muted-foreground">
          Oops! Page not found
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm sm:text-base font-semibold text-primary-foreground hover:bg-primary/90 transition"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

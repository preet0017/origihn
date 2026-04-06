import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import orighinblack from "../assets/logo-white.png";
import originwhite from "../assets/logo-black.png";
// import logoo from '../assets/logo.png'

export function Navbar() {
  const location = useLocation();
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero-section");
    if (!hero) {
      setIsHeroVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroVisible(entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [location.pathname]);

  const linkClass = (path, isMobile = false) => {
    const baseClasses = isMobile
      ? "block px-4 py-2 rounded transition-colors duration-300"
      : "transition-colors duration-300 font-semibold";

    const activeClasses = isHeroVisible
      ? "text-white font-semibold"
      : "text-[#2A363B] font-semibold";

    const inactiveClasses = isHeroVisible
      ? "text-white/90 hover:text-white"
      : "text-[#2A363B] hover:text-origihn-red";

    return `${baseClasses} ${location.pathname === path ? activeClasses : inactiveClasses}`;
  };

  return (
    <nav
      className={`fixed left-0 top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isHeroVisible
          ? "bg-transparent text-white shadow-none"
          : "bg-white text-[#2A363B] shadow-sm"
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-center">
          <Link to="/" className="absolute left-4 md:left-8 flex items-center transition-all duration-300">
            <div className="flex items-center gap-2">
              <img
                src={isHeroVisible ? orighinblack : originwhite}
                alt="Origihn logo"
                className="h-12 w-auto transition-all duration-300"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.02em] drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
            <Link to="/" className={linkClass("/")}>
              Home
            </Link>
            <Link to="/products" className={linkClass("/products")}>
              Shop
            </Link>
            <Link to="/build" className={linkClass("/build")}>
              Build Your Own
            </Link>
            <Link to="/about" className={linkClass("/about")}>
              About Us
            </Link>
            <Link to="/contact" className={linkClass("/contact")}>
              Contact Us
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-4 md:hidden p-2 text-current"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-white bg-opacity-95 backdrop-blur-sm border-t border-white/20">
            <Link to="/" className={linkClass("/", true)}>
              Home
            </Link>
            <Link to="/products" className={linkClass("/products", true)}>
              Shop
            </Link>
            <Link to="/build" className={linkClass("/build", true)}>
              Build Your Own
            </Link>
            <Link to="/about" className={linkClass("/about", true)}>
              About Us
            </Link>
            <Link to="/contact" className={linkClass("/contact", true)}>
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

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
      ? "block py-2 rounded transition-colors duration-300"
      : "transition-colors duration-300 font-semibold";

    const activeClasses = isHeroVisible
      ? "text-white font-semibold"
      : "text-[#2A363B] font-semibold";

    const inactiveClasses = isHeroVisible
      ? "text-white/90 hover:text-white"
      : "text-[#2A363B] hover:text-origihn-red";

    return `${baseClasses} ${location.pathname === path ? activeClasses : inactiveClasses}`;
  };

  const authButtonClass = (isSignup = false) => {
    const baseClasses = "px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300";
    
    if (isSignup) {
      return `${baseClasses} bg-[#D97A2B] text-white hover:bg-[#D97A2B]/90 hover:shadow-md`;
    } else {
      return `${baseClasses} ${
        isHeroVisible
          ? "text-white border border-white/30 hover:bg-white/10"
          : "text-[#2A363B] border border-[#2A363B]/30 hover:bg-[#2A363B]/5"
      }`;
    }
  };

  const mobileAuthButtonClass = (isSignup = false) => {
    const baseClasses = "block w-full py-2 rounded-xl font-semibold text-sm transition-colors duration-300 text-center";
    
    if (isSignup) {
      return `${baseClasses} bg-[#D97A2B] text-white hover:bg-[#D97A2B]/90`;
    } else {
      return `${baseClasses} text-[#2A363B] border border-[#2A363B]/30 hover:bg-[#2A363B]/5`;
    }
  };

  const panelLinkClass = (path) => {
    const activeClasses = "text-[#2A363B] font-semibold";
    const inactiveClasses = "text-[#2A363B]/70 hover:text-origihn-red";
    return `block py-2 rounded transition-colors duration-300 ${location.pathname === path ? activeClasses : inactiveClasses}`;
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

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3 absolute right-8">
            <Link to="/login" className={authButtonClass(false)}>
              Login
            </Link>
            <Link to="/signup" className={authButtonClass(true)}>
              Signup
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-4 md:hidden p-2 text-current"
            aria-label="Toggle navigation"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                  isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                  isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)}></div>

      <div className={`fixed top-0 right-0 h-screen w-4/5 bg-white z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <img
              src={originwhite}
              alt="Origihn logo"
              className="h-10 w-auto"
            />
            <button onClick={() => setIsOpen(false)} className="p-2 text-gray-600 hover:text-gray-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 p-4 space-y-4">
            <Link to="/" className={panelLinkClass("/")} onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/products" className={panelLinkClass("/products")} onClick={() => setIsOpen(false)}>
              Shop
            </Link>
            <Link to="/build" className={panelLinkClass("/build")} onClick={() => setIsOpen(false)}>
              Build Your Own
            </Link>
            <Link to="/about" className={panelLinkClass("/about")} onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link to="/contact" className={panelLinkClass("/contact")} onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
          </div>

          <div className="p-4 space-y-2 border-t border-gray-200">
            <Link to="/login" className={mobileAuthButtonClass(false)} onClick={() => setIsOpen(false)}>
              Login
            </Link>
            <Link to="/signup" className={mobileAuthButtonClass(true)} onClick={() => setIsOpen(false)}>
              Signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

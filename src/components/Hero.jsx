import { Link } from "react-router-dom";
import video from "../assets/hero_section_vid.mp4";

export function Hero() {
  const handleScroll = () => {
    const target = document.getElementById("new-arrivals");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative -mt-20 w-full h-screen overflow-hidden"
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative mx-4 sm:mx-10 md:mx-20 z-10 flex h-full items-center justify-center px-2 sm:px-4 pb-30 pt-20 text-center ">
        <div className="max-w-4xl mx-auto ">
          <span className="inline-block py-1.5 px-3 sm:py-2 sm:px-4 rounded-full bg-white/10 text-white text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.35em] mb-4 sm:mb-8 border border-white/20 shadow-lg shadow-black/20">
            Premium Natural Nutrition
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.55)] leading-tight mb-4 sm:mb-6">
            Elevate your wellness with premium protein.
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed drop-shadow-[0_2px_16px_rgba(0,0,0,0.35)]">
            Discover handcrafted nutrition built for modern performance and
            effortless daily rituals.
          </p>

          {/* <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-sm font-semibold text-[#2A363B] transition-all duration-300 hover:brightness-95 shadow-xl shadow-black/25"
            >
              Shop Kits
            </Link>
            <Link
              to="/build"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-10 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/20 shadow-xl shadow-black/15"
            >
              Build Your Own
            </Link>
          </div> */}
          <button
            type="button"
            onClick={handleScroll}
            aria-label="Scroll to next section"
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex cursor-pointer flex-col items-center gap-2 text-white/70 transition-all duration-300 ease-in-out hover:text-white hover:scale-105"
          >
            <span className="text-[10px] tracking-widest uppercase">Scroll Down</span>
            <div className="flex h-10 w-6 items-center justify-center rounded-full border border-white/60 p-1">
              {/* <span className="h-2 w-2 rounded-full bg-white/80 animate-bounce" /> */}
              <div className="pb-3 mb-3 w-1 h-2 bg-white rounded-full animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

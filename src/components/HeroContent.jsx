import { Link } from 'react-router-dom'

export function HeroContent() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <span className="inline-block py-1 sm:py-1.5 px-3 sm:px-4 rounded-full bg-origihn-green text-origihn-textPrimary text-xs font-bold tracking-widest uppercase mb-4 sm:mb-8 border border-origihn-green/30 shadow-sm">
          Handcrafted Nutrition
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-8 tracking-tight text-origihn-textPrimary leading-[1.1]">
          Fuel your body.<br />
          <span className="text-origihn-red italic">Simplify your life.</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-origihn-textSecondary max-w-2xl mb-8 md:mb-12 leading-relaxed px-2">
          Premium, home-made high protein kits delivered to your door.
          From 100g to 200g of pure protein perfectly portioned to crush your goals.
        </p>
        {/* <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
          <Link to="/products" className="bg-origihn-red text-white px-10 py-4 rounded-full hover:bg-origihn-red hover:opacity-90 hover:-translate-y-1 transition-all font-medium tracking-wide shadow-xl shadow-origihn-red/20 text-lg w-full sm:w-auto text-center flex items-center justify-center">
            Shop Kits
          </Link>
          <Link to="/build" className="bg-transparent text-origihn-red px-10 py-4 rounded-full hover:bg-origihn-red/5 transition-all font-medium tracking-wide border-2 border-origihn-red/30 hover:border-origihn-red text-lg w-full sm:w-auto text-center flex items-center justify-center">
            Build Your Own
          </Link>
        </div> */}
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-4 relative overflow-hidden bg-origihn-cream">
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-origihn-pink/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-origihn-yellow/10 rounded-full blur-[80px] -z-10" />

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <span className="inline-block py-1.5 px-4 rounded-full bg-origihn-green text-origihn-textPrimary text-xs font-bold tracking-widest uppercase mb-8 border border-origihn-green/30 shadow-sm">
          Handcrafted Nutrition
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight text-origihn-textPrimary leading-[1.1]">
          Fuel your body.<br />
          <span className="text-origihn-red italic">Simplify your life.</span>
        </h1>
        <p className="text-lg md:text-2xl text-origihn-textSecondary max-w-2xl mb-12 leading-relaxed">
          Premium, home-made high protein kits delivered to your door.
          From 100g to 200g of pure protein perfectly portioned to crush your goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
          <Link to="/products" className="bg-origihn-red text-white px-10 py-4 rounded-full hover:bg-origihn-red hover:opacity-90 hover:-translate-y-1 transition-all font-medium tracking-wide shadow-xl shadow-origihn-red/20 text-lg w-full sm:w-auto text-center flex items-center justify-center">
            Shop Kits
          </Link>
          <Link to="/build" className="bg-transparent text-origihn-red px-10 py-4 rounded-full hover:bg-origihn-red/5 transition-all font-medium tracking-wide border-2 border-origihn-red/30 hover:border-origihn-red text-lg w-full sm:w-auto text-center flex items-center justify-center">
            Build Your Own
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function AboutUs() {
  return (
    <div className="pt-20 pb-12 sm:pb-20 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden mb-16 sm:mb-24">
        <div className="absolute top-0 right-[-10%] w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-origihn-green/20 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[250px] sm:w-[300px] md:w-[400px] h-[250px] sm:h-[300px] md:h-[400px] bg-accent/10 rounded-full blur-[80px] -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 text-center">
          <span className="inline-block py-1 sm:py-1.5 px-3 sm:px-4 rounded-full bg-origihn-green text-origihn-textPrimary text-xs font-bold tracking-widest uppercase mb-4 sm:mb-8 border border-origihn-green/30 shadow-sm">
            Our Story
          </span>
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-8 tracking-tight text-origihn-textPrimary leading-[1.1] max-w-4xl mx-auto px-2">
            Redefining daily <span className="text-origihn-red italic">nutrition</span> for the modern lifter.
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-origihn-textSecondary max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
            We believe that fueling your body should be simple, delicious, and uncompromisingly high in quality. No shortcuts, just real food.
          </p>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-[#F7F5F0] relative overflow-hidden rounded-2xl sm:rounded-3xl mx-4 sm:mx-6 lg:mx-8 mb-16 sm:mb-24 shadow-xl shadow-origihn-textPrimary/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-origihn-textPrimary mb-4 sm:mb-6 leading-tight">The Problem We Faced</h2>
              <p className="text-sm sm:text-base md:text-lg text-origihn-textSecondary mb-4 sm:mb-6 leading-relaxed">
                A few years ago, our founders were struggling to hit their daily protein goals while balancing full-time jobs and intense training schedules. Meal prepping took hours every Sunday, and the food always tasted bland by Wednesday.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-origihn-textSecondary mb-6 sm:mb-8 leading-relaxed">
                The alternatives? Expensive meal delivery services with tiny portions, or relying on heavily processed protein bars and shakes. We knew there had to be a better way to get 150g+ of protein daily without sacrificing taste or spending hours in the kitchen.
              </p>
              <div className="inline-block border-b-2 border-origihn-red pb-1">
                <span className="font-bold text-origihn-textPrimary uppercase tracking-widest text-xs sm:text-sm">That's why we built origihn</span>
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2 relative w-full">
              <div className="aspect-square w-full rounded-2xl sm:rounded-[2.5rem] bg-white overflow-hidden relative shadow-2xl border border-origihn-green/20 p-6 sm:p-8 flex flex-col items-center justify-center text-center">
                 <div className="w-16 sm:w-24 h-16 sm:h-24 bg-origihn-cream/50 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                    <span className="font-serif text-2xl sm:text-4xl text-origihn-red italic">Origihn</span>
                 </div>
                 <h3 className="font-serif text-lg sm:text-2xl text-origihn-textPrimary mb-2 sm:mb-4">Born in the Kitchen</h3>
                 <p className="text-sm sm:text-base text-origihn-textSecondary">What started as cooking for three friends quickly grew into feeding hundreds of dedicated athletes every single day.</p>
              </div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/30 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-12 sm:pb-24">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-origihn-red font-bold uppercase tracking-wider text-xs sm:text-sm mb-2 sm:mb-4 block">Our Values</span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-origihn-textPrimary">What Drives Us</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-[2rem] border border-origihn-green/20 shadow-sm hover:shadow-xl transition-all duration-300">
            <h3 className="text-lg sm:text-2xl font-bold text-origihn-textPrimary mb-3 sm:mb-4 font-serif italic">1. Total Transparency</h3>
            <p className="text-sm sm:text-base text-origihn-textSecondary leading-relaxed">You deserve to know exactly what you're eating. We list every single ingredient and provide precise macro breakdowns for every kit we make.</p>
          </div>
          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-[2rem] border border-origihn-green/20 shadow-sm hover:shadow-xl transition-all duration-300">
            <h3 className="text-lg sm:text-2xl font-bold text-origihn-textPrimary mb-3 sm:mb-4 font-serif italic">2. Culinary Excellence</h3>
            <p className="text-sm sm:text-base text-origihn-textSecondary leading-relaxed">Eating for your goals shouldn't feel like a punishment. Our chefs craft meals that you'll actually look forward to eating every single day.</p>
          </div>
          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-[2rem] border border-origihn-green/20 shadow-sm hover:shadow-xl transition-all duration-300 sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-2xl font-bold text-origihn-textPrimary mb-3 sm:mb-4 font-serif italic">3. Zero Compromise</h3>
            <p className="text-sm sm:text-base text-origihn-textSecondary leading-relaxed">From sourcing fresh, local ingredients daily to our strict no-preservative policy, we never cut corners when it comes to quality.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
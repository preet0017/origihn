export default function AboutUs() {
  return (
    <div className="pt-24 pb-24 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden mb-24">
        <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-primary-200/40 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px] -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-primary-100 text-primary-800 text-xs font-bold tracking-widest uppercase mb-8 border border-primary-200 shadow-sm">
            Our Story
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 tracking-tight text-primary-950 leading-[1.1] max-w-4xl mx-auto">
            Redefining daily <span className="text-primary-500 italic">nutrition</span> for the modern lifter.
          </h1>
          <p className="text-lg md:text-2xl text-primary-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            We believe that fueling your body should be simple, delicious, and uncompromisingly high in quality. No shortcuts, just real food.
          </p>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-24 bg-[#F7F5F0] relative overflow-hidden rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 mb-24 shadow-xl shadow-primary-900/5">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="font-serif text-4xl md:text-5xl text-primary-950 mb-6 leading-tight">The Problem We Faced</h2>
              <p className="text-lg text-primary-700 mb-6 leading-relaxed">
                A few years ago, our founders were struggling to hit their daily protein goals while balancing full-time jobs and intense training schedules. Meal prepping took hours every Sunday, and the food always tasted bland by Wednesday.
              </p>
              <p className="text-lg text-primary-700 mb-8 leading-relaxed">
                The alternatives? Expensive meal delivery services with tiny portions, or relying on heavily processed protein bars and shakes. We knew there had to be a better way to get 150g+ of protein daily without sacrificing taste or spending hours in the kitchen.
              </p>
              <div className="inline-block border-b-2 border-primary-500 pb-1">
                <span className="font-bold text-primary-900 uppercase tracking-widest text-sm">That's why we built origihn</span>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-square w-full rounded-[2.5rem] bg-white overflow-hidden relative shadow-2xl border border-primary-100 p-8 flex flex-col items-center justify-center text-center">
                 <div className="w-24 h-24 bg-primary-50 rounded-full flex items-center justify-center mb-6">
                    <span className="font-serif text-4xl text-primary-800 italic">Origihn</span>
                 </div>
                 <h3 className="font-serif text-2xl text-primary-950 mb-4">Born in the Kitchen</h3>
                 <p className="text-primary-600">What started as cooking for three friends quickly grew into feeding hundreds of dedicated athletes every single day.</p>
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-accent/30 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        <div className="text-center mb-16">
          <span className="text-primary-500 font-bold uppercase tracking-wider text-sm mb-4 block">Our Values</span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary-950">What Drives Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white p-10 rounded-[2rem] border border-primary-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-primary-950 mb-4 font-serif italic">1. Total Transparency</h3>
            <p className="text-primary-600 leading-relaxed">You deserve to know exactly what you're eating. We list every single ingredient and provide precise macro breakdowns for every kit we make.</p>
          </div>
          <div className="bg-white p-10 rounded-[2rem] border border-primary-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-primary-950 mb-4 font-serif italic">2. Culinary Excellence</h3>
            <p className="text-primary-600 leading-relaxed">Eating for your goals shouldn't feel like a punishment. Our chefs craft meals that you'll actually look forward to eating every single day.</p>
          </div>
          <div className="bg-white p-10 rounded-[2rem] border border-primary-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-primary-950 mb-4 font-serif italic">3. Zero Compromise</h3>
            <p className="text-primary-600 leading-relaxed">From sourcing fresh, local ingredients daily to our strict no-preservative policy, we never cut corners when it comes to quality.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
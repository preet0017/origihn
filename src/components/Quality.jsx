export function Quality() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-origihn-cream">
      <div className="max-w-7xl mx-auto text-center">
        <div className="bg-white rounded-[3rem] p-8 sm:p-12 md:p-20 shadow-lg shadow-origihn-textPrimary/5 border border-origihn-green/20">
          <span className="text-origihn-red font-bold uppercase tracking-wider text-xs sm:text-sm mb-3 sm:mb-4 block">Our Promise</span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-origihn-textPrimary mb-10 sm:mb-12 md:mb-16">Uncompromising Quality</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            <div>
              <div className="w-16 h-16 bg-origihn-green text-origihn-textPrimary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-xl sm:text-2xl font-serif font-bold border-2 border-origihn-green/40">1</div>
              <h3 className="text-lg sm:text-xl font-bold text-origihn-textPrimary mb-3 sm:mb-4">Sourced Fresh</h3>
              <p className="text-sm sm:text-base text-origihn-textSecondary leading-relaxed max-w-sm mx-auto">We source our chicken, paneer, and eggs locally every single morning to ensure maximum freshness and taste.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-origihn-green text-origihn-textPrimary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-xl sm:text-2xl font-serif font-bold border-2 border-origihn-green/40">2</div>
              <h3 className="text-lg sm:text-xl font-bold text-origihn-textPrimary mb-3 sm:mb-4">Perfectly Portioned</h3>
              <p className="text-sm sm:text-base text-origihn-textSecondary leading-relaxed max-w-sm mx-auto">No more guessing. Every kit is weighed precisely so you know exactly how many grams of protein you're consuming.</p>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <div className="w-16 h-16 bg-origihn-green text-origihn-textPrimary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-xl sm:text-2xl font-serif font-bold border-2 border-origihn-green/40">3</div>
              <h3 className="text-lg sm:text-xl font-bold text-origihn-textPrimary mb-3 sm:mb-4">Zero Preservatives</h3>
              <p className="text-sm sm:text-base text-origihn-textSecondary leading-relaxed max-w-sm mx-auto">Our food is meant to be eaten fresh. We don't use artificial preservatives to extend shelf life unnaturally.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

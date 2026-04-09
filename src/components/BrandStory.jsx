export function BrandStory() {
  return (
    <section id="brand-story" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-origihn-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <div className="w-full max-w-sm md:max-w-md bg-gradient-to-br from-origihn-green to-origihn-green/80 rounded-2xl sm:rounded-xl shadow-2xl shadow-origihn-green/20 p-6 sm:p-8 text-center">
              <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🌿</div>
              <p className="text-origihn-textPrimary font-semibold text-sm sm:text-base">Natural & Premium</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 md:order-2">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-origihn-textPrimary mb-3 sm:mb-4">Our Story</h2>
              <p className="text-sm sm:text-base md:text-lg text-origihn-textSecondary leading-relaxed">
                At Origihn, we believe that premium nutrition shouldn't be complicated. 
                We started with a simple vision: to create thoughtfully curated high-protein kits 
                using only the finest natural ingredients.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-2xl font-bold text-origihn-textPrimary mb-3 sm:mb-4">Why Origihn?</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start gap-3 sm:gap-4">
                  <span className="text-2xl sm:text-3xl flex-shrink-0">🚀</span>
                  <div className="min-w-0">
                    <p className="font-semibold text-origihn-textPrimary text-sm sm:text-base">Premium Quality</p>
                    <p className="text-xs sm:text-sm text-origihn-textSecondary">We source only the highest quality protein ingredients for maximum nutritional value.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 sm:gap-4">
                  <span className="text-2xl sm:text-3xl flex-shrink-0">⚡</span>
                  <div className="min-w-0">
                    <p className="font-semibold text-origihn-textPrimary text-sm sm:text-base">Science-Backed</p>
                    <p className="text-xs sm:text-sm text-origihn-textSecondary">Each kit is formulated to provide optimal protein ratios and nutritional balance.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 sm:gap-4">
                  <span className="text-2xl sm:text-3xl flex-shrink-0">🌱</span>
                  <div className="min-w-0">
                    <p className="font-semibold text-origihn-textPrimary text-sm sm:text-base">100% Natural</p>
                    <p className="text-xs sm:text-sm text-origihn-textSecondary">No artificial additives, preservatives, or fillers. Just pure, wholesome nutrition.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 sm:gap-4">
                  <span className="text-2xl sm:text-3xl flex-shrink-0">🎯</span>
                  <div className="min-w-0">
                    <p className="font-semibold text-origihn-textPrimary text-sm sm:text-base">Convenience</p>
                    <p className="text-xs sm:text-sm text-origihn-textSecondary">Ready-to-cook kits that save you time while providing exceptional nutrition.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-origihn-pink/20 p-4 sm:p-6 rounded-lg border-l-4 border-origihn-red">
              <p className="text-sm sm:text-base text-origihn-textPrimary font-semibold italic">
                "We're not just selling protein kits. We're building a community of 
                health-conscious individuals who believe that nutrition is the foundation 
                of a better life."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

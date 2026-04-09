export function BrandStory() {
  return (
    <section id="brand-story" className="py-16 bg-origihn-cream">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="w-full max-w-md bg-gradient-to-br from-origihn-green to-origihn-green/80 rounded-xl shadow-2xl shadow-origihn-green/20 p-8 text-center">
              <div className="text-6xl mb-4">🌿</div>
              <p className="text-origihn-textPrimary font-semibold">Natural & Premium</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-origihn-textPrimary mb-4">Our Story</h2>
              <p className="text-lg text-origihn-textSecondary leading-relaxed">
                At Origihn, we believe that premium nutrition shouldn't be complicated. 
                We started with a simple vision: to create thoughtfully curated high-protein kits 
                using only the finest natural ingredients.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-origihn-textPrimary mb-3">Why Origihn?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <p className="font-semibold text-origihn-textPrimary">Premium Quality</p>
                    <p className="text-sm text-origihn-textSecondary">We source only the highest quality protein ingredients for maximum nutritional value.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <p className="font-semibold text-origihn-textPrimary">Science-Backed</p>
                    <p className="text-sm text-origihn-textSecondary">Each kit is formulated to provide optimal protein ratios and nutritional balance.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🌱</span>
                  <div>
                    <p className="font-semibold text-origihn-textPrimary">100% Natural</p>
                    <p className="text-sm text-origihn-textSecondary">No artificial additives, preservatives, or fillers. Just pure, wholesome nutrition.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="font-semibold text-origihn-textPrimary">Convenience</p>
                    <p className="text-sm text-origihn-textSecondary">Ready-to-cook kits that save you time while providing exceptional nutrition.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-origihn-pink/20 p-6 rounded-lg border-l-4 border-origihn-red">
              <p className="text-origihn-textPrimary font-semibold italic">
                "We're not just selling protein kits. We're building a community of 
                health-conscious individuals who believe that nutrition is the foundation 
                of a better life."
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        {/* <div className="mt-16 pt-16 border-t border-origihn-green/20 grid grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-origihn-red mb-2">100%</p>
            <p className="text-origihn-textPrimary font-semibold">Natural Ingredients</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-origihn-red mb-2">6</p>
            <p className="text-origihn-textPrimary font-semibold">Premium Kits</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-origihn-red mb-2">500+</p>
            <p className="text-origihn-textPrimary font-semibold">Happy Customers</p>
          </div>
        </div> */}
      </div>
    </section>
  )
}

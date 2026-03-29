export function BrandStory() {
  return (
    <section id="brand-story" className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="w-full max-w-md bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl shadow-2xl p-8 text-center">
              <div className="text-6xl mb-4">🌿</div>
              <p className="text-primary-900 font-semibold">Natural & Premium</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-primary-950 mb-4">Our Story</h2>
              <p className="text-lg text-primary-700 leading-relaxed">
                At Origihn, we believe that premium nutrition shouldn't be complicated. 
                We started with a simple vision: to create thoughtfully curated high-protein kits 
                using only the finest natural ingredients.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-800 mb-3">Why Origihn?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <p className="font-semibold text-primary-900">Premium Quality</p>
                    <p className="text-sm text-primary-700">We source only the highest quality protein ingredients for maximum nutritional value.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <p className="font-semibold text-primary-900">Science-Backed</p>
                    <p className="text-sm text-primary-700">Each kit is formulated to provide optimal protein ratios and nutritional balance.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🌱</span>
                  <div>
                    <p className="font-semibold text-primary-900">100% Natural</p>
                    <p className="text-sm text-primary-700">No artificial additives, preservatives, or fillers. Just pure, wholesome nutrition.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="font-semibold text-primary-900">Convenience</p>
                    <p className="text-sm text-primary-700">Ready-to-cook kits that save you time while providing exceptional nutrition.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-300">
              <p className="text-primary-900 font-semibold italic">
                "We're not just selling protein kits. We're building a community of 
                health-conscious individuals who believe that nutrition is the foundation 
                of a better life."
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 pt-16 border-t grid grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-primary-700 mb-2">100%</p>
            <p className="text-primary-900 font-semibold">Natural Ingredients</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary-700 mb-2">6</p>
            <p className="text-primary-900 font-semibold">Premium Kits</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary-700 mb-2">500+</p>
            <p className="text-primary-900 font-semibold">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  )
}

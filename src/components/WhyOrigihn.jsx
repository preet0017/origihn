export function WhyOrigihn() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-origihn-cream">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-origihn-textPrimary mb-2 sm:mb-4">Why Choose Origihn?</h2>
          <p className="text-sm sm:text-base lg:text-lg text-origihn-textSecondary max-w-2xl mx-auto px-4">
            Real food. No shortcuts. Built for how you actually live.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1 */}
          <div className="bg-white/50 rounded-3xl p-6 sm:p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-14 sm:w-16 h-14 sm:h-16 mx-auto mb-4 sm:mb-6 bg-origihn-green/20 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105">
              <svg className="w-6 sm:w-8 h-6 sm:h-8 text-origihn-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-origihn-textPrimary mb-2 sm:mb-3">Real Protein. Real Food.</h3>
            <p className="text-sm sm:text-base text-origihn-textSecondary">
              No powders, no isolates. Just clean, whole ingredients that fuel your day naturally.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/50 rounded-3xl p-6 sm:p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-14 sm:w-16 h-14 sm:h-16 mx-auto mb-4 sm:mb-6 bg-[#D97A2B]/20 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105">
              <svg className="w-6 sm:w-8 h-6 sm:h-8 text-[#D97A2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-origihn-textPrimary mb-2 sm:mb-3">Ready in Minutes</h3>
            <p className="text-sm sm:text-base text-origihn-textSecondary">
              No prep. No mess. Just heat, eat, and get on with your day.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/50 rounded-3xl p-6 sm:p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:col-span-2 md:col-span-1">
            <div className="w-14 sm:w-16 h-14 sm:h-16 mx-auto mb-4 sm:mb-6 bg-origihn-textSecondary/20 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105">
              <svg className="w-6 sm:w-8 h-6 sm:h-8 text-origihn-textSecondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-origihn-textPrimary mb-2 sm:mb-3">Built for Everyday Life</h3>
            <p className="text-sm sm:text-base text-origihn-textSecondary">
              Whether you're working, studying, or on the move — Origihn fits into your routine effortlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
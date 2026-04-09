import { useState } from 'react'
import { ProductCard } from './ProductCard'

export function ProductCarousel({ products = [] }) {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scroll = (direction) => {
    const container = document.getElementById('product-carousel')
    if (!container) return

    const scrollAmount = 380
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
      setScrollPosition(prev => Math.max(0, prev - scrollAmount))
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      setScrollPosition(prev => prev + scrollAmount)
    }
  }

  return (
    <section id="new-arrivals" className="py-12 sm:py-16 my-10 sm:my-20 bg-origihn-cream">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-origihn-textPrimary mb-1 sm:mb-2">Protein Kits</h2>
          <p className="text-sm sm:text-base text-origihn-textSecondary">Discover our high-protein kits</p>
        </div>

        {/* Carousel container */}
        <div className="relative group px-3 sm:px-6 md:px-8">
          <div
            id="product-carousel"
            className="flex overflow-x-auto gap-4 sm:gap-6 snap-x snap-mandatory scroll-smooth pb-4 hide-scrollbar"
          >
            {(products.length > 0 ? products : []).map(product => (
              <div key={product.id} className="flex-shrink-0 w-full sm:w-[320px] md:w-[300px] snap-center">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Navigation buttons - Hidden on mobile */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 sm:left-[-26px] top-1/2 -translate-y-1/2 bg-[#D97A2B] text-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full transition-all duration-300 shadow-lg shadow-[#D97A2B]/30 hover:scale-110 hover:bg-[#D97A2B]/90 active:scale-95 z-10 hidden sm:flex opacity-0 translate-x-[-6px] group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none group-hover:pointer-events-auto"
            aria-label="Previous"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 sm:right-[-26px] top-1/2 -translate-y-1/2 bg-[#D97A2B] text-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full transition-all duration-300 shadow-lg shadow-[#D97A2B]/30 hover:scale-110 hover:bg-[#D97A2B]/90 active:scale-95 z-10 hidden sm:flex opacity-0 -translate-x-[-6px] group-hover:opacity-100 group-hover:-translate-x-0 pointer-events-none group-hover:pointer-events-auto"
            aria-label="Next"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

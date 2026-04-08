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
    <section id="new-arrivals" className="py-16 my-20 bg-origihn-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-origihn-textPrimary mb-2">New Arrivals</h2>
          <p className="text-origihn-textSecondary">Discover our latest high-protein kits</p>
        </div>

        {/* Carousel container */}
        <div className="relative">
          <div
            id="product-carousel"
            className="flex overflow-x-auto gap-6 snap-x snap-mandatory scroll-smooth pb-4 hide-scrollbar px-2"
          >
            {(products.length > 0 ? products : []).map(product => (
              <div key={product.id} className="flex-shrink-0 w-[300px] sm:w-[320px] snap-center">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-[#D97A2B] hover:bg-[#D97A2B]/90 text-white p-2 rounded-full transition-all z-10 shadow-lg shadow-[#D97A2B]/30 hover:shadow-[#D97A2B]/50"
            aria-label="Previous"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 bg-[#D97A2B] hover:bg-[#D97A2B]/90 text-white p-2 rounded-full transition-all z-10 shadow-lg shadow-[#D97A2B]/30 hover:shadow-[#D97A2B]/50"
            aria-label="Next"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

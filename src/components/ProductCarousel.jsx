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
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-origihn-dark mb-2">New Arrivals</h2>
          <p className="text-gray-600">Discover our latest high-protein kits</p>
        </div>

        {/* Carousel container */}
        <div className="relative">
          <div
            id="product-carousel"
            className="flex overflow-x-hidden gap-6 snap-x scroll-smooth pb-4"
          >
            {(products.length > 0 ? products : []).map(product => (
              <div key={product.id} className="flex-none w-full md:w-1/2 lg:w-1/3 snap-center">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-origihn-tan text-white p-2 rounded-full hover:bg-origihn-brown transition-colors z-10"
            aria-label="Previous"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 bg-origihn-tan text-white p-2 rounded-full hover:bg-origihn-brown transition-colors z-10"
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

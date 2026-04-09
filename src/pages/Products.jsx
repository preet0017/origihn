import { useState, useMemo } from 'react'
import { ProductCard } from '../components/ProductCard'
import { FilterPanel } from '../components/FilterPanel'
import { productKits } from '../data/products'

export function Products() {
  const [filters, setFilters] = useState({
    category: null,
    priceMin: 0,
    priceMax: Infinity,
    proteinMin: 0,
    proteinMax: Infinity,
  })

  const filteredProducts = useMemo(() => {
    return productKits.filter(product => {
      // Category filter
      if (filters.category && product.category !== filters.category) {
        return false
      }

      // Price filter (check minimum variant price)
      const minVariantPrice = Math.min(...product.variants.map(v => v.price))
      if (minVariantPrice < filters.priceMin || minVariantPrice > filters.priceMax) {
        return false
      }

      // Protein filter (check if any variant matches)
      const hasMatchingProtein = product.variants.some(
        v => v.protein >= filters.proteinMin && v.protein <= filters.proteinMax
      )
      if (!hasMatchingProtein) {
        return false
      }

      return true
    })
  }, [filters])

  return (
    <div className="min-h-screen bg-origihn-cream py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-origihn-textPrimary mb-1 sm:mb-2">Protein Kits</h1>
        <p className="text-sm sm:text-base text-origihn-red mb-6 sm:mb-8">Browse our complete collection of premium protein kits</p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Sidebar filters */}
          <div className="lg:col-span-1">
            <FilterPanel filters={filters} onFilterChange={setFilters} />
          </div>

          {/* Products grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-base sm:text-lg md:text-xl text-origihn-textSecondary">No products match your filters</p>
                <button
                  onClick={() => setFilters({
                    category: null,
                    priceMin: 0,
                    priceMax: Infinity,
                    proteinMin: 0,
                    proteinMax: Infinity,
                  })}
                  className="btn-primary mt-4 text-sm sm:text-base"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

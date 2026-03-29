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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-custom">
        <h1 className="text-4xl font-bold text-primary-950 mb-2">Products</h1>
        <p className="text-primary-700 mb-8">Browse our complete collection of premium protein kits</p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar filters */}
          <div className="lg:col-span-1">
            <FilterPanel filters={filters} onFilterChange={setFilters} />
          </div>

          {/* Products grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-500">No products match your filters</p>
                <button
                  onClick={() => setFilters({
                    category: null,
                    priceMin: 0,
                    priceMax: Infinity,
                    proteinMin: 0,
                    proteinMax: Infinity,
                  })}
                  className="btn-primary mt-4"
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

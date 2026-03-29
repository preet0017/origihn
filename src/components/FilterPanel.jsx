export function FilterPanel({ filters, onFilterChange }) {
  const categories = ['All', 'Balanced', 'Vegan', 'High-Protein', 'Energy', 'Premium', 'Complete']
  const priceRanges = [
    { label: 'All', min: 0, max: Infinity },
    { label: '₹300-400', min: 300, max: 400 },
    { label: '₹400-500', min: 400, max: 500 },
    { label: '₹500+', min: 500, max: Infinity }
  ]
  const proteinRanges = [
    { label: 'All', min: 0, max: Infinity },
    { label: 'Under 35g', min: 0, max: 35 },
    { label: '35-45g', min: 35, max: 45 },
    { label: '45-55g', min: 45, max: 55 },
    { label: '55g+', min: 55, max: Infinity }
  ]

  const handleCategoryChange = (category) => {
    onFilterChange({
      ...filters,
      category: category === 'All' ? null : category
    })
  }

  const handlePriceChange = (range) => {
    onFilterChange({
      ...filters,
      priceMin: range.min,
      priceMax: range.max
    })
  }

  const handleProteinChange = (range) => {
    onFilterChange({
      ...filters,
      proteinMin: range.min,
      proteinMax: range.max
    })
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-md space-y-6">
      {/* Category Filter */}
      <div>
        <h3 className="text-lg font-bold text-primary-900 mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map(cat => (
            <label key={cat} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={filters.category === null ? cat === 'All' : filters.category === cat}
                onChange={() => handleCategoryChange(cat)}
                className="w-4 h-4 text-primary-700"
              />
              <span className="text-primary-900">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="border-t pt-4">
        <h3 className="text-lg font-bold text-primary-900 mb-3">Price Range</h3>
        <div className="space-y-2">
          {priceRanges.map(range => (
            <label key={range.label} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="price"
                checked={filters.priceMin === range.min && filters.priceMax === range.max}
                onChange={() => handlePriceChange(range)}
                className="w-4 h-4 text-primary-700"
              />
              <span className="text-primary-900">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Protein Filter */}
      <div className="border-t pt-4">
        <h3 className="text-lg font-bold text-primary-900 mb-3">Protein Content</h3>
        <div className="space-y-2">
          {proteinRanges.map(range => (
            <label key={range.label} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="protein"
                checked={filters.proteinMin === range.min && filters.proteinMax === range.max}
                onChange={() => handleProteinChange(range)}
                className="w-4 h-4 text-primary-700"
              />
              <span className="text-primary-900">{range.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

export function ProductCard({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const { addToCart } = useCart()
  const { user } = useAuth()
  const navigate = useNavigate()

  const handleAddToCart = () => {
    if (!user) {
      navigate('/login')
      return
    }
    addToCart(product, selectedVariant)
    alert(`${product.name} added to cart!`)
  }

  return (
    <div className="card overflow-hidden flex flex-col h-full bg-white border border-origihn-green/20 hover:border-origihn-green/40 transition-all hover:shadow-lg hover:shadow-origihn-green/10">
      {/* Product Image */}
      <div className="relative overflow-hidden bg-origihn-green/30 h-56">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-origihn-yellow text-origihn-textPrimary px-3 py-1 rounded-full text-sm font-semibold shadow-md">
        </div>
      </div>

      {/* Product Info */}
      <div className="flex-1 p-4 flex flex-col">
        <h3 className="text-lg font-bold text-origihn-textPrimary mb-1">{product.name}</h3>
        <p className="text-sm text-origihn-textSecondary mb-3 line-clamp-2">{product.description}</p>

        {/* Ingredients */}
        <div className="mb-3">
          <p className="text-xs font-semibold text-origihn-red mb-1">Ingredients:</p>
          <div className="flex flex-wrap gap-1">
            {product.ingredients.map((ing, idx) => (
              <span key={idx} className="text-xs bg-origihn-yellow/40 text-origihn-textPrimary px-2 py-1 rounded">
                {ing}
              </span>
            ))}
          </div>
        </div>

        {/* Variants */}
        <div className="mb-4">
          <label className="text-sm font-semibold text-origihn-textPrimary mb-2 block">
            Select Protein Level:
          </label>
          <div className="grid grid-cols-3 gap-2">
            {product.variants.map(variant => (
              <button
                key={variant.id}
                onClick={() => setSelectedVariant(variant)}
                className={`p-2 rounded text-sm font-semibold transition-colors ${
                  selectedVariant.id === variant.id
                    ? 'bg-origihn-red text-white shadow-md shadow-origihn-red/30'
                    : 'bg-origihn-cream text-origihn-textPrimary hover:bg-origihn-green/40'
                }`}
              >
                <div className="text-xs">{variant.protein}g</div>
                <div className="text-xs">{variant.quantity}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Price and Reviews */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-origihn-green/20">
          <div>
            <p className="text-2xl font-bold text-origihn-red">₹{selectedVariant.price}</p>
            <p className="text-xs text-origihn-textSecondary">{product.reviews} reviews</p>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-origihn-red hover:bg-origihn-red hover:opacity-90 text-white font-semibold text-sm py-2 px-4 rounded-lg transition-all shadow-md shadow-origihn-red/20 hover:shadow-lg hover:shadow-origihn-red/30"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

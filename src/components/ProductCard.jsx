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
    <div className="card overflow-hidden flex flex-col h-full">
      {/* Product Image */}
      <div className="relative overflow-hidden bg-primary-100 h-56">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-primary-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
        </div>
      </div>

      {/* Product Info */}
      <div className="flex-1 p-4 flex flex-col">
        <h3 className="text-lg font-bold text-primary-900 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

        {/* Ingredients */}
        <div className="mb-3">
          <p className="text-xs font-semibold text-primary-700 mb-1">Ingredients:</p>
          <div className="flex flex-wrap gap-1">
            {product.ingredients.map((ing, idx) => (
              <span key={idx} className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded">
                {ing}
              </span>
            ))}
          </div>
        </div>

        {/* Variants */}
        <div className="mb-4">
          <label className="text-sm font-semibold text-origihn-dark mb-2 block">
            Select Protein Level:
          </label>
          <div className="grid grid-cols-3 gap-2">
            {product.variants.map(variant => (
              <button
                key={variant.id}
                onClick={() => setSelectedVariant(variant)}
                className={`p-2 rounded text-sm font-semibold transition-colors ${
                  selectedVariant.id === variant.id
                    ? 'bg-primary-800 text-white'
                    : 'bg-primary-50 text-primary-900 hover:bg-primary-300 hover:text-primary-900'
                }`}
              >
                <div className="text-xs">{variant.protein}g</div>
                <div className="text-xs">{variant.quantity}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Price and Reviews */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
          <div>
            <p className="text-2xl font-bold text-primary-800">₹{selectedVariant.price}</p>
            <p className="text-xs text-gray-500">{product.reviews} reviews</p>
          </div>
          <button
            onClick={handleAddToCart}
            className="btn-primary text-sm py-2 px-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

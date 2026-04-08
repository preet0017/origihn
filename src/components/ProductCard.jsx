import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

export function ProductCard({ product }) {
  const { user } = useAuth()
  const { addToCart } = useCart()
  const navigate = useNavigate()
  const defaultVariant = product.variants?.[0]

  const handleCardClick = () => {
    navigate(`/product/${product.id}`)
  }

  const handleBuyNow = (e) => {
    e.stopPropagation() // Prevent card click
    if (!user) {
      navigate('/login')
      return
    }
    navigate(`/product/${product.id}`)
  }

  const handleAddToCart = (e) => {
    e.stopPropagation()
    if (!defaultVariant) return
    addToCart(product, defaultVariant)
  }

  return (
    <div
      className="overflow-hidden flex flex-col bg-white border border-origihn-green/20 rounded-3xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-t-3xl h-72 bg-origihn-green/30">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 p-5 flex flex-col">
        {product.category && (
          <span className="text-xs uppercase tracking-[0.35em] text-origihn-textSecondary mb-3">
            {product.category}
          </span>
        )}
        <h3 className="text-xl font-bold text-origihn-textPrimary mb-2">{product.name}</h3>
        <p className="text-sm text-origihn-textSecondary mb-6 line-clamp-2">{product.description}</p>

        <div className="text-2xl font-bold text-origihn-red mb-6">
          ₹{Math.min(...product.variants.map(v => v.price))}
        </div>

        <div className="mt-auto grid grid-cols-2 gap-3">
          <button
            onClick={handleAddToCart}
            className="border border-[#D97A2B] text-[#D97A2B] bg-transparent py-3 rounded-2xl font-semibold transition-all duration-300 hover:bg-[#D97A2B]/10 hover:brightness-95"
          >
            Add to Cart
          </button>
          <button
            onClick={handleBuyNow}
            className="bg-[#D97A2B] text-white py-3 rounded-2xl font-semibold transition-all duration-300 hover:bg-[#D97A2B]/90 hover:brightness-95"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

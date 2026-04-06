import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

export function ProductCard({ product }) {
  const { user } = useAuth()
  const navigate = useNavigate()

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

  return (
    <div 
      className="card overflow-hidden flex flex-col h-full bg-white border border-origihn-green/20 hover:border-origihn-green/40 transition-all hover:shadow-lg hover:shadow-origihn-green/10 cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden bg-origihn-green/30 h-56">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 p-4 flex flex-col">
        <h3 className="text-lg font-bold text-origihn-textPrimary mb-1">{product.name}</h3>
        <p className="text-sm text-origihn-textSecondary mb-3 line-clamp-2">{product.description}</p>

        {/* Price */}
        <div className="mt-auto">
          <p className="text-2xl font-bold text-origihn-red">₹{Math.min(...product.variants.map(v => v.price))}</p>
        </div>

        {/* Buy Now Button */}
        <button
          onClick={handleBuyNow}
          className="w-full bg-origihn-red hover:bg-origihn-red hover:opacity-90 text-white font-semibold text-sm py-2 px-4 rounded-lg transition-all shadow-md shadow-origihn-red/20 hover:shadow-lg hover:shadow-origihn-red/30 mt-4"
        >
          Buy Now
        </button>
      </div>
    </div>
  )
}

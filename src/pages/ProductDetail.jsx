import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import { productKits } from '../data/products'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const { user } = useAuth()
  const [product, setProduct] = useState(null)
  const [selectedVariant, setSelectedVariant] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    const foundProduct = productKits.find(p => p.id === parseInt(id))
    if (foundProduct) {
      setProduct(foundProduct)
      setSelectedVariant(foundProduct.variants[0])
    } else {
      navigate('/products') // Or navigate('/404')
    }
  }, [id, navigate])

  if (!product || !selectedVariant) {
    return (
      <div className="min-h-screen bg-origihn-cream flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-origihn-textSecondary">Loading product...</p>
        </div>
      </div>
    )
  }

  // For demo purposes, use the same image multiple times
  const images = [product.image, product.image, product.image, product.image]

  const handleAddToCart = () => {
    if (!user) {
      navigate('/login')
      return
    }
    addToCart(product, selectedVariant)
    alert(`${product.name} (${selectedVariant.quantity}) added to cart!`)
  }

  const handleBuyNow = () => {
    if (!user) {
      navigate('/login')
      return
    }
    addToCart(product, selectedVariant)
    navigate('/cart')
  }

  const benefits = [
    'High Protein Content',
    'Fresh Ingredients',
    'No Preservatives',
    'Nutritionally Balanced',
    'Quick Preparation'
  ]

  return (
    <div className="min-h-screen bg-origihn-cream py-8">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <button
            onClick={() => navigate('/products')}
            className="text-origihn-red hover:text-origihn-red/80 font-semibold"
          >
            ← Back to Products
          </button>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex space-x-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx
                      ? 'border-origihn-red shadow-md'
                      : 'border-gray-200 hover:border-origihn-green'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-origihn-textPrimary mb-2">{product.name}</h1>
              <p className="text-lg text-origihn-textSecondary">{product.description}</p>
            </div>

            {/* Ingredients */}
            <div>
              <h3 className="text-xl font-semibold text-origihn-textPrimary mb-3">Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ing, idx) => (
                  <span key={idx} className="bg-origihn-yellow/40 text-origihn-textPrimary px-3 py-1 rounded-full text-sm">
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Protein Level Selection */}
            <div>
              <h3 className="text-xl font-semibold text-origihn-textPrimary mb-3">Select Protein Level</h3>
              <div className="grid grid-cols-3 gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`p-3 rounded-lg text-center transition-all ${
                      selectedVariant.id === variant.id
                        ? 'bg-origihn-red text-white shadow-md shadow-origihn-red/30'
                        : 'bg-origihn-cream text-origihn-textPrimary hover:bg-origihn-green/40 border border-origihn-green/20'
                    }`}
                  >
                    <div className="font-semibold">{variant.protein}g Protein</div>
                    <div className="text-sm">{variant.quantity}</div>
                    <div className="text-lg font-bold mt-1">₹{variant.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="text-3xl font-bold text-origihn-red">
              ₹{selectedVariant.price}
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handleBuyNow}
                className="flex-1 bg-origihn-red hover:bg-origihn-red/90 text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-md shadow-origihn-red/20 hover:shadow-lg hover:shadow-origihn-red/30"
              >
                Buy Now
              </button>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-origihn-green hover:bg-origihn-green/90 text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-md shadow-origihn-green/20 hover:shadow-lg hover:shadow-origihn-green/30"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-origihn-textPrimary mb-6 text-center">Why Choose This Product?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-origihn-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">✓</span>
                </div>
                <p className="font-semibold text-origihn-textPrimary">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section (Placeholder) */}
        <div className="mt-8 bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-origihn-textPrimary mb-6">Customer Reviews</h2>
          <div className="text-center py-8">
            <p className="text-origihn-textSecondary">⭐ {product.rating} out of 5 stars ({product.reviews} reviews)</p>
            <p className="text-sm text-origihn-textSecondary mt-2">Detailed reviews coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  )
}
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

export function Cart() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart()
  const { user } = useAuth()
  const total = getTotalPrice()

  if (!user) {
    return (
      <div className="min-h-screen bg-origihn-cream flex items-center justify-center py-8">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold text-origihn-textPrimary mb-4">Sign in Required</h1>
          <p className="text-origihn-textSecondary mb-6">You need to be logged in to view your cart.</p>
          <Link to="/login" className="btn-primary">
            Sign In
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-origihn-cream py-8">
      <div className="container-custom">
        <h1 className="text-4xl font-bold text-origihn-textPrimary mb-8">Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg">
            <p className="text-xl text-origihn-textSecondary mb-6">Your cart is empty</p>
            <Link to="/products" className="btn-primary">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map(item => (
                <div key={`${item.id}-${item.variantId}`} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-origihn-textPrimary">{item.name}</h3>
                      <p className="text-sm text-origihn-textSecondary">
                        Protein: {item.protein}g | Quantity: {item.quantity}
                      </p>
                      <p className="font-bold text-origihn-textSecondary mt-2">₹{item.price}</p>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-2 border border-origihn-green/20 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.variantId, item.itemQuantity - 1)}
                          className="px-3 py-1 text-origihn-textSecondary hover:text-origihn-red"
                        >
                          −
                        </button>
                        <span className="px-3">{item.itemQuantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variantId, item.itemQuantity + 1)}
                          className="px-3 py-1 text-origihn-textSecondary hover:text-origihn-red"
                        >
                          +
                        </button>
                      </div>
                      <p className="font-bold text-origihn-textPrimary">
                        ₹{item.price * item.itemQuantity}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id, item.variantId)}
                        className="text-red-500 text-sm hover:text-red-700 font-semibold"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order summary */}
            <div className="h-fit">
              <div className="bg-white rounded-lg p-6 shadow-md sticky top-24">
                <h2 className="text-xl font-bold text-origihn-textPrimary mb-4">Order Summary</h2>
                <div className="space-y-3 mb-4 pb-4 border-b border-origihn-green/20">
                  <div className="flex justify-between text-origihn-textPrimary">
                    <span>Subtotal</span>
                    <span>₹{total}</span>
                  </div>
                  <div className="flex justify-between text-origihn-textPrimary">
                    <span>Shipping</span>
                    <span className="text-origihn-green font-semibold">Free</span>
                  </div>
                  <div className="flex justify-between text-origihn-textPrimary">
                    <span>Tax (estimated)</span>
                    <span>₹{Math.round(total * 0.05)}</span>
                  </div>
                </div>
                <div className="flex justify-between mb-6">
                  <span className="font-bold text-origihn-textPrimary">Total</span>
                  <span className="font-bold text-2xl text-origihn-textSecondary">
                    ₹{total + Math.round(total * 0.05)}
                  </span>
                </div>
                <button
                  className="w-full btn-primary py-3 mb-3"
                  onClick={() => alert('Checkout coming soon! This will integrate with payment gateway.')}
                >
                  Proceed to Checkout
                </button>
                <button
                  onClick={() => clearCart()}
                  className="w-full btn-secondary py-3"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

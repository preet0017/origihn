import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('origihn_cart')
    return saved ? JSON.parse(saved) : []
  })

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('origihn_cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product, variant) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(
        item => item.id === product.id && item.variantId === variant.id
      )

      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id && item.variantId === variant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...prevCart, {
        id: product.id,
        name: product.name,
        image: product.image,
        variantId: variant.id,
        protein: variant.protein,
        quantity: variant.quantity,
        price: variant.price,
        itemQuantity: 1
      }]
    })
  }

  const removeFromCart = (productId, variantId) => {
    setCart(prevCart =>
      prevCart.filter(item => !(item.id === productId && item.variantId === variantId))
    )
  }

  const updateQuantity = (productId, variantId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, variantId)
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === productId && item.variantId === variantId
            ? { ...item, itemQuantity: quantity }
            : item
        )
      )
    }
  }

  const clearCart = () => {
    setCart([])
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.itemQuantity), 0)
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.itemQuantity, 0)
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalPrice,
      getTotalItems
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Logo } from './Logo'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'

export function Navbar() {
  const { user, signOut } = useAuth()
  const { getTotalItems } = useCart()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const cartCount = getTotalItems()

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
    setIsOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-[#F7F5F0] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="text-primary-700 group-hover:text-primary-900 transition-colors">
              <Logo className="w-10 h-10" />
            </div>
            <span className="text-2xl font-bold text-primary-950 hidden sm:inline">Origihn</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-primary-900 hover:text-primary-700 transition-colors font-medium">
              Home
            </Link>
            <Link to="/products" className="text-primary-900 hover:text-primary-700 transition-colors font-medium">
              Shop
            </Link>
            <Link to="/build" className="text-primary-900 hover:text-primary-700 transition-colors font-medium">
              Build Your Own
            </Link>
            <Link to="/about" className="text-primary-900 hover:text-primary-700 transition-colors font-medium">
              About Us
            </Link>
            <Link to="/contact" className="text-primary-900 hover:text-primary-700 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            {/* Cart icon */}
            <Link 
              to="/cart" 
              className="relative p-2 text-primary-900 hover:text-primary-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-origihn-tan rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Auth buttons/profile */}
            {user ? (
              <div className="relative group hidden md:block">
                <button className="btn-primary text-sm">
                  {user.email?.split('@')[0]}
                </button>
                <div className="absolute right-0 w-48 mt-2 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/dashboard" className="block px-4 py-2 text-origihn-dark hover:bg-origihn-cream rounded-t-lg">
                    Dashboard
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="w-full text-left px-4 py-2 text-origihn-dark hover:bg-origihn-cream rounded-b-lg"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <div className="hidden md:flex space-x-2">
                <Link to="/login" className="btn-secondary text-sm">
                  Login
                </Link>
                <Link to="/signup" className="btn-primary bg-black hover:bg-neutral-700 text-sm">
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-primary-900 hover:text-primary-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block px-4 py-2 text-primary-900 hover:bg-primary-50 rounded">
              Home
            </Link>
            <Link to="/products" className="block px-4 py-2 text-primary-900 hover:bg-primary-50 rounded">
              Products
            </Link>
            <Link to="/build" className="block px-4 py-2 text-primary-900 hover:bg-primary-50 rounded">
              Build Your Own
            </Link>
            <Link to="/about" className="block px-4 py-2 text-primary-900 hover:bg-primary-50 rounded">
              About Us
            </Link>
            <Link to="/contact" className="block px-4 py-2 text-primary-900 hover:bg-primary-50 rounded">
              Contact
            </Link>
            {user ? (
              <>
                <Link to="/dashboard" className="block px-4 py-2 text-primary-900 hover:bg-primary-50 rounded">
                  Dashboard
                </Link>
                <button
                  onClick={handleSignOut}
                  className="w-full text-left px-4 py-2 text-primary-900 hover:bg-primary-50 rounded"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block px-4 py-2 text-primary-900 hover:bg-primary-50 rounded">
                  Login
                </Link>
                <Link to="/signup" className="block px-4 py-2 bg-primary-900 text-white rounded">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

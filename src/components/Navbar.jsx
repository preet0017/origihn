import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Logo } from './Logo'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'
import orighinn from '../assets/image.png'// import {origihnn} from '../assets/image.png'
import logoo from '../assets/logo.png'// import {origihnn} from '../assets/image.png'

export function Navbar() {
  const { user, signOut } = useAuth()
  const { getTotalItems } = useCart()
  const navigate = useNavigate()
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const cartCount = getTotalItems()

  const linkClass = (path, isMobile = false) => {
    const baseClasses = isMobile
      ? 'block px-4 py-2 rounded transition-colors'
      : 'transition-colors font-medium'

    const activeClasses = 'text-origihn-red/80 font-semibold'
    const inactiveClasses = isMobile
      ? 'text-origihn-textPrimary hover:bg-origihn-green/20 hover:text-origihn-red'
      : 'text-origihn-textPrimary hover:text-origihn-red'

    return `${baseClasses} ${location.pathname === path ? activeClasses : inactiveClasses}`
  }

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
    setIsOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-blur-sm">
      <div className="max-w-7xl mx-16 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="text-origihn-red group-hover:text-origihn-red/80 transition-colors">
              <span className="text-2xl bg-red-500 font-bold font-serif text-origihn-textPrimary hidden sm:inline">
              <div className='flex '>
              <img src={logoo} className='w-28 h-16 '/> 
              <img src={orighinn} className='w-44 h-16'/>
              </div>
            </span>
            </div>
            
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={linkClass('/')}>Home</Link>
            <Link to="/products" className={linkClass('/products')}>Shop</Link>
            <Link to="/build" className={linkClass('/build')}>Build Your Own</Link>
            <Link to="/about" className={linkClass('/about')}>About Us</Link>
            <Link to="/contact" className={linkClass('/contact')}>Contact Us</Link>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            {/* Cart icon */}
            <Link 
              to="/cart" 
              className="relative p-2 text-origihn-textPrimary hover:text-origihn-red transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-origihn-red rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Auth buttons/profile */}
            {user ? (
              <div className="relative group hidden md:block">
                <button className="bg-origihn-red hover:bg-origihn-red/90 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-all shadow-md shadow-origihn-red/20 hover:shadow-lg hover:shadow-origihn-red/30">
                  {user.email?.split('@')[0]}
                </button>
                <div className="absolute right-0 w-48 mt-2 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-origihn-green/20">
                  <Link to="/dashboard" className="block px-4 py-2 text-origihn-textPrimary hover:bg-origihn-cream rounded-t-lg">
                    Dashboard
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="w-full text-left px-4 py-2 text-origihn-textPrimary hover:bg-origihn-cream rounded-b-lg"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <div className="hidden md:flex space-x-2">
                <Link to="/login" className="text-origihn-red hover:text-origihn-red/80 font-semibold text-sm px-4 py-2 transition-colors">
                  Login
                </Link>
                <Link to="/signup" className="bg-origihn-red hover:bg-origihn-red/90 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-all shadow-md shadow-origihn-red/20 hover:shadow-lg hover:shadow-origihn-red/30">
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-origihn-textPrimary hover:text-origihn-red"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-origihn-cream">
            <Link to="/" className={linkClass('/', true)}>Home</Link>
            <Link to="/products" className={linkClass('/products', true)}>Products</Link>
            <Link to="/build" className={linkClass('/build', true)}>Build Your Own</Link>
            <Link to="/about" className={linkClass('/about', true)}>About Us</Link>
            <Link to="/contact" className={linkClass('/contact', true)}>Contact</Link>
            {user ? (
              <>
                <Link to="/dashboard" className="block px-4 py-2 text-origihn-textPrimary hover:bg-origihn-green/20 hover:text-origihn-red rounded">
                  Dashboard
                </Link>
                <button
                  onClick={handleSignOut}
                  className="w-full text-left px-4 py-2 text-origihn-textPrimary hover:bg-origihn-green/20 hover:text-origihn-red rounded"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block px-4 py-2 text-origihn-red hover:bg-origihn-red/10 rounded font-semibold">
                  Login
                </Link>
                <Link to="/signup" className="block px-4 py-2 bg-origihn-red text-white rounded font-semibold hover:bg-origihn-red/90">
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

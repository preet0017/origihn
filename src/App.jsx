import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import { Navbar, Footer, SplashScreen } from './components'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import Build from './pages/Build'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { Cart } from './pages/Cart'
import { Dashboard } from './pages/Dashboard'
import { NotFound } from './pages/NotFound'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import './index.css'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <div className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/build" element={<Build />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
    </>
  )
}

export default App

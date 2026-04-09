import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="bg-origihn-textPrimary text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-origihn-red">
                <Logo className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-white">Origihn</span>
            </div>
            <p className="text-origihn-cream/70 text-xs sm:text-sm leading-relaxed">Premium high-protein kits for a healthier you.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-3 sm:mb-4 text-origihn-yellow text-sm sm:text-base">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-origihn-cream/70">
              <li><a href="/" className="hover:text-origihn-yellow transition-colors">Home</a></li>
              <li><a href="/products" className="hover:text-origihn-yellow transition-colors">Products</a></li>
              <li><a href="/build" className="hover:text-origihn-yellow transition-colors">Build Your Own</a></li>
              <li><a href="/about" className="hover:text-origihn-yellow transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-origihn-yellow transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-bold mb-3 sm:mb-4 text-origihn-yellow text-sm sm:text-base">Information</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-origihn-cream/70">
              <li><a href="#" className="hover:text-origihn-yellow transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-origihn-yellow transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-origihn-yellow transition-colors">Shipping Info</a></li>
              <li><a href="/contact" className="hover:text-origihn-yellow transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-3 sm:mb-4 text-origihn-yellow text-sm sm:text-base">Get in Touch</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-origihn-cream/70">
              <li>📧 hello@origihn.com</li>
              <li>📱 +91 XXXXXXXXXX</li>
              <li className="mt-3 sm:mt-4 flex gap-4">
                <a href="#" className="hover:text-origihn-yellow transition-colors">Facebook</a>
                <a href="#" className="hover:text-origihn-yellow transition-colors">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-origihn-cream/20 pt-6 md:pt-8 text-center text-origihn-cream/50 text-xs sm:text-sm">
          <p>© 2026 Origihn. All rights reserved. Made with ❤️</p>
        </div>
      </div>
    </footer>
  )
}

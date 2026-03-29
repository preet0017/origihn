import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="bg-primary-950 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-primary-300">
                <Logo className="w-8 h-8" />
              </div>
              <span className="text-xl font-bold text-white">Origihn</span>
            </div>
            <p className="text-gray-300 text-sm">Premium high-protein kits for a healthier you.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-primary-300">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/" className="hover:text-primary-100 transition-colors">Home</a></li>
              <li><a href="/products" className="hover:text-primary-100 transition-colors">Products</a></li>
              <li><a href="/build" className="hover:text-primary-100 transition-colors">Build Your Own</a></li>
              <li><a href="/about" className="hover:text-primary-100 transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-primary-100 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-bold mb-4 text-primary-300">Information</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-primary-100 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-100 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary-100 transition-colors">Shipping Info</a></li>
              <li><a href="/contact" className="hover:text-primary-100 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-primary-300">Get in Touch</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📧 hello@origihn.com</li>
              <li>📱 +91 XXXXXXXXXX</li>
              <li className="mt-4 flex gap-4">
                <a href="#" className="hover:text-primary-100 transition-colors">Facebook</a>
                <a href="#" className="hover:text-primary-100 transition-colors">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>© 2026 Origihn. All rights reserved. Made with ❤️</p>
        </div>
      </div>
    </footer>
  )
}

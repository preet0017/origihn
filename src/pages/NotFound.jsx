import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="min-h-screen bg-origihn-cream flex items-center justify-center py-8">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-origihn-dark mb-4">404</h1>
        <p className="text-2xl text-origihn-brown mb-2">Page Not Found</p>
        <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn-primary">
          Go Home
        </Link>
      </div>
    </div>
  )
}

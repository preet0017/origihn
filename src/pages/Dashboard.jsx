import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../services/supabaseClient'

export function Dashboard() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const [profile, setProfile] = useState(null)
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) {
        navigate('/login')
        return
      }

      // For now, we'll use mock data since the backend isn't set up yet
      setProfile({
        email: user.email,
        name: user.email?.split('@')[0],
        createdAt: new Date(user.created_at).toLocaleDateString(),
      })

      // Mock orders
      setOrders([
        {
          id: 'ORD001',
          date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
          total: 1450,
          status: 'Delivered',
          items: 3,
        },
        {
          id: 'ORD002',
          date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toLocaleDateString(),
          total: 2100,
          status: 'Delivered',
          items: 4,
        },
      ])

      setLoading(false)
    }

    fetchUserData()
  }, [user, navigate])

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-origihn-cream flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-origihn-textSecondary">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-origihn-cream py-8">
      <div className="container-custom">
        <h1 className="text-4xl font-bold text-origihn-textPrimary mb-8">My Dashboard</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Profile Card */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold text-origihn-textPrimary mb-4">Profile</h2>
            {profile && (
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-origihn-textSecondary">Email</label>
                  <p className="text-lg font-semibold text-origihn-textPrimary">{profile.email}</p>
                </div>
                <div>
                  <label className="text-sm text-origihn-textSecondary">Name</label>
                  <p className="text-lg font-semibold text-origihn-textPrimary">{profile.name}</p>
                </div>
                <div>
                  <label className="text-sm text-origihn-textSecondary">Member Since</label>
                  <p className="text-lg font-semibold text-origihn-textPrimary">{profile.createdAt}</p>
                </div>
                <button
                  onClick={handleSignOut}
                  className="w-full btn-secondary py-2 mt-4"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold text-origihn-textPrimary mb-4">Statistics</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-origihn-textSecondary">Total Orders</p>
                <p className="text-3xl font-bold text-origihn-textSecondary">{orders.length}</p>
              </div>
              <div>
                <p className="text-sm text-origihn-textSecondary">Total Spent</p>
                <p className="text-3xl font-bold text-origihn-textSecondary">
                  ₹{orders.reduce((sum, order) => sum + order.total, 0)}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold text-origihn-textPrimary mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <a
                href="/products"
                className="block btn-primary text-center py-2"
              >
                Continue Shopping
              </a>
              <a
                href="/cart"
                className="block btn-secondary text-center py-2"
              >
                View Cart
              </a>
            </div>
          </div>
        </div>

        {/* Order History */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold text-origihn-textPrimary mb-6">Order History</h2>
          {orders.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b-2 border-origihn-green/20">
                  <tr>
                    <th className="text-left py-4 px-4 text-origihn-textPrimary font-bold">Order ID</th>
                    <th className="text-left py-4 px-4 text-origihn-textPrimary font-bold">Date</th>
                    <th className="text-left py-4 px-4 text-origihn-textPrimary font-bold">Items</th>
                    <th className="text-left py-4 px-4 text-origihn-textPrimary font-bold">Total</th>
                    <th className="text-left py-4 px-4 text-origihn-textPrimary font-bold">Status</th>
                    <th className="text-left py-4 px-4 text-origihn-textPrimary font-bold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr key={order.id} className="border-b border-origihn-green/20 hover:bg-origihn-cream/50">
                      <td className="py-4 px-4 font-semibold text-origihn-textPrimary">{order.id}</td>
                      <td className="py-4 px-4 text-origihn-textSecondary">{order.date}</td>
                      <td className="py-4 px-4 text-origihn-textSecondary">{order.items}</td>
                      <td className="py-4 px-4 font-semibold text-origihn-textSecondary">₹{order.total}</td>
                      <td className="py-4 px-4">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                          {order.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <button className="text-origihn-textSecondary hover:text-origihn-textSecondary font-semibold">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-origihn-textSecondary mb-4">No orders yet</p>
              <a href="/products" className="btn-primary inline-block">
                Start Shopping
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

# Origihn - Premium High Protein Food Kits

A modern e-commerce website for premium high-protein meal kits built with React, Vite, Tailwind CSS, and Supabase.

## Features

- 🛍️ **Product Showcase** - Beautiful carousel display of 6 high-protein kits
- 🔍 **Advanced Filtering** - Filter by category, price, and protein content
- 🛒 **Shopping Cart** - Add to cart, manage quantities, localStorage persistence
- 👤 **User Authentication** - Sign up and login with Supabase
- 📦 **Order Dashboard** - View profile and order history
- 🎨 **Premium Design** - Elegant UI with custom color palette
- 📱 **Responsive** - Mobile-friendly design

## Tech Stack

- **Frontend:** React 18, Vite, Tailwind CSS
- **Backend/Auth:** Supabase
- **State Management:** Context API
- **Router:** React Router v6

## Installation

1. **Clone or extract the project**
```bash
cd origihn
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The site will open at `http://localhost:5173`

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/        # Reusable components
│   ├── Logo.jsx
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── ProductCarousel.jsx
│   ├── FilterPanel.jsx
│   ├── Hero.jsx
│   ├── BrandStory.jsx
│   └── Footer.jsx
├── pages/            # Page components
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── Cart.jsx
│   ├── Dashboard.jsx
│   └── NotFound.jsx
├── context/          # State management
│   ├── AuthContext.jsx
│   └── CartContext.jsx
├── services/         # API services
│   └── supabaseClient.js
├── data/            # Mock data
│   └── products.js
├── App.jsx          # Main app component
├── main.jsx         # Entry point
└── index.css        # Global styles
```

## Color Palette

- **Cream:** #FFF8F0
- **Tan:** #C08552
- **Brown:** #8C5A3C
- **Dark:** #4B2E2B

## Authentication

- Users must be logged in to add items to cart
- Supabase handles email/password authentication
- Session persistence across page refreshes

## Cart Management

- Cart data stored in localStorage
- Persists across browser sessions
- Real-time price calculation
- Quantity management

## Future Enhancements

- Payment gateway integration
- Real backend order management
- User product reviews
- Wishlist feature
- Email notifications
- Admin dashboard

## License

MIT

---

Made with ❤️ for nutrition

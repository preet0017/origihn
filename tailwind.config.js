/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        origihn: {
          cream: '#FAF9F6',
          green: '#DDEED6',
          pink: '#FADADD',
          red: '#E76F51',
          yellow: '#F4D35E',
          textPrimary: '#2E2E2E',
          textSecondary: '#6B6B6B',
        },
        primary: {
          50: '#FAF9F6',
          100: '#F5F4F0',
          200: '#EFEFEB',
          300: '#E8E8E3',
          400: '#DDEED6',
          500: '#FADADD',
          600: '#E76F51',
          700: '#2E2E2E',
          800: '#2E2E2E',
          900: '#2E2E2E',
          950: '#1A1A1A',
        },
        accent: '#F4D35E',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}


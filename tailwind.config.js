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
          cream: '#FFF8F0',
          tan: '#C08552',
          brown: '#8C5A3C',
          dark: '#4B2E2B',
        },
        primary: {
          50: '#FFFBF4',
          100: '#D8CFBC',
          200: '#CFC6B2',
          300: '#B8AC9D',
          400: '#99957C',
          500: '#7A755E',
          600: '#565449',
          700: '#3f3d33',
          800: '#29281f',
          900: '#111200',
          950: '#0b0a05',
        },
        accent: '#f8d5a7',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bakery: {
          50: '#FFF9F5',
          100: '#FFF3EB',
          200: '#FFE4D1',
          300: '#FFD5B8',
          400: '#FFB885',
          500: '#FF9B52',
          600: '#E67A3D',
          700: '#BF5E28',
          800: '#994818',
          900: '#73360F',
        },
        cream: {
          50: '#FFFBF7',
          100: '#FFF7F0',
          200: '#FFEEDD',
          300: '#FFE5CA',
          400: '#FFD4A5',
          500: '#FFC380',
          600: '#E6A566',
          700: '#BF8748',
          800: '#996A2F',
          900: '#73501A',
        },
      },
    },
  },
  plugins: [],
}

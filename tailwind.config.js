/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        'background-light': '#fdfcf0',
        'background-dark': '#181112',
        'primary': '#d41132',
        'gold': '#c5a059',
        'royal-emerald': '#221013',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["home.html","about.html","contact.html","store.html"],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#2C497F',
        'brand-white': '#f4f7f6',
        'logo-color': '#EF4444',
        'arcade-color': '#F59E0B'
      },
      fontFamily: {
        play: ["Play"],
        sans: ["sans-serif"]
      }
    },
  },
  plugins: [],
}


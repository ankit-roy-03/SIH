/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beige': '#FEF8D8',       // Corrected typo
        'darkgreen': '#3B590E',
        'green': '#3A5614',
        'lightgreen': '#E0EABD',  // Fixed extra '#'
        'lightyellow': '#F3A63B', // Fixed extra '#'
        'whiteyellow': '#C7D97A', // Fixed extra '#'
        'greenwhite': '#567E11',
        'maingreen': '#3B580F',
        'grassgreen': '#4C6A1D',
      },
    },
  },
  plugins: [],
}

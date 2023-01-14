/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'primary':'#fc8019',
        'heading':'rgb(250 250 250)',
        'grey':'rgb(15 23 42)',
        'body':'rgb(191 190 203)',
      }
    },
  },
  plugins: [],
}

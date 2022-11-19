/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      boxShadow: {
        'under': '0 0 5px 0 rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        'body': 'Montserrat'
      }
    },
  },
  plugins: [],
}

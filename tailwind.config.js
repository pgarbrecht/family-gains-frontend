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
      },
      colors: {
        'familygainsred': '#f91e43',
        'familygainslightred': '#f77288',
        'familygainsdarkred': '#b0132e',
        'familygainsblue': '#5C4AE4',
      },
    },
  },
  plugins: [],
}

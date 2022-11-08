/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      colors: {
        orange: {
          500: '#FF6000',
          900: '#D45000'
        }
      },
      backgroundImage: {
        'app': "url('/background.png')",
      }
    },
  },
  plugins: [],
}

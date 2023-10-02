/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'vietnam': ['"Be Vietnam Pro"', "sans-serif"],
      },
      colors: {
        'veryBlue':'#4036A9',
        'varDark':'#111729',
        'desaturedGray':'#CDD5E0',
        'veryLigth':'#F8FAFC',
        'veryWhite':'#FFFFFF',
      },
      backgroundImage: {
        'pattern': "url('./src/images/bg-images.svg)"
      }
    },
  },
  plugins: [],
}


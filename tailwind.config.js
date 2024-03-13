/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode:'class',
  theme : {
      extend : {
          animation:{
              'spin-slow' : 'spin 3s linier infinite'
          },
          fontFamily:{
              inter:['Inter']
          },
      },
  },
  plugins: [],
}


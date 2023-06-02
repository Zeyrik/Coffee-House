const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily:{
        'sans':['Oswald', ...defaultTheme.fontFamily.sans]
      }
      
    },
  },
  plugins: [],
}


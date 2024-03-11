/** @type {import('tailwindcss').Config} */
module.exports ={
  mode: 'jit',
  content: ["./*.{html,js}", "./**/*.{html,js}","./resources/**/*.js"],
  purge:['./resources/**/*.{js,jsx,ts,tsx}','./index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'body': "url('./resources/images/background-pattern-desktop.svg')",
        'body-mobile': "url('./resources/images/background-pattern-mobile.svg')"
      },
      spacing: {
        '58': '14.5rem'
      }
    },
    screens: {
      mobile: {'max': '375px'}
    },
  },
  plugins: [],
}


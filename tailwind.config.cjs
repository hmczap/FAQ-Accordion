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
      backgroundColor: {
        'white': "hsl(0, 0%, 100%)",
        'light-pink': "hsl(275, 100%, 97%)",
        'grayish-purple': "hsl(292, 16%, 49%)",
        'dark-purple' : "hsl(292, 42%, 14%)"
      },
      colors: {
        'light-pink': "hsl(275, 100%, 97%)",
        'grayish-purple': "hsl(292, 16%, 49%)",
        'dark-purple' : "hsl(292, 42%, 14%)"
      },
      fontFamily: {
        'work-sans': ["Work Sans", "sans-serif"]
      },
      spacing: {
        '58': '14.5rem'
      },
      width: {
        '128': 'calc(1440px * 0.4)'
      },
    },
    screens: {
      mobile: {'max': '375px'},
      small: {'max': '800px',
              'min': '375px'}
    },
  },
  plugins: [],
}


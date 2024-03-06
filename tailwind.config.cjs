/** @type {import('tailwindcss').Config} */
module.exports ={
  mode: 'jit',
  content: ["./*.{html,js}", "./resources/**/*.js"],
  safelist:[
    'flex', 
    'flex-col', 
    'place-items-center',
    'min-w-80', 
    'min-h-screen'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ["./*.{html,js}", "./resources/**/*.js"],
  purge:['./resources/**/*.{js,jsx,ts,tsx}','./index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
}


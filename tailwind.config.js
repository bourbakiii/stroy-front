/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: true,
  content: [],
  theme: {
    extend: {
      gap:{
        md: '10px'
      },
      padding: {
        md: "10px"
      }
    },
  },
  plugins: [],
}


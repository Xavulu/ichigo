module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
     extend: {
       fontFamily: {
         ms_sans: ["ms_sans_serif", "sans-serif"], 
       },
     },
  },
  variants: {
    extend: {},
  },
  plugins: []
}


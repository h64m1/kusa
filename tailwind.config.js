module.exports = {
  purge: ['./renderer/pages/**/*.{js,ts,jsx,tsx}', './renderer/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        gridTemplateRows: {
         '7': 'repeat(7, minmax(0, 1fr))',
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  mode : "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'cla-blue': '#0284FE',
        'cla-green': '#22C993',
        'cla-red': '#FF5D5D',
        'cla-yellow': '#FFBB38',
      },
      maxWidth: {
        '1/2xs': '10rem',
        '3/4xs': '15rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

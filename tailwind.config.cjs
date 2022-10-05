module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'body': ['Montreal', 'sans-serif'],
      'hand': ['Playfair Display', 'serif'],
    },
    extend: {
      colors: {
        neon: '#00FFFF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

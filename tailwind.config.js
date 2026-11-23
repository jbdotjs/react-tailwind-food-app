const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      orange: colors.orange,
      gray: colors.gray,
      blue: colors.slate,
      red: colors.red,
      white: colors.white,
    },
    screens: {
      sm: '300px',
      md: '700px',
      lg: '700px',
    },
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/hero.png')",
        action: "url('/src/assets/action.png')",
      },
    },
  },
  plugins: [],
};

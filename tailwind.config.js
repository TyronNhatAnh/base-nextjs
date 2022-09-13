const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        current: 'currentColor',
        primary: {
          100: '#fef3c7',
          200: '#fde68a',
          300: '#0088bf',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        secondary: {
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
    }
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('mobile-only', "@media screen and (max-width: theme('screens.sm'))"); // instead of hard-coded 640px use sm breakpoint value from config. Or anything
    }),
  ],
  darkMode: 'class',
  corePlugins: {
    preflight: false,
  }
};

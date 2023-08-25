module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      'max-2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'max-xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'max-lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'max-md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'max-sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};

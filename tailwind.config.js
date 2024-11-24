/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.html"],
  theme: {
    extend: {
      screens: {
        'xs': '150px',  // Extra small devices (very small phones, starting from 150px)
        'sm': '640px',  // Small devices (landscape phones, starting from 640px)
        'md': '768px',  // Medium devices (tablets, starting from 768px)
        'lg': '1024px', // Large devices (desktops, starting from 1024px)
        'xl': '1280px', // Extra large devices (large desktops, starting from 1280px)
        '2xl': '1536px' // 2XL large devices (larger desktops, starting from 1536px)
      },
      colors: {
        red: {
          100: '#FAD1D2',
          200: '#F5A4A6',
          300: '#F0777A',
          400: '#EB4A4D',
          500: '#ED1C24',//base
          600: '#D2191F',
          700: '#B7161B',
          800: '#9C1316',
          900: '#810F11',
        },
        blue:{
          100: '#D4D1E0',
          200: '#AAA3C2',
          300: '#7F75A3',
          400: '#554885',
          500: '#2F2552',//base
          600: '#281F45',
          700: '#211838',
          800: '#1A122B',
          900: '#130B1E',
        },
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none', /* Internet Explorer 10+ */
          'scrollbar-width': 'none', /* Firefox */
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none', /* Safari and Chrome */
        },
      });
    },
  ],
}
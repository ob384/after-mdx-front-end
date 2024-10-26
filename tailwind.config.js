/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      screens: {
        'xs': '150px',  // Extra small devices (very small phones, starting from 150px)
        'sm': '640px',  // Small devices (landscape phones, starting from 640px)
        'md': '768px',  // Medium devices (tablets, starting from 768px)
        'lg': '1024px', // Large devices (desktops, starting from 1024px)
        'xl': '1280px', // Extra large devices (large desktops, starting from 1280px)
        '2xl': '1536px' // 2XL large devices (larger desktops, starting from 1536px)
      }
    },
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      red: "#D90404",
      skyblue: "#05DBF2",
      darkblue: "#033E8C",
      black:"#0D0D0D"
    }
  },
  plugins: [
    // require('@tailwindcss/forms')
  ],
}
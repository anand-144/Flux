/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mukta: ["Mukta", "sans-serif"],
      },

      dropShadow: {
        'lg': '0 2px 10px rgba(153, 0, 255, 0.8)',  // Solid black drop shadow
      },  

    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    }
  },
  plugins: [],
}

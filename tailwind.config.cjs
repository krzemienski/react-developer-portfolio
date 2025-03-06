/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#D7DAE0",
        tertiary: "#000000",
        card: "#000000",
        "black-100": "#000000",
        "black-200": "#000000",
        "white-100": "#F8FAFD",
        accent: "#14FA50",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #000000",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/dark8.png')",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        mono: ["Russo One", "Sans One"]
      },
      colors: {
        primary: "#4D5FE3",
        black: "#000000",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};

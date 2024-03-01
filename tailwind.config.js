/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#FBF5F3",
        dark: "#0F0E0E",
        color: "#8A74E3",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};

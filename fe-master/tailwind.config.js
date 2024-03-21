/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          100: "#574FF0",
          200: "#262830",
          300: "#1A1B1F",
          400: "#333",
          500: "#969696",
          600: "#f9f9f9",
        },
      },
    },
  },
  plugins: [],
};

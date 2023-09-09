/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      screens: {
        md: { max: "800px" },
        sm: { max: "640px" },
      },
    },
  },
  plugins: [],
};

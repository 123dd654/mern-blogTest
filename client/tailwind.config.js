/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        maingreen: "#C6EBC5",
        greenhover: "#A1C398",
        mainbg: "#FEFDED",
        pointred: "FA7070",
      },
    },
  },
  plugins: [],
};

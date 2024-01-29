/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./imports/ui/**/*.{js,jsx,ts,tsx}", "./client/*.html"],
  theme: {
    extend: {
      fontFamily: {
        play: ["Playfair Display"],
        bullet: ["Varela Round"],
        rubik: ["Rubik"],
      },
    },
  },
  plugins: [],
};

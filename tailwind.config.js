const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--andika-font)', ...fontFamily.sans],
        heading: ['var(--anek-font)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [],
  theme: {
    fontFamily: {
      sans: "Roboto",
    },
  },
  content: ["./index.html", "./src/**/*.{svelte,js,ts}"],
  variants: {
    extend: {},
  },
};

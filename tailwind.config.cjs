/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  purge: ["./index.html",'./src/**/*.{svelte,js,ts}'], // for unused CSS
  plugins: [],
}

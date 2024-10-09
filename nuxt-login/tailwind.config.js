// tailwind.config.js
module.exports = {
  content: [
    './components/**/*.{vue,js}', // All Vue and JS files in components folder
    './layouts/**/*.vue', // All Vue files in layouts folder
    './pages/**/*.vue', // All Vue files in pages folder
    './plugins/**/*.{js,ts}', // Include plugins folder
    './nuxt.config.{js,ts}', // Include nuxt config file
    './store/**/*.js' // Include store folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

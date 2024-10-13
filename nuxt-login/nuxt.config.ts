// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/storybook','@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tailwind.css','@fortawesome/fontawesome-free/css/all.css',],
  vite: {
    server: {
      hmr: {
        clientPort: 3000
      }
    }
  },
})
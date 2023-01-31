export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'VueManiaText',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Vue 3 library to display maniaplanet formatted text' }
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})

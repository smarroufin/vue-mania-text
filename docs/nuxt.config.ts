export default defineNuxtConfig({
  srcDir: 'app',
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        class: 'antialiased',
      },
      title: 'VueManiaText',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Vue 3 library to display maniaplanet formatted text' },
      ],
    },
  },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
  ],
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-10-20',
  devtools: {
    enabled: true,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})

import withNuxt from './docs/.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    // Vuejs
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'beside',
      multiline: 'below',
    }],
    // Nuxt
    'nuxt/nuxt-config-keys-order': 'off',
  },
})

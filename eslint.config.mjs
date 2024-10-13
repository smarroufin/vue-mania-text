import withNuxt from './docs/.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    // Vuejs
    'vue/multi-word-component-names': 0,
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'beside',
      multiline: 'below',
    }],
  },
})

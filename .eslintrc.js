module.exports = {
  root: true,
  plugins: ['prettier'],
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:vue/base',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  rules: {
    'prettier/prettier': 'error'
  }
};

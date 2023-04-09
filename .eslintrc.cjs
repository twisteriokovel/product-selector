module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 2,
    'vue/no-multiple-template-root': 0,
    'vue/require-explicit-emits': 2,
    'vue/custom-event-name-casing': [2, 'kebab-case'],
    'vue/component-name-in-template-casing': [2, 'PascalCase'],
    'vue/multi-word-component-names': 0
  }
}

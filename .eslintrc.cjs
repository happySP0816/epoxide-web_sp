module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  env: {
    node: true,
  },
  rules: {
    eqeqeq: 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'prettier/prettier': 'warn',
    'prefer-template': 'error',
    'no-useless-concat': 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
    '@typescript-eslint/consistent-type-imports': 'error',
  },
}

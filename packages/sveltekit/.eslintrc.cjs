module.exports = {
  root: true,
  extends: ['../../.eslintrc.js', 'plugin:svelte/recommended'],
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
    es2022: true,
  },
}

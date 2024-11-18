module.exports = {
  root: true,
  extends: ['../../.eslintrc.cjs', 'plugin:svelte/recommended'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
  env: {
    browser: true,
  },
  ignorePatterns: ['StructuredData.svelte'], // Crashes when parsing {@html} in Svelte
}

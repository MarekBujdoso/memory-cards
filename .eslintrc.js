module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    // 'airbnb',
    // 'airbnb/hooks',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    // 'plugin:jsx-a11y/recommended',
  ],

  ignorePatterns: ['node_modules/*', 'build/*', '!.eslintrc.js', '!.prettierrc.js'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-hooks',
    // 'jsx-a11y',
    'import',
    // 'sort-keys-fix'
    ],

  rules: {
    'import/no-unresolved': 'off',
    'react/react-in-jsx-scope': 'off'
  }
};

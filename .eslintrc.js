module.exports = {
  globals: {
    require: true,
    process: true,
    __dirname: true,
    module: true
  },
  env: {
    es6: true,
    browser: true,
    mocha: true
  },
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  rules: {
    indent: 0,
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'no-console': ['error'],
    eqeqeq: ['warn', 'always'],
    strict: 0,
    'no-var': ['error'],
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_'
      }
    ],
    semi: ['error', 'never'], //["error", "always"],
    'prettier/prettier': ['error', { singleQuote: true, printWidth: 120 }],
    'react/display-name': [0]
  }
};

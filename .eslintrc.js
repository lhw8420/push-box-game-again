module.exports = {
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  extends: ['plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2017,
  },
  env: {
    es6: true,
  },
};

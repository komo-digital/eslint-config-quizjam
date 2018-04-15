module.exports = {
  root: true,
  extends: ['standard'],
  rules: {
    semi: ['error', 'always'],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    'space-before-function-paren': 0,
    'prefer-const': ['error'],
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    jest: true
  },
  globals: {
    StripeCheckout: true
  }
};


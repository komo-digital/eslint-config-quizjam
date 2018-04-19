module.exports = {
  extends: ['plugin:vue/recommended'],
  rules: {
    'vue/require-default-prop': 0,
    'vue/attributes-order': 0,
    'vue/html-closing-bracket-newline': ['error', 'never'],
    'vue/attribute-hyphenation': [2, 'never'],
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
  },
};

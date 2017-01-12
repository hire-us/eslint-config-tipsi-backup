module.exports = {
  'parser': 'babel-eslint',
  'extends': 'airbnb',
  'env': {
    'browser': true,
    'node': true,
    'es6': true,
  },
  'globals': {
    '__DEV__': true,
  },
  'rules': {
    'react/no-multi-comp': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-closing-bracket-location': [
      1, {
        'selfClosing': 'line-aligned',
        'nonEmpty': 'after-props'
      }
    ],
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-use-before-define': 0,
    'no-return-assign': 0,
    'global-require': 0,
    'indent': ['error', 2],
    'semi': ['error', 'never'],
  },
  'plugins': [
    'react',
  ],
}

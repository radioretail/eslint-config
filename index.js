module.exports = {
  parser: 'babel-eslint',

  // NOTE: Next rulesets will override previous
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'plugin:jest/recommended',
    'plugin:compat/recommended',
    'plugin:security/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
  ],
  plugins: [
    'babel',
    'security',
    'promise',
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/no-did-mount-set-state': 'off',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'no-use-before-define': 0,
    'no-param-reassign': 'off',
    semi: [2, 'never'],
    'unicorn/filename-case': 0,
    'security/detect-object-injection': 0
  },
}

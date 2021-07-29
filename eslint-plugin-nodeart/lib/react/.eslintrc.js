module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@nodeart/base',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
  ],
  settings: {
    react: {
      version: '999.999.999',
    },
  },
  rules: {
    // Will be anoying with a different backend convention
    'camelcase': [ 'warn' ],
    // Don't need useless import of React
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'arrow-parens': [ 'error', 'always' ],
  },
};

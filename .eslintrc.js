module.exports = {
  env: {
    es2021: true,
  },
  globals: {
    fetch: false,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-native',
    '@typescript-eslint',
  ],
  rules: {
    'no-use-before-define': ['error', { functions: true, classes: true, variables: false }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-curly-spacing': ['error', { when: 'always', children: true }],
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx', '.js', '.jsx'] }],
    'import/extensions': ['error', 'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'object-curly-newline': ['error', {
      ObjectExpression: { minProperties: 10, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 10, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 10, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 10, multiline: true, consistent: true },
    }],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    // 'no-restricted-imports': [
    //   'error',
    //   {
    //     paths: [
    //       {
    //         name: 'react-native',
    //         importNames: ['SafeAreaView'],
    //         message: 'Import SafeAreaView from react-navigation instead',
    //       },
    //       {
    //         name: 'react-native-safe-area-context',
    //         importNames: ['SafeAreaView'],
    //         message: 'Import SafeAreaView from react-navigation instead',
    //       },
    //       {
    //         name: 'react-native-safe-area-view',
    //         importNames: ['SafeAreaView'],
    //         message: 'Import SafeAreaView from react-navigation instead',
    //       },
    //     ],
    //   },
    // ],
  },
};

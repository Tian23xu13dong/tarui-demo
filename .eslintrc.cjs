module.exports = {
  env: {browser: true, es2020: true},
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {ecmaVersion: 'latest', sourceType: 'module'},
  settings: {
    react: {version: '18.2'},
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
      alias: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts', '.scss', '.less'],
        map: [
          ['/@/components', './src/components'],
          ['/@/routers', './src/routers'],
          ['/@/utils', './src/utils'],
        ],
      },
    },
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
}

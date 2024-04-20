/** @type {import("prettier").Config} */
const config = {
  semi: false,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  jsxSingleQuote: true,
  plugins: ['./dist/index.js'],
}

export default config

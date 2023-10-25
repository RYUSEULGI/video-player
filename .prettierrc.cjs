module.exports = {
  jsxBracketSameLine: true,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  importOrder: [
    '^@api/(.*)$',
    '^@components/(.*)$',
    '^@hooks/(.*)$',
    '^@pages/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}

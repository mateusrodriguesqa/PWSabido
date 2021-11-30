module.exports = {
  verbose: true,
  preset: 'jest-playwright-preset',
  testTimeout: 50 * 1000,
  reporters: ['default',
    [
      'jest-html-reporters',
      {
        filename: 'jest-report-e2e.html',
        publicPath: './reports'
      }
    ]
  ]
}
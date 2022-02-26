module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!scr/**/stories.ts'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}

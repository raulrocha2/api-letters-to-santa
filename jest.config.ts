
export default {
  bail: true,
  coverageProvider: "v8",
  roots: ['<rootDir>/src'],
  preset: "@shelf/jest-mongodb",
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  testMatch: ["**/*.spec.ts"],
};

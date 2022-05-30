
export default {
  bail: true,
  coverageProvider: "v8",
  roots: ['<rootDir>/src'],
  preset: "ts-jest",
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  testMatch: ["**/*.test.ts"],
};

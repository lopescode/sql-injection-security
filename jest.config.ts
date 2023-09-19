import type {Config} from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Se você estiver usando TypeScript
    '^.+\\.jsx?$': 'babel-jest', // Se você estiver usando Babel
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'node',
};

export default config;

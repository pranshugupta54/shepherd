// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    'src/*.ts',
    'src/*.svelte',
    'src/components/**/*.svelte',
    'src/utils/*.ts',
    'src/utils/*.svelte'
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'ts', 'svelte'],

  moduleNameMapper: {
    sinon: '<rootDir>/node_modules/sinon/pkg/sinon.js'
  },

  // The root directory that Jest should scan for tests and modules within
  rootDir: './',

  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>/test/unit'],

  // The path to a module that runs some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['<rootDir>/test/unit/setupTests.js'],

  testEnvironment: '<rootDir>/jsdom-extended.js',

  // A map from regular expressions to paths to transformers
  transform: {
    '\\.[jt]s?$': 'babel-jest',
    '^.+\\.svelte$': [
      'svelte-jester',
      {
        preprocess: true,
        compilerOptions: {
          dev: false
        }
      }
    ],
    '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css'
  }
};

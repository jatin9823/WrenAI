/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@server/(.*)$': '<rootDir>/src/apollo/server/$1',
  },
  modulePathIgno
  };


// Yeh code Jest ko batata hai ki:

// - ts-jest preset ka use kare.
// - Test environment Node.js hai.
// - @server alias ko <rootDir>/src/apollo/server directory se map kare.
// - <rootDir>/e2e directory ko ignore kare.

// Yeh configuration Jest ko batati hai ki kaise tests chalane hain. Issme kuchh complex configuration nahi hai.

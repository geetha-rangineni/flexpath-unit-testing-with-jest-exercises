// jest.config.js
module.exports = {
  collectCoverageFrom: ["**/bookManager.js"],
  coveragePathIgnorePatterns: ["/tests/", ".*\\.test\\.js"],
};



// jest.config.js
// module.exports = {
//   testEnvironment: "node",
//   collectCoverage: true,
//   collectCoverageFrom: ["**/bookManager.js"],
//   coveragePathIgnorePatterns: [
//     "/node_modules/",
//     "/tests/",         // Ignore tests folder
//     ".*\\.test\\.js"   // Ignore any test file
//   ],
//   coverageThreshold: {
//     global: {
//       statements: 90,
//       branches: 80,
//       functions: 90,
//       lines: 90,
//     },
//   },
// };

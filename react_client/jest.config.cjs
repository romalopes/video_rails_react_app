// jest.config.js
module.exports = {
  // globals: {
  //   "import.meta": {
  //     env: {
  //       VITE_API_URL: "http://localhost:3000/api/v1/posts",
  //     },
  //   },
  // },
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    // "^.+\\.(js|jsx)$": "babel-jest",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    // "^react-router-dom$": "<rootDir>/__mocks__/react-router-dom.js",
  },
  // transformIgnorePatterns: [
  //   "<rootDir>/node_modules/(?!(vite|@vite|react|react-dom|react-router-dom)/)",
  // ],
};

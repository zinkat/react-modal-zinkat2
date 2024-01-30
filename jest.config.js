
module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.css$': '<rootDir>/cssTransform.js',
      },
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    testPathIgnorePatterns: [
        "/node_modules/",
        "/example/",
        "/src"],
    moduleFileExtensions: ['js', 'jsx'],  
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
      }  
  };
  
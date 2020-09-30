module.exports = {
  clearMocks: true,
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.ts",
    "\\.(css)$": "identity-obj-proxy",
    "^~/(.*)": "<rootDir>/$1",
  },
  testMatch: ["**/__tests__/**/*.test.(t|j)s?(x)"],
  testPathIgnorePatterns: ["<rootDir/cypress/"],
}

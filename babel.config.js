module.exports = {
  env: {
    production: {
      plugins: ["babel-plugin-jsx-remove-data-test-id"],
    },
    test: {
      plugins: ["babel-plugin-dynamic-import-node"],
    },
  },
  presets: ["next/babel"],
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    mocha: true,
    node: true,
  },
  extends: [
    "standard",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  overrides: [
    {
      files: ["hardhat.config.js"],
      globals: { task: true },
    },
  ],
  rules: {
    "react/prop-types": 0,
    "no-console": 1,
    "no-prototype-builtins": 0,
  },
};

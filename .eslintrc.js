module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    //jest: true, //テストする場合はコメントイン
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  overrides: [],
  parserOptions: {
    sourceType: "module",
  },
  plugins: [],
  rules: {
    "react/prop-types": "off",
    "no-undef": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

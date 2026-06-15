module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 14,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "no-console": 0,
    "class-methods-use-this": 0,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "no-useless-constructor": 0,
    "no-empty-function": 0,
    "max-classes-per-file": 0,
    "no-use-before-define": 0,
  },
};

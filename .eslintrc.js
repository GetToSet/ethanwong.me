module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  globals: {
    gtag: "readonly",
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2021,
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-essential",
    "@vue/prettier",
  ],
  plugins: ["vue", "@typescript-eslint"],
};

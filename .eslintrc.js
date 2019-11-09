module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint"
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  globals: {},
  extends: [
    "plugin:vue/essential",
    "plugin:prettier/recommended",
    "eslint:recommended"
  ],
  rules: {
    "no-console": 0,
    "no-useless-escape": 0,
    "no-unused-vars": 0,
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        semi: false,
        trailingComma: "none",
        bracketSpacing: true,
        jsxBracketSameLine: true,
        eslintIntegration: true,
        requirePragma: false
      }
    ]
  }
};

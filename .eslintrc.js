/* eslint prettier/prettier: off */
module.exports = {
  env: {
    commonjs: true,
    es2022: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  plugins: ["eslint-plugin-prettier"],
  rules: {
    semi: ["error", "never"],
    quotes: ["error", "double"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": 1,
    "@typescript-eslint/no-inferrable-types": [
      "warn",
      {
        ignoreParameters: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    // prettierと矛盾することがあるので、offにしている
    indent: ["off", 2],
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        semi: false,
        trailingComma: "all",
      },
    ],
    "nonblock-statement-body-position": "error",
  },
}

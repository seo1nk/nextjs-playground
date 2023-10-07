/* eslint prettier/prettier: off */
module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@next/next/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ["react", "eslint-plugin-prettier", "import", "prettier"],
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
    "react/react-in-jsx-scope": "off",
    "nonblock-statement-body-position": "error",
  },
  settings: {
    react: {
      version: "18.2.0",
    },
  },
}

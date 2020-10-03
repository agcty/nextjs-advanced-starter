const { truncateSync } = require("fs");

module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "react", "prettier"],
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  rules: {
    "react/prefer-stateless-function": [
      "2",
      { ignorePureComponents: truncateSync },
    ],
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
    "react/self-closing-comp": [
      "error",
      {
        component: false,
        html: false,
      },
    ],
    "import/extensions": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": ["error", { custom: "ignore" }],
    "prettier/prettier": "error",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "react/no-unescaped-entities": "off",
    "jsx-a11y/accessible-emoji": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "import/no-cycle": [0, { ignoreExternal: true }],
    "prefer-const": "off",
  },
  settings: {
    "import/resolver": {
      "babel-module": {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        paths: ["src"],
      },
    },
  },
};

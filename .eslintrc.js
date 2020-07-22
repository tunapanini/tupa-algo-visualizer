module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "emotion"],
  rules: {
    "import/extensions": [
      "error",
      {
        pattern: {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      },
    ],
    "react/jsx-filename-extension": [
      "error",
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "no-use-before-define": ["error", "nofunc"],
    "no-param-reassign": [
      "error",
      { props: true, ignorePropertyModificationsForRegex: ["^registration$"] },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: [".storybook/**", "**/*.stories.js"] },
    ],
    "emotion/jsx-import": "error",
    "emotion/no-vanilla": "error",
    "emotion/import-from-emotion": "error",
    "emotion/styled-import": "error",
    "emotion/syntax-preference": ["error", "string"],
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};

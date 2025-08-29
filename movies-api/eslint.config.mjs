import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node
      },
      ecmaVersion: 2015, // ES6
      sourceType: "module",
    },
    rules: {
      semi: ["warn", "always"], // warn instead of error
      "no-console": "off",
    },
  }
];

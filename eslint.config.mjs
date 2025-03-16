import tsEslint from "typescript-eslint";
import globals from "globals";
import eslintJS from "@eslint/js";
import eslintPluginVue from "eslint-plugin-vue";
import eslintConfigPrettier from "@vue/eslint-config-prettier";

export default tsEslint.config(
  { ignores: ["*", "!src"] },
  {
    extends: [
      eslintJS.configs.recommended,
      ...tsEslint.configs.recommended,
      ...eslintPluginVue.configs["flat/essential"],
    ],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        parser: tsEslint.parser,
      },
    },
  },
  eslintConfigPrettier
);

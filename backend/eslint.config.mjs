import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["backend/**/*.js"],
    plugins: { js },
    extends: ["js/recommended"],

    languageOptions: {
      globals: globals.node,
      ecmaVersion: "latest",
      sourceType: "commonjs",
    },
  },
]);
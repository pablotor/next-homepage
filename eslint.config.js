import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactPlugin from 'eslint-plugin-react';
import tailwindPlugin from 'eslint-plugin-tailwindcss';
import tseslint from 'typescript-eslint';
import nextPlugin from '@next/eslint-plugin-next';

export default defineConfig([
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    ...importPlugin.flatConfigs.recommended,
    rules: {
      // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
      'import/prefer-default-export': 'off',
    },
  },
  {
    ...reactPlugin.configs.flat.recommended,
    rules: {
      // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
      'react/destructuring-assignment': 'off',
      // Unnecessary with typescript
      'react/prop-types': 'off',
      'react/jsx-filename-extension': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/function-component-definition': 'off',
      'react/jsx-uses-react': 'off',
      // React scope no longer necessary with new JSX transform.
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    plugins: {
      'react-hooks': reactHooksPlugin,
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
    },
  },
  jsxA11yPlugin.flatConfigs.recommended,
  {
    plugins: {
      tailwindcss: tailwindPlugin,
    },
    rules: {
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-arbitrary-value': 'off',
      'tailwindcss/no-custom-classname': 'warn',
      'tailwindcss/no-contradicting-classname': 'error',
    },
  },
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  {
    ignores: ['dist/**'],
  },
]);

import nextConfig from 'eslint-config-next/core-web-vitals';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import noOnlyTests from 'eslint-plugin-no-only-tests';
import reactRefresh from 'eslint-plugin-react-refresh';

/** @type {import('eslint').Linter.Config[]} */
const config = [
  // Ignore patterns
  {
    ignores: [
      '.next/**/*',
      'node_modules/**/*',
      'coverage/**/*',
      'playwright-report/**/*',
    ],
  },

  // Extend Next.js recommended config
  ...nextConfig,

  // TypeScript configuration
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@typescript-eslint': tseslint,
      'no-only-tests': noOnlyTests,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    rules: {
      // TypeScript strictness
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],

      // Async/promise safety
      '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true, ignoreIIFE: true }],
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: { arguments: false, attributes: false } },
      ],

      // Code quality
      'no-console': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      eqeqeq: ['error', 'always', { null: 'ignore' }],

      // React
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Test quality
      'no-only-tests/no-only-tests': 'error',
    },
  },

  // Logger is the only file allowed to use console
  {
    files: ['src/lib/logger.ts'],
    rules: {
      'no-console': 'off',
    },
  },

  // Test file overrides
  {
    files: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}', '**/__tests__/**/*.{ts,tsx}'],
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },

  // Next.js App Router exports (metadata, etc.)
  {
    files: ['src/app/**/page.tsx', 'src/app/**/layout.tsx'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },

  // Config file overrides
  {
    files: ['*.config.{js,mjs,ts}'],
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
];

export default config;

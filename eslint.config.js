import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        test: 'readonly',
        expect: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        process: 'readonly',
        console: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
  },
];

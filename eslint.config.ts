import withNuxt from './.nuxt/eslint.config.mjs';
import stylistic from '@stylistic/eslint-plugin';

export default withNuxt([
  {
    files: ['**/*.ts'],
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/curly-newline': ['error', 'always'],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/lines-between-class-members': ['error', {
        enforce: [
          {
            blankLine: 'never',
            prev: 'field',
            next: 'field',
          },
          {
            blankLine: 'always',
            prev: '*',
            next: 'method',
          },
        ],
      }],
      '@stylistic/member-delimiter-style': 'error',
      '@stylistic/no-multiple-empty-lines': ['error', {
        max: 1,
      }],
      '@stylistic/object-curly-newline': ['error', {
        ObjectExpression: 'always',
        ImportDeclaration: 'never',
      }],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/object-property-newline': 'error',
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': 'error',
      '@typescript-eslint/consistent-type-imports': ['error', {
        fixStyle: 'separate-type-imports',
      }],
    },
  },
]);

import antfu from '@antfu/eslint-config'

export default antfu({
  vue: {
    overrides: {
      'vue/block-order': ['error', {
        order: ['template', 'script', 'style'],
      }],
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      }],
      'vue/no-useless-mustaches': ['error', {
        ignoreIncludesComment: false,
        ignoreStringEscape: false,
      }],
      'vue/component-name-in-template-casing': ['error', 'kebab-case', {
        registeredComponentsOnly: false,
      }],
      'vue/v-slot-style': ['error', 'shorthand'],
      'vue/custom-event-name-casing': 'off',
      'vue/next-tick-style': ['error', 'promise'],
      'vue/v-bind-style': ['error', 'shorthand', { sameNameShorthand: 'never' }],
      'vue/multi-word-component-names': 'off',
    },
  },
  typescript: {
    overrides: {
      'ts/no-unused-expressions': 'off',
      'ts/array-type': ['error', {
        default: 'generic',
        readonly: 'generic',
      }],
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    },
  },
})

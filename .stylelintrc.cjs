module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recommended-vue'],

  rules: {
    'no-empty-source': null,
    'at-rule-no-unknown': null,
    'no-descending-specificity': null,
    'value-keyword-case': null,
    'selector-class-pattern': '^[a-z][a-zA-Z0-9_-]+$',
    'selector-id-pattern': '^[a-z][a-zA-Z0-9_-]+$'
  }
}

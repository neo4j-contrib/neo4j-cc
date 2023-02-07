/* eslint-disable */
export default {
  displayName: 'data-access-http',
  preset: '../../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  // transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$|unified|bail|is-plain-obj|trough|vfile|unist-util-stringify-position|rehype-parse|hast-util-from-parse5|hastscript|property-information|hast-util-parse-selector|space-separated-tokens|comma-separated-tokens|web-namespaces|rehype-remark|hast-util-to-mdast|rehype-minify-whitespace|hast-util-is-element|hast-util-embedded|rehype-minify-whitespace|unist-util-is|hast-util-whitespace|unist-util-visit|hast-util-phrasing|hast-util-has-property|hast-util-is-body-ok-link|mdast-util-phrasing|hast-util-to-text|unist-util-find-after|trim-trailing-lines|mdast-util-to-string|remark-stringify|mdast-util-to-markdown|zwitch|longest-streak|micromark-util-decode-string|decode-named-character-reference|character-entities|micromark-util-decode-numeric-character-reference)'],
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../coverage/libs/data-access/http',
};

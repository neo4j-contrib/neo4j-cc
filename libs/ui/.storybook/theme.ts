import { create } from '@storybook/theming'

const baseTheme = {
  base: 'light' as const,
  brandTitle: 'neo4j-cc',
  brandUrl: 'https://github.com/neo4j-contrib/neo4j-cc',
  brandImage:
    'https://dist.neo4j.com/wp-content/uploads/20210423072428/neo4j-logo-2020-1.svg',

  colorPrimary: '#018BFF',
  colorSecondary: '#018BFF',

  // UI
  appBg: '#E6F8FF',
  appContentBg: '#191D24',
  appBorderColor: '#323945',

  // Text Colors
  textColor: '#044092',

  // Toolbar default and active colors
  barTextColor: '#A6ADBA',
  barSelectedColor: '#C3D0EA',
  barBg: '#044092',
}

export const docsTheme = {
  ...baseTheme,
  maxWidth: '100%',
}

export default create(baseTheme)

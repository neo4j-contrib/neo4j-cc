/* eslint-disable */
export default {
  displayName: 'feature-release-notes',

  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/feature/release-notes',
  preset: '../../../jest.preset.js',
};

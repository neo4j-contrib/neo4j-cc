/* eslint-disable */
export default {
  displayName: 'feature-twin4j',

  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/feature/twin4j',
  preset: '../../../jest.preset.js',
};

/* eslint-disable */
export default {
  displayName: 'feature-person',

  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/feature/person',
  preset: '../../../jest.preset.js',
};

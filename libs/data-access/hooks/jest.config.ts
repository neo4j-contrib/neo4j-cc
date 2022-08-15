/* eslint-disable */
export default {
  displayName: 'data-access-hooks',

  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/data-access/hooks',
  preset: '../../../jest.preset.js',
};

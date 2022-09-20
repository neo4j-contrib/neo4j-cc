/* eslint-disable */
export default {
  displayName: 'feature-ninja-leaderboard',

  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/feature/ninja-leaderboard',
  preset: '../../../jest.preset.js',
};

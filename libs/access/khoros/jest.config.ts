/* eslint-disable */
export default {
  displayName: 'access-khoros',
  preset: '../../../jest.preset.js',
  // globals: {
  //   'ts-jest': {
  //     tsconfig: '<rootDir>/tsconfig.spec.json',
  //   },
  // },
  transform: {
    '^.+\\.[tj]sx?$': ['ts-jest', {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    }]
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  // coverageDirectory: '../../../coverage/libs/access/khoros',
};

module.exports = {
  displayName: 'data-access-person',

  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/data-access/person',
  preset: '../../../jest.preset.ts',
};

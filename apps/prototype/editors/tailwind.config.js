const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {
  presets: [require('../../../tailwind-workspace-preset.js')],
  content: [
    join(__dirname, './src/app/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './src/pages/**/*.{js,ts,jsx,tsx}'),
    join(
      __dirname,
      '../../../node_modules/react-daisyui/dist/**/*.{js,ts,jsx,tsx}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  // safelist:
  //   process.env.NODE_ENV === "development" ?
  //   [
  //       {
  //         pattern: /./,
  //       }
  //     ]
  //   : [ ] // nothing is safe in production... mwahahaha
};

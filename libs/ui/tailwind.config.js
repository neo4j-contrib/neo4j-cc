const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {
  presets: [require('../../tailwind-workspace-preset.js')],
  content: [
    join(__dirname, './src/lib/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './.storybook/*.tsx'),
    // join(__dirname, "../../node_modules/daisyui/dist/**/*.js"),
    ...createGlobPatternsForDependencies(__dirname),
  ],

  safelist: 
    // process.env.NODE_ENV === "development" ? 
    [
        {
          pattern: /(alert|avatar|badge|btn|card|carousel|checkbox|countdown|dropdown|form|kbd|label|menu|modal|navbar|progress|radial-progress|range|rating|select|stat|stats|swap|textarea|toggle|tooltip).*/,
          variants: ['sm', 'md', 'lg'],
        },
        {
          pattern: /(primary|secondary|accent|neutral|ghost|base|info|success|warning|error).*/,
        },
        { 
          pattern: /(ring|h|grid|bg).*/,
        },
        {
          pattern: /(w|left|right|top|bottom|gap)-(1\/2|4|5)/,
        }
      ]
    // : [ ] // nothing is safe in production... mwahahaha
};


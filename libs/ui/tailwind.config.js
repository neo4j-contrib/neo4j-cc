const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {
  presets: [require('../../tailwind-workspace-preset.js')],
  content: [
    join(__dirname, './src/lib/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, '/.storybook/*.tsx'),
    // join(__dirname, "../../node_modules/daisyui/dist/**/*.js"),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  safelist: [
    {
      pattern: /(alert|avatar|btn|card|dropdown|modal|swap).*/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
    {
      pattern: /(primary|secondary|accent|neutral|base|info|success|warning|error).*/,
    }
  ],
};

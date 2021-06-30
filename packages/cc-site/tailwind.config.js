const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  purge: process.env.NODE_ENV === "development" ? false : ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
        fontFamily: {           
            "sans": ['"Nunito Sans"', ...defaultTheme.fontFamily.sans],
            "mono": ['"Fira Code"', ...defaultTheme.fontFamily.mono]
          },
        colors: {
          neo4j: {
            blue:   '#018bff',
            black:  '#000000',
            darkBlue:   '#0b0b66',
            red:    '#ed1253',
            yellow: '#ffde63',
            cyan:   '#55f9e2'
          },
          blue: {
            50:  '#baE0ff',
            100: '#90CDff',
            200: '#77C1ff',
            300: '#57B3ff',
            400: '#30A1ff',
            500: '#018bff',
            600: '#0071d0',
            700: '#005Ca9',
            800: '#003460',
            900: '#00203c',
          }
        }
    },
  },
  variants: {
    extend: {
      ringWidth: ['hover'],
      backgroundOpacity: ['hover'],
    },
    typography: ["dark"],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}

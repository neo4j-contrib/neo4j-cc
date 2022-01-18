const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  // content: process.env.NODE_ENV === "development" ? false : ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
        fontFamily: {           
            "sans": ['"Nunito Sans"', ...defaultTheme.fontFamily.sans],
            "mono": ['"Fira Code"', ...defaultTheme.fontFamily.mono]
          },
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

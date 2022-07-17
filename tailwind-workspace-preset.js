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
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        neo4j: {
          "primary": "#018BFF",
          "secondary": "#FFDE63",
          "accent": "#3DD4C5",
          "neutral": "#B2B7BD",
          "base-100": "#FFFFFF",
          "info": "#7AD1FF",
          "success": "#44D4A4",
          "warning": "#D9B54A",
          "error": "#ED1252",
        },
      },
      "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"

    ],
    // prefix: "cc",
  }
  
}

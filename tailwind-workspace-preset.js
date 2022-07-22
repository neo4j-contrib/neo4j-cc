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
    // require('@tailwindcss/forms'),
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
          "base-200": "#333333",
          "info": "#7AD1FF",
          "success": "#44D4A4",
          "warning": "#D9B54A",
          "error": "#ED1252",
        },
        nodes: {
          primary: "#0B297D",
          secondary: "#58c7f3",
          accent: "#f3cc30",
          neutral: "#20134e",
          "neutral-content": "#f9f7fd",
          "base-100": "#2d1b69",
          "base-content": "#f9f7fd",
          info: "#53c0f3",
          "info-content": "#201047",
          success: "#71ead2",
          "success-content": "#201047",
          warning: "#f3cc30",
          "warning-content": "#201047",
          error: "#e24056",
          "error-content": "#f9f7fd",
      
        }
      },
      "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"

    ],
    // prefix: "cc",
  }
  
}

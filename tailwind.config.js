const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: "#ecc94b",
        secondary: "red",
      },
      height: (theme) => ({
        "80":"20rem",
        "screen/2": "50vh",
        "screen-75": "75vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      backgroundImage: (theme) => ({
        hero: "url('/img/banner2.jpg')",
      }),
      backgroundColor: (theme) => ({
        "black-transparent": " rgba(0, 0, 0, 0.5)",
        "black-transparent-2": " rgba(0, 0, 0, 0.7)",
        "custom-transparent": " rgba(248, 239, 212, 0.2)",
      }),
      minHeight: (theme) => ({
        "screen-75": "75vh",
        "screen-80": "80vh",
        "screen-90": "90vh",
        "screen-100": "100vh",
      }),
      fontSize: (theme) => ({
        "6rem": "6rem",
        "8rem": "8rem",
      }),
      fontFamily: (theme) => ({
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      }),
      borderWidth:theme=>({
        "10":"10px"
      })
    },
  },
  variants: {},
  plugins: [],
};

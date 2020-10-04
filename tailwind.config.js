const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.tsx"],
  theme: {
    // todo add default line height https://tailwindcss.com/docs/font-size#app
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      screens: {
        xxl: { min: "2000px" },
      },
      width: {
        1000: "1000px",
      },
      fontSize: {
        ...defaultTheme.fontSize,
        xxs: "0.65rem",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        geist: {
          50: "#fafafa",
          100: "#eaeaea",
        },
        dark: {
          1100: "#212121",
          1000: "#2B2B2B",
          900: "#404040",
          800: "#4D4D4D",
          700: "#5e5e5e",
          600: "#676767",
          500: "#a6a6a6",
          400: "#CFCFCF",
          300: "#D9D9D9",
          200: "#ebebeb",
          100: "#FFFFFF",
        },
        primary: {
          50: "#f7f8ff",
          100: "#F0F2FE",
          200: "#DAE0FC",
          300: "#C4CDFB",
          400: "#97A7F7",
          500: "#6B81F4",
          600: "#6074DC",
          700: "#404D92",
          800: "#303A6E",
          900: "#202749",
        },
      },
      typography: (theme) => ({
        default: {
          css: {
            color: theme("colors.gray.700"),
            h2: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.900"),
            },
            h3: {
              fontWeight: "600",
              color: theme("colors.gray.900"),
            },
            "ol li:before": {
              fontWeight: "600",
              color: theme("colors.gray.500"),
            },
            "ul li:before": {
              backgroundColor: theme("colors.gray.400"),
            },
            code: {
              color: theme("colors.gray.900"),
            },
            a: {
              color: theme("colors.gray.900"),
            },
            pre: {
              color: theme("colors.gray.200"),
              backgroundColor: theme("colors.gray.800"),
            },
            blockquote: {
              color: theme("colors.gray.900"),
              borderLeftColor: theme("colors.gray.200"),
            },
          },
        },
      }),
    },
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "disabled"],
    cursor: ["responsive", "hover", "focus", "disabled"],
    backgroundColor: [
      "responsive",
      "hover",
      "focus",
      "active",
      "group-hover",
      "odd",
      "even",
    ],
  },
  plugins: [require("@tailwindcss/ui"), require("@tailwindcss/typography")],

  experimental: {
    applyComplexClasses: true,
  },

  future: {
    removeDeprecatedGapUtilities: true,
  },
};

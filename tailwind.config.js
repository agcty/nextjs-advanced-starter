// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.tsx"],
  theme: {
    // good to know: add default line height https://tailwindcss.com/docs/font-size#app
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // custom light-gray tones
        geist: {
          50: "#fafafa",
          100: "#eaeaea",
        },
        // custom dark scheme
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
  // eslint-disable-next-line global-require
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/ui")],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};

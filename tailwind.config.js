module.exports = {
  purge: [],
  theme: {
    tooltipArrows: (theme) => ({
      "testimonial-arrow": {
        borderColor: theme("colors.achievements"),
        borderWidth: 1,
        backgroundColor: theme("colors.achievements"),
        size: 12,
        offset: 10,
      },
      "testimonial-arrow-center": {
        borderColor: theme("colors.achievements"),
        borderWidth: 1,
        backgroundColor: theme("colors.achievements"),
        size: 16,
        offset: 36,
      },
    }),
    extend: {
      spacing: {
        7: "1.75rem",
        "7+": "1.87rem",
        13: "3.25rem",
        14: "3.5rem",
        15: "3.75rem",
        "16+": "4.3rem",
        28: "7rem",
        32.5: "9.5rem",
        72: "18rem",
        80: "20rem",
      },
      maxWidth: {
        "sm--": "22rem",
        "sm-": "23rem",
        "md+": "29.3rem",
        "md++": "30.6rem",
        "xl+": "38.5rem",
        "3xl+": "51.1rem",
        "3xl++": "52rem",
      },
      fontSize: {
        "xs-": "0.625rem",
        "xs-+": "0.675rem",
        "lg-": "1.060rem",
        "xl-": "1.19rem",
        "xl+": "1.31rem",
        "3xl-": "1.69rem",
        "3xl+": "2rem",
        "xs+": "0.8125rem",
      },
      colors: {
        "nav-links": "#05172d",
        "nav-links-hover": "#45b658",
        achievements: "#e6e7eb",
        "service-card": "#9ba2ac",
        "green-link": "#45b658",
        "tilda-bg": "#eee",
        "help-button-hover": "#2c7639",
        "help-button-cont": "#414141",
        "blue-drift": "#0071eb",
      },
      textOpacity: {
        95: "0.95",
      },
      inset: {
        24: "24px",
        50: "50px",
        75: "75px",
        100: "100px",
      },
      translate: {
        "full-": "110%",
      },
      boxShadow: {
        "white-card": "0px 5px 20px 0px rgba(155,162,172,0.4)",
        "help-button": "0 0 8px 4px rgba(0,0,0,.16)",
      },
      transitionDuration: {
        1500: "1500ms",
        2000: "2000ms",
      },
      opacity: {
        40: ".4",
      },
    },
    customForms: (theme) => ({
      default: {
        select: {},
        checkbox: {
          height: theme("spacing.6"),
          width: theme("spacing.6"),
          iconColor: theme("colors.white"),
        },
        radio: {
          height: theme("spacing.6"),
          width: theme("spacing.6"),
        },
        textarea: {
          lineHeight: "22px",
          borderRadius: "0.35rem",
          borderColor: "#9da9b0",
          fontSize: "0.84rem",
          "&:focus": {
            boxShadow: undefined,
            borderColor: undefined,
          },
        },
      },
    }),
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
  },
  plugins: [
    require("@tailwindcss/custom-forms"),
    require("tailwindcss-tooltip-arrow-after")(),
  ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        beige: "#9E7E44",
        lblack: "#231F20",
        extralblack: "#2E2A2B",
        wgray: "#F4F5F7",
      },
      width: {
        13: "3.25rem",
      },
      maxWidth: {
        1440: "1440px",
      },
      screens: {
        "2xl": "1550px",
      },
      margin: {
        22: "22px",
      },
      height: {
        504: "504px",
      },
      dropShadow: {
        cs: "0 2px 10px rgba(0,0,0,.05)",
      },
      fontSize: {
        xxs: "0.625rem",
        xxss: "0.5rem",
      },
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        domek: "url('obrazky/barak.png')",
      },
    },
  },
  plugins: [
    {
      plugins: ["prettier-plugin-tailwindcss"],
    },
  ],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter, sans-serif", // Adds a new `font-inter` class
      },
      colors: {
        "theme-primary": "#0E74BC",
        "theme-dark": "#3A3A3C",
        "theme-txt40": "#0B0B0B66",
        "theme-txt50": "#0B0B0B80",
        "theme-txt70": "#0B0B0BB2",
        "theme-btn-green": "#009444",
        "theme-status-green": "#00C49F",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};

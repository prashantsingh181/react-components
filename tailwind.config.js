/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-color": "#5669FF",
        "primary-bg": "#FFFFFF",
      },
      fontFamily: {
        primary: [
          "Roboto Slab",
          "Inter",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        secondary: ["Roboto", "Helvetica", "Arial", "sans-serif"],
        regular: [
          "Source Sans 3",
          "Menlo",
          "Consolas",
          "Courier New",
          "monospace",
        ],
      },
      animation: {
        "spin-slow": "spin 4s linear infinite",
      },
    },
  },
  plugins: [],
};

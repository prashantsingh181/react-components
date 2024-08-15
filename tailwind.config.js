/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-color": "#1e90ff",
        "primary-bg": "#FFFFFF",
        "primary-dark-bg": "#17191d",
        "secondary-bg": "#f5f5f7",
        "secondary-dark-bg": "#24272f",
        "secondary-color": "#73e3b7",
        "primary-text": "#000000",
        "primary-dark-text": "#ffffff",
        "primary-border": "#23272f1a",
        "primary-dark-border": "#000000",
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
      transitionProperty: {
        "max-height": "max-height",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out forwards",
        "spin-slow": "spin 4s linear infinite",
      },
    },
  },
  plugins: [],
};

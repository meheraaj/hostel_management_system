// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: ["bg1"],
  theme: {
    extend: {
      colors: {
        primary: "#FFCF30",
        secondary: "#10b981",
        bg_main: "#23262C",
        bg1: "#C6686C",
        btnbg: "#ec221f",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alexbrush: ["Alex Brush", "cursive"],
        vibes: ["Great Vibes", "cursive"],
        scrips: ["Dancing Script", "cursive"],
        julius: ["Julius Sans One", "sans-serif"],
        shadows: ["Shadows Into Light", "cursive"],
      },
    },
  },
  plugins: [],
};

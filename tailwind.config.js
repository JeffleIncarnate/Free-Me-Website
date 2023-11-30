/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        watchlist: "[col1] 50% [col2] 50% [end]",
      },
      gridTemplateRows: {
        watchList: "[row1] 80% [row2] 20% [end]",
      },
    },
  },
  plugins: [],
};

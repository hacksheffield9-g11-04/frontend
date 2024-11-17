/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      keyframes: {
        appear: {
          "0%": {
            opacity: "0",
            transform: "scale(0.99)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
      animation: {
        appear: "appear 0.4s ease-out",
      },
    },
  },
  plugins: [],
};

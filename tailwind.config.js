/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "slide-in-left": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "slide-in-right": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        scaleUp: {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "2", transform: "scale(0.2)" },
        },
      },
      animation: {
        "fade-in": "fade-in 3.9s ease-in-out",
        "slide-in-left": "slide-in-left 1s ease-out", // You can adjust the duration
        "slide-in-right": "slide-in-right 1s ease-out",
        scaleUp: "scaleUp 10s ease-in-out 0.3s backward",
      },
    },
  },
  plugins: [],
};

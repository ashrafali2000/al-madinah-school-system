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
        // blink: {
        //   "50%": { visibility: "hidden" },
        // },
        type: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "black" },
          "50%": { visibility: "hidden" },
        },
        backgroundMove: {
          // "0%, 100%": { backgroundPosition: "center" },
          "50%": { backgroundPosition: "center 10px" }, // Moves the background 10px down
        },
      },
      animation: {
        // blink: "blink 1s steps(5, start) infinite",
        backgroundMove: "backgroundMove 4s ease-in-out infinite",
        type: "type 4s steps(40, end) 1s 1 normal both",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};

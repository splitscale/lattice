import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/pages/**/*.{js,ts,jsx,tsx}", // Add for Home.tsx
  ],
  theme: {
    extend: {
      fontFamily: {
        glancyr: ["var(--font-glancyr)", "sans-serif"], // Updated to use CSS variable
      },
      animation: {
        "infinite-scroll": "infinite-scroll 15s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-33.333%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // Add for custom animations
};

export default config;

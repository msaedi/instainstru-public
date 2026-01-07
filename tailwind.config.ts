import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#7E22CE",
          lavender: "#C084FC",
          yellow: "#FFD93D",
        },
        surface: {
          DEFAULT: "#0b1020",
          elevated: "rgba(255, 255, 255, 0.05)",
          border: "rgba(148, 163, 184, 0.18)",
        },
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;

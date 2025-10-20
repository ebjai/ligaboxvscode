import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ldb: {
          gold: "#D99A2B",
          red: "#6F1D1B",
          cream: "#EFE6D8",
          black: "#0A0A0A"
        }
      },
      fontFamily: {
        display: ["ui-sans-serif", "system-ui"],
        body: ["ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        brand: "0 10px 30px rgba(217,154,43,0.15)"
      }
    },
  },
  plugins: [],
};
export default config;

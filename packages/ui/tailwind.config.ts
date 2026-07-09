import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "../../apps/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        charcoal: {
          900: "#121212",
          800: "#1e1e1e",
          700: "#2d2d2d",
        },
        obsidian: {
          900: "#0b0c10",
          800: "#1f2833",
        },
        porcelain: {
          100: "#f8f9fa",
          200: "#e9ecef",
        },
        brand: {
          DEFAULT: "#ff3366", // Vivid highlight
          muted: "rgba(255, 51, 102, 0.1)",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Clash Display", "sans-serif"],
      },
      boxShadow: {
        glass: "0 20px 40px rgba(0,0,0,0.05)",
        "glass-hover": "0 30px 60px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        card: "var(--card)",
        ink: "var(--ink)",
        sub: "var(--sub)",
        line: "var(--line)",
        accent: "var(--accent)",
        accent2: "var(--accent2)",
        good: "var(--good)",
        bad: "var(--bad)",
      },

      keyframes: {
        "fade-slide": {
          from: {
            opacity: "0",
            transform: "translateY(12px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        pop: {
          from: {
            opacity: "0",
            transform: "scale(0.85)",
          },
          to: {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },

      animation: {
        "fade-slide": "fade-slide 0.45s ease-out both",
        pop: "pop 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) both",
      },
    },
  },

  plugins: [],
};

export default config;
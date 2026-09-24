import type { Config } from "tailwindcss";

const withAlpha =
  (v: string) =>
  ({ opacityValue }: { opacityValue?: string }) =>
    opacityValue === undefined
      ? `var(${v})`
      : `color-mix(in srgb, var(${v}) ${Number(opacityValue) * 100}%, transparent)`;

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: withAlpha("--bg"),
        card: withAlpha("--card"),
        ink: withAlpha("--ink"),
        sub: withAlpha("--sub"),
        line: withAlpha("--line"),
        accent: withAlpha("--accent"),
        accent2: withAlpha("--accent2"),
        good: withAlpha("--good"),
        bad: withAlpha("--bad"),
      },
      keyframes: {
        "fade-slide": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pop: {
          from: { opacity: "0", transform: "scale(0.85)" },
          to: { opacity: "1", transform: "scale(1)" },
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
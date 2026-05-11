import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0d0d0d",
        "bg-secondary": "#111111",
        "bg-card": "#161616",
        "red-brand": "#e3000f",
        "red-hover": "#b8000c",
        "border-subtle": "#222222",
        "text-muted": "#888888",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      borderRadius: {
        card: "6px",
        btn: "4px",
      },
      boxShadow: {
        "red-glow": "0 0 60px rgba(227,0,15,0.3)",
        "red-glow-sm": "0 0 25px rgba(227,0,15,0.15)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        shimmer: "shimmer 2.5s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;

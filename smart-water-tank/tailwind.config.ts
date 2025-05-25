import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
    'ping-slow': 'ping 4s cubic-bezier(0, 0, 0.2, 1) infinite',
    'fade-in': 'fadeIn 1s ease-out both',
    'fade-in-out': 'fadeInOut 6s ease-in-out infinite',
    'pulse-slow': 'pulse 8s ease-in-out infinite',
  },
  keyframes: {
    fadeIn: {
      '0%': { opacity: "0" },
      '100%': { opacity: "1" },
    },
    fadeInOut: {
      '0%, 100%': { opacity: "0.1" },
      '50%': { opacity: "0.4" },
    },
  },
    },
  },
  plugins: [],
} satisfies Config;

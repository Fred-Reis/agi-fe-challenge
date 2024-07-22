import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      inter: "var(--font-inter)",
      marriweather: "var(--font-marriweather)",
      sans: "var(--font-inter)",
    },

    colors: {
      orange: {
        100: "#FFF7ED",
        200: "#FED7AA",
        400: "#FDBA74",
        500: "#F97316",
      },
      red: {
        200: "#FECACA",
        500: "#EF4444",
      },
      rose: {
        200: "#FECDD3",
        500: "#F43F5E",
      },
      pink: {
        200: "#FBCFE8",
        500: "#EC4899",
      },
      fuschia: {
        200: "#F5D0FE",
        500: "#D946EF",
      },
      violet: {
        200: "#DDD6FE",
        500: "#8B5CF6",
      },
      indigo: {
        200: "#C7D2FE",
        500: "#6366F1",
      },
      blue: {
        200: "#BFDBFE",
        500: "#3B82F6",
      },
      sky: {
        200: "#BAE6FD",
        500: "#0EA5E9",
      },
      cyan: {
        200: "#A5F3FC",
        500: "#06B6D4",
      },
      teal: {
        200: "#99F6E4",
        500: "#14B8A6",
      },
      esmerald: {
        200: "#A7F3D0",
        500: "#10B981",
      },
      green: {
        200: "#BBF7D0",
        500: "#22C55E",
      },
      lime: {
        200: "#D9F99D",
        500: "#65A30D",
      },
      amber: {
        100: "#C1A391",
        200: "#FDE68A",
        500: "#F59E0B",
        900: "#78350F",
      },
      slate: {
        200: "#CBD5E1",
        400: "#94A3B8",
        500: "#64748B",
        600: "#475569",
        950: "#020617",
      },
      font_color: {
        weak: "#94A3B8",
        sub_title: "#64748B",
        default: "#334155",
        strong: "#0F172A",
      },

      primary: "#F97316",

      fb_success: "#10B981",
      fb_error: "#EC3030",

      gray: {
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D1D5DB",
        400: "#9CA3AF",
        500: "#6B7280",
        600: "#4B5563",
        700: "#374151",
        800: "#1F2937",
        900: "#111827",
      },
    },
  },
  plugins: [],
};

export default config;

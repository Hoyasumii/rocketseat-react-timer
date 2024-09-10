import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#E1E1E6",
          200: "#C4C4CC",
          300: "#8D8D99",
          400: "#7C7C8A",
          500: "#323238",
          600: "#202024",
          700: "#121214",
          800: "transparent",
          900: "transparent",
          950: "transparent",
        },
        feedback: {
          dark: "#00875F",
          light: "#F02847",
        },
        product: {
          dark: "#015F43",
          base: "#00875F",
          light: "#00B37E",
        },
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    mytheme: {
      primary: "#F9F7F7",
      secondary: "#383838",
      accent: "#B2F042",
      neutral: "#C9CCD1",
      "base-100": "#F9F5F6",
      info: "#3abff8",
      success: "#36d399",
      warning: "#fbbd23",
      error: "#f87272",
      "base-200": "#D83776",
      "base-300": "#3B5998",
    },
  },
  plugins: [require("daisyui")],
};
export default config;

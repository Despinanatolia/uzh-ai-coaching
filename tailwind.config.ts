import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        uzh: {
          blue: "#0028a5",
          "blue-dark": "#001f7a",
          "blue-light": "#e6eaf6",
          gray: "#4a4a4a",
          "gray-light": "#f5f5f5",
        },
      },
      fontFamily: {
        sans: ['"Source Sans 3"', "Source Sans Pro", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;

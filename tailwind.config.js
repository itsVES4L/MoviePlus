/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["logo"],
        mons: ["mons"],
      },
      colors: {
        // primary colors
        blue: "#0C8CE9",
        // dark color
        "black-06": "#0f0f0f",
        "black-08": "#131316",
        "black-10": "#1a1a1a",
        "black-12": "#1f1f1f",
        "black-15": "#262626",
        "black-20": "#333333",
        "black-25": "#404040",
        "black-30": "#4c4c4c",
        // gray color
        "gray-60": "#18181B",
        "gray-65": "#a6a6a6",
        "gray-70": "#b3b3b3",
        "gray-75": "#bfbfbf",
        "gray-90": "#e4e4e7",
        "gray-95": "#f1f1f3",
        "gray-97": "#f7f7f8",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },

    plugins: [require("daisyui")],
  },
};

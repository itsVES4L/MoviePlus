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
        green: "#3BA738",
        darkBlue: "#04151D",
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

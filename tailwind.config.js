/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        epilogue: ["Epilogue", "sans-serif"],
      },
      backgroundColor: {
        primary: "#2196F3",
        secondary: "#EFF2F4",
        hover: "#E9F5FE",
        "gray-primary": "#5D7285",
        "body-bg": "#C7D0D8",
      },
      colors: {
        "primary-500": "#2196F3",
        "primary-300": "#6EBBF7",
        "primary-100": "#EFF2F4",
        "gray-primary": "#5D7285",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2F855A",
          light:   "#38A169",
          dark:    "#276749",
        },
        secondary: {
          DEFAULT: "#DD6B20",
          light:   "#ED8936",
          dark:    "#C05621",
        },
        accent: {
          DEFAULT: "#38B2AC",
          light:   "#4FD1C5",
          dark:    "#2C7A7B",
        },
        neutral: {
          900: "#1A202C",
          700: "#4A5568",
          500: "#A0AEC0",
          300: "#CBD5E0",
          100: "#EDF2F7",
        },
        background: "#F7FAFC",
        surface:    "#FFFFFF",
      },
    },
  },
  plugins: [],
};

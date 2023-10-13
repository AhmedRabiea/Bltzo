/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./about_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./services_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./web_services/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bltzo: {
          100: "#0B4A63",
          150: "#E9E9E9",
          200: "#1B192A",
          300: "#1B192A",
          350: "#71868D",
          400: "#94CB1D",
          450: "#444D69",
          500: "#43555C",
          550: "#434E5D",
          600: "#24373E",
          650: "#DDE2EC",
          700: "#766C97",
          750: "#6D7C90",
          800: "#0231491A",
          850: "#766C97",
          900: "#A8B7BC21",
          950: "#F9F8FF",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Poppins"],
      },
    },
  },
  plugins: [],
};

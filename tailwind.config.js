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
          200: "#1B192A",
          300: "#1B192A",
          400: "#94CB1D",
          500: "#43555C",
          600: "#24373E",
          700: "#766C97",
          800: "#0231491A",
          bgservices: "#A8B7BC21",
          contactform: "#A8B7BC",
          servicesp: "#43555C",
          cardsborder: "#E9E9E9",
          sectionbg: "#F9F8FF",
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

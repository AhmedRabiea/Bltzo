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
        navtext: "#1B192A",
        navactive: "#0B4A63",
        navbtn: "#0B4A63",
        navshadow: "#0231491A",
        txtcolor: "#24373E",
        headers: "#94CB1D",
        txtparagraph: "#43555C",
        itemsborder: "#D0C1FB",
        bgservices: "#A8B7BC21",
        contactform: "#A8B7BC",
        servicesp: "#43555C",
        cardsborder: "#E9E9E9",
        sectionbg: "#F9F8FF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

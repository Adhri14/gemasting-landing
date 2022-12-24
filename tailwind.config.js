module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#ec4794",
        secondary: "#FAFAFA",
        dark: "#404040",
      },
      // screens: {
      //   "2xl": "1300px",
      // },
    },
  },
  variants: {
    fill: ["hover", "focus", "group-hover"], // this line does the trick
  },
  plugins: [],
};

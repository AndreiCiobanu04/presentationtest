module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#D9D9D9",
      },
      boxShadow: {
        "3xl": "0 30px 10px -12px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        gray: "linear-gradient(to right, #8a8c8f, #747779, #606363, #4e4f4e, #3c3c3b)",
      },
      fontFamily: {
        'sans': ["Montserrat", "sans"],
      },
    },
    variants: {
      extend: {},
    },
  },
};

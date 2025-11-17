/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./styles/globals.css"
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#0068B5",
        brandBlueDark: "#0A3E8C",
        brandGreen: "#00A88F",
        brandAqua: "#15DADC",
        brandGold: "#F5A623",
        brandRed: "#D42A2A",
        brandBg: "#F6F8FA",
        brandText: "#1C1C1C",
        brandMuted: "#707070",
        white: "#FFFFFF"
      },
      fontFamily: {
        heading: ["Poppins", "Montserrat", "sans-serif"],
        body: ["Inter", "Roboto", "sans-serif"]
      },
      outline: {
        brandBlue: ["2px solid #0068B5", "2px solid #0068B5"]
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ["focus", "hover"],
      textColor: ["focus", "hover"],
      borderColor: ["focus", "hover"],
      outline: ["focus", "hover"]
    }
  },
  plugins: []
};

module.exports = {
  darkMode: "class",
  content: [
    "./apps/**/*.{html,ts,scss}",
    "./libs/**/*.{html,ts,scss}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#F59E0B",
        background: "#F3F4F6",
        darkBackground: "#1F2937",
        cardBg: "#FFFFFF",
        darkCardBg: "#1E293B",
        textColor: "#1E293B",
        darkTextColor: "#E5E7EB",
        favorite: "#FFD700"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"]
      }
    }
  },
  plugins: []
};
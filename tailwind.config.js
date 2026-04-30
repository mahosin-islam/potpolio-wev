/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: "#050505", // ছবির মতো ডিপ ব্ল্যাক ব্যাকগ্রাউন্ড
        cardBg: "rgba(17, 25, 40, 0.75)", // গ্লাস ইফেক্ট
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #8b5cf6, #ec4899)', // Purple to Pink gradient
      }
    },
  },
  plugins: [],
};
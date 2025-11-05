/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      color1: "#EDEDED", // Background color utama
      color2: "#4BAF47", // Hijau utama
      color3: "#FF5D5D", // Merah
      color4: "#414040", // Abu gelap
      color5: "#A8CD89", // Hijau muda
      color6: "#808588",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        delius: ["Delius Swash Caps", "cursive"],
      },
      keyframes: {
        fadeInLeft: {
          from: { opacity: 0, transform: "translateX(-20px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        fadeInRight: {
          from: { opacity: 0, transform: "translateX(20px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        fadeInLeft: "fadeInLeft 0.5s ease-out",
        fadeInRight: "fadeInRight 0.5s ease-out",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      colors: {
        background: "#09090A",
      },
      backgroundImage: {
        "register-image": "url('./src/assets/register-image.jpg')",
      },
    },
  },
  plugins: [],
};

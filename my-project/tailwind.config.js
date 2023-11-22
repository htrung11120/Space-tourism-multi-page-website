/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundImage: {
      desktop: "url('../assets/home/background-home-desktop.jpg')",
    },
    fontFamily: {
      sans: ['Barlow Condensed'],
    },
    extend: {},
  },
  plugins: [],
};

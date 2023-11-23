/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundImage: {
      desktop: "url('../assets/home/background-home-desktop.jpg')",
    },
    fontFamily: {
      Barlow: ['Barlow Condensed'],
      Bellefair: ['Bellefair'],
    },
    fontSize: {
      heading1: '9.375rem',
      heading2: '6.25rem',
      heading3: '3.5rem',
      heading4: '2rem',
      heading5: '1.75rem',
      subHeading: '1.75rem',
      subHeading2: '.875rem',
    },
    letterSpacing: {
      heading5Space: '0.3rem',
      subHeadingSpace: '.15rem',
      navSpace: '.17rem',
    },

    extend: {},
  },
  plugins: [],
};

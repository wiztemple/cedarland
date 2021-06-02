module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        kiwi: '#0e182a',
        cedarland: '#603831',
        snowgrey: '#F0F1F2',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      height: () => ({
        '245px': '245px',
        '275px': '275px',
        '400px': '400px',
        '550px': '550px',
        '562px': '562px',
      }),
      width: () => ({
        '270px': '270px',
        '350px': '350px',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

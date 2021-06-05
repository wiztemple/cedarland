module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        kiwi: '#0e182a',
        cedarland: '#603831',
        snowgrey: '#F0F1F2',
        milkgrey: '#FCF7F7',
        sparkchoco: '#8D3434',
        milkpurple: '#F2F1F6',
        purplegray: '#616681',
        lightestbrown: '#FDF8F8',
        slidertext1: ' #9593A4',
        gray1: '#A7A9AF',
        cream: '#f4efe6',
        darkgreen: '#59959c',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '24px': ['1.375rem', { lineHeight: '1.75rem' }],
      },
      height: () => ({
        '245px': '245px',
        '275px': '275px',
        '350px': '350px',
        '400px': '400px',
        '550px': '550px',
        '562px': '562px',
      }),
      width: () => ({
        '270px': '270px',
        '306px': '306px',
        '350px': '350px',
        '840px': '840px',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

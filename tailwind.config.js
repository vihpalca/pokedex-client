module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    container: {
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      i5: '320px',
    },
    fontFamily: {
      display: ['Montserrat', 'sans-serif'],
      body: ['Montserrat', 'sans-serif'],
      nunito: ['Nunito', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      flexo: ['Flexo-Medium', 'sans-serif'],
    },
    extend: {
      color: {
        blue: '#2E7AE9',
        purple: '#31397B',
        pink: '#F349A1',
        waterGreen: '#5BEDDD',
        orange: '#FDA038',
        darkGray: '#4F4F4F',
        lightGray: '#9BABC0',
      },
      backgroundColor: {
        blue: '#2E7AE9',
        purple: '#31397B',
        pink: '#F349A1',
        waterGreen: '#5BEDDD',
        orange: '#FDA038',
        lightBlue: '#EDF2F8',
        darkGray: '#4F4F4F',
        lightGray: '#9BABC0',
      },
      textColor: {
        blue: '#2E7AE9',
        purple: '#31397B',
        pink: '#F349A1',
        waterGreen: '#5BEDDD',
        orange: '#FDA038',
        darkGray: '#4F4F4F',
        lightGray: '#9BABC0',
      },
    },
  },
  plugins: [],
}

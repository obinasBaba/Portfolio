/** @format */

import { createTheme, responsiveFontSizes } from '@material-ui/core';
import { darkColor, mainColor } from '@/styles/variables/colors';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1900,
    },
  },

  overrides: {
    MuiCssBaseline: {
      '@global': {},
    },
  },

  typography: {
    fontFamily: ['Elianto-Regular'].join(','),

    h1: {
      fontFamily: 'Elianto-Regular',
      fontWeight: 'bolder',
      lineHeight: '1.27',
      // fontSize: '3.3rem',
    },

    body1: {
      fontSize: '1.2rem',
      fontWeight: 300,
    },
  },

  spacing: 10,

  palette: {
    primary: { main: darkColor },
    secondary: { main: mainColor },
    text: {
      primary: '#a4b5c0',
      // secondary: '#b3afaf'
    },
  },
});

export default responsiveFontSizes(theme, {
  breakpoints: ['sm', 'md', 'lg', 'xl'],
});

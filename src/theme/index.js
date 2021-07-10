import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'
import { darkColor, mainColor } from '../styles/variables/colors'

let theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1025,
      xl: 1200,
      xxl: 1600,
    },
  },

  overrides: {
    MuiCssBaseline: {
      '@global': {},
    },

    MuiContainer: {
      root: {
        // paddingLeft: '1.5rem',
        // paddingRight: '1.5rem',

      },
    },
  },

  typography: {
    fontFamily: ['Elianto-Regular'].join(','),
    // fontFamily: 'Raleway, sans-serif',



    h1: {
      fontFamily: 'Poppins Black',
      fontWeight: 'bolder',
      lineHeight: '1.27'
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
    // text: {
    //   // secondary: '#b3afaf'
    // }
  },
})

export default responsiveFontSizes(theme, {
  breakpoints: ['sm', 'md', 'lg', 'xl'],
})

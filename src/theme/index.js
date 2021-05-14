import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import { darkColor, mainColor } from '../styles/variables/colors'

let theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1025,
      xl: 1200,
      xxl: 1900,
    },
  },

  overrides: {

    MuiCssBaseline: {
      '@global': {

      }
    },

    MuiContainer: {
      root: {
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
      },
    },
  },

  typography: {
    fontFamily: ['Sofia Pro, sans-serif'].join(','),

    h1: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 'bolder',
      // fontSize: '3.3rem',
    },

    body1: {
      fontSize: '1.2rem'
    }

  },

  spacing: 10,

  palette: {
    primary: { main: darkColor },
    secondary: { main: mainColor },
  },
})

export default responsiveFontSizes(theme, {
  breakpoints: ['sm', 'md', 'lg', 'xl'],
})

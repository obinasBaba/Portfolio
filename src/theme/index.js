import { createMuiTheme, responsiveFontSizes } from "@material-ui/core"
import createBreakpoints from "@material-ui/core/styles/createBreakpoints"
import {
  SofiaProBold,
  SofiaProLight,
  SofiaProNormal,
   SofiaProSemiBold,
  SofiaProSoftBold,
  SofiaProSoftLight,
  SofiaProSoftRegular
} from "./fonts"

const breakpoints = createBreakpoints({});

let theme = createMuiTheme({

  overrides: {
    MuiCssBaseline: {
      '@global': {

        '@font-face': [ SofiaProLight, SofiaProBold, SofiaProNormal, SofiaProSemiBold,
          SofiaProSoftBold, SofiaProSoftRegular, SofiaProSoftLight,  ],

        html: {
          fontSize: 'calc(1vw + 0.6em)',
        },

        [breakpoints.down('sm')]: {
          html: {
            fontSize: 'calc(1vw + .85em)',
          },
        },

        [breakpoints.up('xl')]: {
          ':root': {
            fontSize: '1.325em !important',
          },
        },


      }
    },

    MuiContainer: {
      root: {
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
      }
    },
  },

  typography: {

    fontFamily: [
      "Sofia Pro Soft, sans-serif",
    ].join(','),

    h1: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: "bolder",
      fontSize: '3.3rem'
    }
  }
})

export default responsiveFontSizes(theme)




import React from 'react'
import { Helmet } from 'react-helmet'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import theme from '../theme'
import '../styles/fontFace.css'
import AppStateProvider from '../contexts/AppStateContext'
import Page from './Components/Page'
import {GlobalStyle} from '../styles/GlobalStyles'

export default function Layout({ children, path }) {
  return (
    <React.Fragment>

      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        {/*<link rel="stylesheet" href={"https://use.typekit.net/kxo3pgz.css"}/>*/}

      </Helmet>

      <StyledThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <CssBaseline />

          <AppStateProvider>
            <Page path={path}>{children}</Page>
          </AppStateProvider>

        </ThemeProvider>
      </StyledThemeProvider>
    </React.Fragment>

  )
}

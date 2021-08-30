import React from 'react'
import { Helmet } from 'react-helmet'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import theme from '../theme'
import '../styles/fontFace.css'
import { GlobalStyle } from './layoutComponents/index'
import AppStateProvider from '../contexts/AppStateContext'
import Page from './layoutComponents/Page'

export default function Layout({ children, path }) {
  return (
    <React.Fragment>

      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Helmet>

      <StyledThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <CssBaseline />
          <canvas className="canvas" key={'pointer-map'} />


          <AppStateProvider>
            <Page path={path}>{children}</Page>
          </AppStateProvider>
        </ThemeProvider>
      </StyledThemeProvider>

      <script type="text/javascript" src="https://unpkg.com/default-passive-events"/>

    </React.Fragment>

  )
}

import React, { useContext, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import theme from '../theme'
import '../styles/fontFace.css'
import { AnimatePresence } from 'framer-motion'
import { GlobalStyle, Main, Page } from './layoutComponents/index'
import AppStateProvider, { AppStateContext } from '../contexts/AppStateContext'
import HeaderAppBar from '../components/HeaderAppBar'
import ProgressCircle from './Components/ProgressCircle'
import Fixed from '../components/Fixed'
import LoadingSpinner from '../components/LoadingSpinner'

export default function Layout({ children, path }) {
  return (
    <React.Fragment>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@600;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <StyledThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <CssBaseline />

          <AppStateProvider>
            <Page>
              <HeaderAppBar />
              <Fixed />

              <Main>
                <AnimatePresence exitBeforeEnter custom={{ path: path }}>
                  <LoadingSpinner children={children} />
                </AnimatePresence>
              </Main>

              <ProgressCircle />
            </Page>
          </AppStateProvider>
        </ThemeProvider>
      </StyledThemeProvider>
    </React.Fragment>
  )
}

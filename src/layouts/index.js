import React from 'react'
import {Helmet} from 'react-helmet'
import CssBaseline from '@material-ui/core/CssBaseline'
import {ThemeProvider} from '@material-ui/core/styles'
import styled, {ThemeProvider as StyledThemeProvider} from 'styled-components'
import theme from '../theme'
import '../styles/fontFace.css'
import {AnimatePresence} from 'framer-motion'
import {GlobalStyle, Main, Page} from './layoutComponents/index'
import AppStateProvider from '../contexts/AppStateContext'
import HeaderAppBar from '../components/HeaderAppBar'
import ProgressCircle from '../components/ScrollProgressCircle'
import Fixed from '../components/Fixed'
import LoadingSpinner from '../components/LoadingSpinner'
import Cursor from '../components/Cursor'

const BottomGradient = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;

  background-image: linear-gradient(to bottom,
  rgba(7, 33, 66, 0),
  rgba(6, 28, 55, 0),
  rgba(7, 24, 43, 0),
  rgba(6, 18, 32, 0),
  rgba(6, 18, 32, 0),
  rgba(2, 11, 22, 0.9),);
`

export default function Layout({ children, path }) {
  return (
    <React.Fragment>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        {/*<link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@600;900&display=swap"
          rel="stylesheet"
        />*/}
      </Helmet>

      <StyledThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <CssBaseline />

          <AppStateProvider>
            <Page>
              <HeaderAppBar />
              <Fixed />
              <Cursor />

              <Main>
                <AnimatePresence exitBeforeEnter custom={{ path: path }}>
                  <LoadingSpinner children={children} />
                </AnimatePresence>
              </Main>

              <BottomGradient />

              <ProgressCircle />
            </Page>
          </AppStateProvider>
        </ThemeProvider>
      </StyledThemeProvider>
    </React.Fragment>
  )
}

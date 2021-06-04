import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import theme from '../theme'

import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/fontFace.css'
import { AnimatePresence } from 'framer-motion'
import {
  GlobalStyle,
  Main,
  Page,
  VersionNo,
} from '../components/layoutComponents'
import { HeaderContext } from '../contexts'
import ExitStateProvider from '../contexts/ExitStateContext'
import BackgroundStars from '../components/BackgroundStars'

export default function TopLayout({ children }) {
  const [isHeaderGradient, setIHeaderGradient] = useState(true)
  const [isWhite, setIsWhite] = useState(false)

  return (
    <React.Fragment>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <StyledThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <CssBaseline />

          <HeaderContext.Provider value={{ setIHeaderGradient, setIsWhite }}>
            <Page >
              <Header isGradient={isHeaderGradient}
                      isWhite={isWhite} />

              <Main  >
                <BackgroundStars  />
                <ExitStateProvider>
                  <AnimatePresence exitBeforeEnter={true}>
                    {children}
                  </AnimatePresence>
                </ExitStateProvider>
              </Main>

              <footer>
                <Footer />
              </footer>

              <VersionNo>v0.1</VersionNo>
            </Page>
          </HeaderContext.Provider>
        </ThemeProvider>
      </StyledThemeProvider>
    </React.Fragment>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node,
}

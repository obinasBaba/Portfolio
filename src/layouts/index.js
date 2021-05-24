import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import styled, {
  css,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components'
import theme from '../theme'

import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/fontFace.css'
import { AnimatePresence, motion } from 'framer-motion';
import {
  GlobalStyle,
  Main,
  Page,
  VersionNo,
} from '../components/layoutComponents'
import {HeaderGradientContext} from '../contexts'



export default function TopLayout({ children }) {

  const [isHeaderGradient, setIHeaderGradient] = useState(true);


  return (
    <React.Fragment>
      <Helmet>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;500;900&family=Poppins:wght@100;900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap"
              rel="stylesheet"/>
      </Helmet>

      <StyledThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <CssBaseline />

          <HeaderGradientContext.Provider value={{ setIHeaderGradient }} >

            <Page>
              <Header isGradient={isHeaderGradient} />

              <Main
                animate='animate'
                initial='initial'
                exit='exit'
              >

                {/*<AnimatePresence exitBeforeEnter={true}>*/}
                { children }
                {/*</AnimatePresence>*/}

              </Main>

              <footer  >
                <Footer />
              </footer>

              <VersionNo>
                v0.1
              </VersionNo>

            </Page>

          </HeaderGradientContext.Provider>

        </ThemeProvider>
      </StyledThemeProvider>
    </React.Fragment>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node,
}

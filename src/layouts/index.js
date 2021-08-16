import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import theme from '../theme'
import '../styles/fontFace.css'
import { AnimatePresence } from 'framer-motion'
import { GlobalStyle, Main, Page } from './layoutComponents/index'
import AppStateProvider from '../contexts/AppStateContext'
import HeaderAppBar from '../components/HeaderAppBar'
import MailUs from '../scenes/MailUs'
import ProgressCircle from './Components/ProgressCircle'
import Fixed from '../components/Fixed'
import Footer from '../components/Footer'
// import 'locomotive-scroll/dist/locomotive-scroll.css'
// import LocomotiveScroll from 'locomotive-scroll'

export default function TopLayout({ children, path }) {
  useEffect(() => {
    const scrollEl = document.querySelector('#main-container')

    /*let locoScroll = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        multiplier: 1,
      })*/
  }, [])

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
                  {children}
                </AnimatePresence>
              </Main>

              {/*<Footer/>*/}
              {/*<footer>fotter</footer>*/}

              <ProgressCircle />
            </Page>
          </AppStateProvider>
        </ThemeProvider>
      </StyledThemeProvider>
    </React.Fragment>
  )
}


import React, {useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components'
import theme from '../theme'
import '../styles/fontFace.css'
import {
  AnimatePresence,
  motion,
  useTransform,
  useViewportScroll,
} from 'framer-motion'
import { GlobalStyle, Main, Page } from './layoutComponents/index'
import AppStateProvider from '../contexts/AppStateContext'
import BackgroundStars from '../components/BackgroundStars'
import Moon from './Components/Moon'
import { SkyColor } from './Components/SkyColor'
import HeaderAppBar from '../components/HeaderAppBar'
import MailUs from '../scenes/MailUs'
// import Cursor from './Cursor'
import ProgressCircle from './Components/ProgressCircle'
import LoadingSpinner from '../components/LoadingSpinner'




export default function TopLayout({ children, path }) {



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

          <AppStateProvider>
            <Page>
              <HeaderAppBar />

              <Main>
                {/*<LoadingSpinner/>*/}

                <SkyColor />

                <Moon />

                <BackgroundStars />

                {/*<AnimateSharedLayout type="crossfade">*/}
                <AnimatePresence exitBeforeEnter custom={{ path: path }}>
                  {children}
                </AnimatePresence>
                {/*</AnimateSharedLayout>*/}
              </Main>

              <footer>
                <MailUs />
              </footer>


              <ProgressCircle />

            </Page>
          </AppStateProvider>
        </ThemeProvider>
      </StyledThemeProvider>
    </React.Fragment>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node,
}

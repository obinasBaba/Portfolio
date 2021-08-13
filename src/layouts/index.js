import React from 'react'
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
import BackgroundStars from '../components/BackgroundStars'
import { SkyColor } from './Components/SkyColor'
import HeaderAppBar from '../components/HeaderAppBar'
import MailUs from '../scenes/MailUs'
import ProgressCircle from './Components/ProgressCircle'
import LoadingSpinner from '../components/LoadingSpinner'
import Fixed from '../components/Fixed'

export default function TopLayout({ children, path }) {
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

          <AppStateProvider>
            <Page>
              <HeaderAppBar />

              <Main>
                <LoadingSpinner />

                <SkyColor />

                <Fixed />

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

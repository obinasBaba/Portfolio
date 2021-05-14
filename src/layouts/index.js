import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import styled, {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components'
import theme from '../theme'

import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/fontFace.css';
import { responsiveVar } from '../styles/commons'


const GlobalStyle = createGlobalStyle`
  
  ${responsiveVar};
  
  html{
    --dark: #02021e;
    -webkit-font-smoothing: antialiased;

    --sofia-soft: 'Sofia Pro Soft', sans-serif;
    --sofia-pro: 'Sofia Pro', sans-serif;
    --font-gramatika: 'Gramatika', sans-serif;
    
  }

  a {
    display: block;
    text-decoration: none;
    color: inherit;
  }

  body{
    overflow-x: hidden;
    position: relative;
    color: #fff;
    background: var(--dark);
  }
`

const Page = styled.div`
  
  position: relative;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  min-height: 100vh;
  align-items: end;

  &::after{
    content: 'asdfasfdasdf';
    position: absolute;;
    //left: 10%;
    //right: 15%;
    width: 100%;
    max-width: 1185px;
    top: -390px;
    z-index: -999;
    opacity: 0.4;
    height: 1076px;
    transform: translateY(-30%);
    background: radial-gradient(
            41.38% 40.85% at 56.08% 46.24%,
            #3719ca 0%,
            rgba(55, 25, 202, 0) 100% );
  }

`

const Main = styled.main`
  position: relative;
  display: block;
  padding-top: 10rem;
  margin: 0 auto;
  flex: 1;
`

export default function TopLayout({ children }) {
  return (
    <React.Fragment>
      <Helmet>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;500;900&family=Poppins:wght@100;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <StyledThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <CssBaseline />

          <Page>
            <Header />

            <Main>{ children}</Main>

            <footer>
              <Footer />
            </footer>

          </Page>
        </ThemeProvider>
      </StyledThemeProvider>
    </React.Fragment>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node,
}

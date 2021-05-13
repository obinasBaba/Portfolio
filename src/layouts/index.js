import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { createGlobalStyle, ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "../../src/theme";

import Header from "../components/Header";
import Footer from "../components/Footer";

const GlobalStyle = createGlobalStyle``;


export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;500;900&family=Poppins:wght@100;900&display=swap"
          rel="stylesheet" />
      </Helmet>

      <StyledThemeProvider theme={ theme }>
        <ThemeProvider theme={ theme }>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */ }
          <GlobalStyle />
          <CssBaseline />

          <Header />

          { props.children }

          <Footer />

        </ThemeProvider>
      </StyledThemeProvider>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node
};

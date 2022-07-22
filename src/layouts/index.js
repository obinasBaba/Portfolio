import React from "react";
import { Helmet } from "react-helmet";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "../theme";
import AppStateProvider from "../contexts/AppStateContext";
import Page from "./Components/Page";
import "@src/styles/sass-styles/global-style/index.scss";

export default function Layout( { children, path } ){
  return (
    <>

      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />


      </Helmet>

      <StyledThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <AppStateProvider>
            <Page path={path}>{children}</Page>
          </AppStateProvider>

        </ThemeProvider>
      </StyledThemeProvider>
    </>

  );
}

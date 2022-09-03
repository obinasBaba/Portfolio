import React from "react";
import { Container, useMediaQuery, useTheme } from "@material-ui/core";
import styled from "styled-components";

const RContainer = styled( Container )`
`;

const ResponsiveContainer = React.forwardRef( ( props, ref ) => {

  const theme = useTheme();
  const matches = useMediaQuery( theme.breakpoints.up( "xl" ) );

  return (
    <RContainer maxWidth={matches ? "xl" : "lg"} {...props} ref={ref} fixed={true}>
      {props?.children}
    </RContainer>
  );
} );

export default ResponsiveContainer;

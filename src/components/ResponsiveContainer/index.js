import React from 'react';
import {Container, useMediaQuery, useTheme} from "@material-ui/core";
import styled from "styled-components";

const RContainer = styled( Container )`
`

const ResponsiveContainer = ({children}) => {
    const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('xxl'))

    return (
        <RContainer  maxWidth={matches ? 'xl' : 'lg'}>
            {children}
        </RContainer>
    );
};

export default ResponsiveContainer;

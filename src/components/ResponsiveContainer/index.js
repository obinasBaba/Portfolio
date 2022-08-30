import React from 'react';
import {Container, useMediaQuery, useTheme} from "@material-ui/core";
import styled from "styled-components";

const RContainer = styled( Container )`
`

const ResponsiveContainer = ({children, ...props}) => {
    const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('xxl'))

    return (
        <RContainer  maxWidth={matches ? 'xl' : 'lg'} {...props}>
            {children}
        </RContainer>
    );
};

export default ResponsiveContainer;

import React from 'react';
import {Container, useMediaQuery, useTheme} from "@material-ui/core";

const ResponsiveContainer = ({children}) => {
    const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('xxl'))


    return (
        <Container  maxWidth={matches ? 'xl' : 'lg'}>
            {children}
        </Container>
    );
};

export default ResponsiveContainer;

import React, { useEffect, useState } from 'react';
import { Container, useMediaQuery, useTheme } from '@material-ui/core';
import clsx from 'clsx';
import * as s from './res-container.module.scss';

const ResponsiveContainer = React.forwardRef((props, ref) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('xl'));

  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    //console.log('matches: ', matches);
  }, [matches]);

  return (
    <Container
      maxWidth={matches ? 'xl' : 'lg'}
      ref={ref}
      // fixed={true}
      className={clsx([s.container])}
      {...props}
    >
      {props?.children}
    </Container>
  );
});

ResponsiveContainer.displayName = 'ResponsiveContainer';

export default ResponsiveContainer;

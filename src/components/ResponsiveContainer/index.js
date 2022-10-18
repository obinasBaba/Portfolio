import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import * as s from './res-container.module.scss';

const ResponsiveContainer = (props) => {

  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    // setRefresh(false);
  }, []);

  return (<div
    {...props}
    className={clsx([s.container, props.className])}

  >
    {props?.children}
  </div>);
};

export default ResponsiveContainer;

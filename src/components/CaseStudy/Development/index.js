import React from 'react';
import { Typography } from '@material-ui/core';
import devPic from './dev.png';
import {
  container,
  device,
  imgWrapper,
  titleContainer,
} from './fullwebview.module.scss';

const Development = () => {
  return (
    <div className={container}>
      <div className={titleContainer}>
        <Typography variant='h1'> Development </Typography>
        <Typography>UI & Components</Typography>
      </div>

      <div className={device}>
        <header>
          <span />
          <span />
          <span />
        </header>
        <div className={imgWrapper}>
          <img src={devPic} alt={'dev pic'} />
        </div>
      </div>
    </div>
  );
};

export default Development;

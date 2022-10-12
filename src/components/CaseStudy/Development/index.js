import React from 'react';
import { Typography } from '@material-ui/core';
import {
  container,
  device,
  imgWrapper,
  titleContainer,
} from './fullwebview.module.scss';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Development = ({ img }) => {
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
          {/*<img src={devPic} alt={'dev pic'} />*/}
          <GatsbyImage
            alt='elements used in the project'
            image={getImage(img)}
          />
        </div>
      </div>
    </div>
  );
};

export default Development;

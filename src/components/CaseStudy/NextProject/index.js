import React from 'react';
import { Typography } from '@material-ui/core';

import { container, wrapper } from './nextproject.module.scss';
import Img from './thumbnail.jpg'

function NextProject ({ titleTxt, url, thumbnailUrl }) {
  return (
    <div className={container}>

      <div className={wrapper}>
        <Typography variant='h1' data-cursor={true}
                    data-cursor-img={Img}>
          Next Project
        </Typography>
      </div>


    </div>
  );
}

export default NextProject;

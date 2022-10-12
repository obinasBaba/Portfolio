import React from 'react';
import { container, wrapper } from './rectangleview.module.scss';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const RectangleView = ({ img }) => (<div className={container}>
    <div className={wrapper}>

      <div data-scroll={true}
           data-scroll-speed='-2.5'
      >
        <GatsbyImage
          alt='design images'
          image={getImage(img)}
        />
      </div>


    </div>
  </div>);

export default RectangleView;

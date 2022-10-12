import React from 'react';
import { container } from './fontused.module.scss';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const FontUsed = ({ fonts }) => {
  return (
    <div className={container}>
      {fonts.map((fontsImg) => (
        // <img src={fontsImg?.publicURL} alt=""  />
        <div key={fontsImg?.publicURL}>
          <GatsbyImage
            objectFit='contain'
            alt='elements used in the project'
            image={getImage(fontsImg)}
          />
        </div>

      ))}
    </div>
  );
};

export default FontUsed;

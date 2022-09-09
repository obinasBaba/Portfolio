import React from 'react';
import ResponsiveContainer from '@components/ResponsiveContainer';
import { Typography } from '@material-ui/core';
import {
  container,
  elementImg,
  text,
  wrapper,
} from './elementsviewsection.module.scss';
import useJuviAssets from '@hooks/queries/juvi/useJuviAssets';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const ElementsViewSection = ({}) => {

  const { elements } = useJuviAssets();

  return (
    <div className={container}>

      <ResponsiveContainer className={wrapper}>

        <div className={text}>
          <Typography variant='h3' gutterBottom>
            elements
          </Typography>

          <Typography style={{ maxWidth: '77ch' }}>
            kim drew a whopping 141 scribble- and 39 stone illustrations to use
            in all kinds of media, including the
            website. they portray elements the band personally feels close to.
          </Typography>
        </div>

      </ResponsiveContainer>

      <div className={elementImg}>

        <GatsbyImage alt='elements used in the project'
                     image={getImage(elements)} />

      </div>


    </div>
  );
};

export default ElementsViewSection;


import React from 'react';
import ResponsiveContainer from '@components/ResponsiveContainer';
import { Typography } from '@material-ui/core';
import *  as s from './elementsviewsection.module.scss';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const ElementsViewSection = ({ elements }) => {

  // const { element1, element2 } = useJuviAssets();

  return (
    <div className={s.container}>

      <ResponsiveContainer className={s.wrapper}>

        <div className={s.text}>
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

      <div className={s.elementImg}>

        <div className={s.col}>
          <div className={s.img_wrapper}>
            <div className={s.img} data-scroll={true} data-scroll-speed='-2'>
              <GatsbyImage alt='elements used in the project'
                           image={getImage(elements[0])} />
            </div>
          </div>

          <div className={s.img_wrapper}>
            <div className={s.img} data-scroll={true} data-scroll-speed='-2'>
              <GatsbyImage alt='elements used in the project'
                           image={getImage(elements[1])} />
            </div>
          </div>

          <div className={s.img_wrapper}>
            <div className={s.img} data-scroll={true} data-scroll-speed='-2'>
              <GatsbyImage alt='elements used in the project'
                           image={getImage(elements[4])} />
            </div>
          </div>


        </div>

        <div className={s.col}>

          <div className={s.img_wrapper}>
            <div className={s.img} data-scroll={true} data-scroll-speed='-2'>
              <GatsbyImage alt='elements used in the project'
                           image={getImage(elements[2])} />
            </div>
          </div>

          <div className={s.img_wrapper}>
            <div className={s.img} data-scroll={true} data-scroll-speed='-2'>
              <GatsbyImage alt='elements used in the project'
                           image={getImage(elements[3])} />
            </div>
          </div>
        </div>


      </div>


    </div>
  );
};

export default ElementsViewSection;


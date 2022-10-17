import React from 'react';
import ResponsiveContainer from '@components/ResponsiveContainer';
import { Typography } from '@material-ui/core';
import * as s from './elementsviewsection.module.scss';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import useJuviAssets from '@hooks/queries/juvi/useJuviAssets';

const ElementsViewSection = ({ elements }) => {
  // const { element1, element2 } = useJuviAssets();

  const {
    element1,
    element2,
    element3,
    element4,
    element5,
  } = useJuviAssets();

  return (
    <div className={s.container}>
      <ResponsiveContainer className={s.wrapper}>
        <div className={s.text}>
          <Typography variant='h1'>
            elements
          </Typography>

          <Typography style={{ maxWidth: '77ch' }}>
            I drew around 30 illustrations to use
            in all kinds of media, including the website. they portray elements
            the band personally feels close to.
          </Typography>
        </div>
      </ResponsiveContainer>

      <div className={s.elementImg}>
        <div className={s.col}>
          <div className={s.img_wrapper}>
            <div data-scroll={true} data-scroll-speed='-2'>
              <GatsbyImage
                alt='elements used in the project'
                image={getImage(element1)}
              />
            </div>
          </div>

          <div className={s.img_wrapper}>
            <div data-scroll={true} data-scroll-speed='-2'>
              <GatsbyImage
                alt='elements used in the project'
                image={getImage(element2)}
              />
            </div>
          </div>

          <div className={s.img_wrapper}>
            <div data-scroll={true} data-scroll-speed='-2'>
              <GatsbyImage
                alt='elements used in the project'
                image={getImage(element5)}
              />
            </div>
          </div>
        </div>

        <div className={s.col}>
          <div className={s.img_wrapper}>
            <div data-scroll={true} data-scroll-speed='-2'>
              <GatsbyImage
                alt='elements used in the project'
                image={getImage(element3)}
              />
            </div>
          </div>

          <div className={s.img_wrapper}>
            <div data-scroll={true} data-scroll-speed='-2'>
              <GatsbyImage
                alt='elements used in the project'
                image={getImage(element4)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementsViewSection;

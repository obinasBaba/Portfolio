import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
  container,
  track,
  trackImg,
  trackWrapper,
  wrapper,
} from './horizontalgallery.module.scss';
import useMarqueeAssets from '@hooks/queries/juvi/useJuviMarqueeAssets';
import { Typography } from '@material-ui/core';
import ResponsiveContainer from '@components/ResponsiveContainer';

const HorizontalGallery = () => {

  const {
    saying,
    cart,
    footer,
    hero_1,
    hero_2,
    list,
    navBar,
    productDetailPage,
    productDetail,
    rare,
    testimonial,
    search,
  } = useMarqueeAssets();

  const imageList1 = [ // useMeo
    saying,
    cart,
    hero_1,
    list,
    rare,
    footer,
  ];

  const imageList2 = [ // useMeo
    navBar,
    hero_2,
    testimonial,
    search,
    productDetail,
    productDetailPage,
    navBar,
  ];

  return (
    <div className={container}>

      <ResponsiveContainer>
        <Typography variant='h1' gutterBottom>
          Individuality
        </Typography>
      </ResponsiveContainer>

      <div className={wrapper}>

        {[imageList1, imageList2].map((list, idx) => (

          <div className={track}
               data-scroll={true}
               data-scroll-direction='horizontal'
               data-scroll-speed={idx % 2 === 0 ? '-1.5' : '1.5'}
               key={idx}
          >
            <div className={trackWrapper}>
              {list.map((imgData) =>

                <div className={trackImg} key={imgData.name}>
                  <GatsbyImage alt={imgData.name}
                               className='image dribble-shots'
                               objectFit='cover'
                               image={getImage(imgData)} />
                </div>,
              )}
            </div>
          </div>

        ))}
      </div>

      <ResponsiveContainer>
        <Typography variant='body1' gutterBottom
                    style={{ marginTop: '3rem', maxWidth: '65ch' }}>
          There are so many more beautiful page design that i unfortunately
          couldn't cover in more detail here. but just pop oer to <i>juvi's
          website</i> and see for yourself.
          There's a lot to discover!
        </Typography>
      </ResponsiveContainer>


    </div>
  );
};

export default HorizontalGallery;


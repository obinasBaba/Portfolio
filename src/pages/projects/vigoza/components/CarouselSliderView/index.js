/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import ResponsiveContainer from '@components/ResponsiveContainer';
import { Typography } from '@material-ui/core';
import {
  container,
  headerText,
  imageView,
  navController,
  swiperContainer,
  swiperItem,
} from './marqueesliderview.module.scss';
import 'swiper/css/pagination';
import 'swiper/css';
import useJuviMarqueeAssets from '@hooks/queries/juvi/useJuviMarqueeAssets';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const CarouselSlider = () => {

  const [, setActiveIdx] = useState(null);
  const { mp, mp2, mp3, mp4, mp5, mp6, mp7, mp8 } = useJuviMarqueeAssets();

  return (
    <div className={container}>

      <ResponsiveContainer className={headerText}>
        <Typography variant='h1'>
          screens
        </Typography>
        <Typography variant='body1'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          assumenda cum facere libero molestiae odio
          praesentium quisquam reprehenderit. Sed, veniam?
        </Typography>
      </ResponsiveContainer>


      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        // centeredSlides={true}
        // centeredSlidesBounds={true}
        loop={true}
        loopAdditionalSlides={3}
        speed={700}
        onAfterInit={(swiper) => setActiveIdx(
          { current: swiper.activeIndex - 1 })}
        onSlideChange={(swiper) => {
          setActiveIdx({
            current: swiper.isEnd ? 0 : swiper.activeIndex - 1,
            prev: swiper.previousIndex - 1,
          });
        }}

        // onSwiper={(swiper) => console.log(swiper)}
        navigation={{
          enabled: true,
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}

        pagination={{
          type: 'progressbar',
        }}

        className={swiperContainer}
      >
        <div className={navController}>
          <p className='swiper-button-prev'>
            h
            <span>c</span>
          </p>
          <div className='swiper-button-next'>
            <p>
              h
              <span>b</span>
            </p>
          </div>
        </div>

        {
          [mp, mp2, mp3, mp4, mp5, mp6, mp7, mp8].map((image, idx) => (
            <SwiperSlide key={idx} className={swiperItem}>

              <div className={imageView} key={idx}>
                <GatsbyImage alt='image' image={getImage(image)} />
              </div>

            </SwiperSlide>
          ))
        }

      </Swiper>

    </div>
  );
};

export default CarouselSlider;


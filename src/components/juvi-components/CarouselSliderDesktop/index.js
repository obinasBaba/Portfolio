/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import ResponsiveContainer from '@components/ResponsiveContainer';
import { Typography } from '@material-ui/core';
import {
  container,
  headerText,
  navController,
  swiperContainer,
  swiperItem,
  vidView,
} from './marqueedesktop.module.scss';
import 'swiper/css/pagination';
import 'swiper/css';
import VideoPlayer from '@components/juvi-components/VideoPlayer';

const CarouselSliderDesktop = ({ videos = [], topTxt }) => {
  const [, setActiveIdx] = useState(null);

  return (
    <div className={container}>
      <ResponsiveContainer className={headerText}>
        <Typography variant='h1'>screens</Typography>
        <Typography variant='body1'>
          {topTxt}
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
        onAfterInit={(swiper) =>
          setActiveIdx({ current: swiper.activeIndex - 1 })
        }
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
          <a>
            <p className='swiper-button-prev'
               data-cursor={true}
               data-cursor-pointer={true}
            >
              h<span>c</span>
            </p>
          </a>
          <div className='swiper-button-next'>
            <a>
              <p>
                h<span>b</span>
              </p>
            </a>
          </div>
        </div>

        {videos.map((vidProps, idx) => (
          <SwiperSlide key={idx} className={swiperItem}>
            <div
              className={vidView}
              data-cursor={true}
              data-cursor-text='Drag'
              data-cursor-color='#02021e'
            >
              <VideoPlayer vidProps={vidProps} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselSliderDesktop;

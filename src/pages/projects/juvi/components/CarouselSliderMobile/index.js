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
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const CarouselSliderMobile = ({ images = [], desc }) => {
  const [, setActiveIdx] = useState(null);

  return (
    <div className={container}>
      <ResponsiveContainer className={headerText}>
        <Typography variant='h1'>{desc.title}</Typography>
        <Typography variant='body1'>{desc.text}</Typography>
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
          <p className='swiper-button-prev'>
            h<span>c</span>
          </p>
          <div className='swiper-button-next'>
            <p>
              h<span>b</span>
            </p>
          </div>
        </div>

        {images.map((image, idx) => (
          <SwiperSlide key={idx} className={swiperItem}>
            <div className={imageView} key={idx}
                 data-cursor={true}
                 data-cursor-text='Drag'
                 data-cursor-color='#02021e'
            >
              <GatsbyImage alt='image' image={getImage(image)} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselSliderMobile;

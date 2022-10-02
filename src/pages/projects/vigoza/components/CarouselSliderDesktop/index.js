/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import ResponsiveContainer from "@components/ResponsiveContainer";
import { Typography } from "@material-ui/core";
import {
  container,
  headerText,
  navController,
  swiperContainer,
  swiperItem,
} from "./marqueedesktop.module.scss";
import "swiper/css/pagination";
import "swiper/css";
import VideoView from "@/pages/projects/vigoza/components/VideoPlayer";

const CarouselSliderDesktop = ({ videos = [] }) => {
  const [, setActiveIdx] = useState(null);

  return (
    <div className={container}>
      <ResponsiveContainer className={headerText}>
        <Typography variant="h1">screens</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          assumenda cum facere libero molestiae odio praesentium quisquam
          reprehenderit. Sed, veniam?
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
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          type: "progressbar",
        }}
        className={swiperContainer}
      >
        <div className={navController}>
          <button className="swiper-button-prev">
            <p>
              h<span>c</span>
            </p>
          </button>

          <button className="swiper-button-next">
            <p>
              h<span>b</span>
            </p>
          </button>
        </div>

        {videos.map((vidProps, idx) => (
          <SwiperSlide key={idx} className={swiperItem}>
            <div
              data-cursor={true}
              data-cursor-text="Drag"
              data-cursor-color="#02021e"
            >
              <VideoView vidProps={vidProps} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselSliderDesktop;

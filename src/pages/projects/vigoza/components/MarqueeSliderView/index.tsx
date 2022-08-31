/* eslint-disable react/no-array-index-key */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
// @ts-ignore
import { container, navController, swiperContainer, swiperItem, vid } from "./marqueesliderview.module.scss";
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import Couples from "./couples_c.webm";

const VPlayer = () => (
  <div className={vid}>
    <header>
      <span />
      <span />
      <span />
    </header>
    <video className="video" preload="metadata" muted={true} loop={true} playsInline={true}>
      <source src={Couples} type="video/webm" />
      {/*<source src="https://dev.jaro.io/jaro/cases/cara/couples_c.mp4" type="video/mp4" />*/}
    </video>
  </div>
);

const MarqueeSliderView = () => {

  const i = "";

  return (
    <div className={container}>


      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        loop={true}
        speed={700}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        navigation={{
          enabled: true,
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }}
        pagination={{
          type: "progressbar"
        }}

        className={swiperContainer}
      >
        <div className={navController}>
          <p className="swiper-button-prev">h
            <span>c</span>
          </p>
          <div className="swiper-button-next">
            <p>h
              <span>b</span>
            </p>
          </div>
        </div>

        {
          Array.from(new Array(4))
            .map((v, idx) => (
              <SwiperSlide key={idx} className={swiperItem}><VPlayer /></SwiperSlide>
            ))
        }

      </Swiper>

    </div>
  );
};

export default MarqueeSliderView;


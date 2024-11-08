import { Swiper, SwiperSlide } from "swiper/react";
//swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// scss connect

import "./SWIPER.css";

// img

// import require modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
// rasm
import rasm1 from "../../assets/carousel1.png";
import rasm2 from "../../assets/carousel2.png";

import React, { memo } from "react";

const SWIPER = () => {
  return (
    <div className="containerMain swiper">
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper container"
      >
        <SwiperSlide className="swiper__slide">
          <div className="flex justify-evenly">
            <img className="swiper__image1" src={rasm1} alt="qwwerty" />
            <img className="swiper__image" src={rasm2} alt="qwwerty" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <div className="flex justify-evenly">
            <img className="swiper__image1" src={rasm1} alt="qwwerty" />
            <img className="swiper__image" src={rasm2} alt="qwwerty" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper__slide">
          <div className="flex justify-evenly">
            <img className="swiper__image1" src={rasm1} alt="qwwerty" />
            <img className="swiper__image" src={rasm2} alt="qwwerty" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default memo(SWIPER);

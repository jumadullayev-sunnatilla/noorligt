import React, { memo } from "react";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import "./Carousel.css";
import rasm from "../../assets/carousel.png";

const Carousel = () => {
  return (
    <div className="containerMain carousel font-manrope">
      <div className="carousel__head">
        <h2 className="carousel__title">Только проверенные бренды</h2>
        <div>
          <button className="carousel__btn">
            <FaArrowLeftLong />
          </button>
          <button className="carousel__btn">
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="carousel__carousel">
        <img src={rasm} alt="" />
        <img src={rasm} alt="" />
        <img src={rasm} alt="" />
        <img src={rasm} alt="" />
        <img src={rasm} alt="" />
        <img src={rasm} alt="" />
        <img src={rasm} alt="" />
        <img src={rasm} alt="" />
        <img src={rasm} alt="" />
        <img src={rasm} alt="" />
        <img src={rasm} alt="" />
        <img src={rasm} alt="" />
      </div>
    </div>
  );
};

export default memo(Carousel);

import React, { memo } from "react";
import SWIPER from "../../component/swiper/SWIPER.jsx";
import Product from "../../component/product/Product.jsx";

const Home = () => {
  return (
    <div className="containerMain">
      <SWIPER />
      <Product />
    </div>
  );
};

export default memo(Home);

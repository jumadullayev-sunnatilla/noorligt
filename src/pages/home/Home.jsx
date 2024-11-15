import React, { memo } from "react";
import SWIPER from "../../component/swiper/SWIPER.jsx";
import Product from "../../component/product/Product.jsx";
import Carousel from "../../component/corousel/Carousel.jsx";
import Catalog from "../../component/catalog/Catalog.jsx";

const Home = () => {
  return (
    <div className="containerMain">
      {/* <SWIPER /> */}
      <Catalog />
      <Carousel />
      <Product />
    </div>
  );
};

export default memo(Home);

import React, { memo } from "react";
import SWIPER from "../../component/swiper/SWIPER.jsx";
import Product from "../../component/product/Product.jsx";
import Carousel from "../../component/corousel/Carousel.jsx";
import Catalog from "../../component/catalog/Catalog.jsx";
import { useFetch } from "../../hooks/useFEtch.js";

const Home = () => {
  const { data, error, loading } = useFetch(`/products`);

  return (
    <div className="containerMain">
      {/* <SWIPER /> */}
      <Catalog />
      <Carousel />
      <Product data={data} loading={loading} error={error} />
    </div>
  );
};

export default memo(Home);

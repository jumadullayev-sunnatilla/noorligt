import React from "react";
import Product from "../../component/product/Product";
import { useFetch } from "../../hooks/useFEtch";
import noInternet from "../../assets/noInternet.png";

const ProductPage = () => {
  const { data, error, loading } = useFetch(`/products`);

  return (
    <div className="containerMain">
      {error && <img className="product__connect" src={noInternet} />}
      <Product
        data={data}
        loading={loading}
        error={error}
        count={data?.length}
        specialPage={true}
      />
    </div>
  );
};

export default ProductPage;

import React from "react";
import { useStateValue } from "../../context";
import Product from "../../component/product/Product";

const Favourites = () => {
  const [state, dispatch] = useStateValue();
  console.log(state.wishlist);
  return (
    <div className="containerMain">
      <h1>Lorem, ipsum dolor.</h1>
      <Product data={state.wishlist} loading={false} />
    </div>
  );
};

export default Favourites;

import React from "react";
import { useStateValue } from "../../context";
import Product from "../../component/product/Product";

const Favourites = () => {
  const [state, dispatch] = useStateValue();

  return (
    <div className="containerMain">
      {state.wishlist.lengg}
      <Product data={state.wishlist} loading={false} />
    </div>
  );
};

export default Favourites;

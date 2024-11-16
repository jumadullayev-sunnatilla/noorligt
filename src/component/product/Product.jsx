import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { SlBasket } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import "./Product.scss";
import Loading from "../loading/Loading";
import Model from "../model/Model.jsx";
import { Link, useInRouterContext } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import noInternet from "../../assets/noInternet.png";

const Product = ({ data, loading, error }) => {
  const count = () => console.log("salom");
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
    AOS.init();
  }, []);

  const productItem = data?.map((item) => (
    <div key={uuidv4()} className="product__card">
      <div className="relative">
        <button onClick={() => count()} className="product__wish">
          <FaRegHeart />
        </button>
        <img
          onClick={() => {
            setSelectedProduct(item);
            setShow(true);
          }}
          className="product__img"
          src={item.url}
          alt=""
        />
      </div>
      <Link to={`/product/${item.id}`} className={"product__detail"}>
        <h3 className="product__title font-manrope">{item.title}</h3>

        <div className="product__main">
          <div className="product__prices">
            <p className="product__oldPrice">{item.previousprice} $$$</p>
            <p className="product__discoutPrice">{item.discountprice}$$$</p>
          </div>

          <button className="product__basket">
            <SlBasket />
          </button>
        </div>
      </Link>
    </div>
  ));
  console.log(data);

  return (
    <>
      <div className="product font-manrope">
        <h2 className="product__titleM">Product</h2>
        {loading && <Loading />}
        {error && <img className="product__connect" src={noInternet} />}
        {show && selectedProduct && (
          <Model close={setShow}>
            <div className="product__modal">
              <img
                className="product__modal-img"
                src={selectedProduct.url}
                alt=""
              />
              <h1 className="product__modal-title">{selectedProduct.title}</h1>
            </div>
          </Model>
        )}

        <div className="product__wrapper">{productItem}</div>
      </div>
    </>
  );
};

export default Product;

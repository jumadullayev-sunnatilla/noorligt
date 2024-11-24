import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { SlBasket } from "react-icons/sl";
import { FaRegHeart, FaHeart, FaLongArrowAltRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "./Product.scss";
import Loading from "../loading/Loading";
import Model from "../model/Model.jsx";
import { Link, NavLink, useInRouterContext } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import noInternet from "../../assets/noInternet.png";
import { useStateValue } from "../../context/index.jsx";

const Product = ({ data, loading, error, count, specialPage }) => {
  const [state, dispatch] = useStateValue();
  console.log(state);

  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
    AOS.init();
  }, []);
  const limitedProduct = data?.slice(0, count);

  const productItem = limitedProduct?.map((item) => (
    <div key={uuidv4()} className="product__card">
      <div className="relative">
        <button
          onClick={() => dispatch({ type: "ADD__WISHLIST", payload: item })}
          className="product__wish"
        >
          {state.wishlist?.some((i) => i.id === item.id) ? (
            <FaHeart />
          ) : (
            <FaRegHeart />
          )}
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
      </Link>

      <div className="product__main">
        <div className="product__prices">
          <p className="product__oldPrice">{item.previousprice} $$$</p>
          <p className="product__discoutPrice">{item.discountprice}$$$</p>
        </div>

        <button
          onClick={() => dispatch({ type: "ADD__CART", payload: item })}
          className="product__basket"
        >
          <SlBasket />
        </button>
      </div>
    </div>
  ));

  return (
    <>
      <div className="product font-manrope">
        <div className="product__top">
          <h1 className="product__top-title">Продукт</h1>

          <NavLink to={"/product"}>
            <button
              className={`product__top-btn ${
                specialPage && `product__top-btn-none`
              }`}
            >
              <span>Весь продукт</span>
              <FaLongArrowAltRight />
            </button>
          </NavLink>
        </div>
        {error && <img className="product__connect" src={noInternet} />}
        {show && selectedProduct && (
          <Model close={setShow}>
            <div className="product__modal">
              <button
                onClick={() => setShow(false)}
                className="product__modal-close"
              >
                <IoClose />
              </button>
              <img
                className="product__modal-img"
                src={selectedProduct.url}
                alt=""
              />
              <h1 className="product__modal-title">{selectedProduct.title}</h1>
              <p className="product__modal-desc">
                {selectedProduct.description}
              </p>
              <NavLink
                to={`/product/${selectedProduct.id}`}
                className={`product__modal-link`}
              >
                <button className="product__modal-btn">
                  <span>Смотреть больше</span>
                </button>
              </NavLink>
            </div>
          </Model>
        )}

        <div className="product__wrapper">{productItem}</div>
      </div>
    </>
  );
};

export default Product;

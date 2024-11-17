import React from "react";
import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./Catalog.scss";
import { CATALOG__LIST } from "../../static";

const Catalog = ({ count, specialPage }) => {
  const limitedCatalog = CATALOG__LIST.slice(0, count);

  const catalogCard = limitedCatalog.map((item, key) => (
    <div className="catalog__wrapper-card" key={key}>
      <div className="catalog__wrapper-main">
        <h2 className="catalog__wrapper-title">{item.title}</h2>
        <NavLink>
          <div className="catalog__wrapper-link">
            <span>От 540₽</span>
            <FaLongArrowAltRight />
          </div>
        </NavLink>
      </div>
      <img className="catalog__wrapper-img" src={item.image} alt="" />
    </div>
  ));
  return (
    <div className="containerMain catalog font-manrope">
      <div className="catalog__top">
        <h1 className="catalog__top-title">Каталог</h1>
        <NavLink to={"/catalog"}>
          <button
            className={`catalog__top-btn ${
              specialPage && `catalog__top-btn-none`
            }`}
          >
            <span>Весь каталог</span>
            <FaLongArrowAltRight />
          </button>
        </NavLink>
      </div>
      <div className="catalog__wrapper">{catalogCard}</div>
    </div>
  );
};

export default Catalog;

import React from "react";
import "./deliveryJob.css";
import { NavLink } from "react-router-dom";
import { DELIVERY__LIST } from "../../static";

const DeliveryJob = () => {
  const deliveryItem = DELIVERY__LIST.map((item, key) => (
    <div key={key} className="delievry__item">
      <h2 className="delivery__item-title font-manrope text-2xl font-bold mb-5">
        {item.title}
      </h2>
      <p className="delivery__item-text font-manrope">{item.text}</p>
    </div>
  ));

  return (
    <div className="containerMain delivery">
      <div className="return__head">
        <div className="return__return font-manrope">
          <NavLink className={"return__home"} to={"/"}>
            Главная
          </NavLink>
          <p> {">"} </p>
          <p className="return__name">Доставка и оплата</p>
        </div>

        <h1 className="return__title font-manrope">Доставка и оплата</h1>
      </div>
      <div className="delivery__main">{deliveryItem}</div>
    </div>
  );
};

export default DeliveryJob;

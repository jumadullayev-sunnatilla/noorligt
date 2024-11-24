import React from "react";
import KorzinkaCart from "../../component/KorzinkaCart/KorzinkaCart";
import { NavLink } from "react-router-dom";
import { useStateValue } from "../../context";
import emptyCart from "../../assets/emptyCart.png";

const KorzinkaPage = () => {
  const [state, dispatch] = useStateValue();
  return (
    <div className="containerMain">
      <div className="return__return font-manrope">
        <NavLink className={"return__home"} to={"/"}>
          Главная
        </NavLink>
        <p> {">"} </p>
        <p className="return__name">Корзина</p>
      </div>
      {state.cart.length > 0 ? (
        <KorzinkaCart />
      ) : (
        <img className="empty__cart" src={emptyCart} alt="emptyCart" />
      )}
    </div>
  );
};
export default KorzinkaPage;

import React from "react";
import KorzinkaCart from "../../component/KorzinkaCart/KorzinkaCart";
import { NavLink } from "react-router-dom";
import { useStateValue } from "../../context";
import emptyCart from "../../assets/emptyCart.png";
import numeral from "numeral";
import "./KorzinkaPage.scss";
const KorzinkaPage = () => {
  const [state, dispatch] = useStateValue();
  console.log(state.cart);
  let totalSumm = 0;
  let totalCount = 0;
  for (let index = 0; index < state.cart.length; index++) {
    const element = state.cart[index].discountprice * state.cart[index].amount;
    totalSumm += element;
    totalCount += state.cart[index].amount;
  }
  console.log(totalSumm);
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
      {totalSumm ? (
        <div className="flex justify-between items-center ">
          <div className="">
            <h2 className="totalSumm">
              Total price: <strong>{numeral(totalSumm).format(0, 0)}</strong>
            </h2>
            <h2 className="totalCount">
              Total number of products: <strong>{totalCount}</strong>
            </h2>
          </div>
          <button className="navbar__category-btn px-10 py-5 rounded-3xl bg-[#454545] text-white font-semibold hover:bg-slate-700">
            Rasmiylashtirish
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default KorzinkaPage;

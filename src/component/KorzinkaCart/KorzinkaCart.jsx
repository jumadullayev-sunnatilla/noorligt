import React from "react";
import "./KorzinkaCart.scss";
import { useStateValue } from "../../context";
import { MdOutlineDeleteForever } from "react-icons/md";

const KorzinkaCart = () => {
  const [state, dispatch] = useStateValue();
  console.log(state);
  const cart = state.cart.map((pro) => (
    <>
      <div className="korzinka__cart" key={pro.id}>
        <div className="korzinka__cart-image">
          <img className="korzinka__cart-img" src={pro.url} alt="" />
        </div>
        <div className="korzinka__cart-data">
          <h2 className="korzinka__cart-title">{pro.title}</h2>
          <strong className="korzinka__cart-all-price">
            {(pro.discountprice * pro.amount).toFixed(2)} $
          </strong>
        </div>
        <p className="korzinka__cart-desc">{pro.description}</p>
        <div className="korzinka__cart-count">
          <button
            disabled={pro.amount <= 1}
            onClick={() => dispatch({ type: "DEC__CART", payload: pro })}
          >
            -
          </button>
          <span>{pro.amount}</span>
          <button
            disabled={pro.amount >= pro.stock}
            onClick={() => dispatch({ type: "ADD__CART", payload: pro })}
          >
            +
          </button>
        </div>
        <button
          className="korzinka__cart-del"
          onClick={() => dispatch({ type: "DEL__CART", payload: pro })}
        >
          <MdOutlineDeleteForever />
        </button>
      </div>
      <hr />
    </>
  ));
  return <div className="korzinka containerMain font-manrope">{cart}</div>;
};

export default KorzinkaCart;

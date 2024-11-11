import React, { useState } from "react";
import "./Deatil.css";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFEtch";
import { CiHeart } from "react-icons/ci";

const Detail = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`/products/${id}`);
  console.log(data);
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((p) => p - 1);
  };
  const handleDecrement = () => {
    setCount((p) => p + 1);
  };
  return (
    <div className="containerMain detail font-manrope">
      <img className="detail__img" src={data?.thumbnail} alt={data?.title} />
      <div className="detail__data">
        <h1 className="detail__name">{data?.title}</h1>
        <div className="detail__stock">
          <p>scott</p>
          <p>articul:{data?.category}</p>
          <p>
            {data?.stock > 0 ? `В наличии: ${data?.stock} ` : "не осталось"}
          </p>
        </div>
        <p className="detail__price">{data?.price} $$$</p>
        <p className="detail__desc">{data?.description}</p>
        <div className="detail__market">
          <div className="detail__count">
            <button
              onClick={() => handleIncrement()}
              className="detail__counter"
            >
              -
            </button>
            <span>{count}</span>
            <button
              onClick={() => handleDecrement()}
              className="detail__counter"
            >
              +
            </button>
          </div>
          <button className="detail__decBtn">В корзину</button>
          <CiHeart className="detail__heart" />
        </div>
      </div>
    </div>
  );
};

export default Detail;

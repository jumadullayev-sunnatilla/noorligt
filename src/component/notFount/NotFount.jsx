import React from "react";
import { useNavigate } from "react-router-dom";
import "./notFout.css";

const NotFount = () => {
  const navigation = useNavigate();
  return (
    <div className="containerMain notFount">
      <h1 className="notFount__title font-manrope">404</h1>
      <p className="notFount__text font-manrope text-2xl font-medium">
        Похоже, ничего не нашлось :(
      </p>
      <button
        onClick={() => navigation("/")}
        className="notFount__btn font-manrope"
      >
        go home
      </button>
    </div>
  );
};

export default NotFount;

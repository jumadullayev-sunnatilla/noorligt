import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { COMPANY__HEAD__LIST, COMPANY__TEXT } from "../../static";
import "./Company.css";

const Company = () => {
  const company__head__list = COMPANY__HEAD__LIST.map((item, key) => (
    <div className="company__head__list" key={key}>
      <h2 className="text-6xl font-bold text-slate-600">{item.count}+</h2>
      <p>{item.text}</p>
    </div>
  ));
  const company__text = COMPANY__TEXT.map((item, key) => (
    <p className="text-lg font-manrope font-medium" key={key}>
      {item}
    </p>
  ));
  return (
    <div className="containerMain font-manrope mt-5 company">
      <div className="company__head p-5">
        <div className="return__return font-manrope">
          <NavLink className={"return__home"} to={"/"}>
            Главная
          </NavLink>
          <p> {">"} </p>
          <p className="return__name">О компании</p>
        </div>

        <h1 className="return__title font-manrope">О компании</h1>
        <div className="">{company__head__list}</div>
      </div>
      <div className="company__text">{company__text}</div>
    </div>
  );
};

export default memo(Company);

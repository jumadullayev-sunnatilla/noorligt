import React, { memo } from "react";
import "./reurn.css";
import { NavLink } from "react-router-dom";
import { RETURN__LIST } from "../../static";

const Return = () => {
  const returnItem = RETURN__LIST.map((item, key) => (
    <li key={key} className="return__item">
      {item}
    </li>
  ));
  return (
    <div className="containerMain return">
      <div className="return__head">
        <div className="return__return font-manrope">
          <NavLink className={"return__home"} to={"/"}>
            Главная
          </NavLink>
          <p> {">"} </p>
          <p className="return__name">Возврат</p>
        </div>
        <h1 className="return__title font-manrope">Возврат</h1>
      </div>
      <div className="return__main">
        <h2 className="return__main-title">
          Обмен и возврат по желанию покупателя
        </h2>
        <p className="">
          Если товар по каким-то причинам не подошел вам, вы имеете право
          вернуть его или обменять на другой в течение 7 дней* с момента покупки
          при соблюдении следующих условий
        </p>
        <ul className="return__list">{returnItem}</ul>
      </div>
    </div>
  );
};

export default memo(Return);

import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { tel } from "../../static";
import "./footer.scss";

import visa from "../../assets/visa.png";
import logo from "../../assets/norlihtIcon.png";
// import {} from " ";

const Footer = () => {
  return (
    <footer>
      <div className="footer containerMain">
        <div className="footer__bolim">
          <div className="flex items-center gap-2">
            <img className="w-7 h-7" src={logo} alt="norligtoon png" />
            <NavLink className={"text-3xl font-medium header__logo"} to={"/"}>
              NORNLIGHT
            </NavLink>
          </div>
          <h4 className="text-black font-bold">{tel}</h4>
          <img className="footer__visa" src={visa} alt="" />
          <p>Политика конфидециальности</p>
          <p>Политика конфидециальности</p>
        </div>
        <div className="footer__bolim footer__main">
          <h2 className="text-xl text-black font-bold">Покупателям</h2>
          <ul className="flex gap-5 header__nav flex-col">
            <li>
              <NavLink className={"header__item"} to={"/about"}>
                О компании
              </NavLink>
            </li>
            <li>
              <NavLink className={"header__item"} to={"/delivery"}>
                Доставка и оплата
              </NavLink>
            </li>
            <li>
              <NavLink className={"header__item"} to={"/return"}>
                Возврат
              </NavLink>
            </li>

            <li>
              <NavLink className={"header__item"} to={"/guarantees"}>
                Гарантии
              </NavLink>
            </li>

            <li>
              <NavLink className={"header__item"} to={"/about"}>
                Блог
              </NavLink>
            </li>
            <li>
              <NavLink className={"header__item"} to={"/contact"}>
                Контакты
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer__bolim footer__main">
          <h2 className="text-xl text-black font-bold">Товары</h2>
          <ul className="flex gap-5 header__nav flex-col">
            <li>
              <NavLink>Люстры</NavLink>
            </li>
            <li>
              <NavLink>Бра</NavLink>
            </li>
            <li>
              <NavLink>Торшеры</NavLink>
            </li>

            <li>
              <NavLink>Светильники</NavLink>
            </li>

            <li>
              <NavLink>Комплектуюшие</NavLink>
            </li>
            <li>
              <NavLink>Настольные лампы</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer__bolim footer__main">
          <h2 className="text-xl text-black font-bold">Товары</h2>
          <ul className="flex gap-5 header__nav flex-col">
            <li>
              <NavLink>Люстры</NavLink>
            </li>
            <li>
              <NavLink>Бра</NavLink>
            </li>
            <li>
              <NavLink>Торшеры</NavLink>
            </li>

            <li>
              <NavLink>Светильники</NavLink>
            </li>

            <li>
              <NavLink>Комплектуюшие</NavLink>
            </li>
            <li>
              <NavLink>Настольные лампы</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);

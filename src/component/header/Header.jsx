import React, { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import { slide as Menu } from "react-burger-menu";
// rasmlar
import logo from "../../assets/norlihtIcon.png";
import gamburger__icon from "../../assets/gamburger__icon.png";
import { CiSearch, CiHeart, CiMenuFries } from "react-icons/ci";
import { TbAntennaBars5 } from "react-icons/tb";
import { SlBasket } from "react-icons/sl";
import rasmGamburger from "../../assets/header__gamburger.png";
import { tel } from "../../static";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="containerMain header">
      <div className="flex justify-between  text-[#A2A2A2] font-manrope font-semibold text-sm header__navigation">
        <ul className="flex gap-7 header__nav">
          <li>
            <NavLink className={"header__item"} to={"/about"}>
              o компании
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
            <NavLink className={"header__item"} to={"*"}>
              Блог
            </NavLink>
          </li>
          <li>
            <NavLink className={"header__item"} to={"/contact"}>
              Контакты
            </NavLink>
          </li>
        </ul>
        <div className="flex gap-2 items-center">
          <p className="text-black">{tel}</p>
          <p>Заказать звонок</p>
        </div>
      </div>
      <div className="font-manrope flex justify-between items-center mt-2 header__section">
        <div className="flex items-center gap-2">
          <button onClick={() => toggleMenu()} className="header__gamburger">
            <img className="" src={rasmGamburger} alt="" />
          </button>
          <img className="w-7 h-7" src={logo} alt="norligtoon png" />
          <NavLink className={"text-3xl font-medium header__logo"} to={"/"}>
            NORNLIGHT
          </NavLink>
        </div>
        <div className="header__about-media">
          <CiHeart />
          <TbAntennaBars5 />
        </div>
        <div
          id="header__catalog"
          className=" flex  bg-[#454545] text-white py-3  px-5 gap-1 items-center rounded-3xl hover:cursor-pointer"
        >
          <CiMenuFries />
          <p>Каталог</p>
        </div>
        <div
          id="header__input"
          className="flex justify-between w-[600px] px-4 py-2 border border-black rounded-3xl "
        >
          <input className="w-max-96 border-none input__header" type="text" />
          <button>
            <CiSearch />
          </button>
        </div>
        <div className="flex gap-3 header__about">
          <div className="flex items-center flex-col gap-1">
            <CiHeart />
            <p className="header__text_p">Избранное</p>
          </div>
          <div className="flex items-center flex-col g-1 header__turn">
            <TbAntennaBars5 />
            <p>Сравнение</p>
          </div>
          <div className="flex items-center flex-col gap-1">
            <SlBasket />
            <p className="header__text_p">Корзина</p>
          </div>
        </div>
      </div>
      <Menu
        left
        isOpen={isOpen}
        onStateChange={({ isOpen }) => setIsOpen(isOpen)}
        customBurgerIcon={false}
        width={"50%"}
        styles={{
          bmMenu: { background: "#333" },
          bmItemList: {
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          },
        }}
      >
        <div className="sidebar-content">
          <ul className="flex flex-col gap-7 header__nav">
            <li>
              <NavLink className={"header__item"} to={"/"}>
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
      </Menu>
    </header>
  );
};

export default memo(Header);
{
  /* <ul className="flex gap-4">
<li>
  <NavLink className={"header__item"} to={"/"}>
    Home
  </NavLink>
</li>
<li>
  <NavLink className={"header__item"} to={"/about"}>
    About
  </NavLink>
</li>
<li>
  <NavLink className={"header__item"} to={"/contact"}>
    contact
  </NavLink>
</li>
</ul> */
}

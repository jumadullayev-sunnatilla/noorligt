import React, { memo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.scss";
import { IoMdCloseCircle } from "react-icons/io";
// rasmlar
import { MdOutlineAccountCircle } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import logo from "../../assets/norlihtIcon.png";
import gamburger__icon from "../../assets/gamburger__icon.png";
import { CiSearch, CiHeart, CiMenuFries, CiHome } from "react-icons/ci";
import { TbAntennaBars5 } from "react-icons/tb";
import { SlBasket } from "react-icons/sl";
import rasmGamburger from "../../assets/header__gamburger.png";
import { tel } from "../../static";
import { useStateValue } from "../../context";

const Header = () => {
  const [state, dispatch] = useStateValue();
  console.log(state.wishlist.length);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="containerMain header font-manrope">
      <div className="header__wrapper">
        {/* subheader start */}
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="header__overlay"
          ></div>
        )}
        <div className={`sub-header ${isOpen ? "open" : ""}`}>
          <div className="sub-header__close">
            <button
              onClick={() => setIsOpen(false)}
              className="sub-header__close-btn"
            >
              <IoMdCloseCircle />
            </button>
          </div>
          <ul className="sub-header__collection">
            <li>
              <NavLink className={"sub-header__link"} to={"/about"}>
                <span>o компании</span>
              </NavLink>
            </li>
            <li>
              <NavLink className={"sub-header__link"} to={"/delivery"}>
                <span>Доставка и оплата</span>
              </NavLink>
            </li>
            <li>
              <NavLink className={"sub-header__link"} to={"/return"}>
                <span>Возврат</span>
              </NavLink>
            </li>

            <li>
              <NavLink className={"sub-header__link"} to={"/guarantees"}>
                <span>Гарантии</span>
              </NavLink>
            </li>

            <li>
              <NavLink className={"sub-header__link"} to={"/blog"}>
                <span>Блог</span>
              </NavLink>
            </li>
            <li>
              <NavLink className={"sub-header__link"} to={"/contact"}>
                <span>Контакты</span>
              </NavLink>
            </li>
          </ul>
          <a href="tel:998 99 908 23 06" className="sub-header__phone">
            {tel}
            <span>Заказать звонок</span>
          </a>
        </div>
        {/* subheader end */}
        {/*_________________________________________ */}
        {/* navbar start */}
        <nav className="navbar">
          <NavLink to={"/"} className="navbar__logo">
            <button
              onClick={() => setIsOpen(true)}
              className="navbar__gamburger"
            >
              <img className="" src={rasmGamburger} alt="" />
            </button>
            <img className="w-8 h-8" src={logo} alt="norligtoon png" />

            <span>NORNLIGHTS</span>
          </NavLink>
          <NavLink to={"/catalog"}>
            <button className="navbar__category-btn">
              <CiMenuFries />
              <span>Каталог</span>
            </button>
          </NavLink>
          <div id="" className="navbar__search">
            <input className="" type="text" placeholder="Поиск по товарам" />

            <button>
              <CiSearch />
            </button>
          </div>
          <div className="navbar__actions">
            <Link to={`/`} className="navbar__actions-link  none">
              <CiHome />
              <span>Home</span>
            </Link>
            <Link to={"/favourites"} className="navbar__actions-link">
              <div>
                <CiHeart />
              </div>

              <span>
                Избранное{" "}
                {state.wishlist.length > 0 && (
                  <sup className="navbar__sup">{state.wishlist.length}</sup>
                )}
              </span>
            </Link>
            {state.token ? (
              <Link to={`/admin`} className="navbar__actions-link">
                <MdOutlineAccountCircle />
                <span>Admin</span>
              </Link>
            ) : (
              <Link to={"/admin"} className="navbar__actions-link">
                <FiLock />
                <span>Sign in</span>
              </Link>
            )}

            <Link to={`/korzinka`} className="navbar__actions-link">
              <SlBasket />
              <span>
                Корзина
                {state.cart.length > 0 && (
                  <sup className="navbar__sup">{state.cart.length}</sup>
                )}
              </span>
            </Link>
          </div>
        </nav>
        {/* navbar end */}
      </div>
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

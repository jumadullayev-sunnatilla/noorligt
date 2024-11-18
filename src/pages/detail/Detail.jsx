import React from "react";
import { useParams, NavLink, Link } from "react-router-dom";
import {
  FaRegHeart,
  FaHeart,
  FaWhatsapp,
  FaTelegram,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { PiPhoneCallFill } from "react-icons/pi";
import { useFetch } from "../../hooks/useFEtch.js";
import "./Detail.scss";
import { MdOutlineNavigateNext } from "react-icons/md";
import { useStateValue } from "../../context/index.jsx";

const Detail = () => {
  const [state, dispatch] = useStateValue();
  const params = useParams();
  const { data, error, loading } = useFetch(`products/${params.id}`);

  return (
    <>
      <div className="containerMain font-manrope home-link">
        <NavLink to={"/"}>
          <span className="">
            Главная <MdOutlineNavigateNext />{" "}
          </span>
        </NavLink>
      </div>
      <div className="containerMain detail font-manrope">
        <img className="detail-img" src={data?.url} alt="" />
        <div className="detail-main">
          <h2 className="detail-title">{data?.title}</h2>
          <div className="detail__stock">
            <div className="detail__stock-main">
              <p>Stock</p>
              <p>Артикул : 7655-188</p>

              {data?.stock ? (
                <span className="detail__stock-main-true">В наличии</span>
              ) : (
                <span>не осталось</span>
              )}
            </div>
            <div className="detail__stock-link">
              <Link to={"https://t.me/sunnatilla_jumadullayev"}>
                <FaTelegram />
              </Link>

              <Link to={"https://www.instagram.com/jumadullayev__/"}>
                <FaInstagram />
              </Link>

              <Link to={"https://twitter.com/jumaduullayev"}>
                <FaTwitter />
              </Link>

              <Link to={"tel:+998999082306"}>
                <PiPhoneCallFill />
              </Link>

              <Link to={"https://www.whatsapp.com/"}>
                <FaWhatsapp />
              </Link>
              <Link
                to={"#"}
                onClick={() =>
                  window.open(
                    "https://github.com/jumadullayev-sunnatilla",
                    "_blank"
                  )
                }
              >
                <FaGithub />
              </Link>
            </div>
          </div>
          <div className="detail__prise">
            <p className="product__discoutPrice detail__prise-prew">
              {data?.discountprice}$$$
            </p>
            <p className="product__oldPrice detail__prise-old">
              {data?.previousprice} $$$
            </p>
          </div>
          <p className="detail-desc">{data?.description}</p>
          <div className="detail__bottom">
            <div className="detail__bottom-count">
              <button className="detail__bottom-count-dec">-</button>
              <p className="detail__bottom-count-data">1</p>
              <button className="detail__bottom-count-incc">+</button>
            </div>
            <button className="detail__bottom-basket">В корзину</button>
            <button
              onClick={() => dispatch({ type: "ADD__WISHLIST", payload: data })}
              className="detail__bottom-favoruites"
            >
              {state.wishlist?.some((i) => i.id === data?.id) ? (
                <FaHeart />
              ) : (
                <FaRegHeart />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;

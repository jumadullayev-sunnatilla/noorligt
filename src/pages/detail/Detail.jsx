import React from "react";
import { useParams } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useFetch } from "../../hooks/useFEtch.js";
import "./Detail.scss";

const Detail = () => {
  const params = useParams();
  const [state, dispatch] = useStateValue();
  const { data, error, loading } = useFetch(`products/${params.id}`);

  return (
    <div className="containerMain detail">
      <img className="detail-img" src={data?.url} alt="" />
      <div className="detail-main">
        <h2 className="detail-title">{data?.title}</h2>
        <p className="detail-desc">{data?.description}</p>
        <button className="detail-favoruites">
          <FaRegHeart />
        </button>
      </div>
    </div>
  );
};

export default Detail;

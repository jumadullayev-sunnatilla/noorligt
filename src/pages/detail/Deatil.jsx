import React from "react";
import { useParams } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useFetch } from "../../hooks/useFEtch";

const Detail = () => {
  const params = useParams();

  const { data, error, loading } = useFetch(`products/${params.id}`);
  console.log(data);

  console.log(params.id);
  return (
    <div className="containerM py-10 flex justify-evenly">
      <img className="w-80 h-80 object-contain" src={data?.url} alt="" />
      <div className="w-[500px] border-solid border-2flex flex-col gap-2">
        <h2 className="font-extrabold text-red-800 text-2xl">{data?.title}</h2>
        <p className="text-lg">{data?.description}</p>
        <button className="pl-[450px]">
          <FaRegHeart />
        </button>
      </div>
    </div>
  );
};

export default Detail;

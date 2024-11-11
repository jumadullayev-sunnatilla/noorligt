//ss
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { FaPlusSquare, FaStar } from "react-icons/fa";
import { ImStarEmpty } from "react-icons/im";
import { ToastContainer, toast, Flip, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../loading/Loading";
import { useFetch } from "../../hooks/useFEtch";
import { NavLink } from "react-router-dom";

const Product = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const count = 3;
  const [offset, setOffset] = useState(1);
  const [category, setCategory] = useState("/");
  const { data, error, loading } = useFetch(
    `/products${category}`,
    { limit: offset * count },
    [offset, category]
  );
  const { data: categories } = useFetch("/products/category-list");

  const productList = data?.products?.map((pro) => {
    // console.log(pro);
    // productStart
    const number = Math.floor(pro.rating);
    const rows = [];
    const emptyRow = [];
    // product start rating
    for (let i = 0; i < number; i++) {
      // note: we are adding a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
      rows.push(<FaStar key={i} />);
    }
    const productStar = rows?.map((item) => {
      return item;
    });
    // product empty star
    for (let i = 0; i < 5 - number; i++) {
      // note: we are adding a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
      emptyRow.push(<ImStarEmpty key={i} />);
    }
    const productEmptyStar = emptyRow?.map((item) => item);

    return (
      <div
        data-aos="flip-right"
        className="w-80 p-2 border border-slate-600 rounded-tl-lg rounded-br-lg flex flex-col justify-between containerMain"
        key={pro.id}
      >
        <NavLink to={`/product/${pro?.id}`}>
          <img
            src={pro.images[0]}
            className="w-full h-64 rounded-tl-2lg rounded-br-2lg "
            alt={pro.description}
          />
        </NavLink>
        <div className="flex justify-between items-center">
          <h4 className="font-serif font-semibold text-xl">{pro.title}</h4>
          <strong className="text-red-600 text-xl"> {pro.price}$ </strong>
        </div>
        <p className="p-3">
          There are many things are needed to start the Fast Food Business.
        </p>
        <div className="flex justify-between pb-2 text-red-600">
          <button
            onClick={() =>
              toast.success("Savatga Qoshildi!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Flip,
              })
            }
            className=" text-3xl"
          >
            <FaPlusSquare />
          </button>
          <div className="text-2xl flex gap-1">
            {productStar}
            {productEmptyStar}
          </div>
        </div>
      </div>
    );
  });
  const categoriesList = categories?.map((item) => {
    return (
      <li
        onClick={(e) => setCategory(`/category/${item}`)}
        className="p-2 bg-slate-400 rounded-md whitespace-nowrap cursor-pointer hover:bg-slate-300"
        key={item}
      >
        {item}
      </li>
    );
  });
  console.log(category);

  return (
    <div className="container1 flex flex-col gap-4 justify-center items-center pt-11">
      <p className="text-base text-red-600 font-medium">MENU</p>
      <h3 className="font-semibold text-4xl">Food Full of treaty Love</h3>
      <p className="font-light text-base text-center w-[700px]">
        There are many things are needed to start the Fast Food Business. You
        need not only Just Food Stalls with Persons but also specialized
        equipment, Skills to manage Customers,{" "}
      </p>
      <ul className="container1 flex gap-3  p-6 overflow-auto">
        <li
          onClick={() => setCategory("/")}
          className="p-2 bg-slate-400 rounded-md whitespace-nowrap cursor-pointer hover:bg-slate-300"
        >
          All
        </li>
        {categoriesList}
      </ul>
      <div className="flex flex-wrap gap-5 justify-start ">{productList}</div>
      {loading && <Loading />}
      {offset * count < data?.total && (
        <button
          disabled={loading}
          onClick={() => setOffset((p) => p + 1)}
          className="p-3 bg-slate-700 block mx-auto my-3 border rounded-lg hover:cursor-pointer; hover:bg-slate-600 disabled:bg-slate-500 disabled:cursor-not-allowed"
        >
          {loading ? "Loading...." : "See more"}
        </button>
      )}
      <ToastContainer />
    </div>
  );
};

export default Product;

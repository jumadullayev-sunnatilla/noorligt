import React, { useEffect, useState } from "react";
import axios from "axios";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageElement = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingDel, setLoadingDel] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://673206d97aaf2a9aff1327fc.mockapi.io/products")
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error(err);
        toast.error("Failed to fetch data!", {
          position: "top-right",
          autoClose: 5000,
        });
      })
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = (id) => {
    setLoadingDel(true);
    axios
      .delete(`https://673206d97aaf2a9aff1327fc.mockapi.io/products/${id}`)
      .then(() => {
        setData(data.filter((item) => item.id !== id));
        toast.success("Product ochirildi", {
          position: "top-right",
          autoClose: 5000,
          theme: "colored",
          transition: Bounce,
        });
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to delete product!", {
          position: "top-right",
          autoClose: 5000,
        });
      })
      .finally(() => setLoading(false));
  };

  if (loading) {
    return (
      <div>
        <ToastContainer />
        <div>
          <div
            className="loader
        "
          ></div>
        </div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div>
        <ToastContainer />
        <div>No products available.</div>
      </div>
    );
  }

  const productItem = data.map((item) => (
    <div key={item.id} className="product__card">
      <div className="relative">
        <img className="product__img" src={item.url} alt="" />
      </div>

      <h3 className="product__title font-manrope">{item.title}</h3>

      <div className="product__main">
        <div className="product__prices">
          <p className="product__oldPrice">{item.previousprice} $$$</p>
          <p className="product__discoutPrice">{item.discountprice} $$$</p>
        </div>

        <button
          className="product__basket"
          onClick={() => handleDelete(item.id)}
          disabled={loadingDel}
        >
          <RiDeleteBin6Fill />
        </button>
      </div>
    </div>
  ));

  return (
    <div className="containerMain">
      <ToastContainer />
      <div className="product__wrapper">{productItem}</div>
    </div>
  );
};

export default ManageElement;

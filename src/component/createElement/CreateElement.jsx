import React, { useRef } from "react";
import AdminRoute from "../adminRoute/AdminRoute";
import axios from "../../api";
import "./CreateElement.scss";

const CreateElement = () => {
  const titleEl = useRef();
  const imageEl = useRef();
  const descriptionEl = useRef();
  const priceEl = useRef();
  const stokcEl = useRef();
  const handleCreatreElement = (e) => {
    e.preventDefault();
    console.log("ok");
    const new__element = {
      url: imageEl.current.value,
      title: titleEl.current.value,
      previousprice: 270000,
      discountprice: priceEl.current.value,
      description: descriptionEl.current.value,
      year: 2013,
      color: "Orange",
      country: "UK",
      size: "L",
      category: "Настольные лампы",

      stock: stokcEl.current.value,
    };
    axios.post("/products", new__element).then((res) => {
      console.log(res);
      titleEl.current.value = "";
      imageEl.current.value = "";
      descriptionEl.current.value = "";
      priceEl.current.value = "";
      stokcEl.current.value = "";
    });
    console.log(new__element);
  };
  return (
    <div className="containerMain font-manrope">
      <div className="create">
        <h1 className="create__title">Create el</h1>
        <form
          className="create__form"
          onSubmit={handleCreatreElement}
          action=""
        >
          <input ref={titleEl} type="text" required placeholder="title" />
          <input ref={imageEl} type="text" required placeholder="image__url" />
          <input ref={priceEl} type="text" required placeholder="price" />
          <input
            ref={descriptionEl}
            type="text"
            required
            placeholder="description"
          />
          <input ref={stokcEl} type="number" required placeholder="stock___?" />
          <button>Create Element</button>
        </form>
      </div>
    </div>
  );
};

export default CreateElement;

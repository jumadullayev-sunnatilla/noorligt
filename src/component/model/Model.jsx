import React, { useEffect, useState } from "react";
import "./Model.css";

const Model = ({ children, close }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <>
      <div className="modal">
        <div onClick={() => close(false)} className="modal__overlay"></div>
        <div className="modal-content">{children}</div>
      </div>
    </>
  );
};

export default Model;

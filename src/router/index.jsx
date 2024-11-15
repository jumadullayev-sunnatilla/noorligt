import React, { memo } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@/pages/home/Home";
import About from "@/pages/about/About.jsx";
import Contact from "@/pages/contact/Contact";
import NotFount from "@/pages/notfount/Notfount";
import Layout from "@/layout/Layout";
import Delivery from "@/pages/delivery/Delivery";
import Return from "@/pages/return/Return";
import Guarantees from "@/pages/guarantees/Guarantees";
import Detail from "../pages/detail/Deatil";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFount />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/return" element={<Return />} />
          <Route path="/guarantees" element={<Guarantees />} />
          <Route path="*" element={<NotFount />} />
          <Route path="/product/:id" element={<Detail />} />
        </Route>
      </Routes>
    </>
  );
};

export default memo(Router);

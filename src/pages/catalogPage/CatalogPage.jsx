import React, { memo } from "react";
import Catalog from "../../component/catalog/Catalog";
import { NavLink } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";

const CatalogPage = () => {
  return (
    <>
      <div className="containerMain font-manrope home-link">
        <NavLink to={"/"}>
          <span className="">
            Главная <MdOutlineNavigateNext /> Catalog{" "}
          </span>
        </NavLink>
      </div>
      <Catalog count={9} specialPage={true} />
    </>
  );
};

export default memo(CatalogPage);

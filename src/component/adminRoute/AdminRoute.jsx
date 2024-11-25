import React from "react";
import { NavLink } from "react-router-dom";
import "./AdminRoute.scss";

const AdminRoute = () => {
  return (
    <div className="containerMain">
      <ul className="adminRoute">
        <div className="adminRoute__main">
          <NavLink className={"adminRoute__main-link"} to={"createEl"}>
            Create Element
          </NavLink>
          <NavLink className={"adminRoute__main-link"} to={"manageEl"}>
            Manage Element
          </NavLink>
        </div>
        <NavLink className={"adminRoute__home"} to={"/"}>
          Home
        </NavLink>
      </ul>
    </div>
  );
};

export default AdminRoute;

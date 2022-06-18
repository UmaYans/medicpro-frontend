import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Sidebear.module.css";

function Sidebar({ category, handleCategory }) {
  return (
    <div className={style.cat}>
      <NavLink
        to={`/docs/spec/${category._id}`}
        className={({ isActive }) => (isActive ? style.active : style.none)}
      >
        <div onClick={() => handleCategory(category._id)}>{category.name}</div>
      </NavLink>
    </div>
  );
}

export default Sidebar;

import { Link, NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";

import React from "react";

const unSign = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("id");
  window.location.reload();
}
const SideBar = () => {

  return (
    <div className={style.sidebare}>
      <div>
        <div className={style.handle}>
          <NavLink to="inform"> Мой профиль</NavLink>
        </div>
        <hr></hr>
        <div className={style.handle}>
          <NavLink to="comments"> Мои отзывы</NavLink>
        </div >
        <hr></hr>
        <div className={style.handle}>
          <NavLink to="entry"> Мои записи</NavLink>
        </div>
        <hr></hr>
      </div>
      <div>
        <button onClick={unSign}>
          <Link to="/">Выйти ←]</Link>
        </button>
      </div>
    </div>
  );
};

export default SideBar;

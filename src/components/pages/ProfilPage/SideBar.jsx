import { Link, NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";

import React from "react";

const unSign = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("id");
  window.location.reload();
};
const SideBar = () => {
  return (
    <div className={style.sidebare}>
      <div className={style.sideTitle}>MedicPro</div>
      <div className={style.continent}>
        <div className={style.handle}>
          <NavLink
            className={({ isActive }) => (isActive ? style.no_moi : style.moi)}
            to="comments"
          >
            <img
              alt="phot"
              src="https://www.svgrepo.com/show/381594/comment.svg"
              className={style.imgCom}
            />{" "}
            Мои отзывы
          </NavLink>
        </div>
        <hr className={style.hri}></hr>
        <div className={style.handle}>
          <NavLink
            className={({ isActive }) => (isActive ? style.no_moi : style.moi)}
            to="entry"
          >
            <img
              alt="phot"
              src="https://www.svgrepo.com/show/418557/clipboard-outlined-record.svg"
              className={style.imgRecord}
            />{" "}
            Мои записи
          </NavLink>
        </div>
        <hr className={style.hri}></hr>
        <div className={style.handle}>
          <NavLink
            className={({ isActive }) => (isActive ? style.no_moi : style.moi)}
            to="inform"
          >
            <img
              alt="phot"
              src="https://www.svgrepo.com/show/208310/user.svg"
              className={style.imgIcon}
            />{" "}
            Мой профиль
          </NavLink>
          <hr className={style.hri}></hr>
        </div>
      </div>
      <div>
        <button className={style.exit} onClick={unSign}>
          <Link className={style.textBot} to="/">
            Выйти ←]
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SideBar;

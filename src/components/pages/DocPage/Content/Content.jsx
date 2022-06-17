import React from "react";
import { Link } from "react-router-dom";
import style from "./Content.module.css";

function Content({ doctor }) {
  return (
    <>
    {/* <div className={style.cartMain}>
      <div className={style.carts}>
        <Link to={`${doctor._id}`}>
          <div>
            {" "}
            <img src={doctor.photo} alt="" />
          </div>
          <hr />
          <div>{doctor.name}</div>
          <div>{doctor.lastName}</div>
          <div>Рейтинг:{doctor.rating}</div>
          <div>Специальность : {doctor.spec.name}</div>
        </Link>
      </div>
    </div> */}
    <div className={style.cartDoctor}>
      <div>
        <Link to={`${doctor._id}`}>
        <div className={style.imgDoctor}>  <img src={doctor.photo} alt="" /> </div>
      <div>{doctor.name} {doctor.lastName}</div>
      <div>Рейтинг: {doctor.rating}</div>
      <div>Специальность: {doctor.spec.name}</div>
        </Link>
      </div>
    </div>
    </>
  );
}

export default Content;

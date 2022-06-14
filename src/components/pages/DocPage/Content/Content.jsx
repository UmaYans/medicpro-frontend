import React from "react";
import style from "./Content.module.css";

function Content({ doctor }) {
  console.log(doctor);
  return (
    <div className={style.cart}>
      <div>
        {" "}
        <img src={doctor.photo} alt="" />
      </div>
      <hr />
      <div>{doctor.name}</div>
      <div>{doctor.lastName}</div>
      <div>Рейтинг:{doctor.rating}</div>
      <div>Место работы : {doctor.place}</div>
    </div>
  );
}

export default Content;

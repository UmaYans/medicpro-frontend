import React from "react";
import { Link } from "react-router-dom";
import style from "./Content.module.css";

function Content({ doctor }) {
  return (
    <>
      <div className={style.cartDoctor}>
        <Link to={`../docs/${doctor._id}`} className={style.decoration}>
          <div className={style.imgDoctor}>
            <figure>
              <img src={doctor.photo} alt={doctor.name} className={style.img} />
            </figure>
          </div>
          <div className={style.inf}>
            <div>
              {doctor.name} {doctor.lastName}
            </div>
            <div>Рейтинг: {doctor.rating} ⭐</div>
            <div>Специальность: {doctor.spec?.name}</div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Content;

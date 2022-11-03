import React from "react";
import style from "./Center.module.css";
function Center() {
  return (
    <div className={style.center}>
      <h2>Гарантируем качество приема</h2>
      <p>
        Если вам не понравился прием, то мы запишем вас к другому врачу
        бесплатно.
      </p>
    </div>
  );
}

export default Center;

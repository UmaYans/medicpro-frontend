import React from "react";
import style from "./Page.module.css";
function Page() {
  return (
    <div className={style.content}>
      <div className={style.first}>
        <div>
          <img src="http://mcnikmed.ru/d/svg_image_2.svg" alt="" />
        </div>
        <div className={style.text}>
          <p>Максимальная ответственность и профессионализм</p>
        </div>
      </div>
      <div className={style.first}>
        <div>
          <img src="http://mcnikmed.ru/d/svg_image_3.svg" alt="" />
        </div>
        <div>
          <p>Доступные цены</p>
        </div>
      </div>
      <div className={style.first}>
        <div>
          {" "}
          <img src="http://mcnikmed.ru/d/svg_image_4.svg" alt="" />
        </div>
        <div>
          <p>Индивидуальный и комплексный подход</p>
        </div>
      </div>
    </div>
  );
}

export default Page;

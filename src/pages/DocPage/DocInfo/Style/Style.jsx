import React from "react";
import style from "./Style.module.css";
function Style() {
  return (
    <div className={style.body}>
      <div className={style.icons}>
        <div className={style.img}>
          <div>
            {" "}
            <img
              src="https://docdoc.ru/_next/static/images/doctor-0b7e5de304f159ee67a66c0c0cd9fd19.svg"
              alt=""
            />
          </div>
          <div className={style.desc}>
            <p>Врачи, которым вы доверяете</p>
            <p>Средний стаж от 7 лет</p>
          </div>
        </div>
        <div className={style.img}>
          <div>
            {" "}
            <img
              src="https://docdoc.ru/_next/static/images/review-963757a87989701e1b8f687df64089ba.svg"
              alt=""
            />
          </div>
          <div className={style.desc}>
            <p>Отзывы от пациентов</p>
            <p>Больше 200</p>
          </div>
        </div>
        <div className={style.img}>
          <div>
            {" "}
            <img
              src="https://docdoc.ru/_next/static/images/price-43858ade3e7fceba2e37c84caffaf862.svg"
              alt=""
            />
          </div>
          <div className={style.desc}>
            <p>Окончательная цена</p>
            <p>Без доплат и комиссий</p>
          </div>
        </div>
        <div className={style.img}>
          <div>
            <img
              src="https://docdoc.ru/_next/static/images/online-3029fd01b7a0a3034df48efe50b6affc.svg"
              alt=""
            />
          </div>
          <div className={style.desc}>
            <p>Бесплатная записть на прием</p>
            <p>Онлайн-запись за 1 минуту</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Style;

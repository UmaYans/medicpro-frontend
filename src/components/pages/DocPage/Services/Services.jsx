import React from "react";
import style from "./Service.module.css";
import img from "./fie.png";

function Services({ service }) {
  return (
    <div className={style.container}>
      <h1>Услуги врача</h1>
      {service.map((serv) => {
        return (
          <div className={style.main} key={serv._id}>
            <div className={style.infoServ}>
              <div className={style.name}>{serv.name}</div>
              <div className={style.text}>{serv.text}</div>
              <div className={style.price}>Цена: {serv.price}</div>
              {/* <div className={style.oldPrice}>
                Старая цена: <s>{serv.oldPrice ? serv.oldPrice:""}</s>
              </div> */}
            </div>
            <div className={style.imgServ}>
              <img src={img} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Services;

// <div className={style.main}>
//   <div className={style.imgServ}>
//     <img src={img} alt="" />
//   </div>
//   <div></div>
// </div>
{
  /* <h1>Все услуги врача</h1>{" "}
<div className={style.service}>
  {service.map((service) => {
    return (
      <div className={style.servCart} key={service._id}>
        <div className={style.name}>{service?.name}</div>
        <div className={style.text}>{service?.text}</div>
        <div>Цена: {service?.price}</div>
        <div className={style.oldPrice}>
          Старая цена: {service?.oldPrice}
        </div>
      </div>
    );
  })}
</div> */
}

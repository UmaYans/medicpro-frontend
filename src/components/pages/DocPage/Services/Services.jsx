import React from "react";
import style from "./Service.module.css";

function Services({ service }) {
  console.log(service.length);
  return (
    <>
      {service.length !== 0 && (
        <div className={style.container}>
          <h1>Услуги врача</h1>
          <div className={style.wrap}>
            {service.map((serv) => {
              return (
                <div className={style.main} key={serv._id}>
                  <div className={style.infoServ}>
                    <div className={style.name}>{serv.name}</div>
                    <div className={style.text}>{serv.text}</div>
                    <div className={style.price}>Цена: {serv.price}</div>
                    {serv.oldPrice && (
                      <div className={style.oldPrice}>
                        Старая цена: <s>{serv.oldPrice ? serv.oldPrice : ""}</s>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Services;

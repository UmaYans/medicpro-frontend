import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getService } from "../../../../src/redux-toolkit/features/service";
import styles from "./service.module.css";
const ServicePage = () => {
  const service = useSelector((state) => state.service.service);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getService());
  });
  return (
    <div>
      <div className={styles.header}>
        <h2>
          Запись на приём к лучшим врачам страны{" "}
          <span style={{ color: "#adadad" }}>6723 довольных пациентов</span>
        </h2>
        <p>
          <b>Хороший врач</b> - это специалист широкого профиля, который
          основываясь
          <br /> на ваших симптомах, поставит верный диагноз и назначит
          результативное лечение.
        </p>
      </div>
      <div >
        {service.map((item) => {
          return (
            <div className={styles.ProRodBlock} key={item._id}>
            <div className={styles.rodBlock}>
            <div><img src={item.doc.photo} /></div>
              <div><h2>{item.name}</h2></div>
              <div><h4>{item.text}</h4></div>
              <div className={item.oldPrice ? styles.price : ""}>
                {item.price}
              </div>
              <div>
                <s>{item.oldPrice}</s>
              </div>
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicePage;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getService } from "../../../redux-toolkit/features/serviceSlice";
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
        {service.map((services) => {
          return (
            <div className={styles.ProRodBlock} key={services._id}>
            <div className={styles.rodBlock}>
            <div><img src={services.doc.photo} /></div>
              <div><h2>{services.name}</h2></div>
              <div><h4>{services.text}</h4></div>
              <div className={services.oldPrice ? styles.price : ""}>
                {services.price}
              </div>
              <div>
                <s>{services.oldPrice}</s>
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

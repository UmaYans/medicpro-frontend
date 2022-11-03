import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getService } from "../../redux-toolkit/features/serviceSlice";
import styles from "./service.module.css";
const ServicePage = () => {
  const service = useSelector((state) => state.service.services);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getService());
  });
  return (
    <div>
      <div className={styles.header}>
        <h2>
          Запись на приём к лучшим врачам страны
          <br />
          <span style={{ color: "#adadad" }}>6723 довольных пациентов</span>
        </h2>
        <p>
          <b>Хороший врач</b> - это специалист широкого профиля, который
          основываясь
          <br /> на ваших симптомах, поставит верный диагноз и назначит
          результативное лечение.
        </p>
      </div>
      <div>
        {service.map((services) => {
          return (
            <div className={styles.ProRodBlock} key={services._id}>
              <div className={styles.rodBlock}>
                <div>
                  <h3 className={styles.text}>
                    Услуга от доктора {services.doc?.name}{" "}
                    {services.doc?.lastName}
                  </h3>
                </div>
                <div>
                  <h2>{services.name}</h2>
                </div>
                <div>
                  <h4>{services.text}</h4>
                </div>
                <div
                  className={services.oldPrice ? styles.price : styles.oldPrice}
                >
                  <h3>{services.price}</h3>
                </div>
                <div className={styles.oldPrice}>
                  <s>{services.oldPrice}</s>
                </div>
                <Link to={`/docs/${services.doc?._id}`}>
                  <div className={styles.buttons}>
                    <button>Записаться на прием →</button>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicePage;

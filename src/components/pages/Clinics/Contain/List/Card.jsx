import React from "react";
import { Link } from "react-router-dom";
import styles from "./list.module.css";

const Card = ({ clin }) => {
  return (
    <div className={styles.inner}>
      <div className={styles.clinic}>
        <div className={styles.name}>{clin.name}</div>
        <div className={styles.center}>
          <div className={styles.image}>
            <img src={clin.photo} alt="clinic" />
          </div>
          <div className={styles.center_info}>
            <div className={styles.schled}>пн-пт 08:00 - 21:00</div>
            <div className={styles.schled}>c6 09:00 - 18:00</div>
            <div className={styles.schled}>вс выходной</div>
          </div>
        </div>
        <div className={styles.hosplace}>{clin.place}</div>
      </div>
      <button className={styles.btn_more}><Link to={`${clin._id}`}>Подробнее</Link></button>
    </div>
  );
};

export default Card;

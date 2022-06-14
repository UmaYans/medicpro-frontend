import React from "react";
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
            <div className={styles.schled}>пн-cб 08:00 - 21:00</div>
            <div className={styles.schled}>вс 09:00 - 18:00</div>
          </div>
        </div>
        <div className={styles.place}>{clin.place}</div>
      </div>
    </div>
  );
};

export default Card;

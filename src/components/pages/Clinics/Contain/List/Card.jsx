import React from "react";
import styles from "./list.module.css";

const Card = ({ clin }) => {
  return (
    <div className={styles.inner}>
      <div className={styles.clinic}>
        <div className={styles.name}>{clin.name}</div>
        <div className={styles.image}>
          <img src={clin.photo} alt="clinic" />
        </div>
        <div className={styles.place}>{clin.place}</div>
      </div>
    </div>
  );
};

export default Card;

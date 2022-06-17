import React from "react";
import styles from "./card.module.css";

const DocsByHospital = ({ docs }) => {
  return (
    <div className={styles.doc}>
      <div className={styles.image}>
        <img src={docs.photo} alt="$" />
      </div>
      <div className={styles.fio}>
        {docs.name} {docs.lastName}
      </div>
      <div className={styles.desc}>{docs.desc}</div>
      
    </div>
  );
};

export default DocsByHospital;

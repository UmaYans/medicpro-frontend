import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./card.module.css";

const DocsByHospital = ({ _id, spec, photo, name, lastName }) => {
  const cats = useSelector((state) =>
    state.categories.categories.find((item) => item._id === spec)
  );

  return (
    <div className={styles.doc}>
      <div className={styles.image}>
        <img src={photo} alt={name} />
      </div>
      <div className={styles.full_info}>
        <div className={styles.info}>
          <div className={styles.data}>Доктор</div>
          <div className={styles.fio}>
            {name} {lastName}
          </div>
        </div>
        <div className={styles.spec}>
          <div className={styles.spec_name}>Специальность</div>
          <div className={styles.desc}>{cats?.name}</div>
        </div>
        <div>
          <button className={styles.btn_entry}>
            <Link to={`../docs/${_id}`}>Запись</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocsByHospital;

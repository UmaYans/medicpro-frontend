import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchClinicById } from "../../../../../redux-toolkit/features/clinic";
import styles from "./card.module.css";

const ClinicCard = () => {
  const dispatch = useDispatch();

  let { clinId } = useParams();
  const hospital = useSelector((state) => state.clinic.hospital);

  useEffect(() => {
    dispatch(fetchClinicById(clinId));
  }, [dispatch, clinId]);

  return (
    <div>
      <div className={styles.center}>
        <div className={styles.image}>
          <img src={hospital.photo} alt="clinic" />
        </div>
        <div className={styles.name}>{hospital.name}</div>
        <div className={styles.desc}>{hospital.desc}</div>
        <div className={styles.center_info}>
          <div className={styles.schled}>пн-cб 08:00 - 21:00</div>
          <div className={styles.schled}>вс 09:00 - 18:00</div>
        </div>
      </div>
      <div className={hospital.place}>{hospital.place}</div>
    </div>
  );
};

export default ClinicCard;

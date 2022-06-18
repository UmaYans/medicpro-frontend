import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchClinics } from "../../../../redux-toolkit/features/clinicSlice";
import styles from "./content.module.css";
import { Link } from "react-router-dom";

//fetchClinicById

function Content() {
  const clinic = useSelector((state) => state.clinic.clinics);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClinics());
  }, [dispatch]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Мы сотрудничаем с лучшими клиниками в стране
      </h1>
      <div style={{ display: "flex", margin: "auto" }}>
        {clinic.slice(2, -3).map((clin) => {
          return (
            <div key={clin._id} className={styles.rodBlock}>
              <div className={styles.card}>
                <div>
                  <img src={clin.photo} alt="" className={styles.images} />
                </div>

                <div className={styles.title}>
                  <h3>{clin.name}</h3>
                </div>

                <div className={styles.texts}>{clin.place}</div>
                <div>
                  <button className={styles.buttonss}>
                    <Link to={`/clinics/list/${clin._id}`}>
                        Подробнее
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Content;

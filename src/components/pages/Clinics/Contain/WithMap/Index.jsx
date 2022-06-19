import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchClinics } from "../../../../../redux-toolkit/features/clinicSlice";

import AllPlacemark from "./AllPlacemark";
import ByIdPlacemark from "./ByIdPlacemark";

import styles from "./withMap.module.css";

const CardsWithMap = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const clinics = useSelector((state) => state.clinic.clinics);
  const loading = useSelector((state) => state.clinic.loading);

  const [filtered, setFiltered] = useState(clinics);

  useEffect(() => {
    dispatch(fetchClinics());
  }, [dispatch]);

  const handleGetPlace = (id) => {
    setFiltered(clinics.filter((item) => item._id === id));
  };

  if (loading) {
    return (
      <div className={styles.spinner}>
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
    );
  }

  return (
    <div className={styles.cards_with_map}>
      {!id ? (
        <div className={styles.scrollbar} id={styles.style_15}>
          <div className={styles.force_overflow}>
            <div className={styles.cards}>
              {clinics.map((clin) => {
                return (
                  <div key={clin._id} className={styles.card}>
                    <div
                      onClick={() => handleGetPlace(clin._id)}
                      className={styles.name}
                    >
                      <Link to={`../${clin._id}`}>{clin.name}</Link>
                    </div>
                    <div className={styles.place}>{clin.place}</div>
                    <div className={styles.center_info}>
                      <div className={styles.schled}>понедельник-пятница - 08:00 - 21:00</div>
                      <div className={styles.schled}>cyббота - 09:00 - 18:00</div>
                      <div className={styles.schled}>воскресенье - выходной</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        filtered.map((item) => {
          return (
            <div key={item._id}>
              <div>{item.name}</div>
              <div>
                <Link to="/clinics/">Назад</Link>
              </div>
            </div>
          );
        })
      )}

      <div>
        {id ? (
          <ByIdPlacemark filtered={filtered} id={id} />
        ) : (
          <AllPlacemark clinics={clinics} />
        )}
      </div>
    </div>
  );
};

export default CardsWithMap;

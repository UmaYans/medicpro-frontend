import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchClinics } from "../../../../../redux-toolkit/features/clinic";

import AllPlacemark from "./AllPlacemark";
import ByIdPlacemark from "./ByIdPlacemark";

import styles from "./withMap.module.css";

const CardsWithMap = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const clinics = useSelector((state) => state.clinic.clinics);

  const [filtered, setFiltered] = useState(clinics);

  useEffect(() => {
    dispatch(fetchClinics());
  }, [dispatch]);

  const handleGetPlace = (id) => {
    setFiltered(clinics.filter((item) => item._id === id));
  };

  return (
    <div className={styles.cards_with_map}>
      <div className={styles.cards}>
        {!id ? (
          clinics.map((clin) => {
            return (
              <div key={clin._id} className={styles.card}>
                <div
                  onClick={() => handleGetPlace(clin._id)}
                  className={styles.name}
                >
                  <Link to={`../${clin._id}`}>{clin.name}</Link>
                </div>
                <div className={styles.place}>{clin.place}</div>
                <div className={styles.scled}>
                  <div>пн-cб 08:00 - 21:00</div>
                  <div>вс 09:00 - 18:00</div>
                </div>
              </div>
            )
          })
        ) : (filtered.map(item => {
          return(
            <div key={item._id}>
              <div>{item.name}</div>
              <div><img src={item.photo} /></div>
              <div><Link to='/clinics/'>Назад</Link></div>
            </div>
          )
        }))}
      </div>
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

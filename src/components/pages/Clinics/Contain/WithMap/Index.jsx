import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Map, YMaps, Placemark } from "react-yandex-maps";
import { fetchClinics } from "../../../../../redux-toolkit/features/clinic";

import styles from "./withMap.module.css";

const CardsWithMap = () => {
  const dispatch = useDispatch();

  const clinics = useSelector((state) => state.clinic.clinics);

  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    dispatch(fetchClinics());
  }, [dispatch]);

  const handleGetPlace = (id) => {
    setFiltered(clinics.filter((item) => item._id === id));
  };

  return (
    <div className={styles.cards_with_map}>
      <div className={styles.cards}>
        {clinics.map((clin) => {
          return (
            <div key={clin._id} className={styles.card}>
              <div
                onClick={() => handleGetPlace(clin._id)}
                className={styles.name}
              >
                {clin.name}
              </div>
              <div className={styles.place}>{clin.place}</div>
              <div className={styles.scled}>
                <div>пн-cб 08:00 - 21:00</div>
                <div>вс 09:00 - 18:00</div>
              </div>
            </div>
          );
        })}
      </div>
      <YMaps>
          <div className={styles.map}>
            <Map
              width={"100%"}
              height={"450px"}
              defaultState={{
                center: [43.324732, 45.692374],
                zoom: 17,
              }}
            >
              <Placemark geometry={[43.324732, 45.692374]} />
            </Map>
          </div>
        </YMaps>
    </div>
  );
};

export default CardsWithMap;

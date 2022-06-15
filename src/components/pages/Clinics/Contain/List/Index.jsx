import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./list.module.css";
import { fetchClinics } from "../../../../../redux-toolkit/features/clinic";
import Card from "./Card";

const List = () => {
  const clinics = useSelector((state) => state.clinic.clinics);
  const loading = useSelector((state) => state.clinic.loading);
  const error = useSelector((state) => state.clinic.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClinics());
  }, [dispatch]);

  if (loading) {
    return (
      <div className={styles.loader}></div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.clinics}>
      {clinics.map((clin) => {
        return <Card key={clin._id} clin={clin} />;
      })}
    </div>
  );
};

export default List;

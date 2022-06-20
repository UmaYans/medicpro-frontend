import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./list.module.css";
import { fetchClinics } from "../../../../../redux-toolkit/features/clinicSlice";
import Card, { MultiActionAreaCard } from "./Card";

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

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.clinics}>
      {clinics.map((clin) => {
        return <MultiActionAreaCard key={clin._id} clin={clin} />;
      })}
    </div>
  );
};

export default List;

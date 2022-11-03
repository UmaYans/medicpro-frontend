import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./list.module.css";
import { fetchClinics } from "../../../../redux-toolkit/features/clinicSlice";
import { MultiActionAreaCard } from "./Card";

const List = () => {
  const dispatch = useDispatch();
  const { clinics, loading, error } = useSelector((state) => state.clinic);

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

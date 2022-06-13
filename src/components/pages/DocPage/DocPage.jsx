import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../../redux-toolkit/features/categories";
import { getDoctors } from "../../../redux-toolkit/features/doctorSlice";
import Sidebar from "./Sidebar/Sidebar";

const DocPage = (id) => {
  const doctors = useSelector((state) => state.doctor.doctors);

  const [filtered, setFiltered] = useState(doctors);

  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories.categories);
  const loading = useSelector((state) => state.doctor.loading);

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getDoctors());
  }, [dispatch]);

  const handleCategory = (id) => {
    setFiltered(doctors.filter((doctors) => doctors.spec === id));
  };

  return (
    <div>
      <div>
        <div onClick={(e) => setFiltered(doctors)}>Все категории</div>
        {categories.map((category) => {
          return (
            <Sidebar
              category={category}
              key={category._id}
              handleCategory={handleCategory}
            ></Sidebar>
          );
        })}
      </div>

      <h1>Врачи</h1>
      {filtered.map((doctor, index) => {
        return <div key={index}>{doctor.name}</div>;
      })}
    </div>
  );
};

export default DocPage;

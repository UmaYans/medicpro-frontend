import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../../redux-toolkit/features/categories";
import { getDoctors } from "../../../redux-toolkit/features/doctorSlice";
import Content from "./Content/Content";
import Sidebar from "./Sidebar/Sidebar";
import style from "./Docpage.module.css";
const DocPage = (id) => {
  const doctors = useSelector((state) => state.doctor.doctors);

  const [filtered, setFiltered] = useState(doctors);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  

  const categories = useSelector((state) => state.categories.categories);
  const loading = useSelector((state) => state.doctor.loading);

  const docs = doctors.filter((doc) => {
    return (
      doc.name.toLowerCase().includes(value.toLowerCase()) ||
      doc.lastName.toLowerCase().includes(value.toLowerCase())
    );
  });

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getDoctors());
  }, [dispatch]);

  const handleCategory = (id) => {
    setFiltered(doctors.filter((doctors) => doctors.spec === id));
  };

  return (
    <div className={style.content}>
      <div>
        <input
          type="text"
          placeholder="Начните поиск врача"
          onChange={(event) => setValue(event.target.value)}
        />
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

      <div className={style.content_carts}>
        <h1>Врачи</h1>
        {filtered.map((doctor, index) => {
          return <Content doctor={doctor} key={index}></Content>;
        })}
      </div>
    </div>
  );
};

export default DocPage;

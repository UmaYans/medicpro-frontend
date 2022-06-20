import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../../redux-toolkit/features/categoriesSlice";
import { getDoctors } from "../../../redux-toolkit/features/doctorSlice";
import Content from "./Content/Content";
import Sidebar from "./Sidebar/Sidebar";
import style from "./Docpage.module.css";
import styles from "./Sidebar/Sidebear.module.css";
import { NavLink } from "react-router-dom";

const DocPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctors());
    dispatch(getCategory());
  }, [dispatch]);

  const doctors = useSelector((state) => state.doctor.doctors);
  const categories = useSelector((state) => state.categories.categories);
  const loading = useSelector((state) => state.doctor.loading);

  const [filtered, setFiltered] = useState([]);
  const [value, setValue] = useState("");

  const handleName = (e) => {
    setValue(e.target.value);
    setFiltered(
      doctors.filter((doc) => {
        return (
          doc.name.toLowerCase().includes(value.toLowerCase()) ||
          doc.lastName.toLowerCase().includes(value.toLowerCase())
        );
      })
    );
  };

  const handleCategory = (id) => {
    setFiltered(doctors.filter((doctor) => doctor.spec._id === id));
  };

  return (
    <div className={style.body}>
      <div className={style.container}>
        <div className={style.left}>
          <div className={style.baner}>
            Запишись на приём к врачу не выходя из дома
          </div>

          <div className={style.divInput}>
            <input
              value={value}
              className={style.input}
              type="text"
              placeholder="Начните поиск врача....."
              onChange={handleName}
            />
          </div>

          <div className={style.content_carts}>
            {loading && <div>Загрузка</div>}

            {filtered.length === 0
              ? doctors.map((doctor) => {
                  return <Content key={doctor._id} doctor={doctor} />;
                })
              : filtered.map((doctor) => {
                  return <Content key={doctor._id} doctor={doctor} />;
                })}
          </div>
        </div>

        <div className={style.right}>
          <div className={style.titCat}>Поиск по специальности</div>
          <div onClick={(e) => setFiltered(doctors)} className={styles.cat}>
            <NavLink
              to={`/docs/all`}
              className={({ isActive }) =>
                isActive ? styles.active : styles.none
              }
            >
              Все врачи
            </NavLink>
          </div>
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
      </div>
    </div>
  );
};

export default DocPage;

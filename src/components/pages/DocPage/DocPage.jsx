import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../../redux-toolkit/features/categories";
import { getDoctors } from "../../../redux-toolkit/features/doctorSlice";
import Content from "./Content/Content";
import Sidebar from "./Sidebar/Sidebar";
import style from "./Docpage.module.css";


const DocPage = () => {
  const doctors = useSelector((state) => state.doctor.doctors);
  const categories = useSelector((state) => state.categories.categories);
  const loading = useSelector((state) => state.doctor.loading);

  const dispatch = useDispatch();
  const [doctorsState, setDoctorsState] = useState(doctors)
  const [filtered, setFiltered] = useState(doctorsState);
  const [value, setValue] = useState("");


  useEffect(() => {
    dispatch(getCategory());
    dispatch(getDoctors());
  }, [dispatch]);

  // Фильтры

  const handleCategory = (id) => {
    setValue("")
    setFiltered(doctors.filter((doctor) => doctor.spec === id));
  };

  const hadleInput = (e) => {
    setValue(e.target.value);
    setFiltered(
      filtered.filter((doc) => {
        return (
          doc.name.toLowerCase().includes(value.toLowerCase()) ||
          doc.lastName.toLowerCase().includes(value.toLowerCase())
        );
      })
    );
  };

  // const docs = doctors.filter((doc) => {
  //   return (
  //     doc.name.toLowerCase().includes(value.toLowerCase()) ||
  //     doc.lastName.toLowerCase().includes(value.toLowerCase())
  //   );
  // });

  return (
    <>
      <input
        className={style.input}
        type="text"
        value={value}
        placeholder="Начните поиск врача..."
        onChange={hadleInput}
      />

      <div className={style.content}>
        <div className={style.content_carts}>
          <h1>Врачи</h1>

          {filtered.map((doctor, index) => {
            return <Content doctor={doctor} key={index} ></Content>;
          })}
        </div>
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
      </div>
    </>
  );
};

export default DocPage;

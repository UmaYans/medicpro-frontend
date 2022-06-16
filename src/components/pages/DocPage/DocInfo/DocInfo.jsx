import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDoctorsById } from "../../../../redux-toolkit/features/doctorSlice";
import { fetchClinicById } from "../../../../redux-toolkit/features/clinic";
import style from "./DocInfo.module.css";
import {
  getEntryDocId,
  postEntry,
} from "../../../../redux-toolkit/features/entrySlice";

function DocInfo() {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState("");

  let { docId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctorsById(docId));
    dispatch(getEntryDocId(docId));
  }, [dispatch, docId]);

  const docs = useSelector((state) => state.doctor.doc);
  const entry = useSelector((state) => state.entry.entry);
  const service = useSelector((state) => state.service.service);

  console.log(entry);

  const handleCartOpen = () => setOpened(true);
  const handleCartClose = () => setOpened(false);

  const handleEntry = () => {
    dispatch(postEntry({ docId, value }));
  };

  const [time, setTime] = useState([
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "Обед",
    "15:00",
    "16:00",
    "17:00",
  ]);

  const handleSetValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className={style.info}>
        <h1>Информация о враче</h1>
      </div>
      <div className={style.rodBlock}>
        <div className={style.infoDoc}>
          <div className={style.imgDoc}>
            <img src={docs.photo} alt="" />
          </div>
          <div className={style.textDoc}>
            <h1>
              <i>
                {docs.name} {docs.lastName}
              </i>
            </h1>
            <div>
              <hr />
              <p>Возраст: {docs.age} лет</p>
            </div>
            <div>
              <p>Стаж работы: {docs.skill} лет</p>
            </div>
            <div>
              <p>Описание врача: {docs.desc}</p>
            </div>

            <div>
              <p>Специальность: {docs.spec?.name}</p>
            </div>
            <div>
              <p>Описание специальности: {docs.spec?.text}</p>
            </div>

            <div>
              <p>Рейтинг врача : {docs.rating}</p>
            </div>
            <div>
              <p>Номер телефона: {docs.telephone}</p>
            </div>
            <div>
              <p>Почта для связи: {docs.eMail}</p>
            </div>
            {opened ? (
              <div className={style.modal}>
                <div>
                  <button onClick={handleCartClose} className={style.btn_first}>
                    Закрыть
                  </button>
                </div>
                <div className={style.select}>
                  <select onChange={handleSetValue}>
                    <option selected disabled={true} value="Время:">
                      Время:
                    </option>
                    {time.map((time, index) => {
                      return (
                        <option
                          key={index}
                          value={time}
                          disabled={
                            entry.find((item) => item.time === time) ||
                            time === "Обед" 
                          }
                        >
                          {time}
                        </option>
                      );
                    })}
                  </select>
                  <div></div>
                </div>
                <button
                  onClick={() => handleEntry()}
                  disabled={!value}
                  className={style.btn_second}
                >
                  Записаться
                </button>
              </div>
            ) : (
              <div>
                <button className={style.btn} onClick={handleCartOpen}>
                  Записаться к врачу
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={style.wrap}>
        <h2 className={style.text}>Место работы</h2>
        <div className={style.secondCart}>
          <div className={style.photoClinic}>
            <img src={docs.place?.photo} alt="" />
          </div>
          <div className={style.inforClinic}>
            <h1>
              <p>
                {" "}
                <Link to={`/clinics/list/${docs.place?._id}`}>
                  {docs.place?.name}
                </Link>
              </p>
            </h1>
            <p>{docs.place?.desc}</p>
          </div>
        </div>
      </div>

      <div>
        <div>{service.text}</div>
      </div>
    </>
  );
}

export default DocInfo;

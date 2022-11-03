import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDoctorsById } from "../../../redux-toolkit/features/doctorSlice";
import style from "./DocInfo.module.css";
import {
  getEntryDocId,
  postEntry,
} from "../../../redux-toolkit/features/entrySlice";
import CommentsByUser from "../CommentsByUser/CommentsByUser";
import { getCommentByDoctorId } from "../../../redux-toolkit/features/commentsSlice";
import Services from "../Services/Services";
import { getServiceByDocId } from "../../../redux-toolkit/features/serviceSlice";
import Style from "./Style/Style";
import Center from "./Center/Center";
import img from "./1.png";
import Page from "./Page/Page";

function DocInfo() {
  let { docId } = useParams();
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    dispatch(getServiceByDocId(docId));
    dispatch(getDoctorsById(docId));
    dispatch(getEntryDocId(docId));
    dispatch(getCommentByDoctorId(docId));
  }, [dispatch, docId]);

  const { doc } = useSelector((state) => state.doctor);
  const { entry } = useSelector((state) => state.entry);
  const { service } = useSelector((state) => state.service);
  const { comments } = useSelector((state) => state.comment);
  const { token } = useSelector((state) => state.user);

  const handleCartOpen = () => setOpened(true);
  const handleCartClose = () => setOpened(false);

  const handleEntry = () => {
    dispatch(postEntry({ docId, value }));
    setOpened(false);
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
    <div className={style.bc}>
      <Style />
      <div className={style.info}>
        <h1>Информация о враче</h1>
      </div>
      <div className={style.rodBlock}>
        <div className={style.infoDoc}>
          <div className={style.imgDoc}>
            <img src={doc.photo} alt="" />
          </div>
          <div className={style.textDoc}>
            <h1>
              <i>
                {doc.name} {doc.lastName}
              </i>
            </h1>
            <div>
              <hr />
              <p>Возраст: {doc.age} лет</p>
            </div>
            <div>
              <p>Стаж работы: {doc.skill} лет</p>
            </div>
            <div>
              <p>Описание врача: {doc.desc}</p>
            </div>

            <div>
              <p>Специальность: {doc.spec?.name}</p>
            </div>

            <div>
              <p>Рейтинг врача : {doc.rating} ⭐</p>
            </div>
            <div>
              <p>Номер телефона: {doc.telephone}</p>
            </div>
            <div>
              <p>Почта для связи: {doc.eMail}</p>
            </div>
            {!token ? (
              <div>
                <button className={style.btn_auth} onClick={handleCartOpen}>
                  Авторизация не пройдена
                </button>
              </div>
            ) : opened ? (
              <div className={style.modal}>
                <div></div>
                <div className={style.select}>
                  <div className={style.img}>
                    <img src={img} alt="" />{" "}
                  </div>
                  <div className={style.nameEntry}>
                    Записаться к врачу: {doc.name} {doc.lastName}
                  </div>
                  <div className={style.time}>Выберите время:</div>
                  <select
                    onChange={handleSetValue}
                    className={style.select_css}
                  >
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
                <div className={style.buttons}>
                  <button onClick={handleCartClose} className={style.btn_first}>
                    Закрыть
                  </button>
                  <button
                    onClick={() => handleEntry()}
                    disabled={!value}
                    className={style.btn_second}
                  >
                    Записаться
                  </button>
                </div>
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
      <Center />
      <div className={style.wrap}>
        <h2 className={style.text}>Место работы</h2>
        <div className={style.secondCart}>
          <div className={style.photoClinic}>
            <img src={doc.place?.photo} alt="" />
          </div>
          <div className={style.inforClinic}>
            <h1>
              <p>
                {" "}
                <Link to={`/clinics/list/${doc.place?._id}`}>
                  {doc.place?.name}
                </Link>
              </p>
            </h1>
            <p>{doc.place?.desc}</p>
          </div>
        </div>
      </div>
      <Services service={service} />
      <Page />
      <CommentsByUser comments={comments} token={token} />
    </div>
  );
}

export default DocInfo;

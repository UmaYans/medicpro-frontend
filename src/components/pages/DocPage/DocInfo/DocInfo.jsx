import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDoctorsById } from "../../../../redux-toolkit/features/doctorSlice";
import { fetchClinicById } from "../../../../redux-toolkit/features/clinic";
import style from "./DocInfo.module.css";
import { postEntry } from "../../../../redux-toolkit/features/entry";
function DocInfo() {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState("");
  let { docId } = useParams();
  // const { clinId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctorsById(docId));
  }, [dispatch, docId]);

  const docs = useSelector((state) => state.doctor.doc);
  const handleCartOpen = () => setOpened(true);
  const handleCartClose = () => setOpened(false);

  const handleEntry = () => {
    dispatch(postEntry({ docId, time }));
  };

  console.log(docs);
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
              <div>
                <div onClick={handleCartClose}>x</div>
                <div>
                  <select name="choice">
                    <option selected disabled>
                      Время:
                    </option>
                    {time.map((time) => {
                      return <option value={time}>{time}</option>;
                    })}
                  </select>
                  <div>
                    <button onClick={handleEntry}>Записаться</button>
                  </div>
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

      <div className={style.wrap}>
        <h2 className={style.text}>Место работы</h2>
        <div className={style.secondCart}>
          {/* <div></div> */}
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

      {/* <div className={style.clinics}>
        <div className={style.second}>
          <div className={style.clinicPhoto}>
            <img src={docs.place?.photo} alt="" />
          </div>
          <div className={style.infoClinic}>
            <div>
              
                <h1>
                  <p>
                  {" "}
                  Место работы:
                  <Link to={`/clinics/list/${docs.place?._id}`}>
                    {docs.place?.name}
                  </Link>
              </p>
                </h1>
            </div>{" "}
            <div>{docs.place?.desc}</div>
          </div>
        </div>
      </div> */}
      {/* <div>
        {docs.name}
        <div>Информация о враче</div>
        <div>
          <img src={docs?.photo} alt="sd" />
        </div>
        <div>
          <p>
            {docs.name} {docs.lastName}
          </p>
        </div>
        <div>
          <p>Возраст: {docs.age} лет</p>
        </div>
        <div>
          <p>Стаж работы:{docs.skill} лет</p>
        </div>
        <div>
          <p>Номер телефона: {docs.telephone}</p>
        </div>
        <div>
          <p>Почта для связи: {docs.eMail}</p>
        </div>
        <div>
          <p>Специальность: {docs.spec?.name}</p>
        </div>
        <div>
          <p>Описание специальности: {docs.spec?.text}</p>
        </div>
        <div>
          <p>Описание: {docs.desc}</p>
        </div>
        <div>
          <p>
            Место работы:<Link to={`/clinics/list/${docs.place?._id}`}>{docs.place?.name}</Link>
          </p>
        </div>
        <div>
          <p>Рейтинг: {docs.rating}</p>
        </div>
        <hr />
        <div>
          <h1>Отзывы о враче</h1>
        </div>
      </div> */}

      {/* <option value="8:00">8:00</option>
                  <option value="9:00">9:00 </option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="Обед" disabled >Обед</option>
                  <option value="13:00">15:00</option>
                  <option value="13:00">16:00</option>
                  <option value="13:00">17:00</option> */}
    </>
  );
}

export default DocInfo;

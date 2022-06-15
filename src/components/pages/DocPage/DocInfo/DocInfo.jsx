import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDoctorsById } from "../../../../redux-toolkit/features/doctorSlice";
// import style from "./DocInfo.module.css";
function DocInfo() {
  let { docId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctorsById(docId));
  }, [dispatch, docId]);

  const docs = useSelector((state) => state.doctor.doc);

  console.log(docs);

  return (
    <>
      <div>
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
        <div><p>Специальность: {docs.spec?.name}</p></div>
        <div><p>Специальность: {docs.spec?.text}</p></div>
        <div>
          <p>Описание: {docs.desc}</p>
        </div>
        <div>
          <p>
            Место работы:<Link to="clinics/*">{docs.place?.name}</Link>
          </p>
        </div>
        <div>
          <p>Рейтинг: {docs.rating}</p>
        </div>
        <hr />
        <div>
          <h1>Отзывы о враче</h1>
        </div>
      </div>
    </>
  );
}

export default DocInfo;

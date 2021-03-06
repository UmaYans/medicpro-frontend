import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDoctorsById } from "../../../../redux-toolkit/features/doctorSlice";
import { fetchClinicById } from "../../../../redux-toolkit/features/clinicSlice";
import { getDoctors } from "../../../../redux-toolkit/features/doctorSlice";
import style from "./DocInfo.module.css";
import {
  getEntryDocId,
  postEntry,
} from "../../../../redux-toolkit/features/entrySlice";
import CommentsByUser from "../CommentsByUser/CommentsByUser";
import { getCommentByDoctorId } from "../../../../redux-toolkit/features/commentsSlice";
import Services from "../Services/Services";
import { getServiceByDocId } from "../../../../redux-toolkit/features/serviceSlice";
import Style from "./Style/Style";
import Center from "./Center/Center";
import img from "./1.png";
import Page from "./Page/Page";

function DocInfo() {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState("");

  let { docId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServiceByDocId(docId));
    dispatch(getDoctors(docId));
    dispatch(getDoctorsById(docId));
    dispatch(getEntryDocId(docId));
    dispatch(getCommentByDoctorId(docId));
  }, [dispatch, docId]);

  const docs = useSelector((state) => state.doctor.doc);
  const entry = useSelector((state) => state.entry.entry);
  const service = useSelector((state) => state.service.service);
  const comments = useSelector((state) => state.comments.comments);
  const token = useSelector((state) => state.user.token);
  const loading = useSelector((state) => state.doctor.loading);
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
    "????????",
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
        <h1>???????????????????? ?? ??????????</h1>
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
              <p>??????????????: {docs.age} ??????</p>
            </div>
            <div>
              <p>???????? ????????????: {docs.skill} ??????</p>
            </div>
            <div>
              <p>???????????????? ??????????: {docs.desc}</p>
            </div>

            <div>
              <p>??????????????????????????: {docs.spec?.name}</p>
            </div>

            <div>
              <p>?????????????? ?????????? : {docs.rating} ???</p>
            </div>
            <div>
              <p>?????????? ????????????????: {docs.telephone}</p>
            </div>
            <div>
              <p>?????????? ?????? ??????????: {docs.eMail}</p>
            </div>
            {!token ? (
              <div>
                <button className={style.btn_auth} onClick={handleCartOpen}>
                  ?????????????????????? ???? ????????????????
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
                    ???????????????????? ?? ??????????: {docs.name} {docs.lastName}
                  </div>
                  <div className={style.time}>???????????????? ??????????:</div>
                  <select
                    onChange={handleSetValue}
                    className={style.select_css}
                  >
                    <option selected disabled={true} value="??????????:">
                      ??????????:
                    </option>
                    {time.map((time, index) => {
                      return (
                        <option
                          key={index}
                          value={time}
                          disabled={
                            entry.find((item) => item.time === time) ||
                            time === "????????"
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
                    ??????????????
                  </button>
                  <button
                    onClick={() => handleEntry()}
                    disabled={!value}
                    className={style.btn_second}
                  >
                    ????????????????????
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <button className={style.btn} onClick={handleCartOpen}>
                  ???????????????????? ?? ??????????
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Center />
      <div className={style.wrap}>
        <h2 className={style.text}>?????????? ????????????</h2>
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
      <Services service={service} />
      <Page />
      <CommentsByUser comments={comments} token={token} />
    </div>
  );
}

export default DocInfo;

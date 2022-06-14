import React from "react";
import { Link } from "react-router-dom";
import style from "./Content.module.css";
// import { useDispatch } from "react-redux";
// import { getDoctorsById } from "../../../../redux-toolkit/features/doctorSlice";

function Content({ doctor }) {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getDoctorsById(doctor._id));
  // }, [dispatch]);

  return (  
    <div className={style.cart}>
      <Link to={`${doctor._id}`}>
        <div>
          {" "}
          <img src={doctor.photo} alt="" />
        </div>
        <hr />
        <div>{doctor.name}</div>
        <div>{doctor.lastName}</div>
        <div>Рейтинг:{doctor.rating}</div>
        <div>Специальность : {doctor.spec.name}</div>
      </Link>
    </div>
  );
}

export default Content;

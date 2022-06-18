import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchClinicById } from "../../../../../redux-toolkit/features/clinicSlice";
import styles from "./card.module.css";
import DocsByHospital from "./DocsByHospital";
import { getDoctorsByPlace } from "../../../../../redux-toolkit/features/doctorSlice";

const ClinicCard = () => {
  let { clinId } = useParams();

  const dispatch = useDispatch();

  const hospital = useSelector((state) => state.clinic.hospital);
  const doctors = useSelector((state) => state.doctor.clinicDocs)

  useEffect(() => {
    dispatch(fetchClinicById(clinId));
    dispatch(getDoctorsByPlace(clinId));
  }, [dispatch, clinId]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <div>
      <div className={styles.center}>
        <div className={styles.name}>{hospital.name}</div>
        <div className={styles.info}>
          <div className={styles.schled}>пн-cб 08:00 - 21:00</div>
          <div className={styles.schled}>вс 09:00 - 18:00</div>
        </div>
        <div className={styles.image}>
          <img src={hospital.photo} alt="clinic" />
        </div>
        <div className={styles.desc}>{hospital.desc}</div>
        <div className={styles.place}>{hospital.place}</div>
      </div>
      <Slider {...settings}>
        {doctors.map((docs) => {
          return <DocsByHospital key={docs._id} docs={docs} />;
        })}
      </Slider>
    </div>
  );
};

export default ClinicCard;

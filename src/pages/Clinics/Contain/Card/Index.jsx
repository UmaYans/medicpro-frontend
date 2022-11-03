import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchClinicById } from "../../../../redux-toolkit/features/clinicSlice";
import styles from "./card.module.css";
import DocsByHospital from "./DocsByHospital";
import { getDoctorsByPlace } from "../../../../redux-toolkit/features/doctorSlice";
import { getCategory } from "../../../../redux-toolkit/features/categoriesSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const ClinicCard = () => {
  let { clinId } = useParams();

  const dispatch = useDispatch();

  const hospital = useSelector((state) => state.clinic.hospital);
  const doctors = useSelector((state) => state.doctor.clinicDocs);

  useEffect(() => {
    dispatch(fetchClinicById(clinId));
    dispatch(getDoctorsByPlace(clinId));
    dispatch(getCategory());
  }, [dispatch, clinId]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    nextArrow: <AiOutlineArrowRight size="6px" fill="black" />,
    prevArrow: <AiOutlineArrowLeft size="6px" fill="black" />,
  };

  return (
    <div className={styles.cardById}>
      <div></div>
      <div className={styles.center}>
        <div className={styles.name}>{hospital.name}</div>
        <div className={styles.wrap}>
          <div className={styles.image}>
            <img src={hospital.photo} alt="clinic" />
          </div>
          <div className={styles.rignt}>
            <div>
              <div className={styles.inf}>Информация о клинике</div>
              <div className={styles.desc}>{hospital.desc}</div>
            </div>
            <div className={styles.info}>
              <div className={styles.time}>Время работы</div>
              <div className={styles.schled}>пн-cб 08:00 - 21:00</div>
              <div className={styles.schled}>вс 09:00 - 18:00</div>
            </div>
          </div>
        </div>
        <div className={styles.banner}>
          <div>Мы находимся по адресу</div>
          <div className={styles.place}>{hospital.place}</div>
        </div>
      </div>
      <div className={styles.pers}>Персонал больницы</div>
      <Slider {...settings}>
        {doctors.map((docs) => {
          return <DocsByHospital key={docs._id} {...docs} />;
        })}
      </Slider>
    </div>
  );
};

export default ClinicCard;

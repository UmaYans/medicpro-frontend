import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styles from "./card.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

import { getDoctors } from "../../../redux-toolkit/features/doctorSlice";

import Razvorot from "./Razvorot";

function Card(props) {
  const dispatch = useDispatch();
  const { doctors } = useSelector((state) => state.doctor);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 3,
    arrows: true,
    nextArrow: <AiOutlineArrowRight size="6x" fill="black" />,
    prevArrow: <AiOutlineArrowLeft fill="black" />,
  };

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  return (
    <>
      {/* Локальная карточка сс описанием */}
      <div className={styles.leftBlock}>
        <h1>Специалисты высочайшего уровня</h1>
        <p>
          В клиниках организован контроль качества обслуживания – врачебная
          комиссия оценивает эффективность работы каждого врача и разбирает
          каждое обращение.
        </p>
        <div style={{ display: "flex" }}>
          <div className={styles.abv}>
            <button>
              <Link to="/docs">Найти врача</Link>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.rodsBlock}>
        {/* Карточка доктора */}
        <div>
          <div className={styles.rods}>
            <Slider {...settings}>
              {doctors.map((doctor) => {
                return (
                  <div key={doctor._id}>
                    <Razvorot doctor={doctor} />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

{
}
export default Card;

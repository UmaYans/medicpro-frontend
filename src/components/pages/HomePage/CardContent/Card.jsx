import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styles from "./card.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { getDoctors } from "../../../../redux-toolkit/features/doctorSlice";
import SliderDoc from "../Slider/SliderDoc";

function Card(props) {
  const doctors = useSelector((state) => state.doctor.doctors);
  const dispatch = useDispatch();

  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 3,
  };

   
  useEffect(() => {
    dispatch(getDoctors());
  }, []);

  return (
    <div>
      {/* Локальная карточка сс описанием */}
      <div>
        <h1>Специалисты высочайшего уровня</h1>
        <p>
          В клиниках организован контроль качества обслуживания – врачебная
          комиссия оценивает эффективность работы каждого врача и разбирает
          каждое обращение.
        </p>
        <span>
          <Link to="/docs">Наши доктора</Link>
        </span>
        <button>
          <Link to="/docs">Найти врача</Link>
        </button>
      </div>

      {/* Карточка доктора */}
      <div>
        <div className={styles.rods}>
          <Slider {...settings}>
          
            {doctors.map((doctor) => {
              return (
                
                <div key={doctor._id}  style={{ justifyContent: "space-between" }}>
                
                  <div>
                    <SliderDoc  doctor={doctor} />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

{
  /* <Slider {...settings}>
<SliderDoc key={doctor._id} doctor={doctor} />

</Slider> */
}
export default Card;

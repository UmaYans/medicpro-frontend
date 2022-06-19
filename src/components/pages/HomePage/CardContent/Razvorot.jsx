import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./card.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import anime from "animejs";

import { getDoctors } from "../../../../redux-toolkit/features/doctorSlice";
import SliderDoc from "../Slider/SliderDoc";

function Razvorot({ doctor }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  let card = useState(`.cardRevers${doctor._id}`);

  let playing = false;

  const handleClick = (id) => {
    if (playing) return null;
    playing = true;
    anime({
      targets: card,
      scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 250 }],
      rotateY: { value: "+=180", delay: 200 },
      easing: "easeInOutSine",
      duration: 400,

      complete: function (anim) {
        playing = false;
      },
    });
  };

  return (
    <div>
      <div
        onClick={() => handleClick(doctor._id)}
        className={styles.cardContainer}
      >
        <div className={`${styles.card} cardRevers${doctor._id}`}>
          <div className={styles.front}>
            <div key={doctor._id}>
              <SliderDoc doctor={doctor} />
            </div>
          </div>
          <div className={styles.back}>
            <h2>{doctor.name + ' ' + doctor.lastName} </h2>
            <p>{doctor.desc}</p>
            <p style={{marginLeft:'220px'}}>Рейтинг: {doctor.rating}⭐</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Razvorot;

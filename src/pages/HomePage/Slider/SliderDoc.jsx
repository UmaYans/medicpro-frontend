import React from "react";
import styles from "./slider.module.css";

function SliderDoc({ doctor }) {
  console.log(doctor);

  return (
    <>
      <div className={styles.rod}>
        <div className={styles.rods}>
          <div>
            <img style={{ width: "100%" }} src={doctor.photo} alt="" />
          </div>

          <div>
            {doctor.name} {doctor.lastName}
          </div>
        </div>
      </div>
    </>
  );
}

export default SliderDoc;

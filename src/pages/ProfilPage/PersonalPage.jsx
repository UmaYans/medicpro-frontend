import React from "react";
import styles from "./profile.module.css";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const ProfilPage = () => {


  return (
    <div className={styles.main}>
      <div className={styles.wrap} >
        <div className={styles.sidebar}>
          {" "}
          <SideBar />
        </div>
        <div className={styles.content} >
          <Outlet />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ProfilPage;

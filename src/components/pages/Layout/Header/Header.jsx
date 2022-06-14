import { Link } from "react-router-dom";
import logo from "./image/logo.jpg";
import styles from "./header.module.css";
import React from "react";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        {/* <div className={styles.headBlock}>
          <Link to="/">
            {" "}
            <img
              style={{ width: "15%", marginLeft: "80%" }}
              src={logo}
              alt="MainLogo"
            />
          </Link>
          <p style={{ color: "#fc6f03" }}>
            <b>Medic</b>
          </p>
          <p style={{ color: "green" }}>
            <b>Pro</b>
          </p>
          <span style={{ display: "flex" }}></span>
        </div>

        <div className={styles.service} style={{ color: "silver" }}>
          <Link to="/docs" style={{ textDecoration: "none", color: "#fc6f03" }}>
            {" "}
            Врачи{" "}
          </Link>
          <Link
            to="/clinic"
            style={{
              margin: "0  15px",
              textDecoration: "none",
              color: "#fc6f03",
            }}
          >
            {" "}
            | Клиники |
          </Link>
          <Link
            to="/servic"
            style={{ textDecoration: "none", color: "#fc6f03" }}
          >
            {" "}
            Услуги{" "}
          </Link>
        </div>
        <div></div> */}

        {/* <span style = {{marginRight:'10%'}}>
              8 800-535-55-55
              Перезвоните нам
            </span> */}

        {/* <Link to="/profile" className={styles.profil}>
          <b>Мой профиль </b>
        </Link> */}
        <Link to="/">
          <img
            style={{ width: "15%", marginLeft: "80%" }}
            src={logo}
            alt="MainLogo"
          />
        </Link>
        <Link to="/docs"> Врачи </Link>
        <Link to="/clinics"> Клиники </Link>
        <Link to="/servic"> Услуги </Link>
        <Link to="/profile"> Мой профиль </Link>
      </header>
    </>
  );
};

export default Header;

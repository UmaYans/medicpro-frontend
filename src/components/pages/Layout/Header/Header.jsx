import { Link } from "react-router-dom";
// import logo from "./image/logo.jpg";
import styles from "./header.module.css";
import React from "react";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import MonitorHeartTwoToneIcon from "@mui/icons-material/MonitorHeartTwoTone";

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
        <div>
          <Link to="/profile"> Мой профиль </Link>
        </div> */}

        {/* <span style = {{marginRight:'10%'}}>
              8 800-535-55-55 style={{fontSize: '200px'}}
              Перезвоните нам
            </span> */}

        <Link style={{ marginLeft: "23px", textAlign: "center" }} to="/">
          {/* <img
            style={{ width: "15%", marginLeft: "80%" }}
            src={logo}
            alt="MainLogo"
          /> */}
          <MonitorHeartTwoToneIcon style={{ fontSize: "48px" }} />
          <div>MedicPRO</div>
        </Link>
        <Link to="/docs"> Врачи </Link>
        <Link to="/clinics"> Клиники </Link>
        <Link to="/servic"> Услуги </Link>
        <Link to="/profile">
          <div className={styles.info}>
            <div>+7 (938) 000-21-71</div>
            <div>Позвоните нам!</div>
          </div>
        </Link>
        <Link to="/profile">
          <AccountCircleTwoToneIcon style={{ fontSize: "48px" }} />{" "}
        </Link>
      </header>
    </>
  );
};

export default Header;

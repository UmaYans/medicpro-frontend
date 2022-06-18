import { Link } from "react-router-dom";
import logo from "./image/logo.jpg";
import styles from "./header.module.css";
import React from "react";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import { useSelector } from "react-redux";

const Header = () => {
  const token = useSelector((state) => state.user.token);
  return (
    <>
      <header className={styles.header}>
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
        {token ? (
          <Link to="/profile"><AccountCircleTwoToneIcon style={{fontSize: "48px"}}/></Link>
        ) : (
          <Link to="/sign-in">Войти</Link>
        )}
      </header>
    </>
  );
};

export default Header;

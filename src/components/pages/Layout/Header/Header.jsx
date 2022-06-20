import {  NavLink } from "react-router-dom";
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
        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : styles.no_active}>
        <div className={styles.log} >
        <img
            style={{ width: "15%" }}
            src={logo}
            alt="MainLogo"
          />
          <div>MedicPRO</div>
        </div>
        </NavLink>
        <NavLink to="/docs"className={({ isActive }) => isActive ? styles.active : styles.no_active} > Врачи </NavLink>
        <NavLink to="/clinics/" className={({ isActive }) => isActive ? styles.active : styles.no_active}> Клиники </NavLink>
        <NavLink to="/service" className={({ isActive }) => isActive ? styles.active : styles.no_active}> Услуги </NavLink>
        {token ? (
          <NavLink className={styles.profilе} to="/profile"><AccountCircleTwoToneIcon style={{fontSize: "48px"}}/></NavLink>
        ) : (
          <NavLink to="/sign-in" className={({ isActive }) => isActive ? styles.active : styles.no_active}>Войти</NavLink>
        )}
      </header>
    </>
  );
};

export default Header;

import React from "react";
import {  NavLink, Outlet } from "react-router-dom";

import styles from "./clinics.module.css";

const ClinicPage = () => {
  return (
    <main>
      <section className={styles.first}>
        <h1>
          Клиники <span>в Грозном</span>
        </h1>
        <span>
          Если появяться вопросы, просьба нас не беспокоить: ⠀
          <a className={styles.number} href="tel:+74956171171">
            +7 (938) 000-21-71
          </a>
        </span>
      </section>
      <section className={styles.second}>
        <div className={styles.nav_tabs}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.no_active
            }
            to="/clinics/"
          >
            Карта
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.no_active
            }
            to="list"
          >
            Список
          </NavLink>
        </div>
        <Outlet />
      </section>
    </main>
  );
};

export default ClinicPage;

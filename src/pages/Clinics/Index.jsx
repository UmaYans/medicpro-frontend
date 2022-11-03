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
          Если появяться вопросы, можете позвонить по этому номеру: ⠀
          <a className={styles.number} href="tel:+79281234567">
            +7 (928) 123-45-67
          </a>
        </span>
      </section>
      <section className={styles.second}>
        <nav className={styles.nav_tabs}>
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
        </nav>
        <Outlet />
      </section>
    </main>
  );
};

export default ClinicPage;

import React from "react";
import { Link } from "react-router-dom";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      <h2>MedicPRO 2022 - 2022</h2>
      <div className={styles.center_footer}>
        <div className={styles.about_us}>
          <h4>O компании</h4>
          <div>O компании</div>
          <div>Лицензия</div>
          <div>Партнеры</div>
        </div>
        <div className={styles.for_clients}>
          <h4>Пациентам</h4>
          <Link to="/docs">Врачи</Link>
          <Link to="/service">Услуги и Цены</Link>
          <Link to="/clinics/">Клиники</Link>
        </div>
        <div className={styles.service}>
          <h4>Сотрудничество</h4>
          <div>Страховым Компаниям</div>
          <div>Работа y нас</div>
          <div>Юр. лицам</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

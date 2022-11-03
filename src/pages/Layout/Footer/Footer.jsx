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
        <div className={styles.for_images}>
          <h4>Наши социальные сети</h4>
          <div className={styles.icons}>
            <div className={styles.images}>
              <a href="https://www.instagram.com/intocode/">
                <img
                  src="https://www.svgrepo.com/show/13639/instagram.svg"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a href="https://vk.com/">
                <img
                  src="https://www.svgrepo.com/show/303449/vk-1-logo.svg"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a href="https://web.telegram.org/z/">
                <img
                  src="https://www.svgrepo.com/show/299466/telegram.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import styles from "./static.module.css";
function StatisticsContent(props) {
  return (
    // предпоследний блок статистики и описания
    <div className={styles.rodBlock}>
      <div className={styles.upper}>
        <div className={styles.upBlock}>
          <h1>10 лет заботимся о вашем здоровье</h1>
          <p style={{ fontSize: "18px" }}>
            Сервис начал свою работу в 2022 году под брендом MedicPRO. Мы
            помогли миллионам людей получить помощь и продолжаем повышать
            качество медицинских услуг
          </p>
        </div>

        <div className={styles.staticBlock}>
          <div>
            <h2>5 млн</h2>
            <p>Клиентов сервиса MedicPRO</p>
          </div>
          <div>
            <h2>100 890 </h2>
            <p>отзывов оставили на сайте</p>
          </div>
          <div>
            <h2> Почти 24 890</h2>
            <p>практикующих врачей в базе</p>
          </div>
          <div>
            <h2>928</h2>
            <p>клиник подключено к сервису</p>
          </div>
          {/* <p className={styles.info}>И эти цифры растут каждый день</p> */}
        </div>
      </div>
    </div>
  );
}

export default StatisticsContent;

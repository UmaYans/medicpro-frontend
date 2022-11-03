import React, { useEffect } from "react";
import { getUser } from "../../../redux-toolkit/features/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./mainProf.module.css";

const MainProfil = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div className={styles.main}>
      <div className={styles.banner}>
        Скидки 15% для всех зарегистрированных
      </div>
      <div className={styles.container}>
        <img
          alt="phot"
          className={styles.imgIcon}
          src="https://cdn.onlinewebfonts.com/svg/download_568656.png"
        />
        <div className={styles.info}>
          <div className={styles.title}>Информация об аккаунте</div>
          <hr></hr>
          <div className={styles.infoAll}>Имя: {users.name}</div>
          <div className={styles.infoAll}>Фамилия: {users.lastName}</div>
          <div className={styles.infoAll}>Телефон: {users.telephone}</div>
        </div>
      </div>
    </div>
  );
};

export default MainProfil;

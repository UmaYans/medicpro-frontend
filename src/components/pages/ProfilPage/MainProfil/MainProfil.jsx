import React, { useEffect } from "react";
import { getUser } from "../../../../redux-toolkit/features/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./mainProf.module.css"

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
      <div>
      <div>Информация об аккаунте</div>
      <div>Имя: {users.name}</div>
      <div>Фамилия: {users.lastName}</div>
      <div>Телефон: {users.telephone}</div>
      </div>
    </div>
  );
};

export default MainProfil;

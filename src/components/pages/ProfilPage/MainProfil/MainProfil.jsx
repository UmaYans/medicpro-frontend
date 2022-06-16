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
      <div>{users.name}</div>
      <div>{users.lastName}</div>
      <div>{users.telephone}</div>
    </div>
  );
};

export default MainProfil;

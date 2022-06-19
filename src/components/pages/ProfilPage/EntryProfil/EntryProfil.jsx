import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteEntry,
  getEntryByUser,
} from "../../../../redux-toolkit/features/entrySlice";
import styles from "./Entry.module.css";

const EntryProfil = () => {
  const entries = useSelector((state) => state.entry.entries);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEntryByUser());
  }, [dispatch]);

  const functionDel = (del) => {
    dispatch(deleteEntry(del));
  };

  return (
    <div>
      <div className={styles.banner}>
        Первый прием и консультация <span>бесплатно</span> <br />{" "}
        <span className={styles.banner_butText}>предоставление дополнительных услуг по прайсу </span>
      </div>
      <div>
        <div className={styles.title}>Запланированны записи</div>
        {entries.map((item) => {
          return (
            <div key={item._id}>
              <div>
                К доктору: {item.doc?.name} {item.doc?.lastName}
              </div>
              <div>Время приема: {item.time} по МСК</div>
              <button onClick={() => functionDel(item._id)}>
                Отменить запись
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EntryProfil;

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
        <span className={styles.banner_butText}>
          предоставление дополнительных услуг по прайсу{" "}
        </span>
      </div>
      <div className={styles.title}>Запланированны записи</div>
      <div className={styles.blocks}>
        {entries.map((item) => {
          return (
            <div className={styles.blockMain}>
              <div className={styles.container}>
                <div key={item._id}>
                  <div className={styles.docName}>
                    К доктору: {item.doc?.name} {item.doc?.lastName}
                  </div>
                  <div className={styles.timeEntry}>
                    Время приема: {item.time} по МСК
                  </div>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => functionDel(item._id)}
                  >
                    Отменить запись
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EntryProfil;

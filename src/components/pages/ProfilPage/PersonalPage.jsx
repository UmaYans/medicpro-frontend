import React from "react";
import styles from "./profile.module.css";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const ProfilPage = () => {


  return (
    <div className={styles.main}>
      <div className={styles.wrap} >
        <div className={styles.sidebar}>
          {" "}
          <SideBar />
        </div>
        <div className={styles.content} >
          <Outlet />
        </div>

        {/* <div className={styles.flex} onClick={prof}>мой профиль {get ? <div>
        <div>{users.name}</div>
        <div>{users.lastName}</div>
        <div>{users.telephone}</div>
        </div> : null }</div>
        <div onClick={prof2}>комментарии<div>{get1 ?  <div>
        {comments.map((item) => {
          return (
            <div key={item._id}>
              <div>{item.text}</div>
              <button onClick={() => deleteTodo(item._id)}>x</button>
            </div>
          );
        })}
      </div> : null}</div></div>
        <li>услуги</li> */}
      </div>
      <div></div>
    </div>
  );
};

export default ProfilPage;

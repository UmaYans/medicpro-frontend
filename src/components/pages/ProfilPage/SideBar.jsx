import { Link } from "react-router-dom";

import React from "react";

const SideBar = () => {
  const unSign = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    window.location.reload();
  };

  return (
    <div>
      <div>
        <Link to="inform"> Мой профиль</Link>{" "}
      </div>
      <hr></hr>
      <div>
        <Link to="comments"> Мои отзывы</Link>{" "}
      </div>
      <hr></hr>
      <div>
        <Link to="entry"> Мои записи</Link>{" "}
      </div>
      <hr></hr>
      <button onClick={unSign}>xxxx</button>
    </div>
  );
};

export default SideBar;

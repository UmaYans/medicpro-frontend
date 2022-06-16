import { Link } from "react-router-dom";

import React from "react";

const SideBar = () => {
  return (
    <div>
      <div>
        <Link to="inform"> Мой профиль</Link>{" "}
      </div>
      <hr></hr>
      <div>
        <Link to="comments"> Мой отзывы</Link>{" "}
      </div>
      <hr></hr>
      <div>
        <Link to="entry"> Мой записи</Link>{" "}
      </div>
      <hr></hr>
    </div>
  );
};

export default SideBar;

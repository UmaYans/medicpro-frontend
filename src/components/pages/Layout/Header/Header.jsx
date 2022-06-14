import { Link } from "react-router-dom";

import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <Link to="/">
          {" "}
          <img src="https://polyclinika.ru/img/logotype2.svg" alt="MainLogo" />
        </Link>
        <Link to="/docs"> Врачи </Link>
        <Link to="/clinics"> Клиники </Link>
        <Link to="/servic"> Услуги </Link>
        <Link to="/profile"> Мой профиль </Link>
      </header>
    </>
  );
};

export default Header;

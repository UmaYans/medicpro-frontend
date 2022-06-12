import React, { useState } from "react";
import { useDispatch } from "react-redux";

const SigninPage = () => {
  // const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="content">
        <div>
          {" "}
          <h1>Авторизация</h1>
        </div>
        Логин
        <div>
          <input type="text" />
        </div>
        Пароль
        <div>
          <input type="password" />
        </div>
        <div>
          <button>Войти</button>
        </div>
      </div>
    </>
  );
};

export default SigninPage;

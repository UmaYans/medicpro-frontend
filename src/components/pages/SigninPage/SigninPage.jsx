import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../../redux-toolkit/features/users";

const SigninPage = () => {
  const dispatch = useDispatch();

  const error = useSelector((state) => state.user.error);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  //Валидация форм
  const [nameDirty, setNameDirty] = useState(false);
  const [lastNameDirty, setLastNameDirty] = useState(false);
  const [loginDirty, setLoginDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [telephoneDirty, setTelephoneDirty] = useState(false);
  const [emailError, setEmailError] = useState(
    "Поле ввода не может быть пустым"
  );
  const [passwordError, setPasswordError] = useState(
    "Пароль  не может быть пустым"
  );
  const [nameError, setNameError] = useState("Поле ввода не может быть пустым");

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный email");
      if (!e.target.value) {
        setEmailError("Поле ввода не может быть пустым");
      }
    } else {
      setEmailError("");
    }
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3) {
      setPasswordError("Пароль должен быть длиннее 3 символов");
      if (!e.target.value) {
        setPasswordError("Заполните поле");
      }
    } else if (e.target.value.length > 10) {
      setPasswordError("Пароль не должен быть длиннее 10 символов");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAuth = () => {
    dispatch(auth({ login, password }));
    setLogin("");
    setPassword("");
  };

  const handleBlur = (e) => {
    switch (e.target.name) {
      case "login":
        setLoginDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  return (
    <>
      <div className="content">
        <form action="" onSubmit={handleSubmit}>
          <div>
            {" "}
            <h1>Авторизация</h1>
          </div>
          <div>{error}</div>

          Логин
          <div>
          {loginDirty && emailError && <div>{emailError}</div>}
            <input
            name="login"
            onBlur={(e) => handleBlur(e)}
              type="text"
              onChange={(e)=>handleChangeLogin(e)}
              placeholder="Enter login..."
              value={login}
            />
          </div>
          Пароль
          <div>
          {passwordDirty && passwordError && <div>{passwordError}</div>}
            <input
            onBlur={(e) => handleBlur(e)}
            name="password"
              type="password"
              onChange={(e)=>handleChangePassword(e)}
              placeholder="Enter password"
              value={password}
            />
          </div>
          <div>
            <button onClick={handleAuth}>Войти</button>
          </div>
          <div>
            <p>
              Нет аккаунта? <Link to="/sign-up">Зарегистрируйтесь!</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SigninPage;

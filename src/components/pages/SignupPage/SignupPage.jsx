import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";
import { registerUser } from "../../../redux-toolkit/features/usersSlice";
import style from "./Signup.module.css"

const SignupPage = () => {
  const dispatch = useDispatch();

  const handleInput = ({ target: { value } }) => setTelephone(value);

  const signUp = useSelector((state) => state.user.signUp);
  const error = useSelector((state) => state.user.error);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");

  //Валидация форм

  const [nameDirty, setNameDirty] = useState(false);
  const [lastNameDirty, setLastNameDirty] = useState(false);
  const [loginDirty, setLoginDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState(
    "Поле ввода не может быть пустым"
  );
  const [passwordError, setPasswordError] = useState(
    "Пароль  не может быть пустым"
  );
  const [nameError, setNameError] = useState("Поле ввода не может быть пустым");
  const [lastNameError, setLastNameError] = useState(
    "Поле ввода не может быть пустым"
  );

  const handleChangeName = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 3) {
      setNameError("Имя  должно быть длиннее 3 символов");
      if (!e.target.value.length) {
        setNameError("Заполните поле");
      }
    } else if (e.target.value.length > 10) {
      setNameError("Имя не должно быть длинне 10 символов");
    } else {
      setNameError("");
    }
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 3) {
      setLastNameError("Фамилия  должна быть длиннее 3 символов");
      if (!e.target.value.length) {
        setLastNameError("Заполните поле");
      }
    } else {
      setLastNameError("");
    }
  };

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

  const handleReg = () => {
    dispatch(registerUser({ name, lastName, login, password, telephone }));
    setName("");
    setLastName("");
    setLogin("");
    setPassword("");
    setTelephone("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setLastName("");
    setLogin("");
    setPassword("");
    setTelephone("");
  };

  function PhoneInput(props) {
    return (
      <InputMask
        mask=" +7 (999) 999-99-99"
        value={props.value}
        onChange={props.onChange}
      ></InputMask>
    );
  }

  const handleBlur = (e) => {
    switch (e.target.name) {
      case "email":
        setLoginDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      case "text":
        setNameDirty(true);
        break;
      case "lastName":
        setLastNameDirty(true);
        break;
      default:
        return false;
    }
  };
  const disabled = name && lastName && login && password && telephone;
  return (
    <div className={style.body}>
      <div className={style.content}>
        <h2>Регистрация</h2>
        <div>{error}</div>
        <form onSubmit={handleSubmit}>
          <i>Имя</i>
          <div>
            {nameDirty && nameError && <div>{nameError}</div>}
            <input
              name="text"
              onBlur={(e) => handleBlur(e)}
              type="text"
              placeholder="Введите имя"
              value={name}
              onChange={(e) => handleChangeName(e)}
            />
          </div>
          <i>Фамилия</i>
          <div>
            {lastNameDirty && lastNameError && <div>{lastNameError}</div>}
            <input
              onBlur={(e) => handleBlur(e)}
              name="lastName"
              type="text"
              placeholder="Введите фамилию"
              value={lastName}
              onChange={(e) => handleChangeLastName(e)}
            />
          </div>
          <i>Логин</i>
          <div>
            {loginDirty && emailError && <div>{emailError}</div>}
            <input
              name="email"
              onBlur={(e) => handleBlur(e)}
              type="text"
              placeholder="Введите логин"
              value={login}
              onChange={handleChangeLogin}
            />
          </div>
          <i>Пароль</i>
          <div>
            {passwordDirty && passwordError && <div>{passwordError}</div>}
            <input
              onBlur={(e) => handleBlur(e)}
              name="password"
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => handleChangePassword(e)}
            />
          </div>
          <i>Номер телефона</i>
          <div>
            <PhoneInput value={telephone} onChange={handleInput}></PhoneInput>
          </div>
          <br />
          <div>
            <button onClick={handleReg} disabled={signUp || !disabled}>
              Зарегистрироваться
            </button>
          </div>
          <div>
            <p>
              Уже есть аккаунт? <Link to="/sign-in">Войти</Link>{" "}
            </p>
          </div>
        </form>
          <div>Войти как <Link to="/">гость</Link></div>
      </div>
    </div>
  );
};

export default SignupPage;

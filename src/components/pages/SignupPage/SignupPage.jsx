import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../../redux-toolkit/features/users";
const SignupPage = () => {
  const dispatch = useDispatch();

  const signUp = useSelector((state) => state.signUp);
  const error = useSelector((state) => state.error);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeTelephone = (e) => {
    setTelephone(e.target.value);
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

  return (
    <>
      <div className="content">
        <div>{error}</div>
        <h1>Регистрация</h1>
        <form onSubmit={handleSubmit}>
          <i>Имя</i>
            <div><input
              type="text"
              placeholder="Введите имя"
              value={name}
              onChange={handleChangeName}
            /></div>
          <i>Фамилия</i>
            <div><input
              type="text"
              placeholder="Введите фамилию"
              value={lastName}
              onChange={handleChangeLastName}
            /></div>
          <i>Логин</i>
            <div><input
              type="text"
              placeholder="Введите логин"
              value={login}
              onChange={handleChangeLogin}
            /></div>
          <i>Пароль</i>
            <div><input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={handleChangePassword}
            /></div>
          <i>Номер телефона</i>
            <div>
            <input
              type="text"
              placeholder="Введите номер"
              value={telephone}
              onChange={handleChangeTelephone}
            />
            </div>
          <br />
          <div>
            {" "}
            <button onClick={handleReg}>Зарегистрироваться</button>
          </div>
          <div>
            {" "}
            <p>
              Уже есть аккаунт? <Link to="/sign-in">Войти</Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignupPage;

import React, { useState } from "react";

const SignupPage = () => {
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

  return (
    <>
      <div className="content">
        <h1>Регистрация</h1>
        <i>Имя</i>
        <div>
          <input type="text" placeholder="Введите имя" />
        </div>
        <i>Фамилия</i>
        <div>
          <input type="text" placeholder="Введите фамилию" />
        </div>
        <i>Логин</i>
        <div>
          <input type="text" placeholder="Введите логин" />
        </div>
        <i>Пароль</i>
        <div>
          <input type="text" placeholder="Пароль" />
        </div>
        <i>Номер телефона</i>
        <div>
          <input type="text" placeholder="Введите номер" />
        </div>
        <br />
        <div>
          {" "}
          <button>Зарегистрироваться</button>
        </div>
      </div>
    </>
  );
};

export default SignupPage;

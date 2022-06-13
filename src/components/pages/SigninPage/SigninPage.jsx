import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../../redux-toolkit/features/users";

const SigninPage = () => {
  const dispatch = useDispatch();


  const error = useSelector((state) => state.error);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleAuth = ()=>{
    dispatch(auth({login,password}))
    setLogin('')
    setPassword('')
  }

  return (
    <>
      <div className="content">
        <div>{error}</div>
        <form action="" onSubmit={handleSubmit}> 
        <div>
          {" "}
          <h1>Авторизация</h1>
        </div>
        Логин
        <div>
          <input type="text" 
          onChange={handleChangeLogin}
          placeholder="Enter login..." value={login}/>
        </div>
        Пароль
        <div>
          <input type="password" 
          onChange={handleChangePassword} placeholder="Enter password" value = {password} />
        </div>
        <div>
          <button onClick={handleAuth}>Войти</button>
        </div>
        </form>
      </div>
    </>
  );
};

export default SigninPage;

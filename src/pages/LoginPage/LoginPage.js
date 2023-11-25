import React, { useState } from "react";
import classes from "./LoginPage.module.css";
import axiosApi from "../../axiosMethod";

const LoginPage = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    axiosApi
      .post("/auth/login", data)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("refreshToken", response.data.data.refresh);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  return (
    <div className={classes.LoginPage_main}>
      <form action="" className={classes.login_form} onSubmit={handleLogin}>
        <label htmlFor="">Usename</label>
        <input
          type="text"
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

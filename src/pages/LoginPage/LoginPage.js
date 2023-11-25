import React, { useState } from "react";
import classes from "./LoginPage.module.css";
import axios from 'axios';

const LoginPage = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post("/api/auth/login",data).then((response)=>{
        console.log(response.data);
    })
  }


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

import React, { useEffect } from "react";
import classes from "./HomePage.module.css";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import axiosApi from "../../axiosMethod";

const HomePage = () => {
  const token = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("refreshToken");
  useEffect(() => {
    setInterval(() => {
      axiosApi
        .post("/auth/token/refresh", { refresh: refreshToken })
        .then((response) => {
          localStorage.setItem("token", response.data.access);
          localStorage.setItem("refreshToken", response.data.refresh);
        })
        .catch((error) => {
          console.error(error);
        });
    }, 240000);
  }, []);
  return (
    <div className={classes.homePage_main}>
      <Header />
      <div className={classes.body_section}>
        <Sidebar />
        <BodyContainer />
      </div>
    </div>
  );
};

export default HomePage;

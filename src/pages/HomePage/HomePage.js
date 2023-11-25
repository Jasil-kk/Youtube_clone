import React from "react";
import classes from "./HomePage.module.css";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import BodyContainer from "../../components/BodyContainer/BodyContainer";

const HomePage = () => {
  return (
    <div className={classes.homePage_main}>
      <Header />
      <div className={classes.body_section}>
        <Sidebar/>
        <BodyContainer/>
      </div>
    </div>
  );
};

export default HomePage;

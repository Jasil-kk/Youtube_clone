import React, { useState } from "react";
import classes from "./Header.module.css";
import mic from "../../assets/mic.svg";
import hamburger from "../../assets/hamburger.svg";
import create from "../../assets/create.svg";
import notifications from "../../assets/notifications.svg";
import search from "../../assets/search.svg";
import youtubeLogo from "../../assets/youtubeLogo.svg";
import { useNavigate } from "react-router-dom";
import Profile from "../Profile/Profile";
import axiosApi from "../../axiosMethod";

const Header = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const refreshToken = localStorage.getItem("refreshToken");

  const handleShow = () => {
    setShow(!show);
  };

  const handleLogout = () => {
    axiosApi
      .post("/auth/logout", { refresh: refreshToken })
      .then((response) => {
        console.log(response.data);
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        window.location.reload();
      })
      .catch(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        window.location.reload();
      });
  };

  return (
    <>
      <header className={classes.header_main}>
        <div className={classes.section_container}>
          <img className={classes.menu_icon} src={hamburger} alt="Menu" />
          <img
            className={classes.logo}
            src={youtubeLogo}
            alt="Logo"
            onClick={() => navigate("/")}
          />
        </div>
        <div className={classes.section_container}>
          <form action="" className={classes.search_form}>
            <input type="search" placeholder="Search" />
            <div className={classes.search_container}>
              <img src={search} alt="Search" />
            </div>
          </form>
          <div className={classes.mic_container}>
            <img src={mic} alt="Mic" />
          </div>
        </div>
        <div className={classes.section_container}>
          <img className={classes.create_icon} src={create} alt="Create" />
          <img
            className={classes.notification_icon}
            src={notifications}
            alt="Notifications"
          />
          <div className={classes.profile_container} onClick={handleShow}>
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Profile"
            />
          </div>
        </div>
      </header>
      {show && <Profile handleShow={handleShow} logout={handleLogout} />}
    </>
  );
};

export default Header;

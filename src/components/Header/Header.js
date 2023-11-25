import React from "react";
import classes from "./Header.module.css";
import mic from "../../assets/mic.svg";
import hamburger from "../../assets/hamburger.svg";
import create from "../../assets/create.svg";
import notifications from "../../assets/notifications.svg";
import search from "../../assets/search.svg";
import youtubeLogo from "../../assets/youtubeLogo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
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
        <div className={classes.profile_container}>
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Profile"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

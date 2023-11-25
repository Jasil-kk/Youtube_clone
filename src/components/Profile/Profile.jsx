import React from "react";
import classes from "./Profile.module.css";

const Profile = ({handleShow,logout}) => {
  return (
    <>
    <div className={classes.profile_main}>
      <div className={classes.container}>
        <div className={classes.avatar}>
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
        </div>
        <div>
          <h4 className={classes.name_text}>Muhammed Jasil</h4>
          <p className={classes.email_text}>jasikk2522</p>
        </div>
      </div>
      <button className={classes.lgout_btn} onClick={logout}>Logout</button>
    </div>
    <div className={classes.closer} onClick={handleShow}></div>
    </>
  );
};

export default Profile;

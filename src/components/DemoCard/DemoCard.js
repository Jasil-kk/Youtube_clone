import React from "react";
import classes from "./DemoCard.module.css"
import demoPic from "../../assets/Images.png";

const DemoCard = () => {
  return (
    <div className={classes.video_card}>
      <img src={demoPic} alt="" />
      <div>
        <h5 className={classes.first_text}>
          How to stop procrastination & increase Motivation
        </h5>
        <p className={classes.second_text}>Human Lab clips</p>
        <p className={classes.second_text}>1M views . 3 years ago</p>
      </div>
    </div>
  );
};

export default DemoCard;

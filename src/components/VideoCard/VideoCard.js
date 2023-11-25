import React from "react";
import classes from "./VideoCard.module.css";

const VideoCard = ({
  mainImage,
  avatarImage,
  aboutText,
  nameText,
  viewText,
  onClick,
}) => {
  return (
    <div className={classes.videoCard} onClick={onClick}>
      <div className={classes.first_section}>
        <img src={mainImage} alt="" />
      </div>
      <div className={classes.second_section}>
        <div className={classes.avatar}>
          <img src={avatarImage} alt="" />
        </div>
        <div>
          <h4 className={classes.details_text}> {aboutText}</h4>
          <p className={classes.name_text}>{nameText}</p>
          <span className={classes.name_text}>{viewText}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

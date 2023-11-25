import React from "react";
import classes from "./CustomItem.module.css";

const CustomItem = ({ icon, text, isActive }) => {
  return (
    <div
      className={classes.custom_item}
      style={{ background: isActive ? "#303030" : "" }}
    >
      <img src={icon} alt="Icon" />
      <span>{text}</span>
    </div>
  );
};

export default CustomItem;

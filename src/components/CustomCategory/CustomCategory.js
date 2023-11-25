import React from "react";
import classes from "./CustomCategory.module.css";

const CustomCategory = ({ text, isActive }) => {
  return (
    <div
      className={classes.customCategory_main}
      style={{
        background: isActive ? "#fff" : "",
        color: isActive ? "#303030" : "",
      }}
    >
      {text}
    </div>
  );
};

export default CustomCategory;

import React from "react";
import classes from "./SecondHeader.module.css";
import CustomCategory from "../CustomCategory/CustomCategory";
import arrow from "../../assets/rightArrow.svg";

const SecondHeader = () => {
  return (
    <div className={classes.secondHeader_main}>
      <div className={classes.secondHeader_Item_contianer}>
        <CustomCategory text={"All"} isActive={true}/>
        <CustomCategory text={"Weight Training"} />
        <CustomCategory text={"Manga"} />
        <CustomCategory text={"Trailers"} />
        <CustomCategory text={"Music"} />
        <CustomCategory text={"Study Skills"} />
        <CustomCategory text={"Podcasts"} />
        <CustomCategory text={"AI"} />
        <CustomCategory text={"TED"} />
        <CustomCategory text={"Motivation"} />
        <CustomCategory text={"Cristiano Ronaldo"} />
        <CustomCategory text={"Other"} />
        <CustomCategory text={"Item"} />
        <CustomCategory text={"Item"} />
        <CustomCategory text={"Item"} />
        <CustomCategory text={"Item"} />
        <CustomCategory text={"Item"} />
        <CustomCategory text={"Item"} />
        <CustomCategory text={"Item"} />
      </div>
      <div className={classes.arrow_container}>
        <img src={arrow} alt="Arrow" />
      </div>
    </div>
  );
};

export default SecondHeader;

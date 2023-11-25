import React from "react";
import classes from "./Sidebar.module.css";
import home from "../../assets/home.svg";
import history from "../../assets/history.svg";
import liked from "../../assets/liked.svg";
import shots from "../../assets/shots.svg";
import subscriptions from "../../assets/subscriptions.svg";
import watchLater from "../../assets/watchLater.svg";
import CustomItem from "../CustomItem/CustomItem";

const Sidebar = () => {
  return (
    <div className={classes.sidebar_main}>
      <nav className={classes.list_container}>
        <ul className={classes.item_container}>
          <CustomItem icon={home} text={"Home"} isActive={true} />
          <CustomItem icon={shots} text={"Shots"} />
          <CustomItem icon={subscriptions} text={"Subscriptions"} />
        </ul>
        <ul className={classes.item_container}>
            <h4 className={classes.label_text}>You</h4>
          <CustomItem icon={history} text={"History"} />
          <CustomItem icon={watchLater} text={"Watch later"} />
          <CustomItem icon={liked} text={"Liked videos"} />
        </ul>
        <ul className={classes.item_container}>
        <h4 className={classes.label_text}>Explore</h4>

          <CustomItem icon={shots} text={"Trending"} />
          <CustomItem icon={subscriptions} text={"Shopping"} />
          <CustomItem icon={subscriptions} text={"Music"} />
          <CustomItem icon={subscriptions} text={"Movies"} />
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

import React from "react";
import classes from "./SinglePage.module.css";
import Header from "../../components/Header/Header";
import liked from "../../assets/Liked.svg";
import disLiked from "../../assets/DisLiked.svg";
import share from "../../assets/Share.svg";
import More from "../../assets/More.svg";
import DemoCard from "../../components/DemoCard/DemoCard";
import CustomCategory from "../../components/CustomCategory/CustomCategory"

const SinglePage = () => {
  return (
    <div className={classes.singlePage_main}>
      <Header />
      <div className={classes.body_container}>
        <div className={classes.video_container}>
          <video className={classes.video} controls>
            <source src="./Videos/video1.mp4" type="video/mp4" />
          </video>
          <h3 className={classes.about_text}>
            Blind Woodturner: Turning passion into fine art
          </h3>
          <div className={classes.bottom_section}>
            <div className={classes.avatar}>
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </div>
            <div className={classes.about_container}>
              <h4 className={classes.name_text}>Huberman Lab</h4>
              <span className={classes.sub_text}>563k subscribers</span>
            </div>
            <button className={classes.subScribe_btn}>Subscribe</button>
            <div className={classes.like_container}>
              <span>
                {" "}
                <img src={liked} alt="" /> 89k
              </span>
              <span className={classes.disLiked}>
                <img src={disLiked} alt="" />
              </span>
            </div>
            <div className={classes.share_container}>
              <img src={share} alt="" />
              Share
            </div>
            <div className={classes.more_container}>
              <img src={More} alt="" />
            </div>
          </div>
        </div>

        <div className={classes.side_section}>
          <div className={classes.categroy}>
            <CustomCategory text={"All"} isActive={true}/>
            <CustomCategory text={"From Huberman Lab Clips"} />
            <CustomCategory text={"Related"} />
          </div>
          <DemoCard />
          <DemoCard />
          <DemoCard />
          <DemoCard />
          <DemoCard />
          <DemoCard />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;

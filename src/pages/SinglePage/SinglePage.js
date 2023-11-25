import React, { useEffect, useState } from "react";
import classes from "./SinglePage.module.css";
import Header from "../../components/Header/Header";
import liked from "../../assets/Liked.svg";
import disLiked from "../../assets/DisLiked.svg";
import share from "../../assets/Share.svg";
import More from "../../assets/More.svg";
import DemoCard from "../../components/DemoCard/DemoCard";
import CustomCategory from "../../components/CustomCategory/CustomCategory";
import axiosApi from "../../axiosMethod";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const [video, setVideo] = useState({});
  const params = useParams();

  const feedId = params.id;
  useEffect(() => {
    axiosApi
      .get(`/feeds/get-video-details?feed_id=${feedId}`)
      .then((response) => {
        setVideo(response.data.data);
      });
  }, []);

  const truncateText = (text, limit) => {
    if (text && text.length) {
      if (text.length <= limit) {
        return text;
      } else {
        return text.slice(0, limit) + "...";
      }
    } else {
      return "";
    }
  };
  return (
    <div className={classes.singlePage_main}>
      <Header />
      <div className={classes.body_container}>
        <div className={classes.video_container}>
          <video className={classes.video} controls>
            <source src={video?.video} type="video/mp4" />
          </video>
          <h3 className={classes.about_text}>
            {truncateText(video?.channel_description, 70)}
          </h3>
          <div className={classes.bottom_section}>
            <div className={classes.avatar}>
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </div>
            <div className={classes.about_container}>
              <h4 className={classes.name_text}>
                {truncateText(video?.channel_name, 30)}
              </h4>
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
            <CustomCategory text={"All"} isActive={true} />
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

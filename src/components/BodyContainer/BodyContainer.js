import React, { useEffect, useState } from "react";
import classes from "./BodyContainer.module.css";
import SecondHeader from "../SecondHeader/SecondHeader";
import VideoCard from "../VideoCard/VideoCard";
import { useNavigate } from "react-router-dom";
import axiosApi from "../../axiosMethod";

const BodyContainer = () => {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axiosApi.get("/feeds/get-videos").then((response) => {
      setVideos(response.data.data.results.data);
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
    <div className={classes.bodyContainer_main}>
      <SecondHeader />
      <div className={classes.videos_container}>
        {videos?.map((video) => (
          <VideoCard
            key={video?.id}
            mainImage={video?.video}
            avatarImage={
              "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
            }
            aboutText={truncateText(video?.channel_description, 80)}
            nameText={truncateText(video?.channel_name, 40)}
            viewText={"15K Views .1 week ago"}
            onClick={() => navigate(`/singlepage/${video?.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default BodyContainer;

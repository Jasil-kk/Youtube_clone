import React, { useEffect } from "react";
import classes from "./BodyContainer.module.css";
import SecondHeader from "../SecondHeader/SecondHeader";
import VideoCard from "../VideoCard/VideoCard";
import { useNavigate } from "react-router-dom";
import axiosApi from "../../axiosMethod";

const BodyContainer = () => {
  const navigate = useNavigate();

  useEffect(()=> {
    axiosApi.get("/feeds/get-video-details").then((response)=>{
      console.log(response.data);
    })
  },[])
  
  return (
    <div className={classes.bodyContainer_main}>
      <SecondHeader />
      <div className={classes.videos_container}>
        <VideoCard
          mainImage={
            "https://images.pexels.com/photos/19229575/pexels-photo-19229575/free-photo-of-beach-stretch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          }
          avatarImage={
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
          aboutText={"Lorem ipsum dolor sit amet, consecte adipiscing elit."}
          nameText={"Jesica Lambert"}
          viewText={"15K Views .1 week ago"}
          onClick={() => navigate("/singlepage")}
        />
      </div>
    </div>
  );
};

export default BodyContainer;

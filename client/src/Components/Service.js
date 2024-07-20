import React from "react";
import PickMeals from "../Assets/climate.png";
import ChooseMeals from "../Assets/crop.png";
import DeliveryMeals from "../Assets/fertilizer.png";
import Delivery from "../Assets/info.png";
import PiMeals from "../Assets/market.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Climate Assesment",
      text: "Integrate tools for climate risk analysis and mitigation in crop management.",
    },
    {
      image: ChooseMeals,
      title: "Crop Recommendations",
      text: "Recommend ideal crops based on climate, soil-type, and water.",
    },
    {
      image: DeliveryMeals,
      title: "Fertilizer Recommendations",
      text: "Analyzing soil, crop needs, and other factors to offer customized fertilizer advice for optimal growth.",
    },
    {
      image: Delivery,
      title: "Crop Information System",
      text: "Access details on crop varieties: cultivation needs, growth patterns, location and yields.",
    },
    {
      image: PiMeals,
      title: "Second Hand Market",
      text: "Discover a reliable second-hand tractor market offering cost-effective solutions for agricultural needs.",
    }
  ];
  return (
    <div id="service" className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Services</p>
        <h1 className="primary-heading1">What we provide</h1>
        <p className="primary-text">
        Here are some services that help farmers in optimizing
        agricultural practices, enhancing productivity, and ensuring efficient
        crop growth.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;

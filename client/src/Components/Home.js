import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import BannerImage from "../Assets/farm.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
// Import CSS file
import "./scrollbar.css";

const Home = () => {
  return (
    <div id="home-section" className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* <img src={BannerBackground} alt="" /> */}
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Plow. Plant. Prosper
          </h1>
          <p className="primary-text">
            "Access vital climatic data, crop water schedules, seasonal advice, and personalized fertilizer tips—all in one place!"
          </p>
          <Link to="/signup" className="secondary-button"> {/* Use Link for navigation */}
            Sign Up <FiArrowRight />{" "}
          </Link>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;

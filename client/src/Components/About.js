import React from "react";
// import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/farmgife.gif";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div id="about" className="about-section-container">
      
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About us</p>
        <h1 className="primary-heading">
        Ensure sustainable consumption and production patterns
        </h1>
        <p className="primary-text">
        Our objective is to promote sustainable consumption and production patterns,
        specifically focusing on agriculture, to ensure environmental sustainability,
        economic resilience, and social equity. Sustainable agriculture involves 
        practices that enhance productivity while minimizing environmental impact, 
        such as soil conservation, efficient water use, biodiversity preservation,
        and integrated pest management. By adopting sustainable agricultural methods,
        we can protect natural resources, improve soil health, promote biodiversity, 
        and ensure food security for present and future generations. This approach 
        not only supports the well-being of farmers and rural communities but also contributes 
        to global efforts in combating climate change and achieving sustainable development goals.
        Moreover, there's an emphasis on gradually improving land and soil quality, 
        ensuring that agricultural activities are not just sustainable but also 
        contribute positively to the environment in the long term.
        </p>
        
        <div className="about-buttons-container">
             
          <a className="text" href="https://www.un.org/sustainabledevelopment/sustainable-consumption-production/" target="_blank">
           <button className="secondary-buttons">Learn More</button>
         </a>

         <a  href="https://www.youtube.com/watch?v=4aa6wvJyt1c&pp=ygUYc3VzdGFpbmFibGUgZm9vZCBzeXN0ZW1z" target="_blank">
         <button className="watch-video-button">
            <BsFillPlayCircleFill />Watch Video
          </button>
         </a>

          {/* <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default About;

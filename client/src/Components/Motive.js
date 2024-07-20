import React from "react";
import ProfilePic from "../Assets/sdg.gif";
import Slogan from "../Assets/Target.png";
// import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div id="motive" className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading1">Motive</p>
        <h1 className="primary-heading2">Ensure sustainable consumption and production</h1>
        <p className="primary-text">
        The goal calls for businesses, consumers, and policy-makers to adapt to sustainable practices.
        It envisions sustainable consumption and production based on advanced technology, resource 
        efficiency, and reduced global waste. 
        </p>
        <h2 className="primary-target">Our Target</h2>

      </div>
        
      <div className="testimonial-section-bottom">
        <img className="lal" src={ProfilePic} alt="" />
        <img className="text-lal" src={Slogan} alt="" />
              
      </div>
      
    </div>
  );
};

export default Testimonial;

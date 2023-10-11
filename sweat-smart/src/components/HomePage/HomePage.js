import React from "react";

import "./homepage.css";
import LOGO1 from "../../assets/LOGO1.png";

const HomePage = () => {
  return (
    <div className="section__padding" data-aos="fade-down">
      <div className="heading__feature">
        <div className="heading__feature_logo">
          <img src={LOGO1} alt="logo" />
          <h1>Sweat Smart</h1>
        </div>
        <div className="heading__feature_text">
          <p>
            "Welcome to Sweat Smart, where fitness meets intelligence. Our
            AI-powered workout plan generator tailors each session to your
            unique goals and abilities, helping you unlock your full potential,
            one smart sweat at a time. Get ready to transform your fitness
            journey with precision, guidance, and results like never before."
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

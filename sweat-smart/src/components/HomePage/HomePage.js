import React from "react";


import { images } from "../../constants";
import "./homepage.css";

const HomePage = () => {
  return (
    <div className="section__padding header" data-aos="fade-down">
      <div className="heading__logo">
        <img src={images.SS_logo01} alt="logo" />
        <div className="slogan">
          <h1 className="gradient-text">Welcome to SweatSmart!</h1>
          <span className="gradient-text">
            where fitness meets intelligence.
          </span>
        </div>
      </div>
      <div className="heading__content ">
        <div className="heading__content-one">
          <div className="heading__content-one_img" data-aos="flip-left">
            <img src={images.excercise} alt="excercise img" />
          </div>
          <div className="heading__content_text" data-aos="fade-right">
            <p data-aos="fade-right" data-aos-delay="150">
              Our AI-powered workout plan generator tailors each session to your
              unique goals and abilities.
            </p>
            <p data-aos="fade-right" data-aos-delay="300">
              Unlock your full potential, one smart sweat at a time. Get ready
              to transform your fitness journey with precision, guidance, and
              results like never before.
            </p>
          </div>
        </div>
        <div className="heading__content-two">
          <div className="heading__content_text" data-aos="fade-left">
            <p data-aos="fade-left" data-aos-delay="150">
              Let's Sweatsmart schedule workouts tailored to your needs, making
              it easier than ever to maintain your fitness, even with a busy
              lifestyle.
            </p>
          </div>
          <div className="heading__content-two_img" data-aos="flip-right">
            <img src={images.clock} />
          </div>
        </div>
        <div className="heading__content-button">
          <a>
            <span>Get Started</span>
          </a>

        </div>
      </div>
    </div>
  );
};

export default HomePage;


import React from "react";
import { images } from "../../constants";
import "./homepage.css";


const HomePage = () => {


  return (
    <div className="section__padding header" data-aos="fade-down">
      <div className="heading__logo">
        <img src={images.LOGO1} alt="logo" />
        <div className="slogan">
          <h1>
            Welcome to SweatSmart,
            <br />
            where fitness meets intelligence.{" "}
          </h1>
        </div>
      </div>
      <div className="heading__content">
        <div className="heading__content-one">
          <div className="heading__content-one_img">
            <img src={images.excercise} alt="excercise img" />
          </div>
          <div className="heading__content_text">
            <p>
              Our AI-powered workout plan generator tailors each session to your
              unique goals and abilities.
            </p>
            <p>
              Unlock your full potential, one smart sweat at a time. Get ready
              to transform your fitness journey with precision, guidance, and
              results like never before.
            </p>
          </div>
        </div>
        <div className="heading__content-two">
          <div className="heading__content_text">
            <p>
              Let's Sweatsmart schedules workouts tailored to your needs, making
              it easier than ever to maintain your fitness, even with a busy
              lifestyle.
            </p>
          </div>
          <div className="heading__content-two">
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

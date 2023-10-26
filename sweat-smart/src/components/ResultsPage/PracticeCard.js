/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import "./PracticeCard01.css";
import "./preload.css";
import { images } from "../../constants";
import { videoArray } from "../../constants/videoArray";

const nameMatch = (exercise) => {
  for (let i = 0; i < videoArray.length; i++) {
    if (videoArray[i].name === exercise) {
      return videoArray[i].video;
    }
  }
  return false;
};

const PracticeCard = ({ plan, loading, preloadRef, clicked }) => {

  const [clickedButtons, setClickedButtons] = useState([]);

  useEffect(() => {
    if (plan.exercises) {
      setClickedButtons(plan.exercises.map(() => false));
    }
  }, [plan]);

  const toggleVideo = (index) => {
    setClickedButtons(prevButtons => {
      return prevButtons.map((button, i) => {
        return i === index ? !button : false; 
      });
    });
  };

  return (
    <>
      {loading && !clicked ? (
        <div></div>
      ) : loading && clicked ? (
        <section ref={preloadRef} class="sec-loading">
          {console.log("Animation")}
          <div class="one"></div>
        </section>
      ) : (
        <div className="card section__padding">

          <div className="card-header">
            <h1 className="users-name">Hello, {plan.name}!</h1>
            <h3 className="workout-breakdown">Your workout plan</h3>
            <h4 className="routine">
              {" "}
              <strong>Routine :</strong>&nbsp;&nbsp; {plan.routine}
            </h4>
            <p>
              <strong>Summary :</strong>&nbsp;&nbsp;
              {plan.summary}
            </p>
            <p>
              <strong>Goal :</strong>&nbsp;&nbsp;{plan.goal}
            </p>
            <p>
              <strong>Tips :</strong>&nbsp;&nbsp;{plan.additionalTips}
            </p>
          </div>
          {/* Accessing the days of the week and exercises */}
          <h3>Exercises:</h3>
          <div className="days-container">
            {plan.exercises.map((exerciseDay, index) => (
              <div className="days" key={index}>
                <div className="day__header">
                  <div className="image-container">
                    <img src={images.LOGO1} alt="logo" />
                  </div>
                  <h2>{Object.keys(exerciseDay)[0]}</h2>
                </div>
                <ul>
                  {exerciseDay[Object.keys(exerciseDay)[0]].map(
                    (exercise, i) => {
                      let video = nameMatch(exercise.exercise);
                      console.log(video);
                      return (
                        <li className="card-list" key={i}>
                          <strong>Muscle Group:</strong> {exercise.muscleGroup}
                          <br />
                          <strong>Exercise:</strong> {exercise.exercise}
                          <br />
                          <strong>Sets:</strong> {exercise.sets}
                          <br />
                          <strong>Reps:</strong> {exercise.reps}
                          <div className="button__cont">
                            <button
                              className="show-more-button"
                              onClick={() => toggleVideo(index)}
                            >
                              {clickedButtons[index] ? "Hide VIDEO" : "Show VIDEO"}
                            </button>
                          </div>
                          {clickedButtons[index] && (
                            <img width="300px" height="200px" src={video} />
                          )}
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default PracticeCard;
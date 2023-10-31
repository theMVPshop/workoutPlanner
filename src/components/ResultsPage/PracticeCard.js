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

const initialState = {
  0: Array(4).fill(false),
  1: Array(4).fill(false),
  2: Array(4).fill(false),
  3: Array(4).fill(false),
  4: Array(4).fill(false),
  5: Array(4).fill(false),
  6: Array(4).fill(false),
};

const PracticeCard = ({ plan, loading, preloadRef, clicked }) => {

  const [clickedButtons, setClickedButtons] = useState(initialState);

  useEffect(() => {
    console.log(plan)
    console.log("useEffect Running")
    if (plan.exercises) {
      console.log("Condition passed")
      const initialState = {};
      plan.exercises.forEach((exerciseDay, cardIndex) => {
        initialState[cardIndex] = Array(exerciseDay[Object.keys(exerciseDay)].length).fill(false);
      });
      setClickedButtons(initialState);
    }
  }, [plan.exercises]);

  const toggleVideo = (cardIndex, buttonIndex) => {
    setClickedButtons((prevButtons) => {
      const updatedButtons = {
        ...prevButtons,
        [cardIndex]: [...prevButtons[cardIndex]], // Shallow copy of the specific day's array
      };
  
      // Deep copy the specific day's array to avoid mutations
      updatedButtons[cardIndex] = [...prevButtons[cardIndex]];
  
      // Toggle the specific button's value
      updatedButtons[cardIndex][buttonIndex] = !updatedButtons[cardIndex][buttonIndex];
  
      return updatedButtons;
    });
  };  

  return (
    <>
      {loading && !clicked ? (
        <div></div>
      ) : loading && clicked ? (
        <section ref={preloadRef} class="sec-loading">
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
            {plan.exercises.map((exerciseDay, cardIndex) => {
              return (
              <div className="days" key={cardIndex}>
                <div className="day__header">
                  <div className="image-container">
                    <img src={images.LOGO1} alt="logo" />
                  </div>
                </div>
                <ul>
                  {exerciseDay[Object.keys(exerciseDay)[0]].map(
                    (exercise, buttonIndex) => {
                      let video = nameMatch(exercise.exercise);
                      return (
                        <li className="card-list" key={buttonIndex}>
                          <strong>Muscle Group:</strong> {exercise.muscleGroup}
                          <br />
                          <strong>Exercise:</strong> {exercise.exercise}
                          <br />
                          <strong>Sets:</strong> {exercise.sets}
                          <br />
                          <strong>Reps:</strong> {exercise.reps}
                          <div className="button__cont">
                            {video && <button
                              className="show-more-button"
                              onClick={() => {console.log("click");toggleVideo(cardIndex, buttonIndex);}}
                            >
                              {clickedButtons[cardIndex][buttonIndex] ? "Hide VIDEO" : "Show VIDEO"}
                            </button>}
                          </div>
                          {clickedButtons[cardIndex][buttonIndex] && video && (
                            <img width="300px" height="200px" src={video} />
                          )}
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>)
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default PracticeCard;
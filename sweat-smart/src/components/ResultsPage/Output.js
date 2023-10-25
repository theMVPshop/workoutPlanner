import React from "react";
import results from "./results";
import "./PracticeCard01.css";
import { useState } from "react";
import { images } from "../../constants";

const Output = () => {
  const initialWorkoutData = results; // Assuming the data is in the first element of the array
  const [workoutData, setWorkoutData] = useState(initialWorkoutData);
  const [showVideos, setShowVideos] = useState(
    Array(workoutData.exercises.length).fill(false)
  );

  const toggleVideo = (index) => {
    const newShowVideos = [...showVideos];
    newShowVideos[index] = !showVideos[index];
    setShowVideos(newShowVideos);
  };

  return (
    <div className="card section__padding">
      <div className="card-header section__padding">
        <h1 className="users-name">Hello, {workoutData.name}!</h1>
        <h3 className="workout-breakdown">Your workout plan</h3>
        <h4>
          <strong>Routine :</strong>&nbsp;&nbsp; {workoutData.routine}
        </h4>
        <p>
          <strong>Summary :</strong>&nbsp;&nbsp;{workoutData.summary}
        </p>
        <p>
          <strong>Goal :</strong>&nbsp;&nbsp;{workoutData.goal}
        </p>
        <p>
          <strong>Tips :</strong>&nbsp;&nbsp;{workoutData.additionalTips}
        </p>
      </div>
      <h1>Exercises:</h1>
      <div className="days-container">
        {workoutData.exercises.map((exerciseDay, index) => (
          <div className="days" key={index}>
            <div className="day__header">
              <div className="image-container">
                <img src={images.LOGO1} alt="logo" />
              </div>
              <h2>{Object.keys(exerciseDay)[0]}</h2>
            </div>
            <ul>
              {exerciseDay[Object.keys(exerciseDay)[0]].map((exercise, i) => (
                <li className="card-list" key={i}>
                  <strong>Muscle Group:</strong> {exercise.muscleGroup}
                  <br />
                  <strong>Exercise:</strong> {exercise.exercise}
                  <br />
                  <strong>Sets:</strong> {exercise.sets}
                  <br />
                  <strong>Reps:</strong> {exercise.reps}
                  <br />
                  {/* <strong>Total Time:</strong> {exercise.totalTime} minutes */}
                </li>
              ))}
              <div className="button__cont">
                <button
                  className="show-more-button"
                  onClick={() => toggleVideo(index)}
                >
                  {showVideos[index] ? "Show Less" : "Show VIDEO"}
                </button>
              </div>
              {showVideos[index] && (
                <div className="additional-info">
                  <iframe
                    title="Workout Video"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/your-video-id"
                  ></iframe>
                </div>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Output;

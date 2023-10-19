import React from "react";
import results from "./results";
import "./PracticeCard.css";
import "./preload.css";
// import "./PracticeCard01.css"
import { useeffect, useState } from "react";
import { images } from "../../constants";

const PracticeCard = ({ plan, loading, preloadRef }) => {
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
    <>
      {/* {!loading && ( */}
      {loading ? (
        <section ref={preloadRef} class="sec-loading">
          <div class="one"></div>
        </section>
      ) : (
        <div className="card">
          <div className="card-header">
            {console.log(plan.name)}
            <h1 className="users-name">Hello, {plan.name}!</h1>
            <h3 className="workout-breakdown">Your workout plan</h3>
            <h4 className="routine">{workoutData.routine}</h4>
            <p>
              <strong>Summary :</strong>&nbsp;&nbsp;
              {workoutData.summary}
            </p>
            <p>
              <strong>Goal :</strong>&nbsp;&nbsp;{workoutData.goal}
            </p>
            <p>
              <strong>Tips :</strong>&nbsp;&nbsp;{workoutData.additionalTips}
            </p>
            {/* <p>{workoutData.daysPerWeek} days this week</p>
          <p>{workoutData.totalTime} hours</p> */}
          </div>
          {/* Accessing the days of the week and exercises */}
          <h3>Exercises:</h3>
          <div className="days-container">
            {workoutData.exercises.map((exerciseDay, index) => (
              <div className="days" key={index}>
                <div className="image-container">
                  <img src={images.LOGO1} alt="logo" />
                </div>
                <h2>{Object.keys(exerciseDay)[0]}</h2>

                <ul>
                  {exerciseDay[Object.keys(exerciseDay)[0]].map(
                    (exercise, i) => (
                      <li className="card-list" key={i}>
                        <strong>Muscle Group:</strong> {exercise.muscleGroup}
                        <br />
                        <strong>Exercise:</strong> {exercise.exercise}
                        <br />
                        <strong>Sets:</strong> {exercise.sets}
                        <br />
                        <strong>Reps:</strong> {exercise.reps}
                        <br />
                        <strong>Total Time:</strong> {exercise.totalTime}{" "}
                        minutes
                      </li>
                    )
                  )}
                  <button
                    className="show-more-button"
                    onClick={() => toggleVideo(index)}
                  >
                    {showVideos[index] ? "Show Less" : "Show VIDEO"}
                  </button>
                  {showVideos[index] && (
                    <div className="additional-info">
                      {/* Video or other additional information */}
                      <iframe
                        title="Workout Video"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/your-video-id"
                        //   frameborder="0"
                        //   allowfullscreen
                      >
                        {/* {exercises.video} */}
                      </iframe>
                    </div>
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

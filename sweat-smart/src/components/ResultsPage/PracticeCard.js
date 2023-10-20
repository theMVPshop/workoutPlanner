/* eslint-disable no-undef */
import React from "react";
// import results from "./results";
import "./PracticeCard.css";
import "./preload.css";
// import "./PracticeCard01.css"
import { useState } from "react";
import { images } from "../../constants";

const videoArray = [
  {name: "Abdominal Crunch", video: "abdominal_crunch.mp4"},
  {name: "Air Squad Bent Arms", video: "air_squad_bent_arms.mp4"},
  {name: "Bicycle Crunch", video: "bicycle_crunch.mp4"},
  {name: "Box Jump", video: "box_jump.mp4"},
  {name: "Burpee", video: "burpee.mp4"},
  {name: "Circle Crunch", video: "circle_crunch.mp4"},
  {name: "Cross Jump", video: "cross_jump.mp4"},
  {name: "Cross Jump Rotation", video: "cross_jump_rotation.mp4"},
  {name: "Donkey Kick", video: "donkey_kick.mp4"},
  {name: "High Knees", video: "high_knees.mp4"},
  {name: "Idle", video: "idle.mp4"},
  {name: "Jump Push Ups", video: "jump_push_ups.mp4"},
  {name: "Jumping Jack", video: "jumping_jack.mp4"},
  {name: "Lunge", video: "lunge.mp4"},
  {name: "Lunge Kick", video: "lunge_kick.mp4"},
  {name: "Mountain Climbers", video: "mountain_climbers.mp4"},
  {name: "Pike Walk", video: "pike_walk.mp4"}, 
  {name: "Plank", video: "plank.mp4"},
  {name: "Push Up Rotation", video: "push_up_rotation.mp4"},
  {name: "Push Ups", video: "push_ups.mp4"},
  {name: "Quick Steps", video: "quick_steps.mp4"},
  {name: "Russian Twist", video: "russian_twist.mp4"},
  {name: "Side Plank", video: "side_plank.mp4"},
  {name: "Squad", video: "squad.mp4"},
  {name: "Step Up", video: "step_up.mp4"},
  {name: "Tricep Dips", video: "tricep_dips.mp4"},
  {name: "Victory", video: "victory.mp4"}, 
  {name: "Wall Sit", video: "wall_sit.mp4"}
]

const nameMatch = (exercise) => {
  for (let i = 0; i < videoArray.length; i++) {
    if (videoArray[i].name === exercise) {
      return videoArray[i].video;
    };
  };
  return false;
};

const PracticeCard = ({ plan, loading, preloadRef }) => {
  // const initialplan = results;
  // const [plan, setplan] = useState(initialWorkoutData);
  // const [showVideos, setShowVideos] = useState(
  //   Array(plan.exercises.length).fill(false)
  // );

  // const toggleVideo = (index) => {
  //   const newShowVideos = [...showVideos];
  //   newShowVideos[index] = !showVideos[index];
  //   setShowVideos(newShowVideos);
  // };

  return (
    <>
      {loading ? (
        <section ref={preloadRef} class="sec-loading">
          <div class="one"></div>
        </section>
      ) : (
        <div className="card">
          <div className="card-header">
            <h1 className="users-name">Hello, {plan.name}!</h1>
            <h3 className="workout-breakdown">Your workout plan</h3>
            <h4 className="routine">{plan.routine}</h4>
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
                <div className="image-container">
                  <img src={images.LOGO1} alt="logo" />
                </div>
                <h2>{Object.keys(exerciseDay)[0]}</h2>

                <ul>
                  {exerciseDay[Object.keys(exerciseDay)[0]].map(
                    (exercise, i) => {
                      let video = nameMatch(exercise.exercise)
                      console.log(video)
                      return (
                      <div>
                        <li className="card-list" key={i}>
                          <strong>Muscle Group:</strong> {exercise.muscleGroup}
                          <br />
                          <strong>Exercise:</strong> {exercise.exercise}
                          <br />
                          <strong>Sets:</strong> {exercise.sets}
                          <br />
                          <strong>Reps:</strong> {exercise.reps}
                        </li>
                        <video
                          title="Workout Video"
                          width="300"
                          height="200"
                          loop
                        >
                          <source type="video/mp4" src={video ? `../../assets/video/male/${video}` : `../../assets/video/male/wall_sit.mp4`}/>
                        </video>
                      </div>
                    )}
                  )}
                  {/* <button
                    className="show-more-button"
                    onClick={() => toggleVideo(index)}
                  >
                    {showVideos[index] ? "Show Less" : "Show VIDEO"}
                  </button> */}
                  {/* {showVideos[index] && (
                    <div className="additional-info">
                      <iframe
                        title="Workout Video"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/your-video-id"
                      >
                        {exercises.video}
                      </iframe>
                    </div>
                  )} */}
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

import React, { useState } from "react";
import { prompt } from "../../Prompt";
import "./form.css";

function Form({ onGeneratePlan, pageRef }) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [days, setDays] = useState([]);
  const [workoutTypes, setWorkoutTypes] = useState([]);
  const [muscleGroups, setMuscleGroups] = useState([]);
  const [timeRange, setTimeRange] = useState("");
  const [fitnessLevel, setFitnessLevel] = useState("");

  const handleDays = (e) => {
    const day = e.target.value;
    if (e.target.checked) {
      setDays(prevDays => [...prevDays, day]);
    } else {
      setDays(prevDays => prevDays.filter(d => d !== day));
    }
  };

  const handleWorkoutTypes = (e) => {
    const type = e.target.value;
    if (e.target.checked) {
      setWorkoutTypes(prevTypes => [...prevTypes, type]);
    } else {
      setWorkoutTypes(prevTypes => prevTypes.filter(t => t !== type));
    }
  };

  const handleMuscleGroups = (e) => {
    const group = e.target.value;
    if (e.target.checked) {
      setMuscleGroups(prevGroups => [...prevGroups, group]);
    } else {
      setMuscleGroups(prevGroups => prevGroups.filter(g => g !== group));
    }
  };

  return (
    <div ref={pageRef} className="maindiv">
      <h2 className="signup">Sign Up!</h2>
      <form className="formmain">
        <label>
          Full Name
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />

        <label>
          Gender
          <br />
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Female">Non Binary</option>
          </select>
        </label>
        <br />

        <label>
          Days of the Week for Exercise
          <br />
          <div onChange={handleDays}>
            <div className="suntues">
              <label className="daylabel">
                Sunday
                <input type="checkbox" className="check" data-day="Sunday" value="Sunday" />
              </label>
              <label className="daylabel">
                Monday
                <input type="checkbox" data-day="Monday" value="Monday" />
              </label>
              <label className="daylabel">
                Tuesday
                <input type="checkbox" data-day="Tuesday" value="Tuesday" />
              </label>
            </div>
            <div className="wedsat">
              <label className="daylabel">
                Wednesday
                <input type="checkbox" data-day="Wednesday" value="Wednesday" />
              </label>
              <label className="daylabel">
                Thursday
                <input type="checkbox" data-day="Thursday" value="Thursday" />
              </label>
              <label className="daylabel">
                Friday
                <input type="checkbox" data-day="Friday" value="Friday" />
              </label>
              <label className="daylabel">
                Saturday
                <input type="checkbox" data-day="Saturday" value="Saturday" />
              </label>
            </div>
          </div>
        </label>

        <br />

        <label>
          Workouts
          <br />
          <div onChange={handleWorkoutTypes}>
            <div className="suntues">
              <label className="daylabel">
                Yoga  
                <input type="checkbox" value="yoga" className="check"/> 
              </label>
              <label className="daylabel">
                HITT
                <input type="checkbox" value="hitt"/>
              </label>
            </div>
            <div className="wedsat">
              <label className="daylabel">
                Cardio  
                <input type="checkbox" value="cardio"/>
              </label>
              <label className="daylabel">
                Weight Loss
                <input type="checkbox" value="weightloss"/> 
              </label>
              <label className="daylabel">
                Strength Training   
                <input type="checkbox" value="strength"/>
              </label>
            </div>
          </div>
        </label>

        <br />

        <label>
          Muscle Groups
          <br />
          <div onChange={handleMuscleGroups}>
            <div className="suntues">
              <label className="daylabel">
                Chest
                <input type="checkbox" className="check" value="Chest" />
              </label>
              <label className="daylabel">
                Back
                <input type="checkbox" value="Back" />
              </label>
              <label className="daylabel">
                Arms
                <input type="checkbox" value="Arms" />
              </label>
            </div>
            <div className="wedsat">
              <label className="daylabel">
                Shoulders
                <input type="checkbox" value="Shoulders" />
              </label>
              <label className="daylabel">
                Legs
                <input type="checkbox" value="Legs" />
              </label>
              <label className="daylabel">
                Calves
                <input type="checkbox" value="Calves" />
              </label>
            </div>
          </div>
        </label>

        <br />

        <label>
          Time Range
          <br />
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="30 minutes">30 minutes</option>
            <option value="1 hour">1 hour</option>
            <option value="45 minutes">45 minutes</option>
            <option value="1 hour 30 minutes">1 hour 30 minutes</option>
            <option value="2 hours">2 hours</option>
          </select>
        </label>
        <br />

        <label>
          Fitness Level
          <br />
          <select
            value={fitnessLevel}
            onChange={(e) => setFitnessLevel(e.target.value)}
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </label>
        <div className="submit_button">
          <button type="button" onClick={() => prompt(name, gender, fitnessLevel, workoutTypes.join(", "), muscleGroups.join(", "), days.join(", "), timeRange)} className="generateplan">
            <span>Generate Plan</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
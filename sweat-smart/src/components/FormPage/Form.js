import React, { useState } from "react";
import "./form.css";

function Form({ onGeneratePlan, pageRef }) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");
  const [daysOfWeek, setDaysOfWeek] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState([]);
  const [bodyPart, setBodyPart] = useState("Full Body");
  const [timeRange, setTimeRange] = useState("30 minutes");
  const [fitnessLevel, setFitnessLevel] = useState("Beginner");

const toggleDayOfWeek = (day) => {
  if (daysOfWeek.includes(day)) {
    setDaysOfWeek(daysOfWeek.filter((selectedDay) => selectedDay !== day));
  } else {
    setDaysOfWeek([...daysOfWeek, day]);
  }
};

const toggleWorkouts = (wo) => {
  if (selectedWorkout.includes(wo)) {
    setSelectedWorkout(
      selectedWorkout.filter((selectedWo) => selectedWo !== wo)
    );
  } else {
    setSelectedWorkout([...selectedWorkout, wo]);
  }
};

  const generatePlan = () => {
    const planData = {
      name,
      gender,
      daysOfWeek,
      bodyPart,
      timeRange,
      fitnessLevel,
    };
    onGeneratePlan(planData);
  };

  return (
    <div className="maindiv">
      <h2 ref={pageRef} className="signup">
        Sign Up!
      </h2>
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
          <div className="suntues">
            <label className="daylabel">
              Sunday
              <input type="checkbox" className="check" value="Sunday" />
              {console.log(daysOfWeek)}
            </label>
            <label className="daylabel">
              Monday
              <input type="checkbox" value="Monday" />
            </label>
            <label className="daylabel">
              Tuesday
              <input type="checkbox" value="Tuesday" />
            </label>
          </div>
          <div className="wedsat">
            <label className="daylabel">
              Wednesday
              <input type="checkbox" value="Wednesday" />
            </label>
            <label className="daylabel">
              Thursday
              <input type="checkbox" value="Thursday" />
            </label>
            <label className="daylabel">
              Friday
              <input type="checkbox" value="Friday" />
            </label>
            <label className="daylabel">
              Saturday
              <input type="checkbox" value="Saturday" />
            </label>
          </div>
        </label>
        <br />

        <label>
          <text className="workouts">Workouts</text>
          <br />
          <div onChange={() => toggleWorkouts}>
            <div className="yogahitt">
              <label className="daylabel">
                Yoga
                <input type="checkbox" className="check" value="Yoga" />
              </label>
              <label className="daylabel">
                HITT
                <input type="checkbox" value="HITT" />
              </label>
            </div>
            <div className="cardiost">
              <label className="daylabel">
                Cardio
                <input type="checkbox" value="Cardio" />
              </label>
              <label className="daylabel">
                Weight Loss
                <input type="checkbox" value="Weight Loss" />
              </label>
              <label className="daylabel">
                Strength Training
                <input type="checkbox" value="Strength Training" />
              </label>
            </div>
          </div>
        </label>
        <br />

        <label>
          <text className="musclegroups">Muscle Groups</text>
          <br />
          <div className="chestarms">
            <label className="daylabel">
              Chest
              <input type="checkbox" className="check" />
            </label>
            <label className="daylabel">
              Back
              <input type="checkbox" />
            </label>
            <label className="daylabel">
              Arms
              <input type="checkbox" />
            </label>
          </div>
          <div className="shoulders">
            <label className="daylabel">
              Shoulders
              <input type="checkbox" />
            </label>
            <label className="daylabel">
              Legs
              <input type="checkbox" />
            </label>
            <label className="daylabel">
              Calves
              <input type="checkbox" />
            </label>
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
          <button type="button" onClick={generatePlan} className="generateplan">
            <span>Generate Plan</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;

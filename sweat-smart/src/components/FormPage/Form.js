import React, { useState } from "react";
import "./form.css";

function Form({ onGeneratePlan, pageRef }) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");
  const [daysOfWeek, setDaysOfWeek] = useState([]);
  const [bodyPart, setBodyPart] = useState("Full Body");
  const [timeRange, setTimeRange] = useState("30 minutes");
  const [fitnessLevel, setFitnessLevel] = useState("Beginner");

  const handleDaysOfWeekChange = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setDaysOfWeek(selectedOptions);
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
          <div className="suntues">
            <label className="daylabel">
              Sunday
              <input type="checkbox" className="check" />
            </label>
            <label className="daylabel">
              Monday
              <input type="checkbox" />
            </label>
            <label className="daylabel">
              Tuesday
              <input type="checkbox" />
            </label>
          </div>
          <div className="wedsat">
            <label className="daylabel">
              Wednesday
              <input type="checkbox" />
            </label>
            <label className="daylabel">
              Thursday
              <input type="checkbox" />
            </label>
            <label className="daylabel">
              Friday
              <input type="checkbox" />
            </label>
            <label className="daylabel">
              Saturday
              <input type="checkbox" />
            </label>
          </div>
        </label>
        <br />

        <label>
          Workouts
          <br />
          <div className="suntues">
            <label className="daylabel">
              Yoga
              <input type="checkbox" className="check" />
            </label>
            <label className="daylabel">
              HITT
              <input type="checkbox" />
            </label>
          </div>
          <div className="wedsat">
            <label className="daylabel">
              Cardio
              <input type="checkbox" />
            </label>
            <label className="daylabel">
              Weight Loss
              <input type="checkbox" />
            </label>
            <label className="daylabel">
              Strength Training
              <input type="checkbox" />
            </label>
          </div>
        </label>
        <br />

        <label>
          Muscle Groups
          <br />
          <div className="suntues">
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
          <div className="wedsat">
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

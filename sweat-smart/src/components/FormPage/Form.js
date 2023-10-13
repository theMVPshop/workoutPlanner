import React, { useState } from "react";
import "./form.css";

function Form({ onGeneratePlan }) {
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
    <div className="maindiv">
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
          {/* <select multiple value={daysOfWeek} onChange={handleDaysOfWeekChange}>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select> */}
        </label>
        <br />

        <label>
          Part of the Body to Work On
          <br />
          <input
            type="text"
            value={bodyPart}
            onChange={(e) => setBodyPart(e.target.value)}
          />
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

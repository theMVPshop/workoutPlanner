import React from "react"
import "./form.css"

function Form(props) {
  const {
    pageRef,
    name,
    gender,
    days,
    workoutTypes,
    muscleGroups,
    timeRange,
    fitnessLevel,
    handleDays,
    handleWorkoutTypes,
    handleMuscleGroups,
    setName,
    setGender,
    setTimeRange,
    setFitnessLevel,
    handleSubmit,
    handleScrollPreload,
    setClicked,
  } = props

  const checkboxValidation = (className) => {
    let el = document.getElementsByClassName(className)

    let atLeastOneChecked = false //at least one cb is checked
    for (let i = 0; i < el.length; i++) {
      if (el[i].checked === true) {
        atLeastOneChecked = true
      }
    }

    if (atLeastOneChecked === true) {
      for (let i = 0; i < el.length; i++) {
        el[i].required = false
      }
    } else {
      for (let i = 0; i < el.length; i++) {
        el[i].required = true
      }
    }
  }

  return (
    <div className="maindiv">
      <div className="sign">
        <h2 ref={pageRef} className="signup">
          Sign Up!
        </h2>
      </div>
      <form className="formmain">
        <label>
          Full Name
          <br />
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />

        <label>
          Gender
          <br />
          <select
            required
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select</option>
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
                <input
                  required
                  type="checkbox"
                  data-day="Sunday"
                  value="Sunday"
                  className="dayInput"
                  onClick={checkboxValidation("dayInput")}
                />
              </label>
              <label className="daylabel">
                Monday
                <input
                  required
                  type="checkbox"
                  data-day="Monday"
                  value="Monday"
                  className="dayInput"
                  onClick={checkboxValidation("dayInput")}
                />
              </label>
              <label className="daylabel">
                Tuesday
                <input
                  required
                  type="checkbox"
                  data-day="Tuesday"
                  value="Tuesday"
                  className="dayInput"
                  onClick={checkboxValidation("dayInput")}
                />
              </label>
            </div>
            <div className="wedsat">
              <label className="daylabel">
                Wednesday
                <input
                  required
                  type="checkbox"
                  data-day="Wednesday"
                  value="Wednesday"
                  className="dayInput"
                  onClick={checkboxValidation("dayInput")}
                />
              </label>
              <label className="daylabel">
                Thursday
                <input
                  required
                  type="checkbox"
                  data-day="Thursday"
                  value="Thursday"
                  className="dayInput"
                  onClick={checkboxValidation("dayInput")}
                />
              </label>
              <label className="daylabel">
                Friday
                <input
                  required
                  type="checkbox"
                  data-day="Friday"
                  value="Friday"
                  className="dayInput"
                  onClick={checkboxValidation("dayInput")}
                />
              </label>
              <label className="daylabel">
                Saturday
                <input
                  required
                  type="checkbox"
                  data-day="Saturday"
                  value="Saturday"
                  className="dayInput"
                  onClick={checkboxValidation("dayInput")}
                />
              </label>
            </div>
          </div>
        </label>

        <br />

        <label>
          <div className="workouts">
            <text>Workouts</text>
            <br />
            <div onChange={handleWorkoutTypes}>
              <div className="yogahiit">
                <label className="daylabel">
                  Yoga
                  <input
                    required
                    onClick={checkboxValidation("workoutInput")}
                    className="workoutInput"
                    type="checkbox"
                    value="yoga"
                  />
                </label>
                <label className="daylabel">
                  HIIT
                  <input
                    required
                    onClick={checkboxValidation("workoutInput")}
                    className="workoutInput"
                    type="checkbox"
                    value="hitt"
                  />
                </label>
              </div>
              <div className="cardiost">
                <label className="daylabel">
                  Cardio
                  <input
                    required
                    onClick={checkboxValidation("workoutInput")}
                    className="workoutInput"
                    type="checkbox"
                    value="cardio"
                  />
                </label>
                <label className="daylabel">
                  Weight Loss
                  <input
                    required
                    onClick={checkboxValidation("workoutInput")}
                    className="workoutInput"
                    type="checkbox"
                    value="weightloss"
                  />
                </label>
                <label className="daylabel">
                  Strength Training
                  <input
                    required
                    onClick={checkboxValidation("workoutInput")}
                    className="workoutInput"
                    type="checkbox"
                    value="strength"
                  />
                </label>
              </div>
            </div>
          </div>
        </label>

        <br />

        <label>
          <text className="musclegroups">Muscle Groups</text>
          <br />
          <div onChange={handleMuscleGroups}>
            <div className="chestarms">
              <label className="daylabel">
                Chest
                <input
                  required
                  onClick={checkboxValidation("muscleInput")}
                  className="muscleInput"
                  type="checkbox"
                  value="Chest"
                />
              </label>
              <label className="daylabel">
                Back
                <input
                  required
                  onClick={checkboxValidation("muscleInput")}
                  className="muscleInput"
                  type="checkbox"
                  value="Back"
                />
              </label>
              <label className="daylabel">
                Arms
                <input
                  required
                  onClick={checkboxValidation("muscleInput")}
                  className="muscleInput"
                  type="checkbox"
                  value="Arms"
                />
              </label>
            </div>
            <div className="shoulders">
              <label className="daylabel">
                Shoulders
                <input
                  required
                  onClick={checkboxValidation("muscleInput")}
                  className="muscleInput"
                  type="checkbox"
                  value="Shoulders"
                />
              </label>
              <label className="daylabel">
                Legs
                <input
                  required
                  onClick={checkboxValidation("muscleInput")}
                  className="muscleInput"
                  type="checkbox"
                  value="Legs"
                />
              </label>
              <label className="daylabel">
                Calves
                <input
                  required
                  onClick={checkboxValidation("muscleInput")}
                  className="muscleInput"
                  type="checkbox"
                  value="Calves"
                />
              </label>
            </div>
          </div>
        </label>

        <br />

        <label>
          Time Range
          <br />
          <select
            required
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="">Select</option>
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
            required
            value={fitnessLevel}
            onChange={(e) => setFitnessLevel(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </label>
        <div className="submit_button">
          <button
            type="button"
            onClick={() =>
            {
              setClicked(true);
              setTimeout(handleScrollPreload, 100);
              handleSubmit(
                name,
                gender,
                fitnessLevel,
                workoutTypes.join(", "),
                muscleGroups.join(", "),
                days.join(", "),
                timeRange
              )
            }
            }
            className="generateplan"
          >
            <span>Generate Plan</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form;

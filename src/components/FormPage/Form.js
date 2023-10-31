import React from "react";
import "./form.css";

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
  } = props;

  const checkboxValidation = (className) => {
    let el = document.getElementsByClassName(className);

    let atLeastOneChecked = false; //at least one cb is checked
    for (let i = 0; i < el.length; i++) {
      if (el[i].checked === true) {
        atLeastOneChecked = true;
      }
    }

    if (atLeastOneChecked === true) {
      for (let i = 0; i < el.length; i++) {
        el[i].required = false;
      }
    } else {
      for (let i = 0; i < el.length; i++) {
        el[i].required = true;
      }
    }
  };

  return (
    <div className="maindiv">
      <div className="sign">
        <h2 ref={pageRef} className="signup">
          Sign Up!
          <br />
          <span>Fill out the form so we can schedule you!</span>
        </h2>
      </div>
      <form
        className="formmain"
        onSubmit={(e) => {
          e.preventDefault();
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
          );
        }}
      >
        <div className="side__cont">
          <div className="side__box">
            <h6>Full Name</h6>
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="side__box">
            <h6>Gender</h6>

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
          </div>
        </div>

        <div className="side__cont">
          <div className="side__box">
            <h6>Time Range</h6>
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
          </div>
          <div className="side__box">
            <h6>Fitness Level</h6>
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
          </div>
        </div>

        <div className="workouts">
          <h6>Days of the Week for Exercise</h6>
          <div onChange={handleDays} class="main__section">
            <div className="label_box">
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
            </div>

            <div className="label_box">
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
            </div>

            <div className="label_box">
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
            <div className="label_box">
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
            </div>

            <div className="label_box">
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
            </div>
            <div className="label_box">
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
            </div>

            <div className="label_box">
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
        </div>

        <div className="workouts">
          <h6>Workouts</h6>
          <div className="main__section" onChange={handleWorkoutTypes}>
            <div className="label_box">
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
            </div>
            <div className="label_box">
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
            <div className="label_box">
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
            </div>

            <div className="label_box">
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
            </div>

            <div className="label_box">
              <label className="daylabel">
                Strength
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

        <div className="workouts">
          <h6>Muscle Groups</h6>
          <div className="main__section" onChange={handleMuscleGroups}>
            <div className="label_box">
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
            </div>

            <div className="label_box">
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
            </div>

            <div className="label_box">
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

            <div className="label_box">
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
            </div>

            <div className="label_box">
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
            </div>
            <div className="label_box">
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
          {/* </label> */}
        </div>

        <div className="submit_button">
          <button type="submit" className="generateplan">
            <span>Generate Plan</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;

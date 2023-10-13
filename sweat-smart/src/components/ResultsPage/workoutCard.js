import React from "react";
import results from "./results";
import './workoutCard.css'

const workoutCard = () => {
 

  
  const workoutData = results[0]; // Assuming the data is in the first element of the array

  return (
    <div className="card section__padding">
      <div className="card-body">
        <h5 className="card-title">{workoutData.name}</h5>

        <h6 className="card-subtitle mb-2 text-muted">Additional Tips:</h6>
        <div>
          <p>{workoutData.routine}</p>
          <p>{workoutData.summary}</p>
          <p>{workoutData.goal}</p>

          {/* Accessing the days of the week and exercises */}
          <h6>Exercises:</h6>
          {workoutData.exercises.map((exerciseDay, index) => (
            <div key={index}>
              <h6>{Object.keys(exerciseDay)[0]}:</h6>
              <div className="days">
              <ul>
                {exerciseDay[Object.keys(exerciseDay)[0]].map((exercise, i) => (
                  <li key={i}>
                    <strong>Muscle Group:</strong> {exercise.muscleGroup}<br />
                    <strong>Exercise:</strong> {exercise.exercise}<br />
                    <strong>Sets:</strong> {exercise.sets}<br />
                    <strong>Reps:</strong> {exercise.reps}<br />
                    <strong>Total Time:</strong> {exercise.totalTime} minutes
                  </li>
                ))}
                
              </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default workoutCard;









    // <div className="card">
    //   <div className="card-body">
    //     <h5 className="card-title">{results.name}</h5>

    //     <h6 className="card-subtitle mb-2 text-muted">Additional Tips:</h6>
    //     <div>
    //       {results.map((result, index) => (
    //         <p key={index}>
    //           {result.name}, {result.routine}, {result.summary}, {result.goal}{" "}
    //         </p>
    //       ))}
    //     </div>
       
    //   </div>
    // </div>
//   );
// };

// export default workoutCard;

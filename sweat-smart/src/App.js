import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./components/HomePage/HomePage";
import Form from "./components/FormPage/Form";
import "./App.css";
import PracticeCard from "./components/ResultsPage/PracticeCard";
import { prompt } from "./Prompt";

function App() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [days, setDays] = useState([]);
  const [workoutTypes, setWorkoutTypes] = useState([]);
  const [muscleGroups, setMuscleGroups] = useState([]);
  const [timeRange, setTimeRange] = useState("");
  const [fitnessLevel, setFitnessLevel] = useState("");
  const [plan, setPlan] = useState({});
  const [loading, setLoading] = useState(true);
  const [clicked, setClicked] = useState(false);

  const handleSubmit = (
    name,
    gender,
    fitnessLevel,
    workoutTypes,
    muscleGroups,
    days,
    timeRange
  ) => {
    setLoading(true);
    setClicked(true);
    prompt(
      name,
      gender,
      fitnessLevel,
      workoutTypes,
      muscleGroups,
      days,
      timeRange
    ).then((generatedPlan) => {
      let string = generatedPlan.replace(/\\"/g, '"').replace(/\\n/g, '\n');
      const jsonObject = JSON.parse(string);
      console.log(jsonObject)
      setPlan(jsonObject);
      setLoading(false);
      setClicked(false)
    });
  };

  const handleDays = (e) => {
    const day = e.target.value;
    if (e.target.checked) {
      setDays((prevDays) => [...prevDays, day]);
    } else {
      setDays((prevDays) => prevDays.filter((d) => d !== day));
    }
  };

  const handleWorkoutTypes = (e) => {
    const type = e.target.value;
    if (e.target.checked) {
      setWorkoutTypes((prevTypes) => [...prevTypes, type]);
    } else {
      setWorkoutTypes((prevTypes) => prevTypes.filter((t) => t !== type));
    }
  };

  const handleMuscleGroups = (e) => {
    const group = e.target.value;
    if (e.target.checked) {
      setMuscleGroups((prevGroups) => [...prevGroups, group]);
    } else {
      setMuscleGroups((prevGroups) => prevGroups.filter((g) => g !== group));
    }
  };

  // use useEffect to apply AOS animation
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    console.log(plan);
  }, [plan]);

  const pageRef = useRef(null);

  const handleScroll = () => {
    pageRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  //preload
  const preloadRef = useRef();

  const handleScrollPreload = () => {
    preloadRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <HomePage handleScroll={handleScroll} />

      <Form
        pageRef={pageRef}
        name={name}
        gender={gender}
        days={days}
        workoutTypes={workoutTypes}
        muscleGroups={muscleGroups}
        timeRange={timeRange}
        fitnessLevel={fitnessLevel}
        handleDays={handleDays}
        handleWorkoutTypes={handleWorkoutTypes}
        handleMuscleGroups={handleMuscleGroups}
        setName={setName}
        setGender={setGender}
        setTimeRange={setTimeRange}
        setFitnessLevel={setFitnessLevel}
        handleSubmit={handleSubmit}
        handleScrollPreload={handleScrollPreload}
        setClicked={setClicked}
      />

      <PracticeCard clicked={clicked} plan={plan} loading={loading} preloadRef={preloadRef} />
    </div>
  );
}

export default App;
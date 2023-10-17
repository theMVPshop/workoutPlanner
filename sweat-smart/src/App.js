import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import OpenAI from "openai";
import HomePage from "./components/HomePage/HomePage";
import Form from "./components/FormPage/Form";
import "./App.css";
import Output from "./components/ResultsPage/Output";
import PracticeCard from "./components/ResultsPage/PracticeCard";

function App() {
  // use useEffect to apply AOS animation
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  const [planResult, setPlanResult] = useState("");

  const pageRef = useRef(null);

  const handleScroll = () => {
    pageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      <HomePage handleScroll={handleScroll} />

      <Form pageRef={pageRef} />

      <Output result={planResult} />
      <PracticeCard />

      {/* <Card /> */}
    </div>
  );
}

export default App;
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import OpenAI from "openai";

import HomePage from "./components/HomePage/HomePage";
import Form from "./components/FormPage/Form";
import "./App.css";

const openai = new OpenAI({
  apiKey: "",
  dangerouslyAllowBrowser: true,
});

/// no line breaks

const main = async () => {
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are an experienced health and fitness professional. You will respond to the users message with a gym routine that works with their given parameters. You will only choose from these exercise options: Abdominal Crunch, Air Squad Bent Arms, Bicycle Crunch, Box Jump, Burpee, Circle Crunch, Cross Jump, Cross Jump Rotation, Donkey Kick, High Knees, Idle, Jump Push Ups, Jumping Jack, Lunge, Lunge Kick, Mountain Climbers, Pike Walk, Plank, Push Up Rotation, Push Ups, Quick Steps, Russian Twist, Side Plank, Squad, Step Up, Tricep Dips, Victory, Wall Sit. You will respond in JSON format with the following key-value pairs; name: (user's name), routine: (name of routine), summary: (a 4-sentence summary of the generated routine), goal: (the goal that is to be achieved with the generated routine), additionalTips: (3 sentences of helpful tips related to the generated routine, do not number the sentences), daysPerWeek: (total number of days per week the user can workout), totalTime: (total amount of time the user can workout per week), exercises: (an array in the following structure: [{(day of the week): [{totalTime: (total amount of time for the specific session)}, {exercise: (name of exercise), sets: (number of sets), reps: (number of reps)}]}]).",
      },
      {
        role: "user",
        content:
          "My name is Manny Bennett. I am 24 years old. I am a male. I prefer strength training workouts. I am able to go to the gym on Monday, Thursday, and Saturday from 8 pm to 10 pm. My goal is to increase muscle in my legs. I am a fitness beginner.",
      },
    ],
    model: "gpt-3.5-turbo",
  });

  console.log(chatCompletion.choices[0].message.content);
};

main();

function App() {
  // use useEffect to apply AOS animation
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <HomePage />
      <Form />

    </div>
  );
}

export default App;

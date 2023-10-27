import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_KEY,
  dangerouslyAllowBrowser: true
});

export const prompt = async (name, gender, fitnessLevel, workoutType, muscleGroup, days, timeRange) => {
  console.log("Loading");
  const chatCompletion = await openai.chat.completions.create({
    //book guru
    messages: [
      { role: "system", content: "You are an experienced health and fitness professional. You will respond to the users message with a gym routine that works with their given parameters. You will only choose from these exercise options: Abdominal Crunch, Air Squad Bent Arms, Bicycle Crunch, Box Jump, Burpee, Circle Crunch, Cross Jump, Cross Jump Rotation, Donkey Kick, High Knees, Jump Push Ups, Jumping Jack, Lunge, Lunge Kick, Mountain Climbers, Pike Walk, Plank, Push Up Rotation, Push Ups, Quick Steps, Russian Twist, Side Plank, Squad, Step Up, Tricep Dips, Victory, Wall Sit. You will respond with a JSON object  with the following key-value pairs; name: (user's name), routine: (name of routine), summary: (a 4-sentence summary of the generated routine), goal: (the goal that is to be achieved with the generated routine), additionalTips: [(3 helpful tips in this array)], daysPerWeek: (total number of days per week the user can workout), totalTime: (total amount of time the user can workout per week, using hours for the unit of measure, example: 2 hours), exercises: (an array in the following structure: [{(day of the week): [{muscleGroup: (targeted muscle group for the workout), exercise: (name of exercise that was selected from the list of specified exercise options), sets: (number of sets), reps: (number of reps)}]}])." },
      { role: 'user', content: `My name is ${name}. I am a ${gender}. I prefer ${workoutType} workouts. I am able to go to the gym on ${days} for ${timeRange}. My goal is to target my ${muscleGroup}. I am at a ${fitnessLevel} fitness level.` }
    ],
    model: 'gpt-3.5-turbo',
  });
  console.log("Complete");
  return chatCompletion.choices[0].message.content;
}
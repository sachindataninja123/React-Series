import React, { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Questions from "./components/Questions";
import Result from "./components/Result";

const App = () => {
  const [isOver, setIsOver] = useState(false);
  const [score, setScore] = useState(0);
  return (
    <div>
      <Timer setIsOver = {setIsOver}/> 
      {isOver ? <Result score={score}  /> : <Questions setIsOver={setIsOver} setScore = {setScore} />}
    </div>
  );

};

export default App;

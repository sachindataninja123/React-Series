import React, { useState } from "react";
import questions from "./Questions.json";

const Questions = ({ setIsOver,setScore }) => {
  const [currIndex, setCurrentIndex] = useState(0);
  //   console.log(questions[currIndex]);
  

  function handleScore(selectedOption) {
    // console.log(selectedOption);
    if (selectedOption == questions[currIndex].answer) {
      setScore((prev) => prev + 1);
    }

    if (currIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsOver(true)
    }
    
  }

  return (
    <div>
      <h1 className="mt-8 mb-5 text-2xl">{questions[currIndex].question}</h1>

      <div className="flex flex-col gap-3">
        {questions[currIndex].options.map((option) => {
          return (
            <button
              onClick={() => {
                handleScore(option);
              }}
              key={option}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Questions;

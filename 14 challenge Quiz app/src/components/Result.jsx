import React from "react";

const Result = ({ score }) => {
  return (
    <div>
      <h1 className="mt-6 bg-emerald-500 text-black p-1 text-3xl rounded-full">Result</h1>
      <h1 className="text-2xl mt-5">Your test score is : {score}</h1>
    </div>
  );
};

export default Result;

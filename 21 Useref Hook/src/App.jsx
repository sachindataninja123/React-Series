import React, { useEffect, useRef, useState } from "react";
import UserefExam2 from "./notes/UserefExam2";
import UserefExam from "./notes/UserefExam";
import UnderStanding from "./notes/UnderStanding";

const App = () => {
  const [randomNumber, setRandomNum] = useState(0);
  const reRenderCountRef = useRef(0);

  function genRandomNum() {
    const ranNum = Math.floor(Math.random() * 100);
    setRandomNum(ranNum);
    
  }

  useEffect(() => {
    console.log("Re render hua hai");
    reRenderCountRef.current += 1;
  });

  return (
    <>
      <div className="flex items-center justify-center mt-[200px] flex-col">
        <h1 className="text-5xl text-white">{randomNumber}</h1>
        <h1 className="text-3xl text-white">Re - Render Count : {reRenderCountRef.current}</h1>
        <button
          onClick={genRandomNum}
          className="px-3 py-2 bg-blue-400 rounded-[7px] mt-5 cursor-pointer"
        >
          Generate RandomNum
        </button>
      </div>

      {/* <div className="flex items-center justify-center h-screen"> */}
      {/* <UserefExam2 /> */}
      {/* <UserefExam /> */}
      {/* <UnderStanding /> */}
      {/* </div> */}
    </>
  );
};

export default App;

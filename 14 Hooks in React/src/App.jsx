import React from "react";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [decVal, setDecVal] = useState(0);

  useEffect(() => {
    console.log("mai useEffect Hook hu!");
  }, [count]);

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
      </div>

      <div>
        <h1>{decVal}</h1>
        <button
          onClick={() => {
            setDecVal(decVal - 1);
          }}
        >
          Decrement
        </button>
      </div>
    </>
  );
};

export default App;

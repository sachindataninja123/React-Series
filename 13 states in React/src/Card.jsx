import React from "react";
import { useState } from "react";

const Card = () => {
  const [count, setCount] = useState(0);
  //   console.log(count, setCount);

  function Increment() {
    // setCount(count + 1);
    // setCount((prev) => prev + 1);
    // setCount((prev) => {
    //   return prev + 1;
    // });

    // setCount(count + 1);
    // console.log(count);

    // setCount((prevCount) => {
    //   prevCount = prevCount + 1;
    //   console.log(prevCount);
    //   return prevCount;
    // });

    // // V.V.I
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    // it increases once time 5 (use functional Update)
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  function Decrement() {
    setCount(count - 1);
  }

  function Reset() {
    setCount(0);
  }

  return (
    <div>
      <h1>Hello</h1>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
};

export default Card;

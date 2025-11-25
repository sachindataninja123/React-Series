import React, { useState } from "react";

const Card = ({ title, des }) => {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount(count + 1);
  }

  return (
    <div className="card">
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      <h1>{title}</h1>
      <h1>{des}</h1>
    </div>
  );
};

export default Card;

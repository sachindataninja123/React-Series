import React, { useEffect, useState } from "react";

const Alpha = () => {
  const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Mounting...");

//   },[count]);

  useEffect(() => {
    console.log("mounting...")

    return  () => {
        console.log("unmounting...")
    }
  },[])

  return (
    <div>
      <h1>Alpha {count}</h1>
      <button
        className="bg-gray-500 px-2 rounded py-1 active:scale-95 cursor-pointer"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default Alpha;

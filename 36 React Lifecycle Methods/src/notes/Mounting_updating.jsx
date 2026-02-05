import React, { useEffect, useState } from "react";
import "./App.css"

const App = () => {
  const [count, setCount] = useState(0);
  const [data , setData] = useState(0);
 
  useEffect(() => {
    console.log("Mounting...");
  },[]);

  useEffect(() => {
    console.log("Data Change hua h");
  },[data]);

   useEffect(() => {
    console.log("Count Change hua h");
  },[count]);

  return (
    <div>
      <h1>App Component</h1>
      <h1 className="text-4xl">{count}</h1>
      <button className="bg-blue-500 px-2 rounded py-1 active:scale-95 cursor-pointer" onClick={() => setCount(count + 1)}>Increment</button>

       <h1 className="text-4xl">{data}</h1>
      <button className="bg-blue-500 px-2 rounded py-1 active:scale-95 cursor-pointer" onClick={() => setData(data - 1)}>Decrement</button>
    </div>
  );
};

export default App;

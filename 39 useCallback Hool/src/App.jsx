import React, { useCallback, useState } from "react";
import "./App.css";
import Child from "./components/Child";

const App = () => {
  const [count, setCount] = useState(0);

  console.log("Parent rendering...");

  // normal function (recreated on every re-render)
  const handleClick1 = () => {
    console.log("re render hua h", count);
  };

  // memoized function (use same refrence between renders and dependience changes. )
  const memoizedHandleClick = useCallback(() => {
    return console.log("Mai click hua hu", count);
  }, [count]);

  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={() => setCount(count + 1)}>Count : {count}</button>

      <Child handleClick={memoizedHandleClick} />
    </div>
  );
};

export default App;

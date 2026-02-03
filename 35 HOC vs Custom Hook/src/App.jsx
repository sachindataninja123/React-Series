import React, { useState } from "react";
import { useCounter } from "./customHook/useCounter";

// HOC means higher order Component
// it is used for complex logic & complex UI reuse

const App = () => {
  const [inputVal, setInputVal] = useState();
  console.log(inputVal);
  const { count, increment, decrement, setByValue } = useCounter(0);

  return (
    <div className="text-white flex items-center justify-center h-screen w-full flex-col gap-3">
      <h1 className="text-7xl">{count}</h1>

      <button
        onClick={increment}
        className="bg-blue-600 px-3 py-2 rounded cursor-pointer active:scale-95"
      >
        Increment ⬆️
      </button>

      <button
        onClick={decrement}
        className="bg-blue-600 px-3 py-2 rounded cursor-pointer active:scale-95"
      >
        Decrement ⬇️
      </button>

      <input
        type="number"
        className="border p-2 rounded"
        value={inputVal}
        placeholder="Enter the value... "
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button
        onClick={() => setByValue(inputVal)}
        className="bg-blue-600 px-3 py-2 rounded cursor-pointer active:scale-95"
      >
        setByValue
      </button>
    </div>
  );
};

export default App;

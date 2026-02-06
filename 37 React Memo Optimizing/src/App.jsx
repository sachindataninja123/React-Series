import React, { useEffect, useState } from "react";
import "./App.css";
import Alpha from "./components/Alpha";

const App = () => {
  const [count, setCount] = useState(0);
  const [obj, setObj] = useState({
    name: "",
  });

  useEffect(() => {
    console.log("parent rendering...");
  });

  //Memo works ->  react memo  working proper for this
  // Number
  // String
  // undefined
  // Boolean
  // null

  // refrence type (address) -> react memo not working proper for this
  // Array
  // object
  // Function

  return (
    <div>
      <Alpha data={obj.name} count={count} />
      <input
        className="border p-2 rounded"
        type="text"
        value={obj.name}
        onChange={(e) => setObj({ ...obj, name: e.target.value })}
        placeholder="Enter name..."
      />

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;

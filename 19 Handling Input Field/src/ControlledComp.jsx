import React from "react";
import { useState } from "react";

const ControlledComp = () => {
  const [state, setState] = useState("");
  console.log(state);

  return (
    <div>
      <h1>Hello</h1>
      <input
        type="text"
        placeholder="Enter name"
        value={state}
        onChange={(e) => {
          // console.log(e.target.value);
          setState(e.target.value);
        }}
      />
      <br />
      <br />
      <button onClick={() => setState("")}>Clear</button>
      <h1>{state}</h1>
    </div>
  );
};

export default ControlledComp;

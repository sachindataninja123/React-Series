import React from "react";
import { useRef } from "react";

const UnControlledComp = () => {
  const inputRef = useRef(null);

  function submit() {
    console.log(inputRef.current.value);
  }

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Enter name" />
      <br />
      <br />
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default UnControlledComp;

import React, { useRef } from "react";

const UserefExam = () => {
  const inputRef = useRef();

  const handleFocus = () => {
    // console.log(inputRef)
    inputRef.current.focus();
  };

  return (
    <>
      <input
        ref={inputRef}
        className="border-white p-2 border m-4 text-white rounded-sm"
        type="text"
        placeholder="Enter Name..."
      />
      <button
        onClick={handleFocus}
        className="bg-amber-500 p-2 rounded-lg px-5 active:scale-95 cursor-pointer font-semibold"
      >
        Focus
      </button>
    </>
  );
};

export default UserefExam;

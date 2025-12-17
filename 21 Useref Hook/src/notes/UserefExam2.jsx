import React, { useRef } from "react";

const UserefExam2 = () => {
  const boxRef = useRef();

  function handleBox() {
    boxRef.current.style.backgroundColor = "blue";
    boxRef.current.style.borderRadius = "100%";
    boxRef.current.click();
  }

  return (
    <div className="flex flex-col gap-5">
      <div
        onClick={() => {
          console.log("Div pe click hua hai");
        }}
        ref={boxRef}
        className="h-[200px] w-[200px] bg-red-400"
      ></div>
      <button
        onClick={handleBox}
        className="bg-amber-500 p-2 rounded-lg px-5 active:scale-95 cursor-pointer font-semibold whitespace-nowrap"
      >
        Change
      </button>
    </div>
  );
};

export default UserefExam2;

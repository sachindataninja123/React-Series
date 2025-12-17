
import React, { useEffect, useRef, useState } from "react";

const UnderStanding = () => {

     const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const Increment = () => {
    // setCount(count + 1);
    countRef.current += 1;
    console.log(countRef.current)
  };

  useEffect(() => {
    console.log("Re render hua hai");
  });
  
  return (
    <div>
        <div className="flex items-center justify-center flex-col mt-[200px] ">
        <h1 className="text-white text-6xl">{count}</h1>

        <button
          className="px-3 py-2 bg-amber-400 rounded-[7px] mt-5 cursor-pointer"
          onClick={Increment}
        >
          Increment
        </button>
      </div>
    </div>
  )
}

export default UnderStanding

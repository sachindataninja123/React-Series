import React from "react";
import { useMyContext } from "./MyContext";

const E = () => {
  const { setCount } = useMyContext();
  return (
    <div>
      <h1 className="text-white text-3xl flex items-center justify-center flex-col  bg-blue-600 p-8">
        E
        <button
          className="text-lg bg-gray-500 text-black p-2 rounded-[5px] active:scale-95 cursor-pointer mt-5"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </h1>
    </div>
  );
};

export default E;

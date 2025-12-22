import React from "react";
import C from "./C";
import D from "./D";

const A = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-white text-3xl flex items-center justify-center flex-col gap-5 bg-gray-800 p-5 ">
        A
        <C />
        <D />
      </h1>
    </div>
  );
};

export default A;

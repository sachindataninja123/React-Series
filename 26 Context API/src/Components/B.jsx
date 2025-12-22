import React from "react";
import E from "./E";
import F from "./F";
import { useMyContext } from "./MyContext";

const B = () => {
  const { count } = useMyContext();

  return (
    <div>
      <h1 className="text-white text-3xl flex items-center justify-center flex-col gap-5 bg-gray-800 p-5">
        B<p>{count}</p>
        <E />
        <F />
      </h1>
    </div>
  );
};

export default B;

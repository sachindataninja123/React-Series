import React from "react";
import axios from "axios";

const Fetch = () => {
  const fetchData = async () => {
    // const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // const data = await response.json();
    // console.log(data);

    const data = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="bg-blue-500 p-3 rounded-[5px] active:scale-95 cursor-pointer text-2xl"
        onClick={fetchData}
      >
        GET DATA
      </button>
    </div>
  );
};

export default Fetch;

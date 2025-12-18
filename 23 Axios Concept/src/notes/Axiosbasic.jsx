import React from "react";
import axios from "axios";

const Axiosbasic = () => {
  const config = {
    url: "/users",
    baseURL: "https://jsonplaceholder.typicode.com",
    // headers: {
    //   Accept: "application/json",
    //     // 'Content-Type : 'application/json'
    //   Authority: "Bearer abcdegggggjhh",
    // },
    // timeout: "1000", //ms
    // data: {
    //   name: "asnlllfkprr",
    // },
    // params: {
    //   name: "Sachin",
    //   age: 20,
    // },
  };

  const fetchData = async () => {
    const response = await axios(config);
    console.log(response);
  };
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <button
          className="bg-blue-500 p-3 rounded-[5px] active:scale-95 cursor-pointer text-2xl"
          onClick={fetchData}
        >
          Fetch Data
        </button>
      </div>
    </div>
  );
};

export default Axiosbasic;

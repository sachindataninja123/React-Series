import React, { useEffect, useState } from "react";
import "./App.css";
import Alpha from "./components/Alpha";
import Form from "./components/Form";
import Users from "./components/Users";

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      {/* {toggle && <Alpha />} */}
      {/* {toggle &&  <Form />} */}
      {toggle && <Users />}

      <button
        className="bg-blue-500 px-2 rounded py-1 active:scale-95 cursor-pointer"
        onClick={() => setToggle(!toggle)}
      >
        Toggle
      </button>
    </div>
  );
};

export default App;

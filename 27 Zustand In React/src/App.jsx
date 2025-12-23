import React from "react";
import "./App.css";
import { useMyStore } from "./store";
import Navbar from "./Components/Navbar";

const App = () => {
  const state = useMyStore();
  // console.log(state);

  return (
    <div className="flex items-center justify-center mt-10">
      <h1 className="text-3xl">
        <Navbar />
      </h1>


    </div>
  );
};

export default App;

import React from "react";
import "./App.css";
import Data from "./Data.json";
import Card from "./Card";

const App = () => {
  return (
    <div>
      {Data.map((phdata, index) => {
        return <Card data={phdata}  key={index} />
      })}
    </div>
  );
};

export default App;

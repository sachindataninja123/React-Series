import React from "react";
import "./App.css";
import Card from "./components/Card";
import Button from "./components/Button";

const App = () => {

  function button1Click(){
    console.log("Button 1 Clicked!")
  }

    function button2Click(){
    console.log("Button 2 Clicked!")
  }
  return (
    <div className="card-layout">
      <Card name="Ram" />
      <Card name="Rahul" />
      <Button title="Click me" func={button1Click} />
      <Button title="click" func={button2Click} />
    </div>
  );
};

export default App;

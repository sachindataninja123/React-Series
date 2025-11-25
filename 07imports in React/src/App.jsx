import "./App.css";
import Navbar, { Card, Card2 } from "./Header";
import reactLogo from "./assets/react.svg";
import { Sum } from "./Utility";
import { useState } from "react";

function App() {
  let result = Sum(1, 2);
  console.log(result);

  return (
    <>
      <h1>App</h1>
      <Navbar />
      <Card />
      <Card2 />
      <img src={reactLogo} alt="" />
    </>
  );
}

export default App;

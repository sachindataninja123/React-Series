import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import ColorBox from "./components/ColorBox";

const App = () => {
  const colors = [
    "pink",
    "red",
    "yellow",
    "green",
    "blue",
    "lightseagreen",
    "aqua",
    "bisque",
    "tomato",
    "orange",
  ];

  const [selectedColor , setSelectedColor] = useState("transparent");
  return (
    <div>
      <h1>🎨 Color Switcher</h1>

      <div className="flex mt-10 ">
        {colors.map((item) => {
          return <Button key={item} color={item} setSelectedColor = {setSelectedColor}>{item}</Button>;
        })}
      </div>

    <ColorBox color={selectedColor} />
    </div>
  );
};

export default App;

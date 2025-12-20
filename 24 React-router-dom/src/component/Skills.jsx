import React from "react";
import { Outlet } from "react-router-dom";

const Skills = () => {
  return (
    <div >
        <Outlet/>
      <h1>Skill page</h1>
      <div className="w-90 bg-amber-500 h-60"></div>
    </div>
  );
};

export default Skills;

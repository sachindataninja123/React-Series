import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Skills from "./component/Skills";
import Project from "./component/Project";
import Contact from "./component/Contact";
import DetailContact from "./component/DetailContact";
import { Navigate } from "react-router-dom";
import Skill1 from "./component/Skill1";
import Skill2 from "./component/Skill2";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* //nested routing */}
        <Route path="/skills" element={<Skills />}>
        <Route path='skill1' element={<Skill1 />} />
        <Route path='skill2' element={<Skill2 />} />
        </Route>

        {/* Redirect-Navigate Component */}
        <Route path="/projects" element={<Navigate to={"/"} />} replace />

        {/* Dynamic Routing */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:id" element={<DetailContact />} />
      </Routes>
    </div>
  );
};

export default App;

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import SingleProductPage from "./components/SingleProductPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Products/:id" element={<SingleProductPage />} />
      </Routes>
    </div>
  );
};

export default App;

import React, { useEffect } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { useDispatch } from "react-redux";
import { changeName } from "./Store/features/counters/counterSlice";
import Users from "./components/Users";

const App = () => {
  const dispatch = useDispatch();


  return (
    
    <div>
      <Counter />
      <input
        type="text"
        className="border"
        placeholder="Enter name"
        onChange={(e) => dispatch(changeName(e.target.value))}
      />

    <Users />
    </div>
  );
};

export default App;

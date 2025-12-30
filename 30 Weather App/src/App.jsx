import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "./Store/Action/weatherAction";
import Searchbar from "./components/Searchbar";

const App = () => {
  const state = useSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather("noida"));
  }, []);

  return (
    <div className="flex items-center justify-center p-20">
      <Searchbar />
    </div>
  );
};

export default App;
